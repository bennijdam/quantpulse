import React from 'react';

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
}

export const Terminal: React.FC<TerminalProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-bloomberg-black text-bloomberg-amber font-mono p-4 border border-bloomberg-orange ${className}`}>
      {children}
    </div>
  );
};
