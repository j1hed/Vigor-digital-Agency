import React from 'react';
import { cn } from '@/lib/utils';

interface SparklesProps {
  density?: number;
  className?: string;
  color?: string;
}

export const Sparkles: React.FC<SparklesProps> = ({
  density = 1200,
  className,
  color = "#ffffff"
}) => {
  const sparkles = Array.from({ length: Math.floor(density / 100) }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2,
  }));

  return (
    <div className={cn("pointer-events-none absolute inset-0", className)}>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle opacity-0"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: color,
            borderRadius: '50%',
            animationDelay: `${sparkle.delay}s`,
            animationDuration: '3s',
            animationIterationCount: 'infinite',
          }}
        />
      ))}
    </div>
  );
};