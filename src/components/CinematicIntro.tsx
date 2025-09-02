import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import introVideo from '@/assets/vigor.mp4';

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro = ({ onComplete }: CinematicIntroProps) => {
  const [showIntro, setShowIntro] = useState(true);
  const [showEnter, setShowEnter] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }

    const videoEndHandler = () => {
      setShowEnter(true);
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
    setShowIntro(false);
    onComplete();
  };

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed inset-0 z-50 bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7 } }}
        >
          <motion.div
            className="absolute left-0 top-0 w-full md:w-1/2 h-full overflow-hidden"
            initial={{ scale: 1 }}
            animate={showEnter ? { scale: 1.1, transition: { duration: 1.5 } } : {}}
          >
            <video
              ref={videoRef}
              src={introVideo}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="absolute right-0 top-0 w-full md:w-1/2 h-full flex items-center justify-center p-4 md:p-12">
            <motion.div
              className="max-w-md text-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
            >
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

              <AnimatePresence>
                {showEnter && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }}
                  >
                    <Button
                      onClick={handleEnter}
                      variant="ghost"
                      size="lg"
                      className="
                        text-foreground font-light tracking-widest text-lg border border-chrome-mid/30
                        hover:border-chrome-start hover:bg-chrome-start/10 hover:text-chrome-start
                        transition-all duration-500 px-12 py-6 ripple glow-text w-full
                        md:static fixed bottom-8 left-4 right-4 md:bottom-auto md:left-auto md:right-auto
                        z-50 bg-background/90 backdrop-blur-sm
                      "
                    >
                      ENTER
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-chrome-mid/30 to-transparent"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
