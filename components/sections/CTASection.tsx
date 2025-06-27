import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

interface CTASectionProps {
  onOpenModal?: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onOpenModal }) => {
  // Estados aprimorados para controle preciso de interações
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [hasPulsed, setHasPulsed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ctaAnimation = useAnimation();
  
  // Efeito para atrair atenção ao CTA após carregamento
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasPulsed) {
        ctaAnimation.start({
          scale: [1, 1.08, 1],
          transition: { duration: 0.8 }
        });
        setHasPulsed(true);
      }
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [ctaAnimation, hasPulsed]);

  // Toggle video play/pause com feedback visual
  const togglePlay = async () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        try {
          await videoRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.error("Video play failed:", error);
          setIsPlaying(false);
        }
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  // Redutores de atrito com ícones aprimorados e texto refinado - orientados para ativar sistema 1 do cérebro
  const frictionReducers = [
    {
      text: 'Ativação Expressa em 24h',
      subtext: 'Sem processos complexos',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      text: 'Migração 100% Assistida',
      subtext: 'Cuidamos de tudo para você',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      text: 'Garantia Absoluta 30 Dias',
      subtext: 'Devolução total sem justificativa',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      text: 'Zero Taxas Ocultas',
      subtext: 'Transparência total nos custos',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  // Animação aprimorada para o botão principal - sequenciada para criar antecipação
  const pulseAnimation = {
    scale: [1, 1.03, 1],
    boxShadow: [
      '0 10px 25px rgba(240, 218, 172, 0.2)',
      '0 15px 35px rgba(240, 218, 172, 0.4)',
      '0 10px 25px rgba(240, 218, 172, 0.2)'
    ],
  };

  // Variantes de animações para diferentes elementos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 400, damping: 20 }
    }
  };

  // Partículas decorativas avançadas
  const renderParticles = () => {
    return [...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className={`absolute rounded-full ${i % 3 === 0 ? 'w-1.5 h-1.5 bg-zenith-gold/40' : 'w-1 h-1 bg-zenith-gold/60'}`}
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          filter: `blur(${i % 2 === 0 ? '0.5px' : '0px'})`,
        }}
        animate={{
          y: [0, -Math.random() * 20 - 10, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 5 + Math.random() * 5,
          repeat: Infinity,
          delay: Math.random() * 5,
          ease: "easeInOut"
        }}
      />
    ));
  };

  return (
    <section className="py-24 md:py-28 lg:py-32 bg-gradient-to-b from-zenith-primary to-zenith-primary/95 relative overflow-hidden">
      {/* Elementos decorativos de fundo aprimorados - estrategicamente posicionados para criar profundidade visual */}
      <div className="absolute top-0 left-0 w-full h-24 md:h-32 bg-gradient-to-b from-black/40 to-transparent z-0"></div>
      
      {/* Gradientes sutis para criar profundidade e direcionar o olhar */}
      <div className="absolute -top-40 right-0 w-[30rem] md:w-[35rem] h-[30rem] md:h-[35rem] rounded-full bg-zenith-gold/15 filter blur-[120px] opacity-60"></div>
      <div className="absolute top-1/3 -left-40 w-[35rem] md:w-[40rem] h-[35rem] md:h-[40rem] rounded-full bg-zenith-gold/10 filter blur-[140px] opacity-70"></div>
      <div className="absolute -bottom-40 -right-40 w-[40rem] md:w-[45rem] h-[40rem] md:h-[45rem] rounded-full bg-zenith-gold/15 filter blur-[180px] opacity-60"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[20rem] md:w-[25rem] h-[20rem] md:h-[25rem] rounded-full bg-zenith-gold/8 filter blur-[100px] opacity-50"></div>
      
      {/* Malha de linhas douradas sutis para sugerir estrutura e confiabilidade */}
      <div className="absolute inset-0 opacity-10" 
           style={{
             backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(240, 218, 172, 0.2) 1px, transparent 0), radial-gradient(circle at 20px 20px, rgba(240, 218, 172, 0.15) 1px, transparent 0)',
             backgroundSize: '40px 40px, 80px 80px',
             backgroundPosition: '0 0, 20px 20px'
           }}>
      </div>
      
      {/* Partículas douradas animadas - criando movimento para direcionar atenção */}
      <div className="absolute inset-0 z-0 opacity-40">
        {renderParticles()}
      </div>
      
      <div className="container mx-auto max-w-4xl xl:max-w-5xl px-4 md:px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center"
        >
          {/* Badge de exclusividade para ativar FOMO */}
          <motion.div 
            variants={itemVariants}
            className="mb-6 md:mb-8"
          >
            <div className="px-3 py-1.5 md:px-4 md:py-2 bg-zenith-gold/10 backdrop-blur-sm border border-zenith-gold/30 rounded-full flex items-center">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-zenith-gold animate-pulse mr-2"></span>
              <span className="text-zenith-gold font-medium text-xs md:text-sm uppercase tracking-wider">Exclusivo para Infoprodutores Selecionados</span>
            </div>
          </motion.div>
        
          <motion.div 
            variants={itemVariants}
            className="text-center mb-8 md:mb-10 lg:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-zenith-secondary mb-4 md:mb-6 font-secondary tracking-wide leading-tight">
              DESBLOQUEIE SEU <span className="relative inline-block">
                <span className="relative z-10 text-zenith-gold bg-clip-text bg-gradient-to-r from-zenith-gold to-zenith-gold/80">FLUXO CONTÍNUO</span>
                <span className="absolute -bottom-1 md:-bottom-1.5 left-0 right-0 h-2 md:h-3 bg-zenith-gold/15 rounded-full blur-sm"></span>
                <span className="absolute -inset-1 bg-zenith-gold/5 rounded-lg -z-10 transform -skew-x-3"></span>
              </span> DE CAPITAL
            </h2>
            
            {/* Subtítulo com maior impacto visual */}
            <p className="text-base sm:text-lg md:text-xl text-zenith-secondary/80 mt-4 font-light max-w-2xl md:max-w-3xl mx-auto">
              O sistema que <span className="italic font-medium">desbloqueou mais de R$240 milhões</span> para criadores digitais em 2023
            </p>
          </motion.div>
          
          {/* Player de Vídeo Estilizado com elementos visuais premium */}
          <motion.div 
            variants={itemVariants}
            className="w-full max-w-3xl md:max-w-4xl mb-12 md:mb-16 aspect-video rounded-lg md:rounded-xl overflow-hidden relative shadow-[0_15px_40px_-10px_rgba(0,0,0,0.5)] border border-zenith-gold/30"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Moldura visual premium */}
            <div className="absolute inset-0 border-[4px] md:border-[6px] border-zenith-primary rounded-lg md:rounded-xl z-20 pointer-events-none shadow-inner"></div>
            <div className="absolute inset-0 border border-zenith-gold/20 rounded-lg md:rounded-xl z-20 pointer-events-none"></div>
            
            {/* Video element */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/video-thumbnail.jpg"
              onClick={togglePlay}
              playsInline
              loop
              muted
            >
              <source src="/videos/zenith-video.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video>
            
            {/* Overlay de gradiente para melhorar a legibilidade e profundidade */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent pointer-events-none z-10"></div>
            
            {/* Badge de case real para aumentar credibilidade */}
            <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-zenith-gold/90 px-2 py-0.5 md:px-3 md:py-1 rounded text-xs font-bold text-zenith-primary uppercase tracking-wider z-10 shadow-lg">
              Case de Sucesso
            </div>
            
            <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 flex items-center space-x-2 z-20">
              {/* Badge de informação do vídeo mais informativa */}
              <div className="bg-black/60 backdrop-blur-sm px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm text-white/90 border border-white/10 flex items-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-1.5 text-zenith-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>03:45</span>
              </div>

              {/* Botão de Mudo */}
              <button
                onClick={toggleMute}
                className="p-2 rounded-full bg-black/60 backdrop-blur-sm text-white hover:bg-black/80 border border-white/10 transition-colors"
                aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
              >
                {isMuted ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M12 21V3l-6 6H4a2 2 0 00-2 2v4a2 2 0 002 2h2l6 6z" />
                  </svg>
                )}
              </button>
            </div>
            
            {/* Play button - Implementação simplificada e limpa */}
            {(!isPlaying || isHovering) && (
              <div 
                className="absolute inset-0 flex items-center justify-center z-10"
                onClick={togglePlay}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-zenith-gold/90 flex items-center justify-center shadow-[0_0_15px_rgba(240,218,172,0.4)] cursor-pointer hover:scale-110 transition-transform duration-300">
                  {isPlaying ? (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-zenith-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" />
                      <rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-zenith-primary ml-0.5 md:ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 4.75C6 4.04777 6.66091 3.57665 7.25518 3.93194L18.2632 10.1819C18.8252 10.518 18.8252 11.382 18.2632 11.7181L7.25518 17.9681C6.66091 18.3234 6 17.8522 6 17.15V4.75Z" fill="currentColor" />
                    </svg>
                  )}
                </div>
              </div>
            )}
          </motion.div>
          
          {/* Texto central com maior apelo emocional e técnicas de persuasão */}
          <motion.div 
            variants={itemVariants}
            className="mb-10 md:mb-16 text-center max-w-2xl md:max-w-3xl mx-auto px-2"
          >
            <div className="relative">
              {/* Aspas decorativas para adicionar credibilidade */}
              <div className="absolute -top-4 -left-6 md:-top-6 md:-left-8 text-5xl md:text-7xl text-zenith-gold/15 font-serif">❝</div>
              <div className="absolute -bottom-8 -right-6 md:-bottom-12 md:-right-8 text-5xl md:text-7xl text-zenith-gold/15 font-serif">❞</div>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zenith-text mx-auto font-light leading-relaxed mb-3 md:mb-4 relative z-10">
                Implemente o <span className="font-medium text-zenith-gold/90">Ecossistema Zenith</span> em menos de <span className="inline-block relative">
                  <span className="relative z-10">24 horas</span>
                  <span className="absolute -bottom-0.5 md:-bottom-1 left-0 right-0 h-0.5 md:h-1 bg-zenith-gold/30"></span>
                </span> e comece a <span className="italic font-medium text-white">acessar seu dinheiro instantaneamente</span>.
              </p>
              
              {/* Estatística de impacto para reforçar credibilidade */}
              <div className="flex flex-wrap justify-center items-center gap-x-1 gap-y-1 text-xs sm:text-sm text-zenith-secondary/80 mt-3 md:mt-4 font-medium">
                <span>●</span>
                <span>Utilizado por <span className="text-zenith-gold">2.400+ infoprodutores</span></span>
                <span className="mx-1 md:mx-2">●</span>
                <span>ROI médio de <span className="text-zenith-gold">342%</span></span>
              </div>
            </div>
          </motion.div>
          
          {/* Botão CTA principal aprimorado com maior apelo visual e urgência */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center justify-center mb-12 md:mb-16"
            animate={ctaAnimation}
          >
            {/* Rótulo de urgência acima do botão */}
            <div className="text-zenith-gold text-xs sm:text-sm font-medium uppercase tracking-widest mb-2 md:mb-3 flex items-center">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-zenith-gold mr-1.5 sm:mr-2 animate-pulse"></span>
              <span>Vagas Limitadas • Inscrições Encerram em Breve</span>
            </div>
            
            <motion.button
              onClick={onOpenModal}
              className="group px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 rounded-lg md:rounded-xl bg-gradient-to-r from-zenith-gold to-zenith-gold/90 font-bold text-zenith-primary text-lg sm:text-xl md:text-2xl transition-all relative overflow-hidden"
              whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(240,218,172,0.3)' }}
              whileTap={{ scale: 0.98 }}
              animate={pulseAnimation}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
            >
              {/* Efeitos de brilho premium no botão */}
              <div className="absolute inset-0 bg-gradient-to-r from-zenith-gold/50 via-white/10 to-zenith-gold/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute inset-0 flex justify-center overflow-hidden">
                <motion.span 
                  className="w-32 sm:w-40 h-full bg-white/30 blur-md skew-x-15"
                  animate={{
                    x: ['-250%', '250%'],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    repeatDelay: 1
                  }}
                />
              </div>
              
              {/* Brilho nos cantos para criar efeito de ouro polido */}
              <div className="absolute top-0 left-0 w-16 sm:w-20 h-0.5 sm:h-1 bg-white/50 blur-sm"></div>
              <div className="absolute bottom-0 right-0 w-16 sm:w-20 h-0.5 sm:h-1 bg-white/50 blur-sm"></div>
              
              <div className="relative z-10 px-1 sm:px-2">
                <div className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="mr-1">LIBERAR FLUXO DE</span>
                  <span className="relative">
                    <span>CAPITAL</span>
                    <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-zenith-primary/70"></span>
                  </span>
                </div>
                
                <div className="text-xs sm:text-sm font-medium mt-0.5 sm:mt-1 opacity-90 tracking-wider">ATIVAÇÃO INSTANTÂNEA • VAGAS LIMITADAS</div>
              </div>
              
              {/* Sombra de profundidade para efeito 3D sutil */}
              <div className="absolute -inset-0.5 -z-10 bg-gradient-to-br from-white/5 to-zenith-gold/50 rounded-lg md:rounded-xl blur-sm group-hover:blur-md transition-all duration-500"></div>
            </motion.button>
            
            {/* Microcopy abaixo do botão para reduzir fricção */}
            <div className="text-zenith-secondary/70 text-xs sm:text-sm mt-3 md:mt-4 font-light flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 md:h-4 md:w-4 mr-1 md:mr-1.5 text-zenith-gold/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Cadastro seguro e sem compromisso • <span className="text-zenith-gold/90">Ativação em 60 segundos</span></span>
            </div>
          </motion.div>
          
          {/* Redutores de atrito estilizados e aprimorados para maior impacto visual */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-6 md:gap-y-8 max-w-2xl md:max-w-3xl mx-auto mb-12 md:mb-16 px-2"
          >
            {frictionReducers.map((reducer, index) => (
              <motion.div 
                key={index} 
                className="flex items-start group"
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-zenith-gold/30 to-zenith-gold/10 backdrop-blur-sm flex items-center justify-center mr-3 md:mr-4 text-zenith-gold/90 group-hover:from-zenith-gold/40 group-hover:to-zenith-gold/20 transition-all duration-300 shadow-sm">
                  <div className="p-2 md:p-2.5">
                    {reducer.icon}
                  </div>
                </div>
                <div>
                  <div className="text-zenith-secondary text-base md:text-lg font-medium group-hover:text-zenith-gold transition-colors duration-300">{reducer.text}</div>
                  <div className="text-xs md:text-sm text-zenith-text/70 mt-0.5">{reducer.subtext}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Elementos de confiança aprimorados com maior destaque visual */}
          <motion.div 
            variants={itemVariants}
            className="w-full mt-6 md:mt-8 pt-10 md:pt-12 border-t border-zenith-gold/20"
          >
            {/* Título dos elementos de confiança */}
            <div className="text-center mb-6 md:mb-8">
              <div className="inline-block px-3 py-1 md:px-4 md:py-1 rounded-full bg-zenith-gold/10 text-zenith-gold text-xs md:text-sm font-medium uppercase tracking-wider border border-zenith-gold/20">
                Pagamento 100% Seguro
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-14 gap-y-6 md:gap-y-10 mb-16 md:mb-24">
              {/* Selo de segurança */}
              <motion.div 
                className="flex items-center group"
                whileHover={{ scale: 1.05, x: 3 }}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 mr-3 md:mr-4 text-zenith-gold bg-gradient-to-br from-zenith-gold/20 to-zenith-gold/5 rounded-full p-2.5 md:p-3 backdrop-blur-sm border border-zenith-gold/10 shadow-lg shadow-black/5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-zenith-gold font-medium mb-0.5 md:mb-1 text-sm md:text-base">Proteção Avançada</div>
                  <div className="text-xs md:text-sm text-zenith-text/80">ISO 27001 Certificada</div>
                </div>
              </motion.div>
              
              {/* Certificação SSL */}
              <motion.div 
                className="flex items-center group"
                whileHover={{ scale: 1.05, x: 3 }}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 mr-3 md:mr-4 text-zenith-gold bg-gradient-to-br from-zenith-gold/20 to-zenith-gold/5 rounded-full p-2.5 md:p-3 backdrop-blur-sm border border-zenith-gold/10 shadow-lg shadow-black/5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <div className="text-zenith-gold font-medium mb-0.5 md:mb-1 text-sm md:text-base">Conexão Blindada</div>
                  <div className="text-xs md:text-sm text-zenith-text/80">Criptografia SSL/TLS</div>
                </div>
              </motion.div>
              
              {/* PCI Compliance */}
              <motion.div 
                className="flex items-center group"
                whileHover={{ scale: 1.05, x: 3 }}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 mr-3 md:mr-4 text-zenith-gold bg-gradient-to-br from-zenith-gold/20 to-zenith-gold/5 rounded-full p-2.5 md:p-3 backdrop-blur-sm border border-zenith-gold/10 shadow-lg shadow-black/5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <div className="text-zenith-gold font-medium mb-0.5 md:mb-1 text-sm md:text-base">PCI DSS Nível 1</div>
                  <div className="text-xs md:text-sm text-zenith-text/80">Máxima Segurança Financeira</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection; 