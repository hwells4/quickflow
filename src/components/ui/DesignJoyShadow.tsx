import React from 'react';
import { cn } from '@/src/lib/utils';

interface DesignJoyShadowProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: 'subtle' | 'medium' | 'elevated' | 'floating';
  borderVisible?: boolean;
  children: React.ReactNode;
}

/**
 * DesignJoyShadow component reproduces the sophisticated shadow technique from DesignJoy.co
 * featuring multiple shadow layers with different offsets, blur radii, and colors.
 * The effect creates a perception of depth and subtle elevation.
 */
const DesignJoyShadow: React.FC<DesignJoyShadowProps> = ({
  className,
  variant = 'medium',
  borderVisible = true,
  children,
  ...props
}) => {
  // DesignJoy uses a sophisticated multi-layered shadow approach
  // These combined shadows create the depth perception effect
  const shadowVariants = {
    subtle: 'shadow-[0_2px_6px_rgba(15,23,42,0.04),0_1px_3px_rgba(15,23,42,0.02)]',
    medium: 'shadow-[0_8px_40px_rgba(15,23,42,0.08),0_12px_28px_rgba(15,23,42,0.06),0_2px_4px_rgba(15,23,42,0.01)]',
    elevated: 'shadow-[0_16px_50px_rgba(15,23,42,0.12),0_24px_60px_rgba(15,23,42,0.06),0_2px_8px_rgba(15,23,42,0.04)]',
    floating: 'shadow-[0_25px_80px_rgba(15,23,42,0.18),0_40px_90px_rgba(15,23,42,0.1),0_5px_10px_rgba(15,23,42,0.06)]',
  };

  // Border visibility with minimal opacity for subtle definition
  const borderStyles = borderVisible ? 'border border-gray-100' : '';

  return (
    <div 
      className={cn(
        'rounded-xl bg-white p-6 transition-all duration-300',
        shadowVariants[variant],
        borderStyles, 
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default DesignJoyShadow; 