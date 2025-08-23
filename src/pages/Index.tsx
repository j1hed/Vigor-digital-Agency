import { useState } from 'react';
import { CinematicIntro } from '@/components/CinematicIntro';
import { Navigation } from '@/components/Navigation';
import { Hero3D } from '@/components/Hero3D';
import { Services } from '@/components/Services';
import { CaseStudies } from '@/components/CaseStudies';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <CinematicIntro onComplete={() => setShowIntro(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero3D />
      <Services />
      <CaseStudies />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
