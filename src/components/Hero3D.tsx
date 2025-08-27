import { Suspense, useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { ThreeDFallback } from './ThreeDFallback';
import introFrame from '@/assets/logointro.png';

export const Hero3D = () => {
  const [splineError, setSplineError] = useState(false);

  return (
    <section id="hero" className="relative h-screen bg-background overflow-hidden">
      {/* Responsive Layout - Vertical stack on mobile, split screen on desktop */}
      <div className="flex flex-col md:flex-row h-full">
        {/* Top Section - VIGOR Logo Image (Mobile) / Left Side (Desktop) */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center relative order-1 md:order-1">
          {/* Logo Container */}
          <div className="relative z-20 text-center">
            {/* VIGOR Logo Image - Responsive sizing */}
            <div className="mb-4 md:mb-6 animate-float">
              <div className="w-48 h-48 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] mx-auto flex items-center justify-center relative">
                {/* Main Logo Image - Responsive sizing */}
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={introFrame}
                    alt="VIGOR"
                    className="w-40 h-40 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] object-contain filter brightness-110 contrast-110 saturate-110"
                    style={{
                      filter: 'brightness(1.1) contrast(1.1) saturate(1.1) drop-shadow(0 0 30px rgba(255, 255, 255, 0.4))'
                    }}
                  />
                </div>
                
                {/* Enhanced Glow Effect */}
                <div className="absolute inset-0 w-full h-full bg-glow-primary/25 rounded-full blur-3xl animate-pulse" />
                <div className="absolute inset-0 w-full h-full bg-chrome-start/20 rounded-full blur-2xl" />
              </div>
            </div>
            
            {/* Logo Text - Responsive sizing */}
            <h1 className="text-4xl md:text-7xl lg:text-9xl font-thin text-chrome tracking-[0.3em] mb-2 md:mb-4 relative">
              VIGOR
              <span className="absolute inset-0 text-chrome-mid/25 transform translate-x-1 translate-y-1 -z-10">
                VIGOR
              </span>
            </h1>
            
            {/* Tagline */}
            <p className="text-lg md:text-xl lg:text-2xl font-light text-muted-foreground tracking-wide">
              The future of digital. Today.
            </p>
            
            {/* Decorative line */}
            <div className="w-32 md:w-48 h-1 bg-gradient-chrome mx-auto mt-4 md:mt-6 animate-scale-in relative">
              <div className="absolute inset-0 bg-gradient-chrome/40 transform translate-y-0.5" />
            </div>
          </div>
          
          {/* Ambient Glow - Reduced on mobile */}
          <div className="absolute top-1/4 left-1/4 w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] bg-glow-primary/25 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 md:w-96 md:h-96 bg-chrome-start/20 rounded-full blur-3xl" />
        </div>

        {/* Bottom Section - Spline 3D Scene (Mobile) / Right Side (Desktop) */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative order-2 md:order-2">
          {/* 3D Scene - Spline with Fallback */}
          <div className="absolute inset-0 z-10">
            {!splineError ? (
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="animate-glow-pulse text-chrome-start">Loading 3D Experience...</div>
                </div>
              }>
                <Spline 
                  scene="https://prod.spline.design/BrblMzhbHHzhbApc/scene.splinecode"
                  onError={() => setSplineError(true)}
                />
              </Suspense>
            ) : (
              <ThreeDFallback />
            )}
          </div>
          
          {/* Right Side Ambient Glow */}
          <div className="absolute top-1/3 right-1/4 w-32 h-32 md:w-64 md:h-64 bg-glow-secondary/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 md:w-48 md:h-48 bg-chrome-end/10 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Divider Line - Hidden on mobile */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-chrome-mid/25 to-transparent" />

      {/* Liquid Glass Explore Button - Bottom Middle */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="
          flex flex-col items-center 
          bg-gradient-to-br from-surface/20 to-surface/10 
          border border-chrome-mid/30 backdrop-blur-2xl
          rounded-2xl p-4 shadow-2xl shadow-black/20
          hover:shadow-3xl hover:shadow-chrome-start/20
          transition-all duration-500
          relative overflow-hidden
          before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-chrome-start/20 before:to-transparent
          before:animate-shimmer
        ">
          <span className="text-sm font-light tracking-wider text-chrome mb-2 z-10">Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-chrome-mid to-transparent z-10" />
          <div className="text-2xl text-chrome animate-bounce z-10">↓</div>
          
          {/* Liquid border effect */}
          <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-r from-transparent via-chrome-start/30 to-transparent animate-pulse" />
        </div>
      </div>

      {/* CSS Animation for Shimmer Effect */}
      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-shimmer {
            animation: shimmer 2s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};
