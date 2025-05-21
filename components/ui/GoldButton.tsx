import React, { ButtonHTMLAttributes } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GoldButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const GoldButton: React.FC<GoldButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  icon,
  iconPosition = 'right',
  ...rest
}) => {
  // Definição de classes base por variante
  const baseClasses = "font-bold transition-all focus:outline-none relative overflow-hidden group";
  
  // Classes variáveis de acordo com a variante
  const variantClasses = {
    primary: "bg-zenith-gradient text-zenith-primary shadow-gold border border-zenith-gold/30 hover:shadow-lg",
    secondary: "bg-transparent text-zenith-gold border-2 border-zenith-gold hover:bg-zenith-gold/10",
    outline: "bg-transparent text-zenith-gold border border-zenith-gold/50 hover:border-zenith-gold hover:bg-zenith-gold/5",
    ghost: "bg-transparent text-zenith-gold hover:bg-zenith-gold/10 border-none",
  };
  
  // Classes variáveis de acordo com o tamanho
  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded",
    md: "px-6 py-3 text-base rounded-md",
    lg: "px-8 py-4 text-lg rounded-md",
  };
  
  // Concatenação final de classes
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  // Efeito de brilho apenas para botões primários
  const ShineEffect = () => (
    variant === 'primary' ? (
      <span className="absolute inset-0 overflow-hidden">
        <motion.span 
          className="absolute top-0 -left-20 w-20 h-full transform -skew-x-20 bg-white/20 blur-sm"
          animate={{
            left: ['-20%', '120%']
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 2.5,
            ease: "easeInOut",
            repeatDelay: 1.5
          }}
        />
      </span>
    ) : null
  );
  
  // Separando as propriedades para evitar conflitos de tipos
  const buttonProps: HTMLMotionProps<"button"> = {
    className: buttonClasses,
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
    ...rest as any, // Usando 'any' como último recurso para resolver conflitos de tipo
  };
  
  return (
    <motion.button {...buttonProps}>
      <ShineEffect />
      <span className="relative z-10 flex items-center justify-center">
        {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
      </span>
    </motion.button>
  );
};

export default GoldButton; 