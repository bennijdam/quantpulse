import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', title }) => {
  return (
    <div className={`bg-gray-900 border border-bloomberg-orange p-4 ${className}`}>
      {title && <h3 className="text-bloomberg-amber font-bold mb-2 font-mono">{title}</h3>}
      <div className="text-white">{children}</div>
    </div>
  );
};
