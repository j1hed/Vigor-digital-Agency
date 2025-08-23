import { useState } from 'react';
import { Card } from '@/components/ui/card';

const projects = [
  {
    title: 'Quantum Finance',
    category: 'Fintech Platform',
    description: 'Revolutionary trading platform with AI-powered analytics and real-time market insights.',
    color: 'from-glow-primary/20 to-glow-secondary/20'
  },
  {
    title: 'Aurora Health',
    category: 'Healthcare Innovation', 
    description: 'Next-generation telemedicine platform connecting patients with specialists globally.',
    color: 'from-neon/20 to-glow-primary/20'
  },
  {
    title: 'Nexus Retail',
    category: 'E-commerce Evolution',
    description: 'Immersive shopping experience with AR visualization and personalized recommendations.',
    color: 'from-glow-secondary/20 to-chrome-start/20'
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="
                group relative overflow-hidden bg-surface/30 border-chrome-mid/20 
                hover:border-chrome-start/40 transition-all duration-700 h-80
                cinematic-hover cursor-pointer animate-fade-in
              "
              style={{ animationDelay: `${index * 0.3}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Background gradient */}
              <div className={`
                absolute inset-0 bg-gradient-to-br ${project.color} 
                opacity-0 group-hover:opacity-100 transition-opacity duration-700
              `} />
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <div className={`
                  transform transition-all duration-500
                  ${hoveredProject === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-70'}
                `}>
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
                <div className={`
                  absolute top-6 right-6 w-2 h-2 bg-chrome-start rounded-full
                  transform transition-all duration-300
                  ${hoveredProject === index ? 'scale-150 glow' : 'scale-100'}
                `} />
              </div>
              
              {/* Cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};