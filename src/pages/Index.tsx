import { useState } from 'react';
import { CinematicIntro } from '@/components/CinematicIntro';
import { Navigation } from '@/components/Navigation';
import { Hero3D } from '@/components/Hero3D';
import { Services } from '@/pages/Services';
import { CaseStudies } from '@/pages/CaseStudies';
import { About } from '@/pages/About';
import { TrustedBySection } from '@/components/TrustedBySection';
import { Contact } from '@/pages/Contact';
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
      <TrustedBySection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
