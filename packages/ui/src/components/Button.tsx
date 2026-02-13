import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary' 
}) => {
  const baseClasses = 'px-4 py-2 font-mono font-bold transition-colors';
  const variantClasses = variant === 'primary' 
    ? 'bg-bloomberg-orange hover:bg-bloomberg-amber text-black'
    : 'bg-gray-800 hover:bg-gray-700 text-bloomberg-amber border border-bloomberg-orange';
  
  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
};
