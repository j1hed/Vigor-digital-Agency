import { useState } from "react";

const accordionItems = [
  {
    id: 1,
    title: "Branding & Design ",
    imageUrl:
      "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Content Management",
    imageUrl:
      "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Marketing Strategy",
    imageUrl:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "AI Solutions",
    imageUrl:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2090&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Web Development",
    imageUrl:
      "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop",
  },
];

// Accordion Item
const AccordionItem = ({ item, isActive, onMouseEnter }) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? "w-[400px]" : "w-[60px]"}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/400x450/2d3748/ffffff?text=Image+Error";
        }}
      />

      {/* Overlay & Title */}
      <div className="absolute inset-0 bg-black/40 flex items-end p-4">
        {isActive && (
          <h3 className="text-lg text-white font-light tracking-wide">
            {item.title}
          </h3>
        )}
      </div>
    </div>
  );
};

export const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="about" className="py-32 px-8 bg-gradient-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Accordion Image Effect */}
          <div className="w-full flex flex-row items-center justify-center gap-4 overflow-x-auto p-4">
            {accordionItems.map((item, index) => (
              <AccordionItem
                key={item.id}
                item={item}
                isActive={index === activeIndex}
                onMouseEnter={() => setActiveIndex(index)}
              />
            ))}
          </div>

          {/* Right side - Content (unchanged) */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-thin text-chrome tracking-wide mb-6">
                We are VIGOR
              </h2>
              <div className="w-16 h-px bg-gradient-chrome mb-8" />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p className="animate-fade-in">
                We craft digital experiences that inspire, innovate, and
                transform businesses for the future. Our team of visionaries
                combines cutting-edge technology with artistic precision.
              </p>

              <p className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                Founded on the principle that exceptional design meets
                intelligent functionality, we push the boundaries of what's
                possible in the digital realm.
              </p>

              <p className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
                Every project is an opportunity to create something
                extraordinary—something that doesn't just meet expectations, but
                redefines them entirely.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-chrome-mid/20">
              <div
                className="text-center animate-fade-in"
                style={{ animationDelay: "0.9s" }}
              >
                <div className="text-2xl font-light text-chrome-start">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div
                className="text-center animate-fade-in"
                style={{ animationDelay: "1.2s" }}
              >
                <div className="text-2xl font-light text-chrome-start">15+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div
                className="text-center animate-fade-in"
                style={{ animationDelay: "1.5s" }}
              >
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
