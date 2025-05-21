import React from 'react';
import { motion } from 'framer-motion';

const ComparisonSection = () => {
  // Dados da tabela comparativa com destaque visual nas diferenças
  const comparisonData = [
    {
      aspect: 'Taxa padrão',
      traditional: '9,9%-12,9% + R$1',
      zenith: '4,99% + R$1',
      savings: 'Até 61% menor', // Valor de economia destacado
      icon: 'money' // Ícone personalizado para cada categoria
    },
    {
      aspect: 'Acesso ao dinheiro',
      traditional: '7-14 dias',
      zenith: 'Instantâneo',
      savings: 'Até 14 dias mais rápido',
      icon: 'clock'
    },
    {
      aspect: 'Cartões virtuais',
      traditional: 'Não oferece ou limitado',
      zenith: 'Ilimitados',
      savings: 'Flexibilidade total',
      icon: 'card'
    },
    {
      aspect: 'Aprovação de pagamentos',
      traditional: 'Rejeição de até 25% em nichos de risco',
      zenith: 'Sistema próprio com 25% mais aprovações',
      savings: '+25% em vendas efetivas',
      icon: 'check'
    },
    {
      aspect: 'Order Bump/Upsell',
      traditional: 'Básico ou pago à parte',
      zenith: 'Avançado e incluso',
      savings: 'Aumento de AOV imediato',
      icon: 'chart'
    },
    {
      aspect: 'Apoio ao scaling',
      traditional: 'Inexistente',
      zenith: 'Central na proposta',
      savings: 'Crescimento acelerado',
      icon: 'rocket'
    },
  ];

  // Funções para renderizar ícones específicos para cada aspecto
  const renderIcon = (iconType: string) => {
    switch(iconType) {
      case 'money':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'clock':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'card':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        );
      case 'check':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'chart':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'rocket':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Animação para revelar elementos na tela
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.165, 0.84, 0.44, 1] // Bezier curva de amortecimento para movimento mais natural
      }
    }
  };

  // Animação para destaque de elementos críticos
  const pulseAnimation = {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  };

  // Efeito stagger para animação sequencial de itens
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // Renderiza os cards para mobile ou a tabela para desktop
  const renderComparisonView = () => {
    // Versão mobile: Cards verticais para cada item de comparação
    const mobileView = (
      <motion.div 
        className="space-y-6 md:hidden"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true }}
      >
        {comparisonData.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="bg-black/40 backdrop-blur-md rounded-xl border border-zenith-gold/20 overflow-hidden"
            whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(181, 164, 114, 0.15)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-5 border-b border-zenith-gold/10 flex items-center space-x-3 bg-black/60">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-zenith-gold/10 flex items-center justify-center text-zenith-gold">
                {renderIcon(item.icon)}
              </div>
              <h3 className="font-bold text-lg text-zenith-secondary">{item.aspect}</h3>
            </div>
            
            <div className="p-5 space-y-4">
              {/* Gateway tradicional */}
              <div className="flex justify-between items-start">
                <span className="text-sm text-zenith-text/60 font-medium uppercase tracking-wider">Tradicional</span>
                <div className="flex items-center text-zenith-text">
                  <div className="mr-2 flex-shrink-0 text-red-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>{item.traditional}</span>
                </div>
              </div>
              
              {/* Zenith Pay - Com animação de destaque */}
              <motion.div 
                className="flex justify-between items-start"
                animate={index < 3 ? pulseAnimation : {}}
              >
                <span className="text-sm text-zenith-gold/80 font-medium uppercase tracking-wider">Zenith Pay</span>
                <div className="flex items-center text-zenith-secondary">
                  <div className="mr-2 flex-shrink-0 text-zenith-success">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium text-zenith-gold">{item.zenith}</span>
                </div>
              </motion.div>
              
              {/* Benefício para o usuário - Destaque visual */}
              <div className="pt-3 border-t border-zenith-gold/10 flex justify-between items-center">
                <span className="text-sm text-zenith-text/70 font-medium">Seu benefício:</span>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-zenith-success/10 text-zenith-success text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                  {item.savings}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
    
    // Versão desktop: Tabela completa
    const desktopView = (
      <motion.div 
        className="relative overflow-hidden rounded-xl border border-zenith-gold/30 shadow-gold bg-black/40 backdrop-blur-md hidden md:block"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Reflexo premium na parte superior da tabela */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-zenith-gold/60 to-transparent"></div>
        
        <div className="overflow-x-auto">
          <table className="w-full min-w-full divide-y divide-zenith-gold/20">
            <thead>
              <tr className="bg-gradient-to-r from-black/80 via-black/60 to-black/80">
                <th className="px-6 py-5 text-left text-lg font-semibold text-zenith-secondary w-1/4">
                  <div className="flex items-center">
                    <span className="relative">
                      Aspectos 
                      <span className="absolute -bottom-1 left-0 w-1/2 h-[2px] bg-zenith-gold/40"></span>
                    </span>
                  </div>
                </th>
                <th className="px-6 py-5 text-left text-lg font-semibold text-zenith-secondary/80 w-1/4">
                  <div className="flex items-center">
                    <span className="relative">
                      Gateways Tradicionais
                      <span className="absolute -bottom-1 left-0 w-1/3 h-[2px] bg-red-500/40"></span>
                    </span>
                  </div>
                </th>
                <th className="px-6 py-5 text-left text-lg font-semibold text-zenith-gold w-1/4">
                  <div className="flex items-center">
                    <span className="relative">
                      Zenith Pay
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-zenith-gold"></span>
                    </span>
                  </div>
                </th>
                <th className="px-6 py-5 text-left text-lg font-semibold text-zenith-secondary/90 w-1/4">
                  <div className="flex items-center">
                    <span className="relative">
                      Seu Benefício
                      <span className="absolute -bottom-1 left-0 w-2/3 h-[2px] bg-zenith-success/70"></span>
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            
            <motion.tbody 
              className="divide-y divide-zenith-gold/10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {comparisonData.map((row, index) => (
                <motion.tr 
                  key={index}
                  variants={fadeInUp}
                  className={index % 2 === 0 ? "bg-black/30" : "bg-black/10"}
                  whileHover={{ backgroundColor: "rgba(181, 164, 114, 0.05)" }}
                  transition={{ duration: 0.2 }}
                >
                  <td className="px-6 py-6 text-zenith-secondary">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-zenith-gold/10 flex items-center justify-center text-zenith-gold">
                        {renderIcon(row.icon)}
                      </div>
                      <span className="font-medium">{row.aspect}</span>
                    </div>
                  </td>
                  
                  <td className="px-6 py-6 text-zenith-text/90">
                    <div className="flex items-center">
                      <div className="mr-3 flex-shrink-0 text-red-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="opacity-90">{row.traditional}</span>
                    </div>
                  </td>
                  
                  <td className="px-6 py-6 text-zenith-secondary">
                    <motion.div 
                      className="flex items-center"
                      animate={index < 3 ? pulseAnimation : {}}
                    >
                      <div className="mr-3 flex-shrink-0 text-zenith-success">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium text-zenith-gold">{row.zenith}</span>
                    </motion.div>
                  </td>
                  
                  <td className="px-6 py-6">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-zenith-success/10 text-zenith-success text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                      </svg>
                      {row.savings}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </div>
        
        {/* Destaque de borda inferior da tabela */}
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-zenith-gold/60 to-transparent"></div>
      </motion.div>
    );
    
    // Retorna a visualização apropriada
    return (
      <>
        {mobileView}
        {desktopView}
      </>
    );
  };

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-zenith-primary to-[#151515] relative overflow-hidden">
      {/* Elementos decorativos de fundo aprimorados */}
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10 bg-repeat"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-zenith-gold/10 filter blur-[100px]"></div>
      <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full bg-zenith-gold/8 filter blur-[120px]"></div>
      
      {/* Detalhe decorativo premium */}
      <div className="absolute top-40 left-10 opacity-20 md:opacity-30">
        <div className="w-20 h-20 border border-zenith-gold/30 rounded-full"></div>
        <div className="w-5 h-5 border border-zenith-gold/40 rounded-full absolute -right-10 top-10"></div>
      </div>
      <div className="absolute bottom-40 right-10 opacity-20 md:opacity-30">
        <div className="w-32 h-32 border border-zenith-gold/30 rounded-full"></div>
        <div className="w-8 h-8 border border-zenith-gold/40 rounded-full absolute -left-10 bottom-14"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* Título com destaque visual mais impactante */}
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block mb-3 px-4 py-1 bg-zenith-gold/10 text-zenith-gold text-sm font-medium rounded-full border border-zenith-gold/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            COMPARATIVO EXCLUSIVO
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-5xl font-extrabold text-zenith-secondary mb-6 font-secondary tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="bg-clip-text text-transparent bg-zenith-gradient">ZENITH PAY</span> vs.{" "}
            <span className="relative">
              GATEWAYS TRADICIONAIS
              <span className="absolute bottom-1 left-0 w-full h-[2px] bg-zenith-gradient"></span>
            </span>
          </motion.h2>
          
          <motion.p
            className="text-zenith-text max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Descubra porque empreendedores de alto desempenho estão migrando para a Zenith Pay
          </motion.p>
        </div>
        
        {/* Renderiza a visualização apropriada para desktop ou mobile */}
        {renderComparisonView()}
        
        {/* Chamada para ação aprimorada */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.div 
            className="max-w-3xl mx-auto bg-gradient-to-br from-black/80 to-black/40 p-6 md:p-8 rounded-xl border border-zenith-gold/20 shadow-gold"
            whileHover={{ boxShadow: "0 0 25px 0 rgba(181, 164, 114, 0.2)" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl md:text-3xl font-bold text-zenith-secondary mb-4 font-secondary">
              A diferença é <span className="text-zenith-gold">clara e mensurável</span>
            </h3>
            
            <p className="text-zenith-text text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Enquanto outros gateways <span className="text-red-400">restringem seu crescimento</span>, a Zenith foi desenhada para <span className="text-zenith-gold font-semibold">maximizar sua escalabilidade</span> e multiplicar seus lucros.
            </p>
            
            <div className="relative z-10">
              <motion.button
                className="relative w-full md:w-auto px-8 py-4 md:px-10 md:py-5 rounded-lg bg-zenith-gradient font-bold text-zenith-primary text-lg transition-all overflow-hidden group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Efeito de brilho no botão */}
                <span className="absolute inset-0 w-full h-full bg-gold-shimmer opacity-0 group-hover:opacity-100 animate-shimmer"></span>
                
                <span className="relative z-10 flex items-center justify-center">
                  <span>QUERO DINHEIRO INSTANTÂNEO</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </motion.button>
              
              {/* Indicador de urgência sob o botão */}
              <p className="mt-4 text-zenith-gold/80 text-xs md:text-sm font-medium flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>VAGAS LIMITADAS PARA NOVOS PARCEIROS</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Elemento decorativo inferior aprimorado */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-zenith-gold to-transparent"></div>
    </section>
  );
};

export default ComparisonSection; 