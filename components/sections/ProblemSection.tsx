import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import GoldHeading from '../ui/GoldHeading';
import GoldBanner from '../ui/GoldBanner';

const ProblemSection = () => {
  // Estado para controlar o ícone em hover
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  
  // Estado para o contador regressivo (representa dinheiro retido por 7 dias)
  const [countdown, setCountdown] = useState({ days: 7, hours: 0, minutes: 0, seconds: 0 });
  
  // Efeito para o contador regressivo
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        const totalSeconds = prev.days * 86400 + prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;
        
        if (totalSeconds <= 0) {
          // Reiniciar o contador quando chegar a zero
          return { days: 7, hours: 0, minutes: 0, seconds: 0 };
        }
        
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const problems = [
    {
      text: 'Seu dinheiro bloqueado por 7-14 dias, quando você mais precisa dele',
      subText: 'Impacto: Fluxo de caixa comprometido e crescimento interrompido',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      text: 'Cartão no limite exatamente quando sua campanha decola',
      subText: 'Impacto: Oportunidades de escala desperdiçadas em momentos cruciais',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      text: 'Taxas abusivas de 9,9%-12,9% devorando sua margem de lucro',
      subText: 'Impacto: Até R$12.900 perdidos a cada R$100K em vendas',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      text: 'Transações legítimas recusadas, especialmente em nichos "de risco"',
      subText: 'Impacto: Clientes frustrados e vendas perdidas sem justificativa clara',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      )
    }
  ];

  // Variantes para as animações
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Efeitos de pulsação para os ícones do ciclo
  const pulseVariants: Variants = {
    initial: { scale: 1 },
    pulse: { 
      scale: [1, 1.05, 1],
      transition: { 
        duration: 2, 
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  // Variantes para as conexões entre os ícones
  const connectionVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1, 
      transition: { 
        duration: 1.5, 
        ease: "easeInOut" 
      }
    }
  };
  
  // Variantes para o contador
  const digitVariants: Variants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      scale: [0.95, 1, 0.95],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  // Raio do círculo para os caminhos SVG
  const circleRadius = 99;
  const viewBoxCenter = 100;

  // Coordenadas dos pontos no círculo
  const topPoint = { x: viewBoxCenter, y: viewBoxCenter - circleRadius }; 
  const rightPoint = { x: viewBoxCenter + circleRadius, y: viewBoxCenter }; 
  const bottomPoint = { x: viewBoxCenter, y: viewBoxCenter + circleRadius }; 
  const leftPoint = { x: viewBoxCenter - circleRadius, y: viewBoxCenter }; 

  // Strings de caminho SVG para os arcos
  const arcPathTopToRight = `M${topPoint.x},${topPoint.y} A${circleRadius},${circleRadius} 0 0,1 ${rightPoint.x},${rightPoint.y}`;
  const arcPathRightToBottom = `M${rightPoint.x},${rightPoint.y} A${circleRadius},${circleRadius} 0 0,1 ${bottomPoint.x},${bottomPoint.y}`;
  const arcPathBottomToLeft = `M${bottomPoint.x},${bottomPoint.y} A${circleRadius},${circleRadius} 0 0,1 ${leftPoint.x},${leftPoint.y}`;
  const arcPathLeftToTop = `M${leftPoint.x},${leftPoint.y} A${circleRadius},${circleRadius} 0 0,1 ${topPoint.x},${topPoint.y}`;

  return (
    <section className="py-24 bg-zenith-primary relative overflow-hidden">
      {/* Padrão de pontos decorativos com animação */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5 pointer-events-none"></div>
      
      {/* Elementos decorativos de fundo aprimorados */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-zenith-gold/15 to-zenith-gold/5 filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-gradient-to-tr from-zenith-gold/15 to-zenith-gold/5 filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      {/* Raios de luz diagonais */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-zenith-gold/3 blur-3xl rotate-15 transform -translate-x-1/4 -translate-y-1/4 opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-screen bg-zenith-gold/3 blur-3xl -rotate-15 transform translate-x-1/4 translate-y-1/4 opacity-10"></div>
      
      {/* Partículas douradas flutuantes */}
      <div className="stars-container absolute inset-0 overflow-hidden opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Ilustração do ciclo quebrado aprimorada */}
          <motion.div 
            className="hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Círculo de fundo com efeito de brilho */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-zenith-gold/20 animate-spin-slow"></div>
              <div className="absolute inset-2 rounded-full border border-zenith-gold/10"></div>
              <div className="absolute inset-4 rounded-full border border-zenith-gold/5"></div>
              
              {/* Efeito de glow no centro */}
              <div className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-zenith-gold/5 filter blur-xl"></div>
              
              {/* Contador de espera no centro */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="bg-zenith-primary/80 backdrop-blur-md p-2 rounded-xl border border-zenith-gold/20 shadow-lg shadow-zenith-gold/10">
                  <p className="text-zenith-gold/70 text-xs text-center mb-1">Seu dinheiro preso por:</p>
                  <div className="flex items-center space-x-1 justify-center">
                    <motion.div 
                      className="flex flex-col items-center" 
                      variants={digitVariants}
                      animate="animate"
                    >
                      <span className="text-zenith-gold text-xl font-bold">{countdown.days}</span>
                      <span className="text-zenith-gold/60 text-[10px]">DIAS</span>
                    </motion.div>
                    <span className="text-zenith-gold text-xl">:</span>
                    <motion.div 
                      className="flex flex-col items-center"
                      variants={digitVariants}
                      animate="animate"
                      transition={{ delay: 0.2 }}
                    >
                      <span className="text-zenith-gold text-xl font-bold">{countdown.hours.toString().padStart(2, '0')}</span>
                      <span className="text-zenith-gold/60 text-[10px]">HORAS</span>
                    </motion.div>
                    <span className="text-zenith-gold text-xl">:</span>
                    <motion.div 
                      className="flex flex-col items-center"
                      variants={digitVariants}
                      animate="animate"
                      transition={{ delay: 0.4 }}
                    >
                      <span className="text-zenith-gold text-xl font-bold">{countdown.minutes.toString().padStart(2, '0')}</span>
                      <span className="text-zenith-gold/60 text-[10px]">MIN</span>
                    </motion.div>
                    <span className="text-zenith-gold text-xl">:</span>
                    <motion.div 
                      className="flex flex-col items-center"
                      variants={digitVariants}
                      animate="animate"
                      transition={{ delay: 0.6 }}
                    >
                      <span className="text-zenith-gold text-xl font-bold">{countdown.seconds.toString().padStart(2, '0')}</span>
                      <span className="text-zenith-gold/60 text-[10px]">SEG</span>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Elementos do ciclo */}
              <div className="absolute w-full h-full">
                {/* Conexões entre os ícones formando um círculo perfeito */}
                <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
                  {/* Conexão: Topo para Direita */}
                  <motion.path 
                    d={arcPathTopToRight} 
                    stroke="url(#goldGradient)" 
                    strokeWidth="1.5" 
                    strokeDasharray="4,4"
                    strokeLinecap="round" 
                    fill="none"
                    variants={connectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  />
                  
                  {/* Conexão: Direita para Baixo */}
                  <motion.path 
                    d={arcPathRightToBottom} 
                    stroke="url(#goldGradient)" 
                    strokeWidth="1.5" 
                    strokeDasharray="4,4"
                    strokeLinecap="round" 
                    fill="none"
                    variants={connectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  />
                  
                  {/* Conexão: Baixo para Esquerda */}
                  <motion.path 
                    d={arcPathBottomToLeft} 
                    stroke="url(#goldGradient)" 
                    strokeWidth="1.5" 
                    strokeDasharray="4,4"
                    strokeLinecap="round" 
                    fill="none"
                    variants={connectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  />
                  
                  {/* Conexão especial: Esquerda para Topo - versão vermelha para indicar o problema */}
                  <motion.path 
                    d={arcPathLeftToTop} 
                    stroke="url(#warningGradient)" 
                    strokeWidth="1.5" 
                    strokeDasharray="4,4"
                    strokeLinecap="round" 
                    fill="none"
                    variants={connectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                  />
                  
                  {/* Definições de gradientes */}
                  <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(212, 175, 55, 0.2)" />
                      <stop offset="100%" stopColor="rgba(212, 175, 55, 0.6)" />
                    </linearGradient>
                    <linearGradient id="warningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255, 69, 96, 0.2)" />
                      <stop offset="100%" stopColor="rgba(255, 69, 96, 0.6)" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Ícone topo (90°) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-[-50%]">
                  <motion.div 
                    className="cursor-pointer"
                    variants={pulseVariants}
                    initial="initial"
                    animate="pulse"
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={() => setHoveredIcon(0)}
                    onHoverEnd={() => setHoveredIcon(null)}
                  >
                    <div className="bg-zenith-primary p-3 rounded-full border-2 border-zenith-gold/30 shadow-lg shadow-zenith-gold/10">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-zenith-gold/20 to-zenith-gold/5 backdrop-blur-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zenith-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    {hoveredIcon === 0 && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-1 px-3 bg-zenith-gold/10 backdrop-blur-md border border-zenith-gold/20 rounded text-sm text-zenith-gold whitespace-nowrap">
                        Tempo de espera
                      </div>
                    )}
                  </motion.div>
                </div>
                
                {/* Ícone direita (0°) */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[50%]">
                  <motion.div 
                    className="cursor-pointer"
                    variants={pulseVariants}
                    initial="initial"
                    animate="pulse"
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={() => setHoveredIcon(1)}
                    onHoverEnd={() => setHoveredIcon(null)}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="bg-zenith-primary p-3 rounded-full border-2 border-zenith-gold/30 shadow-lg shadow-zenith-gold/10">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-zenith-gold/20 to-zenith-gold/5 backdrop-blur-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zenith-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    {hoveredIcon === 1 && (
                      <div className="absolute top-1/2 right-full mr-2 -translate-y-1/2 py-1 px-3 bg-zenith-gold/10 backdrop-blur-md border border-zenith-gold/20 rounded text-sm text-zenith-gold whitespace-nowrap">
                        Taxas elevadas
                      </div>
                    )}
                  </motion.div>
                </div>
                
                {/* Ícone baixo (270°) */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[50%]">
                  <motion.div 
                    className="cursor-pointer"
                    variants={pulseVariants}
                    initial="initial"
                    animate="pulse"
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={() => setHoveredIcon(2)}
                    onHoverEnd={() => setHoveredIcon(null)}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="bg-zenith-primary p-3 rounded-full border-2 border-zenith-gold/30 shadow-lg shadow-zenith-gold/10">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-zenith-gold/20 to-zenith-gold/5 backdrop-blur-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zenith-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                    {hoveredIcon === 2 && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 py-1 px-3 bg-zenith-gold/10 backdrop-blur-md border border-zenith-gold/20 rounded text-sm text-zenith-gold whitespace-nowrap">
                        Pagamentos retidos
                      </div>
                    )}
                  </motion.div>
                </div>
                
                {/* Ícone esquerda (180°) - o problema */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-[-50%]">
                  <motion.div 
                    className="cursor-pointer"
                    variants={pulseVariants}
                    initial="initial"
                    animate="pulse"
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={() => setHoveredIcon(3)}
                    onHoverEnd={() => setHoveredIcon(null)}
                    transition={{ delay: 0.9 }}
                  >
                    <div className="bg-zenith-primary p-3 rounded-full border-2 border-red-500/30 shadow-lg shadow-red-500/10">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-red-500/20 to-red-500/5 backdrop-blur-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      {/* Efeito de pulso ao redor do ícone de problema */}
                      <div className="absolute inset-0 rounded-full border border-red-500/20 animate-ping-slow"></div>
                    </div>
                    {hoveredIcon === 3 && (
                      <div className="absolute top-1/2 left-full ml-2 -translate-y-1/2 py-1 px-3 bg-red-500/10 backdrop-blur-md border border-red-500/20 rounded text-sm text-red-500 whitespace-nowrap">
                        Transações recusadas
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Conteúdo textual */}
          <div>
            <div className="relative mb-4">
              <motion.span 
                className="text-xs font-semibold tracking-widest text-zenith-gold/80 uppercase mb-2 inline-block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                Problema crítico
              </motion.span>
            </div>

            <GoldHeading 
              tag="h2"
              align="left"
              size="lg"
              highlightWords={["SEGURA SEU DINHEIRO"]}
              className="mb-4"
            >
              SEU INFOPRODUTO VENDE, MAS SEU GATEWAY SEGURA SEU DINHEIRO
            </GoldHeading>
            
            <motion.div
              className="relative mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-zenith-text text-xl font-light leading-relaxed">
                <span className="font-medium">Você já viveu essa situação?</span> Sua campanha está performando <span className="font-semibold text-white">incrivelmente bem</span>, mas precisa parar porque:
              </p>
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-zenith-gold/5 via-zenith-gold/30 to-zenith-gold/5 rounded-full"></div>
            </motion.div>
            
            <motion.ul 
              className="space-y-6 mb-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {problems.map((problem, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start group relative"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  {/* Número de sequência */}
                  <span className="absolute -left-10 top-2 font-mono text-zenith-gold/30 text-sm">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  
                  {/* Ícone com efeito de hover aprimorado */}
                  <motion.div 
                    className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-zenith-gold/20 to-zenith-gold/5 flex items-center justify-center mr-5 text-zenith-gold border border-zenith-gold/20 shadow-lg shadow-zenith-gold/5 group-hover:shadow-zenith-gold/30 transition-all duration-300"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      {problem.icon}
                    </div>
                    <div className="absolute inset-0 rounded-full bg-zenith-gold/5 blur-md group-hover:opacity-100 opacity-0 transition-opacity"></div>
                  </motion.div>
                  
                  {/* Conteúdo com efeito melhorado */}
                  <div className="flex-1 pb-3 pt-2 relative">
                    <div className="text-zenith-text/95 text-lg font-medium leading-tight tracking-wide transition-all duration-300 group-hover:text-white">
                      {problem.text}
                    </div>
                    
                    {/* Subtexto com impacto */}
                    <p className="text-sm text-zenith-gold/60 mt-1 font-light italic max-w-md group-hover:text-zenith-gold/80 transition-colors duration-300">
                      {problem.subText}
                    </p>
                    
                    {/* Linha decorativa com animação */}
                    <motion.div 
                      className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-zenith-gold/40 to-zenith-gold/5"
                      initial={{ width: '30%' }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                    
                    {/* Gradiente de hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-full opacity-0 group-hover:opacity-5 bg-gradient-to-t from-zenith-gold to-transparent transition-all duration-300 -z-10"></div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.p 
              className="text-zenith-text text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="text-white font-medium">Enquanto isso</span>, oportunidades valiosas <span className="text-zenith-gold">passam</span> e seus concorrentes <span className="italic">continuam crescendo</span>.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="relative"
            >
              <GoldBanner variant="gradient" className="relative z-10">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <p className="text-2xl font-bold mb-2 sm:mb-0">
                    O problema <span className="relative">
                      <span className="relative z-10">não é sua estratégia</span>
                      <span className="absolute bottom-0 left-0 right-0 h-[5px] bg-zenith-gold/20 -z-0"></span>
                    </span>
                  </p>
                  <p className="text-xl font-extrabold text-zenith-gold">
                    É o modelo <span className="underline decoration-wavy decoration-red-500/70 underline-offset-4">predatório</span> dos gateways.
                  </p>
                </div>
              </GoldBanner>
              
              {/* Seta indicativa apontando para a próxima seção */}
              <div className="flex justify-center mt-8">
                <motion.div 
                  className="w-8 h-12 flex justify-center"
                  animate={{ 
                    y: [0, 10, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-8 w-8 text-zenith-gold/40" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Adicione uma animação de keyframes para o pulse lento */}
      <style jsx global>{`
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.4;
          }
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.7;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .bg-dot-pattern {
          background-image: radial-gradient(rgba(212, 175, 55, 0.25) 1px, transparent 1px);
          background-size: 25px 25px;
        }
        
        /* Partículas flutuantes */
        .stars-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        .stars-container:before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(1px 1px at 25% 15%, rgba(212, 175, 55, 0.8), transparent),
            radial-gradient(1px 1px at 50% 40%, rgba(212, 175, 55, 0.7), transparent),
            radial-gradient(1.5px 1.5px at 15% 25%, rgba(212, 175, 55, 0.6), transparent),
            radial-gradient(2px 2px at 75% 60%, rgba(212, 175, 55, 0.5), transparent),
            radial-gradient(2.5px 2.5px at 40% 70%, rgba(212, 175, 55, 0.6), transparent),
            radial-gradient(1.5px 1.5px at 85% 30%, rgba(212, 175, 55, 0.7), transparent);
          background-size: 550px 550px;
          animation: stars 10s linear infinite;
        }
        
        @keyframes stars {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-550px);
          }
        }
      `}</style>
    </section>
  );
};

export default ProblemSection; 