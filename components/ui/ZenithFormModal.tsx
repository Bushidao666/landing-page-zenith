import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { processAndTrackLead } from '@/lib/facebook-conversions-api';

// Schema de validação com Zod
const formSchema = z.object({
  nomeCompleto: z
    .string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome muito longo'),
  whatsapp: z
    .string()
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, 'WhatsApp deve estar no formato (XX) XXXXX-XXXX'),
  email: z
    .string()
    .email('E-mail inválido')
    .min(1, 'E-mail é obrigatório'),
  faturamentoMensal: z
    .string()
    .min(1, 'Selecione seu faturamento mensal'),
  principalProduto: z
    .string()
    .min(1, 'Selecione seu principal produto'),
  maiorDificuldade: z
    .string()
    .min(1, 'Selecione sua maior dificuldade')
});

type FormData = z.infer<typeof formSchema>;

interface ZenithFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: FormData) => void;
}

const ZenithFormModal: React.FC<ZenithFormModalProps> = ({
  isOpen,
  onClose,
  onSubmit
}) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<FormData>();

  // Opções dos dropdowns
  const faturamentoOptions = [
    { value: '', label: 'Selecione seu faturamento mensal' },
    { value: 'nao-faturo', label: 'Ainda não faturo' },
    { value: 'ate-10k', label: 'Até R$10.000' },
    { value: '10k-30k', label: 'R$10.001 a R$30.000' },
    { value: '30k-100k', label: 'R$30.001 a R$100.000' },
    { value: 'acima-100k', label: 'Acima de R$100.000' }
  ];

  const produtoOptions = [
    { value: '', label: 'Selecione seu principal produto' },
    { value: 'curso-online', label: 'Curso Online' },
    { value: 'mentoria-consultoria', label: 'Mentoria/Consultoria' },
    { value: 'ebook-livro', label: 'Ebook/Livro Digital' },
    { value: 'masterclass-workshop', label: 'Masterclass/Workshop' },
    { value: 'programa-afiliados', label: 'Programa de Afiliados' },
    { value: 'ainda-nao-vendo', label: 'Ainda não vendo' }
  ];

  const dificuldadeOptions = [
    { value: '', label: 'Selecione sua maior dificuldade' },
    { value: 'processar-pagamentos', label: 'Processar pagamentos' },
    { value: 'taxas-altas', label: 'Taxas altas de outras plataformas' },
    { value: 'demora-receber', label: 'Demora para receber pagamentos' },
    { value: 'falta-ferramentas', label: 'Falta de ferramentas integradas' },
    { value: 'problemas-chargebacks', label: 'Problemas com chargebacks' },
    { value: 'nao-tenho-sistema', label: 'Não tenho sistema de pagamento' }
  ];

  // Máscara para WhatsApp
  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return `(${numbers}`;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setValue('whatsapp', formatted);
  };

  // Validação personalizada
  const validateForm = (data: any): FormData => {
    try {
      return formSchema.parse(data);
    } catch (error) {
      throw error;
    }
  };

  const onSubmitForm = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      
      // Envia o evento para a CAPI do Facebook primeiro
      await processAndTrackLead(data);
      
      // Simular envio para outro sistema/CRM (se houver)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      if (onSubmit) {
        onSubmit(data);
      }
      
      setTimeout(() => {
        setSubmitSuccess(false);
        setIsSubmitting(false);
        reset();
        onClose();
      }, 3000);
      
    } catch (error) {
      setIsSubmitting(false);
      console.error('Erro ao enviar formulário:', error);
    }
  };

  // Fechar modal com ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Variantes de animação
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-zenith-primary border-2 border-zenith-gold/30 rounded-xl shadow-gold"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Background decorativo */}
            <div className="absolute inset-0 bg-gradient-to-br from-zenith-gold/5 to-zenith-gold/10 rounded-xl"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-zenith-gradient rounded-t-xl"></div>
            
            {/* Partículas decorativas */}
            <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-zenith-gold/40"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 p-8">
              {/* Botão de fechar */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zenith-gold/10 hover:bg-zenith-gold/20 flex items-center justify-center text-zenith-gold transition-colors"
                aria-label="Fechar modal"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Cabeçalho */}
              <div className="text-center mb-8">
                <motion.div
                  className="inline-block mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-xs font-semibold tracking-widest text-zenith-gold/80 uppercase mb-2 inline-block">
                    Transforme seu negócio
                  </span>
                </motion.div>
                
                <motion.h2
                  className="text-2xl md:text-3xl font-bold text-zenith-secondary mb-4 font-secondary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  RECEBA SEU DINHEIRO 
                  <span className="text-zenith-gold"> INSTANTANEAMENTE</span>
                </motion.h2>
                
                <motion.p
                  className="text-zenith-text max-w-md mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Preencha o formulário e nossa equipe entrará em contato em até 1 hora para mostrar como triplicar seus resultados
                </motion.p>
              </div>

              {/* Estado de sucesso */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    className="text-center py-12"
                    variants={successVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <div className="w-16 h-16 rounded-full bg-zenith-success/20 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-zenith-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-zenith-secondary mb-2">Sucesso!</h3>
                    <p className="text-zenith-text">Recebemos seus dados. Nossa equipe entrará em contato em breve!</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Formulário */}
              {!submitSuccess && (
                <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
                  {/* Nome Completo */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-zenith-secondary font-medium mb-2">
                      Nome Completo *
                    </label>
                    <input
                      {...register('nomeCompleto', { required: 'Nome é obrigatório' })}
                      type="text"
                      className="w-full px-4 py-3 bg-black/30 border border-zenith-gold/30 rounded-lg text-zenith-secondary placeholder-zenith-text/50 focus:border-zenith-gold focus:ring-2 focus:ring-zenith-gold/20 transition-all"
                      placeholder="Seu nome completo"
                    />
                    {errors.nomeCompleto && (
                      <p className="text-red-400 text-sm mt-1">{errors.nomeCompleto.message}</p>
                    )}
                  </motion.div>

                  {/* WhatsApp */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="block text-zenith-secondary font-medium mb-2">
                      WhatsApp *
                    </label>
                    <input
                      {...register('whatsapp', { required: 'WhatsApp é obrigatório' })}
                      type="text"
                      onChange={handleWhatsAppChange}
                      className="w-full px-4 py-3 bg-black/30 border border-zenith-gold/30 rounded-lg text-zenith-secondary placeholder-zenith-text/50 focus:border-zenith-gold focus:ring-2 focus:ring-zenith-gold/20 transition-all"
                      placeholder="(11) 99999-9999"
                      maxLength={15}
                    />
                    {errors.whatsapp && (
                      <p className="text-red-400 text-sm mt-1">{errors.whatsapp.message}</p>
                    )}
                  </motion.div>

                  {/* E-mail */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <label className="block text-zenith-secondary font-medium mb-2">
                      E-mail *
                    </label>
                    <input
                      {...register('email', { required: 'E-mail é obrigatório' })}
                      type="email"
                      className="w-full px-4 py-3 bg-black/30 border border-zenith-gold/30 rounded-lg text-zenith-secondary placeholder-zenith-text/50 focus:border-zenith-gold focus:ring-2 focus:ring-zenith-gold/20 transition-all"
                      placeholder="seu@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </motion.div>

                  {/* Faturamento Mensal */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <label className="block text-zenith-secondary font-medium mb-2">
                      Faturamento Mensal Atual *
                    </label>
                    <select
                      {...register('faturamentoMensal', { required: 'Selecione uma opção' })}
                      className="w-full px-4 py-3 bg-black/30 border border-zenith-gold/30 rounded-lg text-zenith-secondary focus:border-zenith-gold focus:ring-2 focus:ring-zenith-gold/20 transition-all"
                    >
                      {faturamentoOptions.map(option => (
                        <option key={option.value} value={option.value} className="bg-zenith-primary">
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.faturamentoMensal && (
                      <p className="text-red-400 text-sm mt-1">{errors.faturamentoMensal.message}</p>
                    )}
                  </motion.div>

                  {/* Principal Produto */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <label className="block text-zenith-secondary font-medium mb-2">
                      Principal Produto que Vende *
                    </label>
                    <select
                      {...register('principalProduto', { required: 'Selecione uma opção' })}
                      className="w-full px-4 py-3 bg-black/30 border border-zenith-gold/30 rounded-lg text-zenith-secondary focus:border-zenith-gold focus:ring-2 focus:ring-zenith-gold/20 transition-all"
                    >
                      {produtoOptions.map(option => (
                        <option key={option.value} value={option.value} className="bg-zenith-primary">
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.principalProduto && (
                      <p className="text-red-400 text-sm mt-1">{errors.principalProduto.message}</p>
                    )}
                  </motion.div>

                  {/* Maior Dificuldade */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 }}
                  >
                    <label className="block text-zenith-secondary font-medium mb-2">
                      Maior Dificuldade Hoje *
                    </label>
                    <select
                      {...register('maiorDificuldade', { required: 'Selecione uma opção' })}
                      className="w-full px-4 py-3 bg-black/30 border border-zenith-gold/30 rounded-lg text-zenith-secondary focus:border-zenith-gold focus:ring-2 focus:ring-zenith-gold/20 transition-all"
                    >
                      {dificuldadeOptions.map(option => (
                        <option key={option.value} value={option.value} className="bg-zenith-primary">
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.maiorDificuldade && (
                      <p className="text-red-400 text-sm mt-1">{errors.maiorDificuldade.message}</p>
                    )}
                  </motion.div>

                  {/* Botão de envio */}
                  <motion.div
                    className="pt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-zenith-gradient rounded-lg font-bold text-zenith-primary text-lg transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                    >
                      {/* Efeito shimmer */}
                      <span className="absolute inset-0 overflow-hidden">
                        <motion.span 
                          className="absolute top-0 -left-20 w-20 h-full transform -skew-x-20 bg-white/20 blur-sm"
                          animate={{
                            left: isSubmitting ? ['-20%', '120%'] : '-20%'
                          }}
                          transition={{
                            repeat: isSubmitting ? Infinity : 0,
                            repeatType: "loop",
                            duration: 1.5,
                            ease: "easeInOut"
                          }}
                        />
                      </span>
                      
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            ENVIANDO...
                          </>
                        ) : (
                          <>
                            QUERO RECEBER EM TEMPO REAL
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </>
                        )}
                      </span>
                    </button>
                    
                    <p className="text-zenith-text/70 text-xs text-center mt-3 flex items-center justify-center">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Seus dados estão 100% seguros conosco
                    </p>
                  </motion.div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ZenithFormModal; 