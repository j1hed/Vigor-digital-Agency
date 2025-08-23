export const About = () => {
  return (
    <section id="about" className="py-32 px-8 bg-gradient-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Visual element */}
          <div className="relative">
            <div className="aspect-square bg-surface/50 border border-chrome-mid/20 rounded-lg overflow-hidden backdrop-blur-sm">
              {/* Abstract geometric pattern */}
              <div className="relative h-full flex items-center justify-center">
                <div className="w-32 h-32 border border-chrome-mid/40 rotate-45 animate-float" />
                <div className="absolute w-24 h-24 border border-chrome-start/60 rotate-12 animate-float" 
                     style={{ animationDelay: '1s' }} />
                <div className="absolute w-16 h-16 bg-glow-primary/20 rounded-full blur-sm animate-glow-pulse" />
              </div>
              
              {/* Ambient lighting */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-glow-primary/5 to-glow-secondary/5" />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-thin text-chrome tracking-wide mb-6">
                We are VIGOR
              </h2>
              <div className="w-16 h-px bg-gradient-chrome mb-8" />
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p className="animate-fade-in">
                We craft digital experiences that inspire, innovate, and transform businesses 
                for the future. Our team of visionaries combines cutting-edge technology with 
                artistic precision.
              </p>
              
              <p className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                Founded on the principle that exceptional design meets intelligent functionality, 
                we push the boundaries of what's possible in the digital realm.
              </p>
              
              <p className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                Every project is an opportunity to create something extraordinary—something that 
                doesn't just meet expectations, but redefines them entirely.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-chrome-mid/20">
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
                <div className="text-2xl font-light text-chrome-start">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
                <div className="text-2xl font-light text-chrome-start">15+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: '1.5s' }}>
                <div className="text-2xl font-light text-chrome-start">5</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};