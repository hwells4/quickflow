import React from 'react';
import { cn } from '@/src/lib/utils';

interface DepthShadowBackgroundProps {
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
  tertiaryColor?: string;
  intensity?: 'subtle' | 'medium' | 'strong';
  pattern?: 'corners' | 'sides' | 'top' | 'center';
}

export const DepthShadowBackground: React.FC<DepthShadowBackgroundProps> = ({
  className,
  primaryColor = '#8b5cf6', // Violet color
  secondaryColor = '#ec4899', // Pink color
  tertiaryColor = '#3b82f6', // Blue color
  intensity = 'medium',
  pattern = 'corners',
}) => {
  const getBaseOpacity = () => {
    switch (intensity) {
      case 'subtle': return 0.2;
      case 'strong': return 0.45;
      case 'medium':
      default: return 0.3;
    }
  };

  const baseOpacity = getBaseOpacity();
  const positions = getPositions(pattern);

  return (
    <div className={cn('absolute inset-0 overflow-hidden z-0', className)}>
      {/* Primary shadow */}
      <div 
        style={{
          position: 'absolute',
          width: `${positions[0].size}px`,
          height: `${positions[0].size}px`,
          top: positions[0].top,
          left: positions[0].left,
          right: positions[0].right,
          borderRadius: '100%',
          background: primaryColor,
          opacity: baseOpacity,
          filter: 'blur(80px)', // Slightly reduced blur
          mixBlendMode: 'screen', // Changed from multiply
        }}
      />
      
      {/* Secondary shadow */}
      <div 
        style={{
          position: 'absolute',
          width: `${positions[1].size}px`,
          height: `${positions[1].size}px`,
          top: positions[1].top,
          left: positions[1].left,
          right: positions[1].right,
          borderRadius: '100%',
          background: secondaryColor,
          opacity: baseOpacity * 0.8,
          filter: 'blur(90px)', // Slightly reduced blur
          mixBlendMode: 'screen', // Changed from multiply
        }}
      />
      
      {/* Tertiary shadow */}
      <div 
        style={{
          position: 'absolute',
          width: `${positions[2].size}px`,
          height: `${positions[2].size}px`,
          top: positions[2].top,
          left: positions[2].left,
          right: positions[2].right,
          bottom: positions[2].bottom,
          borderRadius: '100%',
          background: tertiaryColor,
          opacity: baseOpacity * 0.7,
          filter: 'blur(70px)', // Slightly reduced blur
          mixBlendMode: 'screen', // Changed from multiply
        }}
      />
      
      {/* Fourth shadow */}
      <div 
        style={{
          position: 'absolute',
          width: `${positions[3].size}px`,
          height: `${positions[3].size}px`,
          top: positions[3].top,
          left: positions[3].left,
          right: positions[3].right,
          bottom: positions[3].bottom,
          borderRadius: '100%',
          background: 'linear-gradient(to right, ' + primaryColor + ', ' + secondaryColor + ')',
          opacity: baseOpacity * 0.9,
          filter: 'blur(90px)', // Slightly reduced blur
          mixBlendMode: 'screen', // Changed from multiply
        }}
      />
      
      {/* Subtle grain overlay for texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      
      {/* Light dark vignette for more depth */}
      <div 
        className="absolute inset-0 opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.2) 100%)',
        }}  
      />
    </div>
  );
};

// getPositions function remains the same
const getPositions = (pattern: DepthShadowBackgroundProps['pattern']) => {
    switch (pattern) {
      case 'sides':
        return [
          { top: '10%', left: '-15%', size: 500 },
          { top: '10%', right: '-15%', size: 500 },
          { bottom: '10%', left: '-10%', size: 400 },
          { bottom: '10%', right: '-10%', size: 400 },
        ];
      case 'top':
        return [
          { top: '-10%', left: '5%', size: 600 },
          { top: '-15%', right: '20%', size: 500 },
          { top: '10%', left: '30%', size: 400 },
          { top: '10%', right: '25%', size: 350 },
        ];
      case 'center':
        return [
          { top: '40%', left: '10%', size: 500 },
          { top: '30%', right: '10%', size: 500 },
          { top: '55%', left: '25%', size: 450 },
          { top: '45%', right: '25%', size: 450 },
        ];
      case 'corners':
      default:
        return [
          { top: '-10%', left: '-10%', size: 450 },
          { top: '-10%', right: '-10%', size: 450 },
          { bottom: '-10%', left: '-10%', size: 450 },
          { bottom: '-10%', right: '-10%', size: 450 },
        ];
    }
  };

export default DepthShadowBackground; 