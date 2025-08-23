import React from 'react';
import { cn } from '@/lib/utils';

interface InfiniteSliderProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  gap?: number;
}

export const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
  children,
  className,
  duration = 30,
  gap = 48,
}) => {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className="flex animate-infinite-scroll items-center"
        style={{
          gap: `${gap}px`,
          animationDuration: `${duration}s`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
};