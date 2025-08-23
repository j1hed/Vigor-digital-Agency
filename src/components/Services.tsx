import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const services = [
  {
    title: 'Branding & Design',
    description: 'Crafting distinctive visual identities that resonate with your audience.',
    icon: '✦'
  },
  {
    title: 'Web Development',
    description: 'Building cutting-edge digital experiences with precision and performance.',
    icon: '⌘'
  },
  {
    title: 'AI Solutions',
    description: 'Integrating intelligent automation to transform your business operations.',
    icon: '◊'
  },
  {
    title: 'Marketing Strategy',
    description: 'Data-driven campaigns that amplify your brand across digital channels.',
    icon: '△'
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-32 px-8 bg-gradient-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-thin text-chrome tracking-wide mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            We deliver exceptional digital solutions that drive innovation and growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="
                group cinematic-hover bg-surface/50 border-chrome-mid/20 backdrop-blur-sm
                hover:border-chrome-start/40 hover:bg-surface/80 transition-all duration-500
                animate-fade-in
              "
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center p-8">
                {/* Icon */}
                <div className="text-4xl md:text-5xl text-chrome-start mb-6 group-hover:animate-float">
                  {service.icon}
                </div>
                
                <CardTitle className="text-xl font-light text-foreground tracking-wide mb-4">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground font-light leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};