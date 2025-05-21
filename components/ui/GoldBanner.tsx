import React from 'react';
import { motion } from 'framer-motion';

interface GoldBannerProps {
  title?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'standard' | 'gradient' | 'outlined';
  className?: string;
}

const GoldBanner: React.FC<GoldBannerProps> = ({
  title,
  children,
  icon,
  variant = 'standard',
  className = '',
}) => {
  // Variantes de estilo do banner
  const variantClasses = {
    standard: "bg-zenith-gold/10 border border-zenith-gold/30",
    gradient: "bg-gradient-to-r from-zenith-gold/10 to-zenith-gold/20 border border-zenith-gold/30",
    outlined: "bg-transparent border-2 border-zenith-gold/50",
  };
  
  return (
    <motion.div 
      className={`p-6 rounded-lg shadow-gold ${variantClasses[variant]} ${className}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* Cabeçalho com título e ícone, se fornecidos */}
      {(title || icon) && (
        <div className="flex items-center mb-3">
          {icon && (
            <div className="w-8 h-8 rounded-full bg-zenith-gold/20 flex items-center justify-center mr-3 text-zenith-gold">
              {icon}
            </div>
          )}
          {title && (
            <h4 className="text-zenith-gold font-bold text-lg">{title}</h4>
          )}
        </div>
      )}
      
      {/* Conteúdo principal */}
      <div className="text-zenith-secondary">
        {children}
      </div>
      
      {/* Efeito de brilho sutil no canto */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-lg pointer-events-none">
        <div className="absolute top-0 right-0 w-8 h-8 bg-zenith-gold/20 transform -translate-y-1/2 translate-x-1/2 rotate-45"></div>
      </div>
    </motion.div>
  );
};

export default GoldBanner; 