
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed w-full z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold highlight-text">Bara Norbert</a>
        
        {isMobile ? (
          <>
            <button onClick={toggleMenu} aria-label="Toggle menu" className="text-foreground">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {isMenuOpen && (
              <nav className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-lg p-4 animate-fade-in">
                <ul className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        className="block py-2 nav-link font-medium text-lg"
                        onClick={toggleMenu}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a 
                      href="https://github.com/baranorbi" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block py-2 text-[#9b87f5] font-medium text-lg"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </nav>
            )}
          </>
        ) : (
          <nav>
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="nav-link font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="https://github.com/baranorbi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#9b87f5] font-medium"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
