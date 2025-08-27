import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const services = [
  {
    title: 'Branding & Design',
    description: 'Crafting distinctive visual identities that resonate with your audience.',
    icon: '✦',
    color: 'from-blue-500/20 to-purple-500/20'
  },
  {
    title: 'Web Development',
    description: 'Building cutting-edge digital experiences with precision and performance.',
    icon: '⌘',
    color: 'from-green-500/20 to-teal-500/20'
  },
  {
    title: 'AI Solutions',
    description: 'Integrating intelligent automation to transform your business operations.',
    icon: '◊',
    color: 'from-orange-500/20 to-red-500/20'
  },
  {
    title: 'Marketing Strategy',
    description: 'Data-driven campaigns that amplify your brand across digital channels.',
    icon: '△',
    color: 'from-pink-500/20 to-rose-500/20'
  }
];

export const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="py-32 px-8 bg-gradient-surface relative overflow-hidden">
      {/* Ambient background elements */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-glow-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-glow-secondary/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-thin text-chrome tracking-wide mb-6 animate-fade-in">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            We deliver exceptional digital solutions that drive innovation and growth.
          </p>
        </div>
        
        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group perspective-1000"
              style={{ animationDelay: `${index * 0.1}s`, perspective: '1000px' }}
            >
              <div className="relative w-full h-80 transition-all duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front of Card */}
                <Card 
                  className="
                    absolute inset-0 w-full h-full backface-hidden
                    bg-gradient-to-br from-surface/60 to-surface/40
                    border border-chrome-mid/30 backdrop-blur-xl
                    shadow-2xl shadow-black/30
                    flex flex-col items-center justify-center p-8
                    group-hover:shadow-3xl group-hover:shadow-chrome-start/20
                    transition-all duration-700
                  "
                >
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <span className="text-3xl text-chrome animate-pulse">{service.icon}</span>
                  </div>
                  
                  <CardTitle className="text-xl font-light text-foreground tracking-wide mb-4 text-center group-hover:text-chrome-start transition-colors duration-500">
                    {service.title}
                  </CardTitle>
                  
                  <CardDescription className="text-muted-foreground font-light leading-relaxed text-center group-hover:text-foreground/80 transition-colors duration-500">
                    {service.description}
                  </CardDescription>
                </Card>

                {/* Back of Card - Revealed on hover */}
                <Card 
                  className="
                    absolute inset-0 w-full h-full backface-hidden rotate-y-180
                    bg-gradient-to-br from-chrome-start/10 to-chrome-end/10
                    border border-chrome-start/40 backdrop-blur-xl
                    shadow-2xl shadow-chrome-start/20
                    flex flex-col items-center justify-center p-8
                    transition-all duration-700
                  "
                >
                  <div className="text-4xl text-chrome mb-6 animate-bounce">🚀</div>
                  <h3 className="text-2xl font-light text-chrome mb-4">Let's Create</h3>
                  <p className="text-foreground/80 text-center font-light">
                    Transform your vision into reality with our expert team.
                  </p>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={service.title} className="w-full flex-shrink-0 px-4">
                  <div className="group perspective-1000" style={{ perspective: '1000px' }}>
                    <div className="relative w-full h-80">
                      {/* Front of Card - Simplified for mobile */}
                      <Card 
                        className="
                          w-full h-full
                          bg-gradient-to-br from-surface/60 to-surface/40
                          border border-chrome-mid/30 backdrop-blur-xl
                          shadow-2xl shadow-black/30
                          flex flex-col items-center justify-center p-8
                        "
                      >
                        <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                          <span className="text-2xl text-chrome">{service.icon}</span>
                        </div>
                        
                        <CardTitle className="text-xl font-light text-foreground tracking-wide mb-4 text-center">
                          {service.title}
                        </CardTitle>
                        
                        <CardDescription className="text-muted-foreground font-light leading-relaxed text-center">
                          {service.description}
                        </CardDescription>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-surface/80 backdrop-blur-sm border border-chrome-mid/20 rounded-full p-3 z-10"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-surface/80 backdrop-blur-sm border border-chrome-mid/20 rounded-full p-3 z-10"
          >
            →
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-chrome-start' : 'bg-chrome-mid/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CSS for 3D effects */}
      <style>
        {`
          .perspective-1000 {
            perspective: 1000px;
          }
          .transform-style-preserve-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
        `}
      </style>
    </section>
  );
};
