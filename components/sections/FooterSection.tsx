import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Animações refinadas para maior impacto visual
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const shimmerVariant = {
  initial: { x: -200, opacity: 0 },
  animate: { 
    x: 200, 
    opacity: [0, 1, 0],
    transition: { 
      repeat: Infinity, 
      duration: 3,
      ease: "easeInOut" 
    }
  }
};

const glowPulse = {
  initial: { boxShadow: '0 0 0 0 rgba(181, 164, 114, 0)' },
  animate: { 
    boxShadow: ['0 0 0 0 rgba(181, 164, 114, 0)', '0 0 15px 5px rgba(181, 164, 114, 0.3)', '0 0 0 0 rgba(181, 164, 114, 0)'],
    transition: { 
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" 
    }
  }
};

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pt-24 pb-28 bg-zenith-primary relative overflow-hidden">
      {/* Elementos decorativos de fundo simplificados */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent opacity-80"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/30 to-transparent opacity-80"></div>
      
      {/* Padrão decorativo diagonal sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(181,164,114,0.03)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
      
      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-24"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Coluna principal - CTA e texto */}
          <motion.div
            className="md:col-span-6 lg:col-span-7"
            variants={fadeInUp}
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-12 bg-zenith-gradient rounded-full"></div>
              <h3 className="text-3xl font-bold text-zenith-secondary mb-5 font-secondary leading-tight">
                Cada dia com seu dinheiro <span className="relative inline-block">
                  <span className="relative z-10 text-zenith-gold">preso</span>
                  <span className="absolute bottom-1 left-0 w-full h-[5px] bg-zenith-gold/20 rounded-sm -z-0"></span>
                </span> é um dia de 
                <span className="block mt-1">crescimento <span className="relative inline-block">
                  <span className="relative z-10 text-zenith-gold">perdido</span>
                  <span className="absolute bottom-1 left-0 w-full h-[5px] bg-zenith-gold/20 rounded-sm -z-0"></span>
                </span></span>
              </h3>
              
              <p className="text-zenith-text text-lg mb-10 leading-relaxed max-w-xl">
                <span className="text-zenith-secondary font-medium">Seu negócio não pode esperar.</span> Cada dia que você passa com seu dinheiro preso por 7-14 dias é um dia de oportunidades desperdiçadas. Transforme espera em crescimento.
              </p>
              
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button className="relative px-10 py-5 rounded-md bg-zenith-gradient font-bold text-zenith-primary text-lg transition-all shadow-gold group-hover:shadow-lg overflow-hidden">
                  {/* Efeito de brilho no hover */}
                  <motion.span 
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%', opacity: 0 }}
                    whileHover={{ x: '100%', opacity: 0.3 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  <span className="relative z-10 tracking-wider">COMEÇAR AGORA</span>
                  
                  {/* Ícone de seta */}
                  <span className="ml-2 relative z-10 inline-block group-hover:translate-x-1 transition-transform">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
              </motion.div>

              {/* Social Proof - Subtil mas poderoso elemento de neuromarketing */}
              <motion.div 
                className="mt-8 flex items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-zenith-primary bg-gradient-to-br ${
                      i % 4 === 1 ? 'from-blue-400 to-blue-600' :
                      i % 4 === 2 ? 'from-amber-400 to-orange-600' :
                      i % 4 === 3 ? 'from-emerald-400 to-emerald-600' :
                      'from-violet-400 to-violet-600'
                    }`}></div>
                  ))}
                </div>
                <span className="text-sm text-zenith-text">
                  <span className="text-zenith-gold font-semibold">+1.200</span> empresas já <span className="text-zenith-secondary">transformaram</span> suas finanças
                </span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Logo e contato */}
          <motion.div
            className="md:col-span-6 lg:col-span-5 flex flex-col lg:items-end"
            variants={fadeInUp}
          >
            <div className="mb-8">
              <div className="relative inline-block">
                {/* Logo */}
                <div className="bg-zenith-gradient p-0.5 rounded-lg">
                  <div className="bg-zenith-primary rounded-lg p-4">
                    <h2 className="text-3xl font-bold text-zenith-gold">
                      ZENITH<span className="text-zenith-secondary text-sm align-top ml-1">PAY</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Informações de contato */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-zenith-gold/10 text-zenith-gold">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92893C18.1425 4.00043 17.04 3.26381 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2C10.6868 2 9.38647 2.25866 8.1731 2.7612C6.95996 3.26381 5.85742 4.00043 4.92893 4.92893C3.26633 6.59153 2.25 8.88552 2.06088 11.3862C2.02182 11.9039 2 12.3911 2 13M2 13V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H6.5C7.03043 22 7.53914 21.7893 7.91421 21.4142C8.28929 21.0391 8.5 20.5304 8.5 20V16.5C8.5 15.9696 8.28929 15.4609 7.91421 15.0858C7.53914 14.7107 7.03043 14.5 6.5 14.5H4C3.46957 14.5 2.96086 14.7107 2.58579 15.0858C2.21071 15.4609 2 15.9696 2 16.5V13ZM22 13V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.5 8.5H16.5M16.5 8.5H19.5M16.5 8.5V5.5M16.5 8.5V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-zenith-text text-sm">Email:</p>
                  <a href="mailto:contato@zenithpay.com.br" className="text-zenith-secondary hover:text-zenith-gold transition-colors">contato@zenithpay.com.br</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-zenith-gold/10 text-zenith-gold">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.9995 19.1864V16.4767C21.0105 16.0337 20.8571 15.6021 20.5709 15.264C19.6335 14.3106 16.7322 13.9863 15.2755 14.0343C13.8187 14.0822 10.9175 14.3882 9.98005 15.3416C9.69389 15.6797 9.54046 16.1113 9.55147 16.5544V19.1864M20.9995 19.1864C20.9995 19.9777 20.3606 20.6226 19.5764 20.6226H10.9746C10.1904 20.6226 9.55147 19.9777 9.55147 19.1864M20.9995 19.1864C21.5495 19.1864 21.9995 18.7337 21.9995 18.1805V17.549C21.9995 16.9959 21.5495 16.5431 20.9995 16.5431M9.55147 19.1864C9.00147 19.1864 8.55151 18.7337 8.55151 18.1805V17.549C8.55151 16.9959 9.00147 16.5431 9.55147 16.5431M20.9995 16.5431H9.55147" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.2739 14.0341V9.77057M15.2739 9.77057C15.2739 8.75821 15.2739 7.74322 15.2739 7.24851C15.2739 4.75238 13.2675 2.73041 10.7809 2.73041C8.29432 2.73041 6.28799 4.75238 6.28799 7.24851C6.28799 8.17723 6.28799 10.0334 6.28799 12M15.2739 9.77057H17.8883M12.6596 9.77057H6.28799M3.67358 12H8.90233" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-zenith-text text-sm">Telefone:</p>
                  <a href="tel:+551130000000" className="text-zenith-secondary hover:text-zenith-gold transition-colors">+55 (11) 3000-0000</a>
                </div>
              </div>
            </div>
            
            {/* Selos de segurança */}
            <div className="flex flex-wrap gap-4 items-center justify-start lg:justify-end">
              <div className="p-2 bg-black/20 rounded-md backdrop-blur-sm border border-zenith-gold/10">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zenith-gold/70">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="p-2 bg-black/20 rounded-md backdrop-blur-sm border border-zenith-gold/10">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zenith-gold/70">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="p-2 bg-black/20 rounded-md backdrop-blur-sm border border-zenith-gold/10">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zenith-gold/70">
                  <path d="M16.5 10.5V6.5C16.5 5.04131 15.9205 3.64236 14.8891 2.61091C13.8576 1.57946 12.4587 1 11 1C9.54131 1 8.14236 1.57946 7.11091 2.61091C6.07946 3.64236 5.5 5.04131 5.5 6.5V10.5M16.5 10.5C17.1345 10.5 17.7432 10.7371 18.1945 11.1591C18.6458 11.581 18.9217 12.1614 18.9775 12.7833L19.5 18.5C19.5193 18.6728 19.5093 18.8484 19.4702 19.0171C19.4312 19.1859 19.364 19.345 19.2722 19.4868C19.1805 19.6287 19.0658 19.7509 18.9342 19.8469C18.8026 19.9429 18.6564 20.0108 18.5025 20.0467C18.3486 20.0826 18.1901 20.0858 18.0348 20.0561C17.8796 20.0264 17.7315 19.9644 17.5979 19.8729C17.4643 19.7814 17.348 19.6623 17.2563 19.5229C17.1647 19.3835 17.0992 19.2265 17.0633 19.0617L16.5333 15.5H5.46667L4.93667 19.0617C4.90083 19.2265 4.83533 19.3835 4.74367 19.5229C4.652 19.6623 4.53566 19.7814 4.40207 19.8729C4.26847 19.9644 4.12044 20.0264 3.96515 20.0561C3.80986 20.0858 3.65136 20.0826 3.49748 20.0467C3.34361 20.0108 3.19743 19.9429 3.06582 19.8469C2.93421 19.7509 2.81952 19.6287 2.72776 19.4868C2.63601 19.345 2.56878 19.1859 2.52979 19.0171C2.4908 18.8484 2.48071 18.6728 2.5 18.5L3.02167 12.7833C3.07749 12.1614 3.35415 11.581 3.80546 11.1591C4.25677 10.7371 4.86546 10.5 5.5 10.5M16.5 10.5H5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Divisor simples */}
        <div className="w-full h-px bg-zenith-gold/20 my-12"></div>
        
        {/* Links footer e copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <motion.div 
            className="flex flex-wrap gap-x-8 gap-y-4 justify-center md:justify-start mb-8 md:mb-0"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {['Termos e Condições', 'Política de Privacidade', 'Suporte'].map((link, i) => (
              <motion.a
                key={i}
                href="#"
                className="text-zenith-text hover:text-zenith-gold transition-colors relative group"
                variants={fadeInUp}
              >
                {link}
                <span className="absolute left-0 bottom-0 w-0 h-px bg-zenith-gold group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-zenith-text text-sm"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            &copy; {currentYear} Zenith Pay. Todos os direitos reservados.
          </motion.div>
        </div>
      </div>
      
      {/* Logo Zenith na base com design simplificado */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <div className="bg-black/40 backdrop-blur-md border border-zenith-gold/20 rounded-full py-2.5 px-6 text-zenith-gold/90 text-xs md:text-sm font-medium tracking-widest flex items-center">
            <span className="mr-2.5 transform -translate-y-px">
              <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 12L10 15L17 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="font-semibold mr-1">ZENITH</span>
            <span>PAY</span>
            <span className="mx-2 text-zenith-gold/50">•</span>
            <span className="hidden sm:inline text-zenith-gold/80">SISTEMA PREMIUM DE PAGAMENTOS</span>
            <span className="sm:hidden text-zenith-gold/80">PAGAMENTOS PREMIUM</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection; 