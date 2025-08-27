import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/', type: 'route' },
  { name: 'Services', href: '#services', type: 'anchor' },
  { name: 'Work', href: '#work', type: 'anchor' },
  { name: 'About', href: '#about', type: 'anchor' },
  { name: 'Contact', href: '#contact', type: 'anchor' },
  { name: 'Pricing', href: '/pricing', type: 'route' }
];

export const Navigation = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleAnchorClick = (href: string, name: string) => {
    setActiveItem(name);
    setIsMobileMenuOpen(false);
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = `/${href}`;
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleRouteClick = (name: string) => {
    setActiveItem(name);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-50 bg-surface/80 backdrop-blur-sm border border-chrome-mid/20 rounded-full p-3"
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-8 right-8 z-40 bg-surface/80 backdrop-blur-sm border border-chrome-mid/20 rounded-full px-6 py-3">
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              {item.type === 'route' ? (
                <Link
                  to={item.href}
                  onClick={() => handleRouteClick(item.name)}
                  className={`font-light tracking-wide transition-all duration-300 relative
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
                </Link>
              ) : (
                <button
                  onClick={() => handleAnchorClick(item.href, item.name)}
                  className={`font-light tracking-wide transition-all duration-300 relative
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
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-lg">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <div key={item.name} className="text-center">
                {item.type === 'route' ? (
                  <Link
                    to={item.href}
                    onClick={() => handleRouteClick(item.name)}
                    className={`text-2xl font-light tracking-wide transition-all duration-300
                      ${activeItem === item.name 
                        ? 'text-chrome-start glow-text' 
                        : 'text-foreground hover:text-chrome-start'
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleAnchorClick(item.href, item.name)}
                    className={`text-2xl font-light tracking-wide transition-all duration-300
                      ${activeItem === item.name 
                        ? 'text-chrome-start glow-text' 
                        : 'text-foreground hover:text-chrome-start'
                      }
                    `}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
