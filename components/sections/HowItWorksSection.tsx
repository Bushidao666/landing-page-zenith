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
      // Animação mais lenta para melhor performance
      setSecondAngle(prev => (prev + 0.1) % 360);
      setMinuteAngle(prev => (prev + 0.1 / 60) % 360);
      setHourAngle(prev => (prev + 0.1 / 720) % 360);
      
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
      {/* Ponteiro de hora (dourado) */}
      <g style={{ transform: `rotate(${hourAngle}deg)`, transformOrigin: "200px 200px" }}>
        <line 
          x1="200" 
          y1="200" 
          x2="200" 
          y2="125" 
          stroke="rgba(240, 218, 172, 0.9)" 
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
      
      {/* Ponteiro de minuto (branco) */}
      <g style={{ transform: `rotate(${minuteAngle}deg)`, transformOrigin: "200px 200px" }}>
        <line 
          x1="200" 
          y1="200" 
          x2="200" 
          y2="90" 
          stroke="rgba(255, 255, 255, 0.8)" 
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
      
      {/* Ponteiro de segundos (vermelho) */}
      <g style={{ transform: `rotate(${secondAngle}deg)`, transformOrigin: "200px 200px" }}>
        <line 
          x1="200" 
          y1="210" 
          x2="200" 
          y2="80" 
          stroke="#FF4D4D" 
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="200" cy="200" r="3" fill="#FF4D4D" />
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
      scale: 1.02,
      transition: { duration: 0.4, ease: "easeOut" }
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
            <div className="relative w-full max-w-md mx-auto flex justify-center">
              {/* Container do relógio simplificado */}
              <motion.div 
                className="aspect-square relative w-full"
                whileHover="hover"
                variants={clockHoverVariants}
              >
                {/* Anel externo */}
                <div className="absolute inset-0 rounded-full border-4 border-gray-800" style={{
                  boxShadow: "inset 0 0 20px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.5)"
                }}></div>
                
                {/* Glow externo */}
                <div className="absolute inset-[-10px] rounded-full" >
                  <div 
                    className="w-full h-full rounded-full"
                    style={{boxShadow: '0 0 30px rgba(240, 218, 172, 0.15)'}}
                  />
                </div>
                
                {/* SVG principal do relógio */}
                <svg 
                  viewBox="0 0 400 400" 
                  className="w-full h-full relative z-10"
                >
                  {/* Definição de gradientes simplificados */}
                  <defs>
                    <radialGradient id="clockFaceGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#101010" />
                      <stop offset="100%" stopColor="#000000" />
                    </radialGradient>
                    <linearGradient id="goldRimGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D4B572" />
                      <stop offset="50%" stopColor="#E5D4A1" />
                      <stop offset="100%" stopColor="#D4B572" />
                    </linearGradient>
                  </defs>
                  
                  {/* Borda externa do relógio */}
                  <circle 
                    cx="200" 
                    cy="200" 
                    r="198" 
                    fill="url(#goldRimGradient)" 
                    stroke="#9A7A3E"
                    strokeWidth="4"
                  />
                    
                  {/* Corpo principal do relógio */}
                  <circle 
                    cx="200" 
                    cy="200" 
                    r="190" 
                    fill="url(#clockFaceGradient)" 
                  />
                  
                  {/* Marcadores de hora e minuto */}
                  <g className="clock-markers">
                    {[...Array(60)].map((_, i) => {
                      const isHour = i % 5 === 0;
                      const angle = (i * 6) * (Math.PI / 180);
                      const innerRadius = 170;
                      const outerRadius = 180;
                      
                      const x1 = 200 + (isHour ? innerRadius - 5 : innerRadius) * Math.sin(angle);
                      const y1 = 200 - (isHour ? innerRadius - 5 : innerRadius) * Math.cos(angle);
                      const x2 = 200 + outerRadius * Math.sin(angle);
                      const y2 = 200 - outerRadius * Math.cos(angle);
                      
                      return (
                        <line 
                          key={i}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke={isHour ? "rgba(240, 218, 172, 0.8)" : "rgba(240, 218, 172, 0.4)"}
                          strokeWidth={isHour ? 3 : 1}
                          strokeLinecap="round"
                        />
                      );
                    })}
                  </g>
                  
                  {/* Números */}
                  <g className="clock-numbers">
                    {[3, 6, 9, 12].map((num, i) => {
                      const angle = (num * 30 - 90) * (Math.PI / 180); // adjust for text alignment
                      const radius = 150;
                      const x = 200 + radius * Math.cos(angle);
                      const y = 200 + radius * Math.sin(angle);
                      
                      return (
                        <text 
                          key={i}
                          x={x}
                          y={y + 10} // vertical adjustment
                          fill="rgba(240, 218, 172, 0.9)"
                          fontSize="28"
                          fontWeight="600"
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          {num === 12 ? '$' : num}
                        </text>
                      );
                    })}
                  </g>

                  {/* Centro do relógio */}
                  <circle cx="200" cy="200" r="8" fill="#D4B572" />
                  
                  {/* Ponteiros do relógio */}
                  <ClockHands />

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