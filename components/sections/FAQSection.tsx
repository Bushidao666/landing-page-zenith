import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const FAQSection = () => {
  // Referência para animação baseada no scroll
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-10% 0px -10% 0px" });
  
  // Array com as perguntas frequentes estrategicamente ordenadas
  // Primeira pergunta foca no benefício imediato (migração rápida)
  // Última pergunta resolve objeção de preço com transparência total
  const faqs = [
    {
      question: 'Como funciona a migração de outra plataforma?',
      answer: 'Nossa equipe especializada realiza todo o processo de migração em menos de 24h, garantindo <strong>zero interrupção nas suas vendas</strong>. Você não precisa se preocupar com aspectos técnicos.',
      icon: '⚡', // Ícone de velocidade
      benefit: 'Migração Rápida'
    },
    {
      question: 'Quais métodos de pagamento o Zenith Pay aceita?',
      answer: 'Aceitamos todos os principais métodos: cartões de crédito, PIX, boleto, carteiras digitais (Apple Pay, Google Pay) e parcelamento inteligente para maximizar suas conversões.',
      icon: '💳', // Ícone de pagamento
      benefit: 'Flexibilidade Total'
    },
    {
      question: 'Preciso trocar de banco para usar o Zenith Pay?',
      answer: 'Não. O Zenith Bank é complementar e totalmente integrado, oferecendo vantagens exclusivas. Você pode transferir para seu banco tradicional a qualquer momento, <strong>sem taxas ou custos adicionais</strong>.',
      icon: '🏦', // Ícone de banco
      benefit: 'Integração Perfeita'
    },
    {
      question: 'Como o sistema aprova mais transações sem aumentar chargebacks?',
      answer: 'Nossa tecnologia proprietária com IA analisa padrões comportamentais específicos do mercado digital brasileiro, não apenas dados genéricos de crédito. Isso nos permite <strong>aumentar em até 37% sua taxa de aprovação</strong> sem impactar chargebacks.',
      icon: '🔒', // Ícone de segurança
      benefit: 'Mais Aprovações'
    },
    {
      question: 'Quais as taxas reais, sem letras miúdas?',
      answer: '<strong>4,99% + R$1</strong> por transação aprovada. PIX tem taxa reduzida de <strong>1,99% + R$0,50</strong>. Não há mensalidades, taxas de setup ou cobranças ocultas de qualquer tipo.',
      icon: '💰', // Ícone de dinheiro
      benefit: 'Transparência Total'
    }
  ];

  // Estado para controlar qual FAQ está aberta
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  // Abre automaticamente a primeira pergunta após carregamento para criar engajamento imediato
  // Mas apenas se o usuário ainda não interagiu com o componente
  useEffect(() => {
    if (!hasInteracted) {
      const timer = setTimeout(() => {
        setActiveIndex(0);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [hasInteracted]);

  // Função para alternar o estado de abertura/fechamento
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
    setHasInteracted(true);
  };

  // Container variants para animação coordenada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Item variants para animação coordenada
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section 
      className="py-28 md:py-32 bg-zenith-primary relative overflow-hidden" 
      id="faq"
      ref={sectionRef}
      aria-labelledby="faq-heading"
    >
      {/* Elementos decorativos de fundo com animação sutil */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent z-10"></div>
      <motion.div 
        className="absolute -top-48 -left-48 sm:-top-64 sm:-left-64 w-96 h-96 sm:w-[30rem] sm:h-[30rem] rounded-full bg-zenith-gold/8 filter blur-[100px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        aria-hidden="true"
      ></motion.div>
      <motion.div 
        className="absolute -bottom-48 -right-48 sm:-bottom-64 sm:-right-64 w-96 h-96 sm:w-[30rem] sm:h-[30rem] rounded-full bg-zenith-gold/8 filter blur-[100px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
        }}
        aria-hidden="true"
      ></motion.div>
      
      {/* Linhas decorativas laterais */}
      <div className="absolute left-0 top-1/4 w-16 md:w-24 h-px bg-zenith-gold/20" aria-hidden="true"></div>
      <div className="absolute right-0 top-2/3 w-16 md:w-24 h-px bg-zenith-gold/20" aria-hidden="true"></div>
      
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 relative z-20">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Pré-título que estabelece contexto */}
          <motion.p 
            className="text-zenith-gold text-sm md:text-base uppercase tracking-widest mb-3 font-medium"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Tudo o que você precisa saber
          </motion.p>
          
          {/* Título com destaque visual */}
          <h2 id="faq-heading" className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 font-secondary">
            <span className="text-zenith-secondary">PERGUNTAS </span>
            <span className="text-zenith-gold relative inline-block">
              FREQUENTES
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-[3px] bg-zenith-gradient rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                aria-hidden="true"
              ></motion.span>
            </span>
          </h2>
          
          {/* Subtítulo que estabelece valor e remove objeções */}
          <p className="text-zenith-text max-w-xl mx-auto text-base md:text-lg">
            Transparência total para você tomar a melhor decisão para seu negócio digital
          </p>
        </motion.div>
        
        {/* Acordeão de FAQs com animações e microtransições */}
        <motion.div 
          className="space-y-5"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          role="region"
          aria-label="Perguntas Frequentes"
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className={`border rounded-xl overflow-hidden shadow-gold transition-all duration-300 ${
                activeIndex === index ? 'border-zenith-gold/70' : 'border-zenith-gold/20'
              } ${
                hoverIndex === index ? 'border-zenith-gold/50 shadow-lg' : ''
              }`}
              variants={itemVariants}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {/* Badge de benefício - oferece uma super-dica visual imediata */}
              <div className="relative">
                {activeIndex === index && (
                  <motion.div 
                    className="absolute right-0 top-0 px-3 py-1 bg-zenith-gold/20 border-l border-b border-zenith-gold/30 text-zenith-gold text-xs font-medium rounded-bl-md rounded-tr-md z-10"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.benefit}
                  </motion.div>
                )}
              
                {/* Cabeçalho da pergunta (sempre visível) */}
                <button
                  className={`w-full px-6 sm:px-7 py-5 sm:py-6 text-left flex justify-between items-center group ${
                    activeIndex === index 
                      ? 'bg-gradient-to-r from-zenith-gold/20 to-zenith-gold/10' 
                      : 'bg-zenith-primary hover:bg-zenith-gold/5'
                  } transition-all duration-300`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 flex-1">
                    {/* Ícone temático por pergunta */}
                    <div className={`flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeIndex === index 
                        ? 'bg-zenith-gold/30 text-zenith-gold' 
                        : 'bg-zenith-gold/10 text-zenith-gold/80'
                    }`}>
                      <span className="text-base sm:text-lg" aria-hidden="true">{faq.icon}</span>
                    </div>
                    
                    {/* Texto da pergunta com hierarquia visual */}
                    <h3 className={`text-base sm:text-lg md:text-xl font-medium transition-all duration-300 ${
                      activeIndex === index ? 'text-zenith-secondary' : 'text-zenith-secondary group-hover:text-zenith-gold/80'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>
                  
                  {/* Ícone animado de seta */}
                  <div className={`text-zenith-gold ml-2 sm:ml-4 flex-shrink-0 transition-all duration-300 transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`} aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
              </div>
              
              {/* Conteúdo da resposta (animado) */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-7 py-5 sm:py-6 pl-[4.25rem] sm:pl-[5.25rem] bg-gradient-to-r from-zenith-gold/5 to-transparent border-t border-zenith-gold/10">
                      <div 
                        className="text-zenith-text text-base sm:text-lg leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                      
                      {/* Decorative dot pattern */}
                      <div className="flex space-x-1 mt-4" aria-hidden="true">
                        <div className="w-1 h-1 rounded-full bg-zenith-gold/30"></div>
                        <div className="w-1 h-1 rounded-full bg-zenith-gold/30"></div>
                        <div className="w-1 h-1 rounded-full bg-zenith-gold/30"></div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Seção de CTA com técnicas de urgência e scarcity */}
        <motion.div
          className="mt-16 sm:mt-20 text-center relative"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Badge de exclusividade para aumentar valor percebido */}
          <motion.div 
            className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 bg-zenith-gold/10 border border-zenith-gold/30 rounded-full mb-6 sm:mb-8"
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : { scale: 0.9 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <span className="text-xs sm:text-sm font-medium text-zenith-gold inline-flex items-center">
              <svg className="w-3 h-3 mr-1.5 fill-current" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm-.5 11.5a.5.5 0 010-1h1a.5.5 0 010 1h-1zm.5-2.5a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5h.5a.5.5 0 01.5.5v3.5a.5.5 0 01-.5.5H8z" />
              </svg>
              Disponibilidade limitada
            </span>
          </motion.div>
          
          {/* Texto de suporte com benefício claro */}
          <p className="text-zenith-text mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto">
            Ainda tem dúvidas? Nossa equipe dedicada está pronta para mostrar como o 
            <span className="text-zenith-gold font-medium"> Zenith Pay pode aumentar seus resultados</span> com uma
            demonstração personalizada para seu negócio.
          </p>
          
          {/* CTA principal com efeitos de hover premium */}
          <div className="inline-block relative group">
            {/* Efeito de glow animado */}
            <motion.div 
              className="absolute inset-0 bg-zenith-gradient rounded-md blur-md opacity-50 group-hover:opacity-80 transition-all duration-300"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              aria-hidden="true"
            />
            
            {/* Botão com animação de hover */}
            <motion.button
              className="relative px-8 sm:px-10 py-4 sm:py-5 rounded-md bg-zenith-gradient font-bold text-zenith-primary text-base sm:text-lg tracking-wide shadow-gold overflow-hidden group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Arrow slide animation on hover */}
              <span className="flex items-center justify-center">
                AGENDAR DEMONSTRAÇÃO
                <motion.span 
                  className="ml-1 sm:ml-2 inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                  aria-hidden="true"
                >
                  →
                </motion.span>
              </span>
              
              {/* Shine effect */}
              <motion.span 
                className="absolute inset-0 w-full h-full bg-gold-shimmer"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                aria-hidden="true"
              ></motion.span>
            </motion.button>
          </div>
          
          {/* Social Proof para reduzir ansiedade e promover confiança */}
          <div className="mt-8 flex flex-col items-center">
            <div className="flex items-center -space-x-2 mb-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <div 
                  key={num} 
                  className="w-8 h-8 rounded-full bg-gradient-to-b from-zenith-gold-light to-zenith-gold border-2 border-zenith-primary flex items-center justify-center text-zenith-primary text-xs font-bold"
                  aria-hidden="true"
                >
                  {num}
                </div>
              ))}
              <div 
                className="w-8 h-8 rounded-full bg-zenith-gold/20 border-2 border-zenith-primary flex items-center justify-center text-zenith-gold text-xs font-bold"
                aria-hidden="true"
              >
                +
              </div>
            </div>
            <p className="text-zenith-text/70 text-xs sm:text-sm">
              Mais de 2.300 empresas já utilizam o Zenith Pay.
            </p>
          </div>
          
          {/* Texto de segurança para eliminar risco percebido */}
          <p className="mt-4 sm:mt-6 flex items-center justify-center text-zenith-text/70 text-xs sm:text-sm">
            <svg className="w-3.5 h-3.5 mr-1.5 text-zenith-gold" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Sem compromisso. Cancelamento em 1 clique.
          </p>
        </motion.div>
      </div>
      
      {/* Elementos decorativos para enquadramento visual */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-zenith-gradient opacity-70"></div>
    </section>
  );
};

export default FAQSection; 