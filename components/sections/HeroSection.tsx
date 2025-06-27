import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import GoldButton from '../ui/GoldButton';

interface HeroSectionProps {
  onScrollTo?: () => void;
  onOpenModal?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollTo, onOpenModal }) => {
  // Animação das notificações no app do celular (feed interno)
  const notifications = [
    {
      id: 1,
      type: 'success',
      title: 'Pagamento recebido',
      amount: 'R$ 997,00',
      time: 'agora',
      product: 'Curso Maestria Digital'
    },
    {
      id: 2,
      type: 'success',
      title: 'Pagamento recebido',
      amount: 'R$ 1.497,00',
      time: '15s atrás',
      product: 'Mentoria Expansão'
    },
    {
      id: 3, // Nova notificação para mais realismo
      type: 'success',
      title: 'Pagamento recebido',
      amount: 'R$ 197,00',
      time: '1m atrás',
      product: 'Template Pack Pro'
    }
  ];

  // Estatísticas rápidas no app
  const quickStats = [
    { label: 'Vendas Hoje', value: 'R$ 4.988,00', change: '+32%', icon: 'cash' }, // Adicionado tipo de ícone
    { label: 'Taxa Aprovação', value: '96.5%', change: '+25%', icon: 'check' } // Adicionado tipo de ícone e label ajustado
  ];

  // Notificações de sistema IN-APP (REMOVIDAS)
  /*
  const inAppSystemNotifications = [
    { id: 'sysSale1', amount: 'R$ 297,00', product: 'Ebook Turbo Vendido!', delay: 1.5, duration: 3.5 },
    { id: 'sysSale2', amount: 'R$ 49,90', product: 'Novo Lead: Template Premium', delay: 5.5, duration: 3 }, // Exemplo de outro tipo de notificação
    { id: 'sysSale3', amount: 'R$ 97,00', product: 'Minicurso: Pagamento Aprovado', delay: 8.0, duration: 4 },
  ];
  */

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-zenith-primary">
      {/* Background Elements - Refinados para maior sofisticação */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient overlay mais premium */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent opacity-70"></div>
        
        {/* Círculos decorativos com mais dimensão */}
        <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-zenith-gold/15 rounded-full filter blur-[120px] opacity-70"></div>
        <div className="absolute bottom-0 right-1/4 w-[45rem] h-[45rem] bg-zenith-gold/10 rounded-full filter blur-[140px] opacity-60"></div>
        <div className="absolute bottom-[20%] left-[10%] w-[25rem] h-[25rem] bg-zenith-gold/10 rounded-full filter blur-[100px] opacity-40"></div>
        
        {/* Grid lines mais sutis com gradiente */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(181, 164, 114, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(181, 164, 114, 0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}></div>
        
        {/* Padrão sutil de pontos dourados */}
        <div className="absolute inset-0 pointer-events-none opacity-10" style={{ 
          backgroundImage: 'radial-gradient(rgba(240, 218, 172, 0.5) 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}></div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto max-w-6xl z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Content - Refinado para princípios de neuromarketing */}
          <motion.div 
            className="lg:col-span-7 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
          >
            {/* Pre-headline com maior destaque para exclusividade - princípio da escassez */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-5"
            >
              <span className="inline-block px-5 py-1.5 rounded-full text-sm font-medium bg-zenith-gold/15 text-zenith-gold border border-zenith-gold/30 shadow-sm shadow-zenith-gold/10">
                <span className="mr-1.5 inline-block w-2 h-2 bg-zenith-gold rounded-full animate-pulse"></span>
                EXCLUSIVO PARA INFOPRODUTORES
              </span>
            </motion.div>
            
            {/* Headline com maior impacto visual e contraste - princípio do contraste e foco */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.8rem] font-bold font-secondary text-zenith-secondary leading-[1.1] mb-7">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="block text-zenith-gold mb-2 tracking-tight drop-shadow-md"
              >
                ACESSE SEU DINHEIRO
              </motion.span>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative inline-block tracking-tight"
              >
                <span className="text-white/95">EM SEGUNDOS,</span>
                <motion.span 
                  className="absolute -bottom-0.5 left-0 right-0 h-[3px] bg-zenith-gold/70 rounded-full"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 1 }}
                ></motion.span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="relative inline-block tracking-tight ml-3"
              >
                <span className="text-zenith-gold/90 bg-zenith-gold/10 px-2 py-1 rounded-md">NÃO EM SEMANAS</span>
              </motion.div>
            </h1>
            
            {/* Subheadline com maior clareza e estrutura - princípio da clareza e benefício */}
            <motion.p 
              className="text-lg md:text-xl text-zenith-text mb-9 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              O único gateway integrado com seu próprio banco digital que libera o valor das suas vendas <span className="text-zenith-gold font-semibold">instantaneamente</span>, cobra até <span className="text-zenith-gold font-semibold">60% menos</span> em taxas e aprova <span className="text-zenith-gold font-semibold">25% mais</span> transações.
            </motion.p>
            
            {/* CTA Button com destaque visual e gatilho de urgência */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mb-6"
            >
              <div className="relative inline-block">
                {/* Efeito de pulsação atrás do botão - princípio da atenção e movimento */}
                <motion.div 
                  className="absolute -inset-1.5 bg-zenith-gold/30 rounded-xl blur-md"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.6, 0.9, 0.6]
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                <GoldButton 
                  size="lg"
                  onClick={onScrollTo}
                  icon={
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  }
                >
                  Veja como Funciona
                </GoldButton>
              </div>
              
              {/* Counter para gerar escassez/urgência - princípio da urgência */}
              <motion.div 
                className="mt-4 text-sm text-zenith-text/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <span className="inline-flex items-center font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-zenith-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Implementação em menos de 24h
                </span>
              </motion.div>
            </motion.div>
            
            {/* Trust badges redesenhados para maior credibilidade - princípio da prova social */}
            <motion.div 
              className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.div 
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex flex-col items-center text-center lg:items-start lg:text-left bg-gradient-to-br from-zenith-gold/10 to-zenith-gold/5 p-3.5 rounded-lg border border-zenith-gold/10 hover:border-zenith-gold/30 hover:shadow-md hover:shadow-zenith-gold/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-zenith-gold/15 flex items-center justify-center mb-2.5 border border-zenith-gold/30 shadow-inner shadow-zenith-gold/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zenith-gold drop-shadow-sm" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-zenith-text font-semibold">Dinheiro no ato</span>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex flex-col items-center text-center lg:items-start lg:text-left bg-gradient-to-br from-zenith-gold/10 to-zenith-gold/5 p-3.5 rounded-lg border border-zenith-gold/10 hover:border-zenith-gold/30 hover:shadow-md hover:shadow-zenith-gold/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-zenith-gold/15 flex items-center justify-center mb-2.5 border border-zenith-gold/30 shadow-inner shadow-zenith-gold/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zenith-gold drop-shadow-sm" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-zenith-text font-semibold">60% menos taxas</span>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex flex-col items-center text-center lg:items-start lg:text-left bg-gradient-to-br from-zenith-gold/10 to-zenith-gold/5 p-3.5 rounded-lg border border-zenith-gold/10 hover:border-zenith-gold/30 hover:shadow-md hover:shadow-zenith-gold/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-zenith-gold/15 flex items-center justify-center mb-2.5 border border-zenith-gold/30 shadow-inner shadow-zenith-gold/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zenith-gold drop-shadow-sm" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-zenith-text font-semibold">Início em 24h</span>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex flex-col items-center text-center lg:items-start lg:text-left bg-gradient-to-br from-zenith-gold/10 to-zenith-gold/5 p-3.5 rounded-lg border border-zenith-gold/10 hover:border-zenith-gold/30 hover:shadow-md hover:shadow-zenith-gold/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-zenith-gold/15 flex items-center justify-center mb-2.5 border border-zenith-gold/30 shadow-inner shadow-zenith-gold/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zenith-gold drop-shadow-sm" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 102 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-zenith-text font-semibold">25% mais aprovações</span>
              </motion.div>
            </motion.div>
            
            {/* Tagline adicional - gatilho FOMO */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="mt-8 text-center lg:text-left"
            >
              <div className="inline-block bg-zenith-primary bg-opacity-50 border border-zenith-gold/20 rounded-lg px-4 py-2.5">
                <p className="text-sm font-medium text-zenith-text/90 flex items-center">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mr-2 border border-green-500/30">
                    <span className="block w-2 h-2 bg-green-500 rounded-full"></span>
                  </span>
                  <span>
                    <span className="text-zenith-gold font-semibold">237 infoprodutores</span> já vendem com dinheiro instantâneo
                  </span>
                </p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Phone Animation/Illustration - Design mais sofisticado */}
          <motion.div 
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
          >
            {/* Container 3D com perspectiva */}
            <div className="relative w-full h-[600px] flex items-center justify-center perspective-1200">
              {/* Efeito de luz premium atrás do telefone - intensificado */}
              <div className="absolute w-80 h-80 rounded-full bg-zenith-gold/20 filter blur-[80px]"></div>
              <div className="absolute w-44 h-44 rounded-full bg-zenith-gold/40 filter blur-[60px] transform translate-y-12"></div>
              
              {/* Partículas de ouro flutuantes - mais orgânicas */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className={`absolute w-${1 + Math.floor(Math.random() * 2)} h-${1 + Math.floor(Math.random() * 2)} rounded-full ${i % 3 === 0 ? 'bg-zenith-gold/80' : 'bg-zenith-gold/60'}`}
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${15 + Math.random() * 70}%`,
                    filter: 'blur(0.5px)'
                  }}
                  animate={{
                    y: [-(5 + Math.random() * 30), (5 + Math.random() * 30)],
                    opacity: [0.4, 0.9, 0.4],
                    scale: [0.8, 1.3, 0.8]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3 + Math.random() * 5,
                    delay: Math.random() * 2,
                    ease: "easeInOut"
                  }}
                />
              ))}

              {/* Phone device - Design 3D premium */}
              <motion.div 
                className="phone-3d-wrapper relative"
                initial={{ y: 20 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5,
                  ease: "easeInOut"
                }}
                whileHover={{ rotateY: '-2deg', rotateX: '2deg', rotateZ: '0deg', transition: { duration: 0.5 } }}
              >
                {/* Smartphone shadow - Multi-layered e mais realista */}
                <div className="absolute inset-0 transform translate-y-4 translate-x-1 scale-[0.97] rounded-[40px] bg-black/10 blur-xl"></div>
                <div className="absolute inset-0 transform translate-y-2 -translate-x-0.5 scale-[0.95] rounded-[40px] bg-black/15 blur-lg"></div>
                
                {/* Botões físicos laterais */}
                <div className="absolute -right-1.5 top-28 w-1 h-10 bg-gradient-to-b from-zenith-gold/50 to-zenith-gold/40 rounded-r-md shadow-inner"></div>
                <div className="absolute -right-1.5 top-48 w-1 h-16 bg-gradient-to-b from-zenith-gold/50 to-zenith-gold/40 rounded-r-md shadow-inner"></div>
                <div className="absolute -left-1.5 top-40 w-1 h-20 bg-gradient-to-b from-zenith-gold/50 to-zenith-gold/40 rounded-l-md shadow-inner"></div>
                
                {/* Frame 3D do smartphone com transformações */}
                <div className="relative w-72 h-[580px] bg-gradient-to-b from-zinc-900 to-zinc-800 rounded-[40px] transform preserve-3d rotate-y-1 rotate-x-3 border-8 border-[#1a1a1a] shadow-[0_0_40px_-5px_rgba(240,218,172,0.5)] overflow-hidden z-20">
                  {/* Reflexo/brilho na borda - 3D effect */}
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-[32px] opacity-30"></div>
                  <div className="absolute inset-0 rounded-[32px] opacity-30 overflow-hidden">
                    <div className="absolute top-0 -left-[150%] w-[400%] h-full bg-gradient-to-r from-transparent via-zenith-gold/60 to-transparent transform -skew-x-12 animate-shimmer-slow"></div>
                  </div>
                  
                  {/* Phone notch */}
                  <div className="absolute top-0 inset-x-0 h-7 flex justify-center items-center z-30">
                    <div className="w-36 h-5 bg-black rounded-b-xl flex items-center justify-center">
                      <div className="w-16 h-1 bg-zenith-gold/50 rounded-full"></div>
                    </div>
                    {/* Câmera frontal */}
                    <div className="absolute right-14 top-1.5 w-2 h-2 rounded-full bg-[#333] flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-[#222] border border-[#444]"></div>
                    </div>
                  </div>
                  
                  {/* Phone screen content */}
                  <div className="absolute top-0 inset-x-0 bottom-0 bg-gradient-to-b from-zenith-primary/95 to-zenith-primary/85 rounded-[32px] p-3 flex flex-col pt-8 transform preserve-3d translate-z-1">
                    {/* App Top Bar (Hora, Ícones de Status) */}
                    <div className="absolute top-2.5 left-3 right-3 flex justify-between items-center text-[10px] text-zenith-text/70 z-20">
                      <span className="font-medium">08:45</span>
                      <div className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8.111 16.059A7.5 7.5 0 0112 15c2.222 0 4.242.806 5.889 2.162M12 12a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" /></svg> {/* Placeholder sinal */} 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19.071 14.828A7.5 7.5 0 0112 16.5a7.5 7.5 0 01-7.071-1.672M12 4.5a7.5 7.5 0 017.071 1.672A7.5 7.5 0 0112 4.5z" /></svg> {/* Placeholder Wifi */} 
                        <span className="font-medium">98%</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>{/* Placeholder bateria */}
                      </div>
                    </div>

                    {/* App header (Título) - Design mais premium */}
                    <div className="flex justify-between items-center mb-3 pt-3 z-10">
                      <div className="flex items-center">
                        <Image src="/zenith-logo-icon.png" alt="Zenith Pay" width={22} height={22} className="mr-1.5 opacity-95 rounded-sm shadow-sm"/>
                        <h2 className="text-sm text-zenith-gold font-bold tracking-tight drop-shadow-sm">ZENITH PAY + BANK</h2>
                      </div>
                      <div className="flex items-center bg-green-500/15 border border-green-500/30 rounded-md px-1.5 py-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1 animate-pulse"></div>
                          <span className="text-[9px] text-green-400 font-bold tracking-wide">INTEGRADO</span>
                      </div>
                    </div>
                    
                    {/* Quick stats bar - VENDAS (Refinado) */}
                    <div className="grid grid-cols-2 gap-2.5 mb-4 z-10 transform translate-z-1">
                    {quickStats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="bg-gradient-to-br from-zenith-gold/15 to-zenith-gold/5 border border-zenith-gold/25 rounded-lg p-3 hover:from-zenith-gold/20 hover:to-zenith-gold/10 transition-all duration-300 shadow-sm overflow-hidden"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + (index * 0.1) }}
                        whileHover={{ scale: 1.03, y: -2 }}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[10px] text-zenith-text/80 font-medium">{stat.label}</span>
                            {stat.icon === 'cash' && <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm13.707 5.293l-3-3a1 1 0 00-1.414 0L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l7-7z" clipRule="evenodd" /></svg>}
                            {stat.icon === 'check' && <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-zenith-gold drop-shadow-sm">{stat.value}</span>
                          <div className="inline-flex items-center justify-center rounded-full text-green-400 bg-green-500/20 px-1 py-0.5 border border-green-500/30">
                            <span className="text-[8px] font-bold leading-none">{stat.change}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    </div>
                    
                    {/* Balance card - BANCO (Refinado) - Maior destaque visual */}
                    <motion.div 
                      className="bg-gradient-to-br from-zenith-gold/25 to-zenith-gold/15 rounded-xl p-4 backdrop-blur-sm border border-zenith-gold/40 mb-4 shadow-lg hover:shadow-zenith-gold/30 transition-all duration-300 z-10 transform translate-z-2"
                      initial={{ scale: 0.95, opacity: 0.5 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      whileHover={{ scale: 1.03, y: -3, transition: { duration: 0.3 } }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <div className="text-zenith-secondary/90 text-xs font-medium">Saldo Disponível</div>
                        <div className="flex items-center bg-green-500/15 rounded-full px-1.5 py-0.5 border border-green-500/40">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-1 animate-pulse"></div>
                          <span className="text-[9px] text-green-300 font-bold tracking-wide">INSTANTÂNEO</span>
                        </div>
                      </div>
                      <div className="text-zenith-gold text-3xl font-bold mb-1 drop-shadow-sm">R$ 997,00</div>
                      <div className="flex justify-between items-center text-xs text-zenith-text/70">
                        <span>Atualizado agora</span>
                        <div className="flex items-center font-medium">
                          <motion.span 
                            className="h-1.5 w-1.5 bg-green-400 rounded-full mr-1.5 inline-block"
                            animate={{ 
                              opacity: [0.5, 1, 0.5],
                              scale: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          ></motion.span> 
                          AO VIVO
                        </div>
                      </div>
                      
                      {/* Efeito de brilho para destacar o valor */}
                      <motion.div 
                        className="absolute inset-0 opacity-30 overflow-hidden rounded-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ delay: 1.2 }}
                      >
                        <motion.div 
                          className="w-40 h-5 bg-gradient-to-r from-transparent via-white to-transparent absolute top-[40%] -left-20 transform rotate-[30deg]"
                          animate={{ 
                            left: ['120%', '-20%'],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            repeatDelay: 5,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </motion.div>
                    
                    {/* Transaction notifications - INTEGRAÇÃO VENDAS + BANCO (Refinado) */}
                    <div className="flex-1 flex flex-col space-y-2.5 overflow-y-auto scrollbar-hide pt-1 pb-2 z-10 transform translate-z-1">
                      <div className="flex justify-between items-center mb-1.5 px-1">
                        <div className="text-xs text-zenith-text/90 uppercase font-semibold tracking-wider">Vendas Recentes</div>
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse mr-1"></div>
                          <span className="text-[10px] text-zenith-text/80 font-medium">online</span>
                        </div>
                      </div>
                      
                      {notifications.map((notification, index) => (
                        <motion.div 
                          key={notification.id}
                          className="bg-zenith-primary/30 rounded-lg p-2.5 border border-zenith-gold/20 flex items-center hover:bg-zenith-gold/10 transition-colors duration-200 shadow-sm"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1 + (index * 0.15), duration: 0.5 }}
                          whileHover={{ scale: 1.03, y: -2, transition: { duration: 0.2 } }}
                        >
                          <div className={`w-9 h-9 rounded-lg ${notification.type === 'success' ? 'bg-green-500/15 border-green-500/30 text-green-400' : 'bg-zenith-gold/10 border-zenith-gold/30 text-zenith-gold'} flex items-center justify-center mr-2.5 border`}>
                            {notification.type === 'success' ? 
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 drop-shadow-sm" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg> : 
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" /></svg> // Placeholder icon
                            }
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs text-zenith-secondary/90 font-medium">{notification.title}</div>
                            <div className="text-[11px] text-zenith-text/70 truncate">{notification.product}</div>
                            <div className="text-sm text-zenith-gold font-bold mt-0.5 drop-shadow-sm">{notification.amount}</div>
                          </div>
                          <div className="flex flex-col items-end ml-2">
                            <div className="text-[10px] text-zenith-text/70 mb-0.5">{notification.time}</div>
                            <div className="text-[10px] bg-green-500/20 text-green-300 px-1.5 py-0.5 rounded-full border border-green-500/40 font-bold tracking-tight">LIBERADO</div>
                          </div>
                          
                          {/* Efeito de pulsação sutil para nova notificação */}
                          {index === 0 && (
                            <motion.div 
                              className="absolute inset-0 rounded-lg border border-green-400/30"
                              animate={{ 
                                opacity: [0, 0.5, 0],
                                scale: [0.98, 1.02, 0.98]
                              }}
                              transition={{
                                duration: 2,
                                repeat: 3,
                                repeatDelay: 1
                              }}
                            />
                          )}
                        </motion.div>
                      ))}

                      {/* Barra de progresso de transferência - VISUAL (Mantida e melhorada) */}
                      <motion.div
                        className="bg-zenith-primary/30 border border-zenith-gold/20 rounded-lg p-2.5 mt-2 shadow-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 }}
                        whileHover={{ scale: 1.03, y: -2, transition: { duration: 0.2 } }}
                      >
                        <div className="flex justify-between items-center text-[10px] text-zenith-text/80 mb-1.5">
                          <div className="flex items-center font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1.5 text-zenith-gold" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                            </svg>
                            <span>Venda → Saldo Banco</span>
                          </div>
                          <span className="text-green-400 bg-green-500/15 px-1.5 py-0.5 rounded-full border border-green-500/30 font-bold">Concluído</span>
                        </div>
                        <div className="h-1.5 bg-zenith-gold/15 rounded-full overflow-hidden shadow-inner">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-green-500 to-green-400"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.8, delay: 1.5 }}
                          ></motion.div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Quick action buttons (Corrigidos) */}
                    <div className="pt-3 border-t border-zenith-gold/20 mt-auto bg-zenith-primary/50 backdrop-blur-sm sticky bottom-0 pb-1 z-10">
                      <div className="flex justify-around">
                        {[ 
                          { 
                            label: 'Cartão', 
                            icon: (
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-zenith-gold">
                                <rect x="2" y="5" width="20" height="14" rx="2" />
                                <line x1="2" y1="10" x2="22" y2="10" />
                              </svg>
                            )
                          },
                          { 
                            label: 'Transferir', 
                            icon: (
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-zenith-gold">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <polyline points="19 12 12 19 5 12" />
                              </svg>
                            )
                          },
                          { 
                            label: 'Métricas', 
                            icon: (
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-zenith-gold">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                                <polyline points="7.5 19.79 7.5 14.6 3 12" />
                                <polyline points="21 12 16.5 14.6 16.5 19.79" />
                                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                <line x1="12" y1="22.08" x2="12" y2="12" />
                              </svg>
                            )
                          }
                        ].map(button => (
                          <motion.button 
                            key={button.label}
                            className="w-16 h-16 rounded-2xl bg-[#262523] border border-zenith-gold/25 hover:border-zenith-gold/40 transition-all duration-200 flex flex-col items-center justify-center space-y-1.5 focus:outline-none"
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <div className="flex items-center justify-center">
                              {button.icon}
                            </div>
                            <span className="text-zenith-text/90 text-[10px] font-medium">{button.label}</span>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Reflexo abaixo do smartphone - mais realista */}
                <div className="absolute w-4/5 h-6 bottom-[-28px] left-[10%] rounded-[100%] bg-zenith-gold/30 filter blur-md"></div>
                
                {/* Ponto de brilho realista no telefone */}
                <div className="absolute top-[15%] left-[15%] w-2 h-2 rounded-full bg-white/70 blur-[1px]"></div>
                <div className="absolute top-[22%] right-[25%] w-1 h-1 rounded-full bg-white/60 blur-[0.5px]"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom border effect */}
      <motion.div 
        className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-zenith-gold/30 via-zenith-gold/70 to-zenith-gold/30"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      ></motion.div>
      
      {/* Decorative dots - subtle detail */}
      <div className="absolute inset-0 pointer-events-none" style={{ 
        backgroundImage: 'radial-gradient(rgba(240, 218, 172, 0.05) 1px, transparent 1px)', 
        backgroundSize: '40px 40px' 
      }}></div>

      {/* CSS adicional para efeitos 3D no celular */}
      <style jsx global>{`
        .perspective-1200 {
          perspective: 1200px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .translate-z-1 {
          transform: translateZ(1px);
        }
        .translate-z-2 {
          transform: translateZ(2px);
        }
        .rotate-y-1 {
          transform: rotateY(1deg);
        }
        .rotate-x-3 {
          transform: rotateX(3deg);
        }
        .phone-3d-wrapper {
          transform: rotateY(-8deg) rotateX(5deg) rotateZ(-1deg);
          transition: transform 0.5s ease-in-out;
          will-change: transform;
        }
        .phone-3d-wrapper:hover {
          transform: rotateY(-2deg) rotateX(2deg) rotateZ(0deg);
        }
        @keyframes shimmer-slow {
          0% { transform: translateX(-150%) skewX(-12deg); }
          100% { transform: translateX(150%) skewX(-12deg); }
        }
        .animate-shimmer-slow {
          animation: shimmer-slow 8s ease-in-out infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Efeitos de texto premium */
        h1 {
          text-rendering: optimizeLegibility;
          letter-spacing: -0.02em;
        }
        h1 .text-zenith-gold {
          text-shadow: 0 0 10px rgba(240, 218, 172, 0.3);
        }
        
        /* Efeito de destaque para blocos de ouro */
        .bg-gradient-to-br.from-zenith-gold\/25 {
          background-blend-mode: overlay;
          backdrop-filter: blur(3px);
        }
        
        /* Animação para destaque de aprovação */
        @keyframes highlight-pulse {
          0%, 100% { 
            box-shadow: 0 0 0 0 rgba(74, 222, 128, 0);
          }
          50% { 
            box-shadow: 0 0 0 4px rgba(74, 222, 128, 0.3);
          }
        }
        
        .text-green-300 {
          text-shadow: 0 0 8px rgba(134, 239, 172, 0.2);
        }
        
        /* Efeito sutil nos cards */
        .motion-safe\:hover\:scale-105:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
          transition: all 0.2s ease;
        }
        
        /* Destaque da headline */
        @media (min-width: 1024px) {
          h1 .text-zenith-gold {
            background: linear-gradient(90deg, rgb(240, 218, 172) 0%, rgb(255, 239, 195) 50%, rgb(240, 218, 172) 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline;
          }
        }
        
        /* Efeito de hover nos botões */
        button:hover svg {
          filter: drop-shadow(0 0 4px rgba(240, 218, 172, 0.3));
          transition: filter 0.3s ease;
        }
        
        /* Efeito de foco para acessibilidade aprimorada */
        :focus-visible {
          outline: 2px solid rgba(240, 218, 172, 0.5);
          outline-offset: 2px;
          transition: outline-color 0.2s ease;
        }
      `}</style>
    </section>
  );
};

export default HeroSection; 