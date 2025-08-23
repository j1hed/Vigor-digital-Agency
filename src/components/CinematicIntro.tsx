import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import introFrame from '@/assets/vigor-intro.jpg';

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro = ({ onComplete }: CinematicIntroProps) => {
  const [showEnter, setShowEnter] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Show intro for 3 seconds, then show ENTER button
    const timer = setTimeout(() => {
      setShowEnter(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    // Ripple effect duration
    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Cinematic intro background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${introFrame})` }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center">
        {!showEnter ? (
          // Initial VIGOR branding
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-thin text-chrome tracking-wider mb-4">
              VIGOR
            </h1>
            <div className="w-24 h-0.5 bg-gradient-chrome mx-auto animate-scale-in" />
          </div>
        ) : (
          // ENTER button
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-thin text-chrome tracking-wider mb-8 animate-glow-pulse">
              VIGOR
            </h1>
            <Button
              onClick={handleEnter}
              variant="ghost"
              size="lg"
              className={`
                text-foreground font-light tracking-widest text-lg border border-chrome-mid/30 
                hover:border-chrome-start hover:bg-chrome-start/10 hover:text-chrome-start
                transition-all duration-500 px-12 py-6 ripple glow-text
                ${isExiting ? 'animate-scale-in' : ''}
              `}
            >
              ENTER
            </Button>
          </div>
        )}
      </div>
      
      {/* Ripple exit effect */}
      {isExiting && (
        <div className="absolute inset-0 bg-glow-primary/20 animate-scale-in origin-center" 
             style={{ 
               borderRadius: '50%',
               transform: 'scale(10)',
               animation: 'scale-in 1s ease-out forwards'
             }} 
        />
      )}
    </div>
  );
};