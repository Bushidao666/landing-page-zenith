import React from 'react';
import { motion } from 'framer-motion';

interface GoldHeadingProps {
  children: React.ReactNode;
  subtitle?: React.ReactNode;
  highlightWords?: string[];
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  align?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  decorative?: boolean;
}

const GoldHeading: React.FC<GoldHeadingProps> = ({
  children,
  subtitle,
  highlightWords = [],
  tag = 'h2',
  align = 'center',
  size = 'lg',
  className = '',
  decorative = true,
}) => {
  // Classes de alinhamento
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  // Classes de tamanho
  const sizeClasses = {
    sm: 'text-xl md:text-2xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-3xl md:text-4xl',
    xl: 'text-4xl md:text-5xl',
    '2xl': 'text-5xl md:text-6xl',
  };
  
  // Destaque das palavras específicas com cor dourada
  const highlightText = (text: string) => {
    if (highlightWords.length === 0) return text;
    
    let result = text;
    highlightWords.forEach(word => {
      // Criamos um regex que considera espaços e pontuação ao redor da palavra
      const regex = new RegExp(`(${word})`, 'gi');
      result = result.replace(regex, `<span class="text-zenith-gold">$1</span>`);
    });
    
    return result;
  };
  
  // Definir o elemento de título com base na prop tag
  const HeadingTag = tag as keyof JSX.IntrinsicElements;
  
  return (
    <div className={`mb-8 ${alignClasses[align]}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {highlightWords.length > 0 ? (
          <HeadingTag 
            className={`font-bold font-secondary text-zenith-secondary leading-tight ${sizeClasses[size]} ${className}`}
            dangerouslySetInnerHTML={{ __html: highlightText(children as string) }}
          />
        ) : (
          <HeadingTag 
            className={`font-bold font-secondary text-zenith-secondary leading-tight ${sizeClasses[size]} ${className}`}
          >
            {children}
          </HeadingTag>
        )}
        
        {subtitle && (
          <motion.p 
            className="text-zenith-text text-lg mt-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
      
      {/* Decoração optional (linha dourada) */}
      {decorative && align === 'center' && (
        <motion.div 
          className="flex justify-center items-center mt-6"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="h-px w-12 bg-zenith-gold/30"></div>
          <div className="h-1 w-16 mx-2 rounded-full bg-zenith-gradient"></div>
          <div className="h-px w-12 bg-zenith-gold/30"></div>
        </motion.div>
      )}
      
      {/* Decoração para alinhamento à esquerda ou direita */}
      {decorative && align !== 'center' && (
        <motion.div 
          className={`flex ${align === 'left' ? 'justify-start' : 'justify-end'} mt-4`}
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="h-1 w-24 rounded-full bg-zenith-gradient"></div>
        </motion.div>
      )}
    </div>
  );
};

export default GoldHeading; 