import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Basic',
    price: '299 DT',
    description: 'Perfect for personal projects and startups',
    features: [
      'Simple website design',
      '3 pages',
      'Basic contact form',
      'Mobile responsive',
      '2 weeks support'
    ],
    popular: false
  },
  {
    name: 'Starter',
    price: '499 DT',
    description: 'Perfect for small businesses getting started',
    features: [
      'Basic website design',
      '5 pages',
      'Contact form integration',
      'Basic SEO optimization',
      '1 month support'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '999 DT',
    description: 'Ideal for growing businesses',
    features: [
      'Custom website design',
      '10 pages',
      'Advanced contact forms',
      'SEO optimization',
      'Social media integration',
      '3 months support',
      'Analytics setup'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '499 DT',
    description: 'Complete digital solution for large businesses',
    features: [
      'Premium custom design',
      'Unlimited pages',
      'E-commerce integration',
      'Advanced SEO strategy',
      'Social media management',
      '6 months support',
      'Priority support',
      'Custom integrations'
    ],
    popular: false
  }
];

export const Pricing = () => {
  const [selectedTier, setSelectedTier] = useState('Professional');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6 bg-gradient-to-r from-chrome-start to-chrome-end bg-clip-text text-transparent">
            Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Choose the perfect plan for your business needs. All plans include our signature quality and attention to detail.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier) => (
              <Card 
                key={tier.name}
                className={`relative border-2 transition-all duration-300 hover:scale-105 ${
                  tier.popular 
                    ? 'border-chrome-start shadow-glow' 
                    : 'border-chrome-mid/20 hover:border-chrome-start/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-chrome text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-light">{tier.price}</span>
                    <span className="text-muted-foreground">/project</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="w-4 h-4 text-chrome-start mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    className={`w-full ${
                      tier.popular 
                        ? 'bg-gradient-chrome text-white' 
                        : 'bg-transparent border border-chrome-mid text-foreground hover:bg-chrome-start/10'
                    }`}
                    onClick={() => setSelectedTier(tier.name)}
                  >
                    {selectedTier === tier.name ? 'Selected' : 'Get Started'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-surface/50 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 bg-gradient-to-r from-chrome-start to-chrome-end bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about our pricing and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background/80 backdrop-blur-sm border border-chrome-mid/20 rounded-2xl p-6 hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-chrome-start">What's included in the support period?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our comprehensive support includes bug fixes, minor updates, technical assistance, performance optimization, and guidance to ensure your website runs smoothly and efficiently.
              </p>
            </div>
            
            <div className="bg-background/80 backdrop-blur-sm border border-chrome-mid/20 rounded-2xl p-6 hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-chrome-start">Can I upgrade my plan later?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes, you can upgrade at any time! We'll seamlessly migrate your project and apply the price difference to your new plan with no downtime.
              </p>
            </div>
            
            <div className="bg-background/80 backdrop-blur-sm border border-chrome-mid/20 rounded-2xl p-6 hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-chrome-start">Do you offer custom pricing?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Absolutely! We specialize in custom solutions tailored to your specific business needs. Contact us for personalized quotes and unique requirements.
              </p>
            </div>
            
            <div className="bg-background/80 backdrop-blur-sm border border-chrome-mid/20 rounded-2xl p-6 hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-chrome-start">How long does a project take?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Typical projects take 2-4 weeks, depending on complexity. We maintain clear communication and provide regular updates throughout the process.
              </p>
            </div>
            
            <div className="bg-background/80 backdrop-blur-sm border border-chrome-mid/20 rounded-2xl p-6 hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-chrome-start">What payment methods do you accept?</h3>
              <p className="text-muted-foreground leading-relaxed">
                We accept all major credit cards, bank transfers, and PayPal. We also offer flexible payment plans for larger projects.
              </p>
            </div>
            
            <div className="bg-background/80 backdrop-blur-sm border border-chrome-mid/20 rounded-2xl p-6 hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-chrome-start">Do you provide hosting services?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes! We offer reliable hosting solutions with 99.9% uptime, SSL certificates, and daily backups. Hosting plans start at $29/month.
              </p>
            </div>
            
            <div className="bg-background/80 backdrop-blur-sm border border-chrome-mid/20 rounded-2xl p-6 hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-chrome-start">Can I request revisions?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes, each plan includes revision rounds. Basic: 2 revisions, Starter: 3 revisions, Professional: 5 revisions, Enterprise: Unlimited revisions.
              </p>
            </div>
            
            <div className="bg-background/80 backdrop-blur-sm border border-chrome-mid/20 rounded-2xl p-6 hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-chrome-start">What about maintenance?</h3>
              <p className="text-muted-foreground leading-relaxed">
                We offer ongoing maintenance packages starting at $99/month for updates, security monitoring, and performance optimization.
              </p>
            </div>
            
            <div className="bg-background/80 backdrop-blur-sm border border-chrome-mid/20 rounded-2xl p-6 hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-chrome-start">Is SEO included?</h3>
              <p className="text-muted-foreground leading-relaxed">
                All plans include basic SEO optimization. Professional and Enterprise plans include advanced SEO strategy and ongoing optimization.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground">
              Still have questions?{' '}
              <a href="#contact" className="text-chrome-start hover:text-chrome-end transition-colors duration-300 font-semibold">
                Contact us
              </a>{' '}
              for more information
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
