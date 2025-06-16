import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Componente otimizado com princípios de neuromarketing
const FinancialImpactSection = () => {
  // Dados do impacto financeiro com ícones mais sofisticados
  const financialImpact = [
    {
      title: 'Economia imediata em taxas',
      value: 'R$2.500/mês',
      benefit: 'Dinheiro que fica no seu bolso instantaneamente',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Vendas adicionais por melhor aprovação',
      value: 'R$7.500/mês',
      benefit: 'Mais clientes satisfeitos, mais faturamento',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Crescimento por reinvestimento imediato',
      value: 'R$10.000/mês',
      benefit: 'Escale seu negócio com capital que estava travado',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: 'Campanhas não interrompidas',
      value: 'Valor inestimável',
      benefit: 'Elimine o risco de perder vendas por bloqueios',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  // Variantes de animação refinadas
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
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };
  
  // Valores para gráfico 
  const chartData = [
    { label: 'Economia em Taxas', value: 'R$2.500/mês', height: 96, color: 'bg-gradient-to-t from-[#4299E1] to-[#4299E1]/20' },
    { label: 'Melhor Aprovação', value: 'R$7.500/mês', height: 173, color: 'bg-gradient-to-t from-[#319795] to-[#319795]/20' },
    { label: 'Crescimento', value: 'R$10.000/mês', height: 240, color: 'bg-gradient-to-t from-[#38A169] to-[#38A169]/20' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0c0c0c] to-zenith-primary relative overflow-hidden">
      {/* Elementos decorativos de fundo aprimorados */}
      <div className="absolute top-0 left-0 w-full h-px bg-zenith-gold/20"></div>
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-zenith-gold/5 filter blur-[100px]"></div>
      <div className="absolute -bottom-40 -right-20 w-96 h-96 rounded-full bg-zenith-gold/10 filter blur-[100px]"></div>
      <div className="absolute opacity-20 top-40 right-10 w-64 h-64 rounded-full border border-zenith-gold/30 animate-spin-slow"></div>
      <div className="absolute opacity-10 bottom-20 left-10 w-32 h-32 rounded-full border border-zenith-gold/30 animate-spin-slow"></div>
      
      {/* Efeito de partículas douradas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute w-1 h-1 rounded-full bg-zenith-gold/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 2,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* Cabeçalho centralizado */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm uppercase tracking-[0.25em] py-1.5 px-6 rounded-full bg-zenith-gold/10 text-zenith-gold font-medium border border-zenith-gold/20 shadow-gold">
              Impacto financeiro real
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-zenith-secondary mb-6 font-secondary tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="block mb-2 opacity-90">QUANTO ISSO SIGNIFICA EM</span>
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-zenith-gradient font-black px-1">
                DINHEIRO REAL?
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-zenith-gradient"></span>
              <span className="absolute -inset-1 bg-zenith-gold/5 blur-sm rounded-lg -z-10"></span>
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-zenith-text text-lg md:text-xl max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Para um infoprodutor faturando <span className="text-zenith-secondary font-medium">R$50K/mês</span> que sofre com taxas abusivas:
          </motion.p>
        </div>
        
        {/* Layout redesenhado - Grid centralizado */}
        <div className="flex flex-col items-center mb-20">
          {/* Gráfico centralizado */}
          <motion.div
            className="mb-12 md:mb-16 w-full max-w-full md:max-w-[95%] lg:max-w-5xl px-2 sm:px-4 mx-auto" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-center text-xs sm:text-sm md:text-base text-zenith-text mb-2 md:mb-4">
              <span className="text-zenith-gold">Impacto Financeiro Mensal</span> para um negócio de R$50K/mês
            </h4>
            <div className="h-[22rem] sm:h-96 md:h-[28rem] flex items-end justify-evenly p-4 sm:p-6 pb-12 sm:pb-16 bg-black/60 backdrop-blur-sm rounded-xl border border-zenith-gold/20 shadow-gold relative">
              {/* Linhas de grade horizontais com valores */}
              <div className="absolute inset-0 flex flex-col justify-between py-14 sm:py-16 px-3 sm:px-4 pointer-events-none">
                <div className="w-full h-px bg-zenith-text/10 relative">
                  <span className="absolute -top-5 left-2 text-[9px] sm:text-xs text-zenith-text/50">R$20K</span>
                </div>
                <div className="w-full h-px bg-zenith-text/10 relative">
                  <span className="absolute -top-5 left-2 text-[9px] sm:text-xs text-zenith-text/50">R$15K</span>
                </div>
                <div className="w-full h-px bg-zenith-text/10 relative">
                  <span className="absolute -top-5 left-2 text-[9px] sm:text-xs text-zenith-text/50">R$10K</span>
                </div>
                <div className="w-full h-px bg-zenith-text/10 relative">
                  <span className="absolute -top-5 left-2 text-[9px] sm:text-xs text-zenith-text/50">R$5K</span>
                </div>
                <div className="w-full h-px bg-zenith-text/10 relative">
                  <span className="absolute -top-5 left-2 text-[9px] sm:text-xs text-zenith-text/50">R$0</span>
                </div>
              </div>
              
              {/* Legenda integrada ao gráfico - posicionada à esquerda mas sem sobrepor os valores do eixo Y */}
              <div className="hidden sm:block absolute left-10 sm:left-20 md:left-24 top-4 md:top-6 text-left p-1 sm:p-2 md:p-3 bg-black/60 backdrop-blur-sm rounded-lg border border-zenith-gold/10 shadow-lg z-20">
                <h5 className="text-[9px] sm:text-[10px] md:text-xs text-zenith-gold font-medium mb-1 sm:mb-2 uppercase tracking-wider">Legenda</h5>
                {chartData.map((item, index) => (
                  <div key={index} className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                    <div 
                      className={`w-2 h-2 sm:w-4 sm:h-4 rounded-full ${
                        index === 0 ? 'bg-[#4299E1]' : 
                        index === 1 ? 'bg-[#319795]' : 
                        'bg-[#38A169]'
                      }`}
                    ></div>
                    <span className="text-[8px] sm:text-xs text-zenith-text">{item.label}: <span className="text-zenith-secondary font-medium">{item.value}</span></span>
                  </div>
                ))}
                <p className="text-[7px] sm:text-xs text-zenith-text/70 mt-1 max-w-[120px] sm:max-w-[150px]">
                  Percentuais indicam impacto no faturamento mensal
                </p>
              </div>
              
              {/* Gráfico de barras animado com efeitos visuais - com barras 15% mais estreitas e maior espaçamento */}
              <div className="flex items-end justify-center gap-8 md:gap-16 lg:gap-36 h-full w-full sm:w-[85%]">
                {chartData.map((bar, index) => (
                  <div key={index} className="relative z-10">
                    <motion.div 
                      className={`w-12 sm:w-16 md:w-20 lg:w-24 ${bar.color} rounded-t-lg relative group cursor-pointer overflow-hidden shadow-lg`}
                      initial={{ height: 0 }}
                      whileInView={{ height: bar.height * 1.2 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 + (index * 0.2) }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {/* Efeito de brilho na borda superior */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-white/30 rounded-t-lg"></div>
                      
                      <motion.div 
                        className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"
                        animate={{ backgroundPosition: ['0% 0%', '100% 0%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      />
                      
                      {/* Valor monetário integrado à barra */}
                      <div className="absolute inset-x-0 top-3 text-center text-[10px] sm:text-sm font-semibold text-white/90">
                        {bar.value}
                      </div>
                      
                      {/* Valor percentual dentro da barra */}
                      <div className="absolute inset-x-0 bottom-3 text-center">
                        <span className="px-2 py-1 bg-black/40 backdrop-blur-sm rounded text-[10px] sm:text-xs font-medium text-white">
                          {index === 0 ? '+5%' : index === 1 ? '+15%' : '+20%'}
                        </span>
                      </div>
                    </motion.div>
                    
                    {/* Rótulo abaixo da barra */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center w-24 sm:w-28">
                      <p className="text-[10px] sm:text-xs text-zenith-text/90 font-medium">
                        {bar.label === 'Melhor Aprovação' ? (
                          <>
                            Melhor
                            <br />
                            Aprovação
                          </>
                        ) : (
                          bar.label
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Legenda para mobile */}
            <div className="sm:hidden mt-6 w-full p-4 bg-black/60 backdrop-blur-sm rounded-xl border border-zenith-gold/20 shadow-gold">
                <h5 className="text-xs text-zenith-gold font-medium mb-3 uppercase tracking-wider text-center">Legenda</h5>
                <div className="space-y-2">
                    {chartData.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 justify-center">
                            <div
                                className={`w-3 h-3 rounded-full ${
                                    index === 0 ? 'bg-[#4299E1]' :
                                    index === 1 ? 'bg-[#319795]' :
                                    'bg-[#38A169]'
                                }`}
                            ></div>
                            <span className="text-xs text-zenith-text">{item.label}: <span className="text-zenith-secondary font-medium">{item.value}</span></span>
                        </div>
                    ))}
                </div>
                <p className="text-[10px] text-zenith-text/70 mt-3 text-center max-w-xs mx-auto">
                    Percentuais indicam impacto no faturamento mensal
                </p>
            </div>
            
            {/* Resumo do impacto total - abaixo do gráfico - DESTACADO PARA MAIOR IMPACTO VISUAL */}
            <motion.div 
              className="mt-6 py-4 px-6 border-t border-zenith-gold/20 text-center max-w-full w-full bg-black/30 rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                <span className="text-zenith-text text-sm sm:text-base md:text-lg">Impacto financeiro mensal total:</span>
                <span className="text-zenith-gold font-bold text-2xl sm:text-3xl md:text-4xl">R$20.000/mês</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Seta visual para conectar o gráfico aos itens abaixo */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <svg className="w-8 h-8 text-zenith-gold/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
          
          {/* Lista de impactos financeiros em grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 max-w-4xl w-full px-2 sm:px-0">
            {financialImpact.map((impact, index) => (
              <motion.div 
                key={index}
                className="relative flex items-start bg-black/60 backdrop-blur-sm p-6 rounded-xl border border-zenith-gold/20 shadow-gold hover:border-zenith-gold/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Indicador numérico para reforçar sequência */}
                <div className="absolute -left-2 -top-2 w-6 h-6 rounded-full bg-zenith-gold/20 border border-zenith-gold/30 flex items-center justify-center text-xs font-bold text-zenith-gold">
                  {index + 1}
                </div>
                
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-zenith-gold/20 to-zenith-gold/5 border border-zenith-gold/30 flex items-center justify-center mr-5 text-zenith-gold shadow-gold">
                  {impact.icon}
                </div>
                <div>
                  <h3 className="text-zenith-secondary font-medium text-lg mb-1">{impact.title}</h3>
                  <p className="text-zenith-gold text-2xl font-bold mb-1 flex items-center">
                    {impact.value}
                    {/* Indicador visual de ganho */}
                    {index < 3 && (
                      <span className="ml-2 text-xs bg-zenith-success/20 text-zenith-success py-0.5 px-2 rounded-full flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                        </svg>
                        Ganho direto
                      </span>
                    )}
                  </p>
                  <p className="text-zenith-text text-sm">{impact.benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Seta visual para conduzir ao CTA */}
        <motion.div
          className="flex justify-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-zenith-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
        
        {/* Total anual e CTA com maior impacto visual */}
        <motion.div 
          className="max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto relative px-3 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {/* Efeito de destaque com glow */}
          <div className="absolute inset-0 bg-zenith-gold/5 rounded-2xl blur-xl transform scale-105"></div>
          
          <div className="relative bg-gradient-to-br from-black via-black/95 to-black/90 p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl border border-zenith-gold/30 shadow-gold text-center overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zenith-gold/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zenith-gold/50 to-transparent"></div>
            
            {/* Ícone de destaque para valor total */}
            <div className="inline-block mb-3 sm:mb-4 p-2 sm:p-3 rounded-full bg-zenith-gold/10 border border-zenith-gold/20">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-zenith-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            
            <motion.div 
              className="mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h4 className="text-xs sm:text-sm uppercase tracking-wider text-zenith-text/80 mb-1 sm:mb-2">Potencial de recuperação</h4>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-zenith-secondary">
                Total anual recuperado: <span className="text-transparent bg-clip-text bg-zenith-gradient font-black relative">
                  R$240.000
                  {/* Destaque sutil no valor principal */}
                  <span className="absolute -inset-1 bg-zenith-gold/5 rounded-lg blur-md -z-10"></span>
                </span>
              </h3>
            </motion.div>
            
            <motion.p 
              className="text-zenith-text text-sm sm:text-base md:text-lg mb-5 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              O suficiente para <span className="text-zenith-gold font-medium">triplicar seu investimento em tráfego</span> ou finalmente tirar aquelas férias que você vem adiando há tanto tempo.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="relative z-10"
            >
              {/* Elemento de destaque para CTA - Aumenta urgência */}
              <div className="absolute -inset-2 rounded-md opacity-10 bg-zenith-gold/20 blur-md -z-10"></div>
              
              <motion.button
                className="relative group px-8 sm:px-10 py-4 sm:py-5 rounded-md overflow-hidden font-bold text-base sm:text-lg md:text-xl shadow-gold transform transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Fundo com efeito de gradiente animado */}
                <span className="absolute inset-0 bg-zenith-gradient transform group-hover:scale-105 transition-transform duration-500"></span>
                
                {/* Efeito de brilho ao hover */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/10 transition-opacity duration-300"></span>
                
                {/* Efeito de pulsação para aumentar urgência */}
                <span className="absolute inset-0 animate-pulse-gold rounded-md opacity-30"></span>
                
                {/* Texto com sombra sutil */}
                <span className="relative text-zenith-primary drop-shadow-sm tracking-wide">
                  QUERO RECUPERAR MEU DINHEIRO
                </span>
              </motion.button>
              
              {/* Texto de suporte abaixo do botão para criar urgência e scarcity */}
              <div className="mt-3 sm:mt-4 flex flex-col items-center justify-center space-y-1">
                <p className="text-zenith-text/80 text-xs sm:text-sm font-medium">
                  *Implementação rápida, resultados a partir do primeiro mês
                </p>
                <p className="text-zenith-gold/90 text-[9px] sm:text-xs">
                  Vagas limitadas para implementação prioritária
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Indicador de segurança para aumentar confiança */}
          <motion.div 
            className="mt-3 sm:mt-4 flex items-center justify-center gap-1 sm:gap-2 text-[9px] sm:text-xs text-zenith-text/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.8 }}
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            <span>Plataforma 100% segura | Seus dados estão protegidos</span>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Elemento decorativo inferior com animação */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-zenith-gradient overflow-hidden">
        <motion.div 
          className="h-full w-20 bg-white/40"
          animate={{ 
            x: ['0%', '100%'],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default FinancialImpactSection; 