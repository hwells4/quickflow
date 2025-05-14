import React from 'react';
import { cn } from '@/src/lib/utils';

interface DepthCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  elevation?: 'low' | 'medium' | 'high' | 'floating';
  children: React.ReactNode;
}

const DepthCard: React.FC<DepthCardProps> = ({
  className,
  elevation = 'medium',
  children,
  ...props
}) => {
  // Shadow styles based on elevation
  const shadowStyles = {
    low: 'shadow-[0_1px_2px_rgba(0,0,0,0.04),0_3px_6px_rgba(0,0,0,0.05)]',
    medium: 'shadow-[0_5px_15px_rgba(0,0,0,0.06),0_3px_6px_rgba(0,0,0,0.02)]',
    high: 'shadow-[0_10px_25px_rgba(0,0,0,0.06),0_8px_15px_rgba(0,0,0,0.03)]',
    floating: 'shadow-[0_20px_50px_rgba(0,0,0,0.12),0_10px_20px_rgba(0,0,0,0.05)]',
  };

  return (
    <div 
      className={cn(
        'rounded-lg bg-white p-6 transition-all duration-300', 
        shadowStyles[elevation],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default DepthCard; 