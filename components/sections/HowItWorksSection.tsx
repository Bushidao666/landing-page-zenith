import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Componente para os ponteiros do relógio com animação pura em JS
const ClockHands = () => {
  // Estados para armazenar os ângulos de rotação dos ponteiros
  const [hourAngle, setHourAngle] = useState(0);
  const [minuteAngle, setMinuteAngle] = useState(0);
  const [secondAngle, setSecondAngle] = useState(0);
  
  // Referência para o frame de animação
  const animationFrameRef = useRef<number | null>(null);
  
  useEffect(() => {
    // Função para atualizar os ângulos dos ponteiros
    const updateClock = () => {
      // Incremento para animação acelerada (para fins visuais)
      setSecondAngle(prev => (prev + 6) % 360); // 6 graus por frame ~ 1 segundo
      setMinuteAngle(prev => (prev + 0.1) % 360); // Mais lento que segundos
      setHourAngle(prev => (prev + 0.0083) % 360); // Mais lento que minutos
      
      // Continuar a animação
      animationFrameRef.current = requestAnimationFrame(updateClock);
    };
    
    // Iniciar a animação
    animationFrameRef.current = requestAnimationFrame(updateClock);
    
    // Limpar a animação quando o componente for desmontado
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []); // Executar apenas uma vez na montagem do componente
  
  return (
    <g>
      {/* Ponteiro de hora (dourado) com design melhorado */}
      <g style={{ transform: `rotate(${hourAngle}deg)`, transformOrigin: "200px 200px" }}>
        {/* Sombra expandida do ponteiro */}
        <line 
          x1="200" 
          y1="200" 
          x2="200" 
          y2="125" 
          stroke="rgba(0, 0, 0, 0.5)" 
          strokeWidth="6"
          strokeLinecap="round"
          transform="translate(2, 2) scale(0.97)"
        />
        
        {/* Corpo do ponteiro com gradiente para dar volume */}
        <path
          d="M197,200 L197,130 C197,126 203,126 203,130 L203,200 z"
          fill="url(#hourHandGradient)"
          stroke="rgba(240, 218, 172, 0.9)"
          strokeWidth="0.5"
        />
        
        {/* Reflexo de luz no ponteiro */}
        <line 
          x1="200" 
          y1="190" 
          x2="200" 
          y2="132" 
          stroke="rgba(255, 255, 255, 0.2)" 
          strokeWidth="1"
          strokeLinecap="round"
          transform="translate(-1, 0)"
        />
      </g>
      
      {/* Ponteiro de minuto (branco) com design melhorado */}
      <g style={{ transform: `rotate(${minuteAngle}deg)`, transformOrigin: "200px 200px" }}>
        {/* Sombra expandida do ponteiro */}
        <line 
          x1="200" 
          y1="200" 
          x2="200" 
          y2="90" 
          stroke="rgba(0, 0, 0, 0.5)" 
          strokeWidth="5"
          strokeLinecap="round"
          transform="translate(2, 2) scale(0.98)"
        />
        
        {/* Corpo do ponteiro com gradiente para dar volume */}
        <path
          d="M198,200 L198,95 C198,91 202,91 202,95 L202,200 z"
          fill="url(#minuteHandGradient)"
          stroke="rgba(255, 255, 255, 0.8)"
          strokeWidth="0.5"
        />
        
        {/* Reflexo de luz no ponteiro */}
        <line 
          x1="199" 
          y1="180" 
          x2="199" 
          y2="97" 
          stroke="rgba(255, 255, 255, 0.3)" 
          strokeWidth="0.8"
          strokeLinecap="round"
        />
      </g>
      
      {/* Ponteiro de segundos (vermelho) com design melhorado */}
      <g style={{ transform: `rotate(${secondAngle}deg)`, transformOrigin: "200px 200px" }}>
        {/* Sombra expandida do ponteiro */}
        <line 
          x1="200" 
          y1="210" 
          x2="200" 
          y2="80" 
          stroke="rgba(0, 0, 0, 0.5)" 
          strokeWidth="2"
          strokeLinecap="round"
          transform="translate(1.5, 1.5)"
        />
        
        {/* Parte traseira do ponteiro */}
        <line 
          x1="200" 
          y1="200" 
          x2="200" 
          y2="215" 
          stroke="#CC2C2C" 
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        
        {/* Corpo do ponteiro */}
        <line 
          x1="200" 
          y1="215" 
          x2="200" 
          y2="80" 
          stroke="#FF4D4D" 
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        
        {/* Reflexo de luz no ponteiro */}
        <line 
          x1="199.5" 
          y1="200" 
          x2="199.5" 
          y2="100" 
          stroke="rgba(255, 255, 255, 0.3)" 
          strokeWidth="0.5"
          strokeLinecap="round"
        />
        
        {/* Círculo decorativo na base do ponteiro de segundos */}
        <circle
          cx="200"
          cy="215"
          r="3"
          fill="#CC2C2C"
        />
        
        {/* Pequeno círculo na base do ponteiro de segundos */}
        <circle
          cx="200"
          cy="215"
          r="2"
          fill="#FF4D4D"
        />
      </g>
    </g>
  );
};

const HowItWorksSection = () => {
  // Timeline de eventos
  const timeline = [
    {
      time: '8:45',
      event: 'Seu cliente compra seu infoproduto por R$997',
      highlight: 'R$997',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      time: '8:45',
      event: 'O valor já está disponível na sua conta Zenith Bank',
      highlight: 'já está disponível',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      time: '8:46',
      event: 'Você emite um cartão virtual para escalar a campanha que está performando',
      highlight: 'escalar a campanha',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      time: '8:47',
      event: 'Aumenta o orçamento diário no Meta/Google Ads',
      highlight: 'Aumenta o orçamento',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      )
    },
    {
      time: '8:50',
      event: 'Novas vendas começam a chegar',
      highlight: 'Novas vendas',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  // Variantes de animação para o container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // Variantes de animação para cada item da timeline
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Animação para os textos destacados
  const highlightVariants = {
    initial: { backgroundSize: '0% 100%' },
    animate: { 
      backgroundSize: '100% 100%',
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Efeito pulsante para o indicador "tempo real"
  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.9, 1, 0.9],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Adicionar variantes com transformação 3D para o relógio
  const clockHoverVariants = {
    hover: {
      rotateX: 5, 
      rotateY: 5,
      scale: 1.02,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-28 bg-zenith-primary relative overflow-hidden">
      {/* Elementos decorativos de fundo aprimorados */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/20 to-transparent"></div>
      <div className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-zenith-gold/5 filter blur-3xl"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-zenith-gold/8 filter blur-3xl"></div>
      
      {/* Padrão geométrico sutil no fundo */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{ 
          backgroundImage: "radial-gradient(circle at 10px 10px, rgba(240, 218, 172, 0.2) 2px, transparent 0)",
          backgroundSize: "30px 30px" 
        }}></div>
      </div>
      
      <div className="container mx-auto max-w-6xl px-4 relative z-10 flex flex-col items-center">
        <div className="text-center mb-16">
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-zenith-gold uppercase tracking-wider text-sm font-medium px-4 py-1.5 border border-zenith-gold/30 rounded-full bg-zenith-gold/5">
              Sem burocracia, sem demora
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-zenith-secondary mb-12 font-secondary leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            SEU DINHEIRO, SEU CONTROLE, <br />
            <span className="relative inline-block">
              <span className="text-zenith-gold">SEU TIMING</span>
              <motion.span 
                className="absolute -bottom-2 left-0 right-0 h-[3px] bg-zenith-gold/50"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              ></motion.span>
            </span>
          </motion.h2>
          
          {/* Relógio SVG movido para entre headline e sub-headline */}
          <motion.div 
            className="w-full max-w-md mx-auto mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-md mx-auto flex justify-center perspective-1000">
              {/* Container do relógio perfeitamente centralizado com perspective */}
              <motion.div 
                className="aspect-square relative w-full transform-gpu"
                whileHover="hover"
                variants={clockHoverVariants}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Anel externo 3D */}
                <div className="absolute inset-0 rounded-full" style={{ transform: "translateZ(-5px)" }}>
                  <div 
                    className="w-full h-full rounded-full border-8 border-gray-900"
                    style={{ 
                      boxShadow: "inset 0 0 30px rgba(0,0,0,0.7), 0 0 30px rgba(0,0,0,0.7)"
                    }}
                  />
                </div>
                
                {/* Glow externo aprimorado */}
                <div className="absolute inset-0 rounded-full" style={{ transform: "translateZ(-2px)" }}>
                  <motion.div 
                    className="w-full h-full rounded-full"
                    animate={{ 
                      boxShadow: [
                        '0 0 25px rgba(0, 0, 0, 0.8), 0 0 15px rgba(240, 218, 172, 0.1)', 
                        '0 0 35px rgba(0, 0, 0, 0.9), 0 0 25px rgba(240, 218, 172, 0.2)', 
                        '0 0 25px rgba(0, 0, 0, 0.8), 0 0 15px rgba(240, 218, 172, 0.1)'
                      ] 
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
                
                {/* SVG principal do relógio */}
                <svg 
                  viewBox="0 0 400 400" 
                  className="w-full h-full relative z-10"
                  style={{ filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.5))" }}
                >
                  {/* Definição de gradientes aprimorados */}
                  <defs>
                    {/* Gradiente radial aprimorado para o fundo do relógio */}
                    <radialGradient id="clockFaceGradient" cx="50%" cy="45%" r="55%" fx="50%" fy="45%">
                      <stop offset="0%" stopColor="#121212" />
                      <stop offset="70%" stopColor="#0A0A0A" />
                      <stop offset="100%" stopColor="#000000" />
                    </radialGradient>
                    
                    {/* Gradiente metálico dourado para a borda externa */}
                    <linearGradient id="goldRimGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D4B572" />
                      <stop offset="10%" stopColor="#E5C987" />
                      <stop offset="20%" stopColor="#CAAA6F" />
                      <stop offset="30%" stopColor="#A38347" />
                      <stop offset="40%" stopColor="#D2B56B" />
                      <stop offset="50%" stopColor="#E5D4A1" />
                      <stop offset="60%" stopColor="#D2B56B" />
                      <stop offset="70%" stopColor="#A38347" />
                      <stop offset="80%" stopColor="#CAAA6F" />
                      <stop offset="90%" stopColor="#E5C987" />
                      <stop offset="100%" stopColor="#D4B572" />
                    </linearGradient>
                    
                    {/* Textura para o aro dourado */}
                    <pattern id="goldPattern" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
                      <rect width="40" height="40" fill="url(#goldRimGradient)" />
                      <line x1="0" y1="20" x2="40" y2="20" stroke="#9A7A3E" strokeWidth="0.5" strokeOpacity="0.4" />
                      <line x1="20" y1="0" x2="20" y2="40" stroke="#9A7A3E" strokeWidth="0.5" strokeOpacity="0.4" />
                    </pattern>
                    
                    {/* Reflexo radial para o aro dourado */}
                    <radialGradient id="goldReflection" cx="30%" cy="30%" r="60%" fx="30%" fy="30%">
                      <stop offset="0%" stopColor="rgba(255, 255, 255, 0.6)" />
                      <stop offset="20%" stopColor="rgba(255, 255, 255, 0)" />
                      <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                    </radialGradient>
                    
                    {/* Filtro para brilho dourado */}
                    <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
                      <feFlood floodColor="#D2B56B" floodOpacity="0.2" result="goldBlur" />
                      <feComposite in="goldBlur" in2="blur" operator="in" result="goldBlurAlpha" />
                      <feComposite in="SourceGraphic" in2="goldBlurAlpha" operator="over" />
                    </filter>
                    
                    {/* Gradiente para a borda externa do relógio */}
                    <linearGradient id="clockRimGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#333" />
                      <stop offset="40%" stopColor="#111" />
                      <stop offset="60%" stopColor="#111" />
                      <stop offset="100%" stopColor="#333" />
                    </linearGradient>
                    
                    {/* Gradiente para ponteiro das horas */}
                    <linearGradient id="hourHandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(180, 160, 120, 0.9)" />
                      <stop offset="50%" stopColor="rgba(240, 218, 172, 1)" />
                      <stop offset="100%" stopColor="rgba(180, 160, 120, 0.9)" />
                    </linearGradient>
                    
                    {/* Gradiente para ponteiro dos minutos */}
                    <linearGradient id="minuteHandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(180, 180, 180, 0.9)" />
                      <stop offset="50%" stopColor="rgba(255, 255, 255, 1)" />
                      <stop offset="100%" stopColor="rgba(180, 180, 180, 0.9)" />
                    </linearGradient>
                    
                    {/* Gradiente para o botão Tempo Real aprimorado */}
                    <linearGradient id="tempoRealGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255, 235, 180, 0.95)" />
                      <stop offset="50%" stopColor="rgba(240, 218, 172, 0.9)" />
                      <stop offset="100%" stopColor="rgba(220, 198, 152, 0.85)" />
                    </linearGradient>
                    
                    {/* Filtro para sombra interna aprimorado */}
                    <filter id="innerShadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
                      <feOffset in="blur" dx="0" dy="3" result="offsetBlur" />
                      <feComposite in="SourceGraphic" in2="offsetBlur" operator="over" />
                    </filter>
                    
                    {/* Filtro para brilho do centro */}
                    <filter id="centerGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
                    </filter>
                    
                    {/* Filtro para o brilho do botão aprimorado */}
                    <filter id="buttonGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
                    </filter>
                    
                    {/* Textura sutil para o relógio */}
                    <pattern id="clockTexture" patternUnits="userSpaceOnUse" width="100" height="100" patternTransform="rotate(45)">
                      <rect width="100" height="100" fill="#080808" />
                      <line x1="0" y1="0" x2="100" y2="0" stroke="#0C0C0C" strokeWidth="1" />
                      <line x1="0" y1="20" x2="100" y2="20" stroke="#0C0C0C" strokeWidth="0.5" />
                      <line x1="0" y1="40" x2="100" y2="40" stroke="#0C0C0C" strokeWidth="0.5" />
                      <line x1="0" y1="60" x2="100" y2="60" stroke="#0C0C0C" strokeWidth="0.5" />
                      <line x1="0" y1="80" x2="100" y2="80" stroke="#0C0C0C" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  
                  {/* Borda externa do relógio com efeito 3D dourado */}
                  <g>
                    {/* Aro externo dourado com sombra projetada */}
                    <circle 
                      cx="200" 
                      cy="200" 
                      r="198" 
                      fill="url(#goldRimGradient)" 
                      stroke="#9A7A3E"
                      strokeWidth="1"
                      filter="drop-shadow(0 3px 5px rgba(0,0,0,0.7))"
                    />
                    
                    {/* Aro externo decorativo com textura dourada */}
                    <circle 
                      cx="200" 
                      cy="200" 
                      r="198" 
                      fill="url(#goldPattern)" 
                      fillOpacity="0.5"
                      stroke="none"
                    />
                    
                    {/* Reflexo na borda dourada */}
                    <circle 
                      cx="200" 
                      cy="200" 
                      r="198" 
                      fill="url(#goldReflection)" 
                      fillOpacity="0.4"
                      stroke="none"
                    />
                    
                    {/* Detalhes decorativos na borda (padrão de pequenos pontos dourados) */}
                    {[...Array(36)].map((_, i) => {
                      const angle = (i * 10) * (Math.PI / 180);
                      const cx = 200 + 198 * Math.cos(angle);
                      const cy = 200 + 198 * Math.sin(angle);
                      
                      return (
                        <circle 
                          key={i}
                          cx={cx} 
                          cy={cy} 
                          r="1.2" 
                          fill="#D5C089"
                          filter="url(#goldGlow)"
                        />
                      );
                    })}
                    
                    {/* Borda interna do aro dourado - transição para o interior */}
                    <circle 
                      cx="200" 
                      cy="200" 
                      r="190" 
                      fill="none"
                      stroke="#9A7A3E"
                      strokeWidth="2.5"
                    />
                    
                    {/* Camada para dar profundidade entre o aro dourado e o interior */}
                    <circle 
                      cx="200" 
                      cy="200" 
                      r="188" 
                      fill="#070707"
                      stroke="rgba(30,30,30,1)"
                      strokeWidth="1"
                    />
                    
                    {/* Corpo principal do relógio com textura */}
                    <circle 
                      cx="200" 
                      cy="200" 
                      r="185" 
                      fill="url(#clockFaceGradient)" 
                      stroke="rgba(240, 218, 172, 0.15)"
                      strokeWidth="1.5"
                      filter="url(#innerShadow)"
                    />
                    
                    {/* Overlay de textura */}
                    <circle 
                      cx="200" 
                      cy="200" 
                      r="185" 
                      fill="url(#clockTexture)" 
                      fillOpacity="0.2"
                    />
                    
                    {/* Efeito de vidro sobreposto */}
                    <circle 
                      cx="200" 
                      cy="200" 
                      r="185" 
                      fill="url(#glassReflection)" 
                      strokeWidth="1"
                    />
                    
                    {/* Anel decorativo externo aprimorado com efeito de volume */}
                    <circle 
                      cx="200" 
                      cy="200" 
                      r="175" 
                      fill="none"
                      stroke="linear-gradient(to bottom, rgba(240, 218, 172, 0.2), rgba(240, 218, 172, 0.1))"
                      strokeWidth="3"
                      strokeDasharray="2 6"
                      style={{ filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.7))" }}
                    />
                    
                    {/* Anel decorativo interno */}
                    <circle 
                      cx="200" 
                      cy="200" 
                      r="165" 
                      fill="none" 
                      stroke="rgba(240, 218, 172, 0.15)"
                      strokeWidth="1"
                    />
                    
                    {/* Textura sutil do fundo */}
                    <circle 
                      cx="200" 
                      cy="200" 
                      r="160" 
                      fill="none"
                      stroke="rgba(240, 218, 172, 0.05)"
                      strokeWidth="30"
                      strokeDasharray="1 12"
                    />
                  </g>
                  
                  {/* Camada base para marcadores de minuto/hora com efeito 3D */}
                  <g className="clock-markers">
                    {[...Array(60)].map((_, i) => {
                      const isHour = i % 5 === 0;
                      const angle = (i * 6) * (Math.PI / 180); // convert to radians
                      const innerRadius = isHour ? 135 : 150;
                      const outerRadius = isHour ? 165 : 160;
                      
                      const x1 = 200 + innerRadius * Math.sin(angle);
                      const y1 = 200 - innerRadius * Math.cos(angle);
                      const x2 = 200 + outerRadius * Math.sin(angle);
                      const y2 = 200 - outerRadius * Math.cos(angle);
                      
                      // Coordenadas para a sombra
                      const shadowX1 = x1 + 1;
                      const shadowY1 = y1 + 1;
                      const shadowX2 = x2 + 1;
                      const shadowY2 = y2 + 1;
                      
                      return (
                        <g key={i}>
                          {/* Sombra do marcador para efeito 3D */}
                          <line 
                            x1={shadowX1}
                            y1={shadowY1}
                            x2={shadowX2}
                            y2={shadowY2}
                            stroke="rgba(0, 0, 0, 0.7)"
                            strokeWidth={isHour ? 2.5 : 1.5}
                            strokeLinecap="round"
                          />
                          
                          {/* Marcador principal */}
                          <line 
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke={isHour ? "rgba(240, 218, 172, 0.9)" : "rgba(240, 218, 172, 0.4)"}
                            strokeWidth={isHour ? 2 : 1}
                            strokeLinecap="round"
                          />
                        </g>
                      );
                    })}
                  </g>
                  
                  {/* Camada superior para números - renderizada depois para ficar por cima */}
                  <g className="clock-numbers">
                    {/* Números das horas principais com sombra e efeito 3D */}
                    {[3, 6, 9].map((num, i) => {
                      const angle = (num * 30) * (Math.PI / 180);
                      const radius = 145;
                      const x = 200 + radius * Math.sin(angle);
                      const y = 200 - radius * Math.cos(angle);
                      
                      return (
                        <g key={i}>
                          {/* Fundo elevado do número */}
                          <circle 
                            cx={x}
                            cy={y}
                            r="22"
                            fill="rgba(20, 20, 20, 0.8)"
                            stroke="rgba(40, 40, 40, 0.5)"
                            strokeWidth="1"
                            filter="drop-shadow(0 2px 2px rgba(0,0,0,0.7))"
                          />
                          
                          {/* Círculo de fundo para melhorar visibilidade */}
                          <circle 
                            cx={x}
                            cy={y}
                            r="18"
                            fill="rgba(0, 0, 0, 0.5)"
                          />
                          
                          {/* Sombra mais profunda do texto */}
                          <text 
                            x={x}
                            y={y}
                            fill="rgba(0, 0, 0, 0.7)"
                            fontSize="24"
                            fontWeight="600"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            transform={`translate(2, 2)`}
                          >
                            {num}
                          </text>
                          
                          {/* Texto principal com gradient para efeito 3D */}
                          <text 
                            x={x}
                            y={y}
                            fill="rgba(240, 218, 172, 0.9)"
                            fontSize="24"
                            fontWeight="600"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            style={{ 
                              textShadow: "0 0.5px 0 rgba(255,255,255,0.3)"
                            }}
                          >
                            {num}
                          </text>
                        </g>
                      );
                    })}
                  </g>
                  
                  {/* Definições de gradientes e filtros */}
                  <defs>
                    {/* Gradiente para o cifrão aprimorado */}
                    <linearGradient id="dollarGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#65BB69" />
                      <stop offset="50%" stopColor="#4CAF50" />
                      <stop offset="100%" stopColor="#2E7D32" />
                    </linearGradient>
                    
                    {/* Filtro para o brilho do cifrão */}
                    <filter id="dollarGlow" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                      <feFlood floodColor="#4CAF50" floodOpacity="0.3" result="coloredBlur" />
                      <feComposite in="coloredBlur" in2="blur" operator="in" result="coloredBlurAlpha" />
                      <feComposite in="SourceGraphic" in2="coloredBlurAlpha" operator="over" />
                    </filter>
                  </defs>
                  
                  {/* Cifrão estilizado na posição 12h com design 3D aprimorado */}
                  <g className="dollar-sign">
                    {/* Base elevada para o cifrão */}
                    <circle 
                      cx="200" 
                      cy="65" 
                      r="32" 
                      fill="rgba(20, 20, 20, 0.9)"
                      stroke="rgba(40, 40, 40, 0.5)"
                      strokeWidth="1"
                      filter="drop-shadow(0 3px 3px rgba(0,0,0,0.7))"
                    />
                    
                    {/* Círculo de destaque atrás do cifrão */}
                    <circle 
                      cx="200" 
                      cy="65" 
                      r="28" 
                      fill="rgba(0, 0, 0, 0.7)"
                    />
                    
                    <circle 
                      cx="200" 
                      cy="65" 
                      r="25" 
                      fill="rgba(76, 175, 80, 0.15)"
                      stroke="rgba(76, 175, 80, 0.4)"
                      strokeWidth="1.5"
                    >
                      <animate 
                        attributeName="r" 
                        values="25;27;25" 
                        dur="3s" 
                        repeatCount="indefinite" 
                      />
                      <animate 
                        attributeName="opacity" 
                        values="0.7;1;0.7" 
                        dur="3s" 
                        repeatCount="indefinite" 
                      />
                    </circle>
                    
                    {/* Sombra mais profunda do cifrão */}
                    <text 
                      x="200"
                      y="65"
                      fill="rgba(0, 0, 0, 0.8)"
                      fontSize="36"
                      fontWeight="800"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      transform="translate(3, 3)"
                    >
                      $
                    </text>
                    
                    {/* Cifrão principal com efeito de brilho aprimorado */}
                    <text 
                      x="200"
                      y="65"
                      fill="url(#dollarGradient)"
                      fontSize="38"
                      fontWeight="800"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      filter="url(#dollarGlow)"
                      style={{ 
                        textShadow: "0 1px 0 rgba(255,255,255,0.3)"
                      }}
                    >
                      $
                    </text>
                    
                    {/* Brilho adicional (destaque) */}
                    <motion.circle
                      cx="200"
                      cy="65"
                      r="15"
                      fill="rgba(76, 175, 80, 0.2)"
                      filter="url(#dollarGlow)"
                      animate={{
                        opacity: [0.2, 0.5, 0.2],
                        scale: [0.8, 1.1, 0.8]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </g>
                  
                  {/* Centro do relógio com efeito de brilho aprimorado */}
                  <g>
                    {/* Base elevada para o centro */}
                    <circle 
                      cx="200" 
                      cy="200" 
                      r="15" 
                      fill="rgba(30, 30, 30, 1)"
                      stroke="rgba(60, 60, 60, 0.5)"
                      strokeWidth="1"
                      filter="drop-shadow(0 2px 2px rgba(0,0,0,0.7))"
                    />
                    
                    {/* Sombra do centro */}
                    <circle 
                      cx="202" 
                      cy="202" 
                      r="12" 
                      fill="rgba(0, 0, 0, 0.7)"
                    />
                    
                    {/* Brilho ao redor do centro */}
                    <circle 
                      cx="200" 
                      cy="200" 
                      r="15" 
                      fill="rgba(240, 218, 172, 0.2)"
                      filter="url(#centerGlow)"
                    >
                      <animate
                        attributeName="opacity"
                        values="0.2;0.5;0.2"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    
                    {/* Centro dourado com gradiente para efeito 3D */}
                    <circle 
                      cx="200" 
                      cy="200" 
                      r="10" 
                      fill="radial-gradient(circle at 40% 40%, rgba(255, 233, 187, 1), rgba(240, 218, 172, 0.9), rgba(200, 180, 140, 0.9))"
                      stroke="rgba(180, 160, 120, 0.4)"
                      strokeWidth="0.5"
                    >
                      <animate
                        attributeName="r"
                        values="10;11;10"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    
                    {/* Reflexo no centro dourado */}
                    <circle 
                      cx="197" 
                      cy="197" 
                      r="4" 
                      fill="rgba(255, 255, 255, 0.3)"
                    />
                  </g>
                  
                  {/* Ponteiros do relógio com animação e aparência 3D aprimorada */}
                  <ClockHands />
                  
                  {/* Partículas decorativas ao redor do relógio aprimoradas */}
                  {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((angle, i) => {
                    const radian = (angle * Math.PI) / 180;
                    const cx = 200 + 180 * Math.cos(radian);
                    const cy = 200 + 180 * Math.sin(radian);
                    
                    // Pula ângulos específicos para não colocar partículas onde estão os números
                    if (angle === 90 || angle === 180 || angle === 270) return null;
                    
                    return (
                      <g key={i}>
                        {/* Base elevada para a partícula */}
                        <circle 
                          cx={cx} 
                          cy={cy} 
                          r="5" 
                          fill="rgba(30, 30, 30, 0.9)"
                          filter="drop-shadow(0 1px 1px rgba(0,0,0,0.7))"
                        />
                        
                        {/* Sombra da partícula mais profunda */}
                        <circle 
                          cx={cx + 1.5} 
                          cy={cy + 1.5} 
                          r="3"
                          fill="rgba(0, 0, 0, 0.7)"
                        />
                        
                        {/* Partícula com brilho e gradiente */}
                        <circle 
                          cx={cx}
                          cy={cy}
                          r="3"
                          fill="radial-gradient(circle at 40% 40%, rgba(255, 233, 187, 0.9), rgba(240, 218, 172, 0.7))"
                          stroke="rgba(220, 200, 160, 0.3)"
                          strokeWidth="0.5"
                        >
                          <animate
                            attributeName="opacity"
                            values="0.4;0.9;0.4"
                            dur={`${2 + i * 0.3}s`}
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="r"
                            values="2;4;2"
                            dur={`${2 + i * 0.3}s`}
                            repeatCount="indefinite"
                          />
                        </circle>
                        
                        {/* Reflexo na partícula */}
                        <circle 
                          cx={cx - 1} 
                          cy={cy - 1} 
                          r="1" 
                          fill="rgba(255, 255, 255, 0.5)"
                        />
                      </g>
                    );
                  })}
                  
                  {/* Botão de "Tempo Real" com efeito 3D aprimorado */}
                  <g>
                    {/* Base elevada para o botão */}
                    <rect
                      x="129"
                      y="251"
                      width="142"
                      height="32"
                      rx="16"
                      fill="rgba(30, 30, 30, 0.9)"
                      filter="drop-shadow(0 4px 4px rgba(0,0,0,0.7))"
                    />
                    
                    {/* Sombra do botão mais profunda */}
                    <rect
                      x="131"
                      y="253"
                      width="138"
                      height="30"
                      rx="15"
                      fill="rgba(0, 0, 0, 0.7)"
                    />
                    
                    {/* Botão com brilho, gradiente e ares */}
                    <motion.rect
                      x="130"
                      y="250"
                      width="140"
                      height="30"
                      rx="15"
                      fill="url(#tempoRealGradient)"
                      filter="url(#buttonGlow)"
                      stroke="rgba(255, 245, 220, 0.4)"
                      strokeWidth="1"
                      animate={{
                        opacity: [0.95, 1, 0.95],
                        y: [250, 249, 250],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Reflexo no topo do botão */}
                    <rect
                      x="135"
                      y="253"
                      width="130"
                      height="8"
                      rx="4"
                      fill="rgba(255, 255, 255, 0.25)"
                    />
                    
                    {/* Texto com sombra mais profunda */}
                    <text 
                      x="200" 
                      y="272" 
                      fontSize="14"
                      fontWeight="700"
                      fill="rgba(0, 0, 0, 0.7)"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      transform="translate(1.5, 1.5)"
                    >
                      TEMPO REAL
                    </text>
                    
                    {/* Texto principal com efeito brilhante */}
                    <text 
                      x="200" 
                      y="270" 
                      fontSize="14"
                      fontWeight="700"
                      fill="#0A0A0A"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      style={{ textShadow: "0 1px 0 rgba(255,255,255,0.3)" }}
                    >
                      TEMPO REAL
                    </text>
                  </g>
                </svg>
              </motion.div>
              
              {/* Legenda do relógio */}
              <motion.div
                className="absolute -bottom-8 left-0 right-0 text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <p className="text-zenith-gold/90 text-sm uppercase tracking-wide font-medium">
                  AGILIDADE QUE SEUS CONCORRENTES NÃO TÊM
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.p
            className="text-zenith-text/80 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Veja como a Zenith Bank transforma a gestão do seu fluxo de caixa em uma vantagem competitiva real.
          </motion.p>
        </div>
        
        <div className="w-full">
          {/* Timeline aprimorada - agora em largura completa */}
          <motion.div 
            className="w-full max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative pl-10 border-l-2 border-zenith-gold/50 space-y-10 py-6">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  className="relative flex items-center"
                  variants={itemVariants}
                >
                  {/* Timeline marker (circle) */}
                  <div className="absolute left-[-6px] -translate-x-1/2">
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-zenith-gold to-zenith-gold/80 flex items-center justify-center text-zenith-primary font-mono font-bold text-sm shadow-lg shadow-zenith-gold/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {item.time}
                    </motion.div>
                  </div>
                  
                  {/* Card do evento */}
                  <motion.div 
                    className="ml-10 p-6 bg-gradient-to-br from-zenith-primary to-zenith-primary/95 border border-zenith-gold/20 rounded-lg shadow-xl shadow-black/20 backdrop-blur-sm w-full"
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 15px 30px -10px rgba(0,0,0,0.3), 0 0 10px rgba(240, 218, 172, 0.1)",
                      borderColor: "rgba(240, 218, 172, 0.3)" 
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zenith-gold/10 flex items-center justify-center mr-5 text-zenith-gold">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-zenith-secondary text-lg">
                          {item.event.split(item.highlight).map((part, i, arr) => {
                            // Se for o último pedaço, não precisa adicionar o highlight depois
                            if (i === arr.length - 1) return <span key={i}>{part}</span>;
                            
                            return (
                              <React.Fragment key={i}>
                                {part}
                                <motion.span 
                                  className="font-bold text-zenith-gold relative"
                                  initial="initial"
                                  whileInView="animate"
                                  viewport={{ once: true }}
                                  variants={highlightVariants}
                                  style={{
                                    backgroundImage: 'linear-gradient(transparent 80%, rgba(240, 218, 172, 0.2) 20%)',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: '0 0'
                                  }}
                                >
                                  {item.highlight}
                                </motion.span>
                              </React.Fragment>
                            );
                          })}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
              
              {/* Indicador visual de tempo total */}
              <motion.div
                className="absolute -bottom-6 left-0 right-0 flex justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="px-4 py-1.5 bg-zenith-primary border border-zenith-gold/30 rounded-full text-sm text-zenith-gold flex items-center shadow-lg shadow-black/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Apenas 5 minutos
                </div>
              </motion.div>
            </div>
            
            {/* Comparativo com concorrentes aprimorado */}
            <motion.div 
              className="mt-16 p-8 bg-gradient-to-br from-zenith-primary to-zenith-primary/90 border border-zenith-gold/20 rounded-xl shadow-xl shadow-black/20 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.3), 0 0 15px rgba(240, 218, 172, 0.1)",
                borderColor: "rgba(240, 218, 172, 0.3)"
              }}
            >
              {/* Elemento decorativo */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-zenith-gold/5 rounded-full filter blur-2xl -translate-y-1/2 translate-x-1/3"></div>
              
              <div className="relative">
                <h3 className="text-xl font-bold text-zenith-secondary mb-4">Vantagem competitiva real</h3>
                <p className="text-zenith-text text-xl leading-relaxed">
                  Enquanto seus concorrentes <span className="line-through text-zenith-text/60">esperam 14 dias</span> pelo próprio dinheiro, 
                  você já <motion.span 
                    className="text-zenith-gold font-bold relative inline-block"
                    initial={{ backgroundSize: '0% 100%' }}
                    whileInView={{ backgroundSize: '100% 100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 1.2 }}
                    style={{
                      backgroundImage: 'linear-gradient(transparent 85%, rgba(240, 218, 172, 0.3) 15%)',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: '0 0'
                    }}
                  >reinvestiu e multiplicou seus resultados</motion.span>.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Call-to-action sutil */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a 
            href="#signup" 
            className="inline-block px-8 py-3 bg-zenith-gold text-zenith-primary font-bold rounded-full hover:bg-zenith-gold/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-zenith-gold/20"
          >
            Comece a receber em tempo real
          </a>
        </motion.div>
      </div>
      
      {/* Elemento decorativo inferior aprimorado */}
      <div className="absolute bottom-0 inset-x-0 h-2 bg-zenith-gradient opacity-80"></div>
    </section>
  );
};

export default HowItWorksSection; 