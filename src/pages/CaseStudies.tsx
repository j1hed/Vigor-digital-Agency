import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { gsap } from 'gsap';

const projects = [
  {
    title: 'E-Commerce',
    category: 'Fintech Platform',
    description: 'Revolutionary E-COMMERCE platform with AI-powered analytics and real-time market insights.',
    video: '/video/ecom.mp4',
    url: 'https://www.snowboard-asylum.com/'
  },
  {
    title: 'Aurora Health',
    url: 'https://medi-connect-woad.vercel.app/',
    category: 'Healthcare Innovation', 
    description: 'Next-generation telemedicine platform connecting patients with specialists globally.',
    color: '', 
    img: 'src/assets/medicin.JPG'
  },
  {
    title: 'Tea Associates',
    category: 'E-commerce Example',
    description: 'Artisan tea brand showcasing sustainable, mindful e-commerce',
    url: 'https://www.teaassociates.com.au',
    video: '/video/tea.mp4'
  },
  {
    title: 'Stellar Logistics',
    category: 'Supply Chain',
    description: 'Intelligent logistics platform optimizing global supply chains with predictive AI.',
    color: 'from-chrome-mid/20 to-glow-primary/20'
  }
];

export const CaseStudies = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // Simple GSAP animations for performance
  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    
    // Entrance animations
    gsap.fromTo(cards, 
      {
        opacity: 0,
        y: 50,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
      }
    );
    
    // Cleanup function
    return () => {
      cards.forEach(card => {
        gsap.killTweensOf(card);
      });
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleMouseEnter = (index: number, card: HTMLDivElement) => {
    setHoveredProject(index);
    gsap.to(card, {
      scale: 1.02,
      y: -5,
      duration: 0.3,
      ease: 'power1.out'
    });
  };

  const handleMouseLeave = (card: HTMLDivElement) => {
    setHoveredProject(null);
    gsap.to(card, {
      scale: 1,
      y: 0,
      duration: 0.4,
      ease: 'power1.out'
    });
  };

  return (
    <section id="work" className="py-32 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-thin text-chrome tracking-wide mb-6">
            Our Work
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Transforming visions into digital realities that inspire and innovate.
          </p>
        </div>
        
        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={el => cardsRef.current[index] = el}
            >
              <Card
                className="group relative overflow-hidden bg-surface/30 border-chrome-mid/20 
                  hover:border-chrome-start/40 transition-all duration-300 h-80 cursor-pointer"
                onMouseEnter={(e) => handleMouseEnter(index, e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                onClick={() => project.url && window.open(project.url, '_blank')}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <div className={`transform transition-all duration-300 ${hoveredProject === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-70'}`}>
                    <div className="text-sm text-chrome-mid font-light tracking-wider mb-2">
                      {project.category}
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-light text-foreground mb-4 tracking-wide">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className={`absolute top-6 right-6 w-2 h-2 bg-chrome-start rounded-full transform transition-all duration-300 ${hoveredProject === index ? 'scale-150 glow' : 'scale-100'}`} />
                  
                  {/* Mobile enter button */}
                  {project.url && (
                    <div className="absolute bottom-6 right-6 md:hidden">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.url, '_blank');
                        }}
                        className="px-4 py-2 bg-chrome-start text-white rounded-full text-sm font-light hover:bg-chrome-end transition-colors duration-300"
                      >
                        View Project
                      </button>
                    </div>
                  )}
                </div>
                
                {/* Image or Video Rendering */}
                {project.img && (
                  <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                )}
                {project.video && (
                  <video src={project.video} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline />
                )}
                
                {/* Cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </Card>
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
              {projects.map((project, index) => (
                <div key={project.title} className="w-full flex-shrink-0 px-4">
                  <Card
                    className="group relative overflow-hidden bg-surface/30 border-chrome-mid/20 
                      h-80 cursor-pointer"
                    onClick={() => project.url && window.open(project.url, '_blank')}
                  >
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-8">
                      <div className="transform transition-all duration-300 translate-y-0 opacity-100">
                        <div className="text-sm text-chrome-mid font-light tracking-wider mb-2">
                          {project.category}
                        </div>
                        
                        <h3 className="text-2xl font-light text-foreground mb-4 tracking-wide">
                          {project.title}
                        </h3>
                        
                        <p className="text-muted-foreground font-light leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      
                      {/* Mobile enter button */}
                      {project.url && (
                        <div className="absolute bottom-6 right-6">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.url, '_blank');
                            }}
                            className="px-4 py-2 bg-chrome-start text-white rounded-full text-sm font-light hover:bg-chrome-end transition-colors duration-300"
                          >
                            View Project
                          </button>
                        </div>
                      )}
                    </div>
                    
                    {/* Image or Video Rendering */}
                    {project.img && (
                      <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                    )}
                    {project.video && (
                      <video src={project.video} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline />
                    )}
                    
                    {/* Cinematic overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </Card>
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
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-chrome-start' : 'bg-chrome-mid/30'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
