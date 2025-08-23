import { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
// Using inline logo for now until file loads

export const Hero3D = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0 z-10">
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="animate-glow-pulse text-chrome-start">Loading 3D Experience...</div>
          </div>
        }>
          <Spline scene="https://prod.spline.design/BrblMzhbHHzhbApc/scene.splinecode" />
        </Suspense>
      </div>
      
      {/* VIGOR Logo Overlay */}
      <div className="relative z-20 text-center pointer-events-none">
        <div className="mb-8 animate-float">
          <div className="w-32 h-32 md:w-48 md:h-48 mx-auto flex items-center justify-center">
            <div className="text-6xl md:text-8xl text-chrome sparkle">V</div>
          </div>
        </div>
        
        {/* Logo Text */}
        <h1 className="text-5xl md:text-7xl font-thin text-chrome tracking-[0.3em] mb-6 sparkle relative">
          VIGOR
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl font-light text-muted-foreground tracking-wide">
          The future of digital. Today.
        </p>
        
        {/* Decorative line */}
        <div className="w-24 h-px bg-gradient-chrome mx-auto mt-8 animate-scale-in" />
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-float">
        <div className="flex flex-col items-center text-muted-foreground">
          <span className="text-sm font-light tracking-wider mb-2">Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-chrome-mid to-transparent" />
          <div className="text-2xl animate-bounce">↓</div>
        </div>
      </div>
      
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-glow-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-glow-secondary/10 rounded-full blur-3xl" />
    </section>
  );
};