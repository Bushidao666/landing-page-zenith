import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring, useAnimation } from 'framer-motion';

interface SolutionSectionProps {
  onScrollTo?: () => void;
  onOpenModal?: () => void;
}

const SolutionSection: React.FC<SolutionSectionProps> = ({ onScrollTo, onOpenModal }) => {
  // Refs para efeito de paralaxe
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);
  const resultRef = useRef(null);
  
  // Controles de animação
  const titleControls = useAnimation();
  const cardsControls = useAnimation();
  
  // Paralaxe effect baseado no scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.9]);
  
  // Suavizando os movimentos
  const smoothY1 = useSpring(y1, { stiffness: 100, damping: 30 });
  const smoothY2 = useSpring(y2, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });
  
  // Efeito de acender gradualmente as seções à medida que o usuário rola a página
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.1) {
      titleControls.start({ opacity: 1, y: 0 });
    }
    if (latest > 0.2) {
      cardsControls.start("visible");
    }
  });

  // Iniciar as animações quando o componente montar
  React.useEffect(() => {
    // Inicia os cards como visíveis por padrão após um pequeno delay
    setTimeout(() => {
      titleControls.start({ opacity: 1, y: 0 });
      cardsControls.start("visible");
    }, 500);
  }, [titleControls, cardsControls]);

  // Os benefícios do ecossistema Zenith
  const benefits = [
    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Zenith Pay',
      description: 'Processa pagamentos com taxas até 60% menores (apenas 4,99% + R$1)'
    },
    {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: 'Zenith Bank',
      description: 'Recebe o dinheiro INSTANTANEAMENTE após a aprovação da venda'
    },
    {
      id: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: 'Cartões virtuais ilimitados',
      description: 'Escale suas campanhas exatamente quando estão performando melhor'
    },
    {
      id: 4,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Adquirência própria',
      description: 'Aprova até 25% mais transações, especialmente em nichos considerados &quot;de risco&quot;'
    }
  ];

  // Variantes de animação para o container de benefícios
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Variantes de animação para cada item de benefício
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // Função para gerar pontos aleatórios para o background
  const generateRandomPoints = (count: number) => {
    const points = [];
    for (let i = 0; i < count; i++) {
      points.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 10,
      });
    }
    return points;
  };
  
  const backgroundPoints = generateRandomPoints(25);

  return (
    <section ref={sectionRef} className="py-32 bg-zenith-primary relative overflow-hidden">
      {/* Partículas de fundo animadas */}
      {backgroundPoints.map((point, index) => (
        <motion.div 
          key={index}
          className="absolute w-1 h-1 rounded-full bg-zenith-gold/30"
          style={{ 
            left: `${point.x}%`, 
            top: `${point.y}%`,
            filter: "blur(1px)"
          }}
          animate={{ 
            opacity: [0.1, 0.6, 0.1],
            scale: [1, 1.5, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: point.duration,
            delay: point.delay,
            ease: "easeInOut" 
          }}
        />
      ))}
      
      {/* Gradient overlay para profundidade */}
      <div className="absolute inset-0 bg-gradient-radial from-zenith-primary via-zenith-primary to-black/40 opacity-50"></div>
      
      {/* Elementos decorativos de fundo aprimorados */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/30 to-transparent"></div>
      <motion.div 
        style={{ y: smoothY1 }}
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-zenith-gold/8 filter blur-[120px]"
      ></motion.div>
      <motion.div 
        style={{ y: smoothY2 }}
        className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-zenith-gold/10 filter blur-[120px]"
      ></motion.div>
      <div className="absolute top-1/3 right-[15%] w-60 h-60 rounded-full bg-zenith-gold/5 filter blur-[80px] animate-pulse"></div>
      
      <div className="container mx-auto max-w-6xl px-4 relative z-20">
        <motion.div 
          ref={titleRef}
          initial={{ opacity: 0, y: 60 }}
          animate={titleControls}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          {/* Decorative elements above title */}
          <div className="flex justify-center items-center mb-10">
            <div className="h-[1px] w-12 bg-zenith-gold/30"></div>
            <div className="w-3 h-3 rounded-full bg-zenith-gold mx-3 animate-pulse"></div>
            <div className="h-[1px] w-12 bg-zenith-gold/30"></div>
          </div>
          
          <motion.div
            className="w-24 h-[3px] bg-zenith-gradient mx-auto mb-8"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          
          <motion.h2 
            className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-zenith-secondary mb-8 font-secondary tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="relative">
              ECOSSISTEMA <span className="inline-block">
                <span className="bg-clip-text text-transparent bg-zenith-gradient relative">
                  ZENITH
                  <motion.span 
                    className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-zenith-gold"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.6, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.span>
                </span>
              </span>
            </span>
            <br />
            <span className="text-zenith-gold leading-tight relative">
              DINHEIRO INSTANTÂNEO
              <motion.span 
                className="absolute -top-1 -right-1 text-sm text-white/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >®</motion.span>
            </span>, 
            <br className="md:hidden" />
            <span className="relative inline-block mt-2 md:mt-0">
              CRESCIMENTO CONTÍNUO
              <svg className="absolute -bottom-3 left-0 w-full h-[10px] text-zenith-gold/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-zenith-text text-xl max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            O Ecossistema Zenith <span className="font-medium text-zenith-secondary">revoluciona o fluxo financeiro</span> do seu negócio digital através da integração perfeita entre gateway e banco:
          </motion.p>
        </motion.div>
        
        {/* Fluxo circular dos benefícios */}
        <motion.div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-10 px-1 relative mb-24 z-20"
          variants={containerVariants}
          initial={{ opacity: 1 }}
          animate="visible"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              className="bg-zenith-primary/95 border-2 border-zenith-gold/30 rounded-xl p-3 md:p-4 flex flex-col justify-between items-center text-center relative z-40 min-h-[240px] shadow-xl shadow-zenith-gold/10 hover:border-zenith-gold/60 transition-all duration-300 group overflow-visible"
              variants={itemVariants}
              initial={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(255, 200, 0, 0.1), 0 10px 10px -5px rgba(255, 200, 0, 0.05)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Background sólido para garantir legibilidade */}
              <div className="absolute inset-0 rounded-xl bg-black/20"></div>
              
              {/* Conteúdo principal */}
              <div className="relative z-20 flex flex-col items-center w-full h-full py-2">
                {/* Número superior com design melhorado */}
                <div className="absolute -top-5 left-3 w-8 h-8 rounded-full bg-zenith-gradient flex items-center justify-center text-zenith-primary font-black text-xs shadow-lg shadow-zenith-gold/20 border border-zenith-gold/20">
                  <span className="relative z-10">{benefit.id}</span>
                  <motion.span 
                    className="absolute inset-0 rounded-full bg-zenith-gold/30" 
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ repeat: Infinity, duration: 3, delay: index * 0.5 }}
                  />
                </div>
                
                {/* Ícone com animação e efeito de destaque */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-zenith-gold/10 to-zenith-gold/20 flex items-center justify-center mb-2 md:mb-3 text-zenith-gold relative overflow-hidden group-hover:scale-110 transition-all duration-300 mt-1">
                  <div className="absolute inset-0 bg-zenith-gold/5 animate-pulse"></div>
                  <div className="relative z-10 scale-75">
                    {benefit.icon}
                  </div>
                  <div className="absolute inset-0 border border-zenith-gold/20 rounded-full"></div>
                </div>
                
                <h3 className="text-base md:text-lg font-bold text-zenith-secondary mb-1 group-hover:text-zenith-gold transition-colors duration-300">{benefit.title}</h3>
                <p className="text-zenith-text text-xs md:text-sm leading-tight md:leading-normal">
                  {benefit.id === 1 && (
                    <>Processa pagamentos com taxas <span className="font-semibold text-zenith-gold">até 60% menores</span> (apenas 4,99% + R$1)</>
                  )}
                  {benefit.id === 2 && (
                    <>Recebe o dinheiro <span className="font-semibold text-zenith-gold">INSTANTANEAMENTE</span> após a aprovação da venda</>
                  )}
                  {benefit.id === 3 && (
                    <>Escale suas campanhas <span className="font-semibold text-zenith-gold">exatamente quando</span> estão performando melhor</>
                  )}
                  {benefit.id === 4 && (
                    <>Aprova <span className="font-semibold text-zenith-gold">até 25% mais transações</span>, especialmente em nichos considerados &quot;de risco&quot;</>
                  )}
                </p>
              </div>

              {/* Seta conectora com animação - mantida apenas a seta */}
              {benefit.id < 4 && (
                <div 
                  className="hidden lg:block absolute -right-[24px] z-50 w-auto h-auto pointer-events-none"
                  style={{
                    top: "50%",
                    transform: "translateY(-50%)"
                  }}
                >
                  {/* Container para centralização perfeita */}
                  <div className="relative w-11 h-11 flex items-center justify-center">
                    {/* Seta animada */}
                    <motion.div 
                      className="w-11 h-11 rounded-full bg-zenith-primary border-2 border-zenith-gold flex items-center justify-center shadow-xl shadow-zenith-gold/40 absolute"
                      animate={{ 
                        x: [0, 5, 0], 
                        boxShadow: [
                          "0px 0px 15px rgba(255, 200, 0, 0.3)", 
                          "0px 0px 25px rgba(255, 200, 0, 0.5)", 
                          "0px 0px 15px rgba(255, 200, 0, 0.3)"
                        ] 
                      }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                      <div className="relative z-10">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zenith-gold">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      {/* Brilho por trás da seta */}
                      <div className="absolute inset-0 rounded-full bg-zenith-gold/20 filter blur-sm"></div>
                    </motion.div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        {/* Resultado final com design aprimorado */}
        <motion.div 
          ref={resultRef}
          className="max-w-3xl mx-auto bg-gradient-to-br from-zenith-gold/5 via-zenith-gold/10 to-zenith-gold/5 p-10 rounded-xl border border-zenith-gold/30 shadow-xl shadow-zenith-gold/10 backdrop-blur-md relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{ 
            boxShadow: "0 25px 50px -12px rgba(255, 200, 0, 0.15)",
            borderColor: "rgba(255, 200, 0, 0.4)",
            transition: { duration: 0.3 }
          }}
          style={{ scale: smoothScale }}
        >
          {/* Elementos decorativos */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-zenith-gold/5 filter blur-[30px]"></div>
          <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-zenith-gold/10 filter blur-[20px]"></div>
          
          {/* Partículas se movendo no container */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-zenith-gold/20"
              style={{ 
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{
                x: [0, Math.random() * 50 - 25],
                y: [0, Math.random() * 50 - 25],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: Math.random() * 5 + 5,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Símbolo zenith no canto */}
          <div className="absolute top-4 right-4 opacity-20">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zenith-gold">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M6 12H18M18 12L12 6M18 12L12 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div className="flex items-start mb-8">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-zenith-gold/20 to-zenith-gold/10 flex items-center justify-center mr-5 text-zenith-gold relative group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              {/* Efeito de pulso */}
              <motion.span 
                className="absolute inset-0 rounded-full bg-zenith-gold/20" 
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0, 0.3]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut"
                }}
              />
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-zenith-secondary mb-2 tracking-tight font-secondary">O resultado?</h3>
              <div className="h-[2px] w-20 bg-zenith-gradient mb-4"></div>
            </div>
          </div>
          
          <p className="text-xl lg:text-2xl text-zenith-secondary leading-relaxed ml-[70px]">
            Um ciclo virtuoso onde cada venda financia 
            <span className="text-zenith-gold font-semibold italic"> imediatamente </span> 
            a próxima aquisição de cliente, criando 
            <motion.span 
              className="text-zenith-gold font-bold block mt-6 text-2xl lg:text-3xl tracking-wide"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              CRESCIMENTO EXPONENCIAL
              <motion.svg 
                width="100%" 
                height="24" 
                viewBox="0 0 100 8" 
                className="text-zenith-gold/40 mt-1"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
                <path d="M0,4 Q30,0 50,4 T100,4" stroke="currentColor" strokeWidth="2" fill="none" />
              </motion.svg>
            </motion.span>
          </p>
          
          {/* CTA Sutil com animação mais sofisticada */}
          <motion.div 
            className="mt-10 ml-[70px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.button 
              onClick={onScrollTo}
              className="group relative px-8 py-3 bg-zenith-gradient rounded-full text-zenith-primary font-semibold text-sm tracking-wide overflow-hidden"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="relative z-10 flex items-center">
                <span>Veja na Prática</span>
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <motion.span 
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                whileHover={{ opacity: 0.2 }}
              ></motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Elementos decorativos de rodapé mais elaborados */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-zenith-gradient"></div>
      <div className="absolute bottom-1 inset-x-0 h-[1px] bg-zenith-gold/10"></div>
      <div className="absolute bottom-3 inset-x-0 h-[1px] bg-zenith-gold/5"></div>
    </section>
  );
};

export default SolutionSection; 