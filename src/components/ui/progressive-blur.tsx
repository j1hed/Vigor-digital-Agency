import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressiveBlurProps {
  className?: string;
  direction: 'left' | 'right' | 'top' | 'bottom';
  blurIntensity?: number;
}

export const ProgressiveBlur: React.FC<ProgressiveBlurProps> = ({
  className,
  direction,
  blurIntensity = 1,
}) => {
  const getGradient = () => {
    const blur = `blur(${blurIntensity * 4}px)`;
    const transparent = 'transparent';
    
    switch (direction) {
      case 'left':
        return `linear-gradient(to right, ${blur}, ${transparent})`;
      case 'right':
        return `linear-gradient(to left, ${blur}, ${transparent})`;
      case 'top':
        return `linear-gradient(to bottom, ${blur}, ${transparent})`;
      case 'bottom':
        return `linear-gradient(to top, ${blur}, ${transparent})`;
      default:
        return `linear-gradient(to right, ${blur}, ${transparent})`;
    }
  };

  return (
    <div
      className={cn("absolute inset-0", className)}
      style={{
        background: getGradient(),
        backdropFilter: `blur(${blurIntensity * 4}px)`,
        WebkitBackdropFilter: `blur(${blurIntensity * 4}px)`,
      }}
    />
  );
};