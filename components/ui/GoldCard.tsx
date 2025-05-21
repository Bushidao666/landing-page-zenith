import React from 'react';
import { motion } from 'framer-motion';

interface GoldCardProps {
  title?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  imageUrl?: string;
  variant?: 'standard' | 'premium' | 'dark' | 'gradient';
  className?: string;
  hoverEffect?: boolean;
}

const GoldCard: React.FC<GoldCardProps> = ({
  title,
  children,
  icon,
  imageUrl,
  variant = 'standard',
  className = '',
  hoverEffect = true,
}) => {
  // Variantes de estilo do card
  const variantClasses = {
    standard: "bg-zenith-primary border border-zenith-gold/30",
    premium: "bg-gradient-to-b from-zenith-gold/20 to-zenith-gold/5 border border-zenith-gold/50",
    dark: "bg-black border border-zenith-gold/30",
    gradient: "bg-gradient-to-b from-zenith-primary to-black border border-zenith-gold/40",
  };
  
  // Animação do card
  const motionProps = hoverEffect ? {
    whileHover: { 
      y: -5, 
      boxShadow: '0 15px 30px rgba(240, 218, 172, 0.2)',
      borderColor: 'rgba(240, 218, 172, 0.6)'
    },
    transition: { duration: 0.3 }
  } : {};
  
  return (
    <motion.div 
      className={`rounded-lg shadow-gold overflow-hidden ${variantClasses[variant]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...motionProps}
    >
      {/* Imagem de cabeçalho, se fornecida */}
      {imageUrl && (
        <div className="w-full h-48 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          {/* Overlay gradiente para melhor contraste */}
          <div className="absolute inset-0 bg-gradient-to-t from-zenith-primary to-transparent opacity-70"></div>
        </div>
      )}
      
      <div className="p-6">
        {/* Cabeçalho com título e ícone */}
        {(title || icon) && (
          <div className="flex items-center mb-4">
            {icon && (
              <div className="w-10 h-10 rounded-full bg-zenith-gold/10 flex items-center justify-center mr-3 text-zenith-gold">
                {icon}
              </div>
            )}
            {title && (
              <h3 className="text-xl font-bold text-zenith-secondary">
                {title}
              </h3>
            )}
          </div>
        )}
        
        {/* Conteúdo principal */}
        <div className="text-zenith-text">
          {children}
        </div>
      </div>
      
      {/* Borda decorativa dourada na parte inferior */}
      <div className="h-1 w-full bg-zenith-gradient"></div>
      
      {/* Efeito de brilho no canto */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-10 h-10 bg-zenith-gold/10 transform rotate-45 -translate-y-1/2 translate-x-1/2"></div>
      </div>
    </motion.div>
  );
};

export default GoldCard; 