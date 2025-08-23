import { useState } from 'react';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
];

export const Navigation = () => {
  const [activeItem, setActiveItem] = useState('Home');

  const scrollToSection = (href: string, name: string) => {
    setActiveItem(name);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-8 right-8 z-40 bg-surface/80 backdrop-blur-sm border border-chrome-mid/20 rounded-full px-6 py-3">
      <ul className="flex space-x-8">
        {navItems.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => scrollToSection(item.href, item.name)}
              className={`
                font-light tracking-wide transition-all duration-300 relative
                ${activeItem === item.name 
                  ? 'text-chrome-start glow-text' 
                  : 'text-muted-foreground hover:text-foreground'
                }
                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 
                after:w-0 after:h-0.5 after:bg-gradient-chrome after:transition-all after:duration-300
                hover:after:w-full
              `}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};