import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import introVideo from '@/assets/vigor.mp4';

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro = ({ onComplete }: CinematicIntroProps) => {
  const [showIntro, setShowIntro] = useState(false);
  const [showEnter, setShowEnter] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Play video first
    if (videoRef.current) {
      videoRef.current.play();
    }

    // After video ends, show intro and ENTER button
    const videoEndHandler = () => {
      setShowIntro(true);
      // Show ENTER button after a short delay
      setTimeout(() => {
        setShowEnter(true);
      }, 1000);
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('ended', videoEndHandler);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('ended', videoEndHandler);
      }
    };
  }, []);

  const handleEnter = () => {
    // Move to website
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {/* 🔹 Video plays first - Full Width on Mobile, Left Side on Web */}
      <div className="absolute left-0 top-0 w-full md:w-1/2 h-full overflow-hidden">
        <video
          ref={videoRef}
          src={introVideo}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🔹 Intro overlay appears after video ends */}
      {showIntro && (
        <div className="absolute left-0 top-0 w-full md:w-1/2 h-full">
          {/* Cinematic intro background */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-80 transition-opacity duration-700"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90" />

          {/* Content - Centered */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="animate-fade-in text-center">
              
              <div className="w-24 h-0.5 bg-gradient-chrome mx-auto animate-scale-in" />
            </div>
          </div>
        </div>
      )}

      {/* 🔹 Agency Introduction with ENTER Button - Right Side */}
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full flex items-center justify-center p-4 md:p-12">
        <div className="max-w-md text-foreground">
          <h2 className="text-3xl md:text-4xl font-light text-chrome mb-6 tracking-wide">
            Welcome to VIGOR
          </h2>
          <p className="text-lg font-light text-foreground/80 mb-6 leading-relaxed">
            We are a premier digital agency specializing in cutting-edge web solutions, 
            immersive experiences, and transformative digital strategies.
          </p>
          <div className="space-y-3 mb-8">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-chrome-start rounded-full mr-3"></div>
              <span className="text-foreground/70">Premium Web Development</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-chrome-mid rounded-full mr-3"></div>
              <span className="text-foreground/70">Creative Digital Solutions</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-chrome-end rounded-full mr-3"></div>
              <span className="text-foreground/70">Results-Driven Approach</span>
            </div>
          </div>

          {/* ENTER Button */}
          {showEnter && (
            <div className="animate-slide-up">
              <Button
                onClick={handleEnter}
                variant="ghost"
                size="lg"
                className="
                  text-foreground font-light tracking-widest text-lg border border-chrome-mid/30 
                  hover:border-chrome-start hover:bg-chrome-start/10 hover:text-chrome-start
                  transition-all duration-500 px-12 py-6 ripple glow-text w-full
                "
              >
                ENTER
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-chrome-mid/30 to-transparent"></div>
    </div>
  );
};
