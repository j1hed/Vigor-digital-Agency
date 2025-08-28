import { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { ThreeDFallback } from './ThreeDFallback';
import introFrame from '@/assets/logointro.png';
import vigorLogo from '@/assets/logointro.png'; // Assuming the logo is in the assets folder
import Spline from '@splinetool/react-spline';

const text = "Introducing VIGOR";

export const Hero3D = () => {
  const [splineError, setSplineError] = useState(false);
  const [splineLoading, setSplineLoading] = useState(true);

  return (
    <section id="hero" className="relative h-screen bg-gradient-to-br from-gray-900 to-black overflow-hidden flex items-center justify-center">
      {/* Ambient background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-glow-secondary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-glow/5 rounded-full blur-3xl animate-pulse" />
      
      <div className="container mx-auto flex flex-col md:flex-row items-center h-full px-4 relative z-10">
        {/* VIGOR Logo in Top Left Corner */}
        <div className="fixed top-4 left-4 z-30">
          <img
            src={vigorLogo}
            alt="VIGOR Logo"
            className="w-32 h-32 object-contain" // Adjust size as needed
          />
        </div>

        {/* Left Section: Logo and Text */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Logo */}
          <motion.div 
            className="relative mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <img
              src={introFrame}
              alt="VIGOR"
              className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
              style={{
                filter: 'brightness(1.1) contrast(1.1) drop-shadow(0 0 15px rgba(255, 255, 255, 0.3))',
              }}
            />
            <div className="absolute inset-0 w-full h-full bg-white/10 rounded-full blur-2xl opacity-50" />
          </motion.div>

          {/* Animated Introductory Text */}
          <div className="flex flex-wrap justify-center">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-widest"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <motion.p
            className="text-base md:text-lg lg:text-xl font-light text-gray-300 tracking-wide mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            Effortless AI integration for business. No extra setup, just smart automation when you need it.
          </motion.p>

          {/* Join Our Community Button */}
          <motion.a
            href="/pricing"
            className="bg-cyan-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-cyan-600 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          >
            Join Our Community
          </motion.a>

          {/* Decorative Line */}
          <motion.div
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent mt-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          />
        </motion.div>

        {/* Right Section: Spline Scene */}
        <motion.div 
          className="w-full md:w-1/2 h-full flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          {splineLoading && (
            <div className="text-white">Loading 3D scene...</div>
          )}
          <Suspense fallback={<div className="text-white">Loading...</div>}>
            <div className="w-full h-full flex items-center justify-center">
              <Spline
                scene="https://prod.spline.design/dkw4BT5UWC090zXQ/scene.splinecode"
                onError={() => {
                  setSplineError(true);
                  setSplineLoading(false);
                }}
                onLoad={() => setSplineLoading(false)}
                style={{ width: '100%', height: '100%', transform: 'scale(1.2)' }}
              />
            </div>
          </Suspense>
          {splineError && <ThreeDFallback />}
        </motion.div>
      </div>
    </section>
  );
};
