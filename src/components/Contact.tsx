import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-32 px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-thin text-chrome tracking-wide mb-6">
            Start Your Future
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Ready to transform your digital presence? Let's create something extraordinary together.
          </p>
        </div>
        
        <Card className="bg-surface/30 border-chrome-mid/20 backdrop-blur-sm max-w-2xl mx-auto animate-fade-in">
          <CardHeader>
            <div className="w-16 h-px bg-gradient-chrome mx-auto mb-6" />
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="
                    bg-background/50 border-chrome-mid/30 text-foreground placeholder:text-muted-foreground
                    focus:border-chrome-start focus:ring-glow-primary/30 transition-all duration-300
                  "
                  required
                />
                
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="
                    bg-background/50 border-chrome-mid/30 text-foreground placeholder:text-muted-foreground
                    focus:border-chrome-start focus:ring-glow-primary/30 transition-all duration-300
                  "
                  required
                />
              </div>
              
              <Input
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="
                  bg-background/50 border-chrome-mid/30 text-foreground placeholder:text-muted-foreground
                  focus:border-chrome-start focus:ring-glow-primary/30 transition-all duration-300
                "
              />
              
              <Textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="
                  bg-background/50 border-chrome-mid/30 text-foreground placeholder:text-muted-foreground
                  focus:border-chrome-start focus:ring-glow-primary/30 transition-all duration-300 resize-none
                "
                required
              />
              
              <Button
                type="submit"
                size="lg"
                className="
                  w-full bg-gradient-chrome text-background font-light tracking-wider text-lg
                  hover:shadow-chrome hover:scale-105 transition-all duration-300
                  border border-chrome-mid/30 hover:border-chrome-start
                "
              >
                Start Your Future with VIGOR
              </Button>
            </form>
          </CardContent>
        </Card>
        
        {/* Additional contact info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-chrome-start text-lg mb-2">Email</div>
            <div className="text-muted-foreground font-light">hello@vigor.agency</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-chrome-start text-lg mb-2">Phone</div>
            <div className="text-muted-foreground font-light">+1 (555) 123-4567</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="text-chrome-start text-lg mb-2">Location</div>
            <div className="text-muted-foreground font-light">San Francisco, CA</div>
          </div>
        </div>
      </div>
    </section>
  );
};