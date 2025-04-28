
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Bara Norbert. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <a href="#home" className="text-sm text-muted-foreground hover:text-[#9b87f5] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm text-muted-foreground hover:text-[#9b87f5] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-sm text-muted-foreground hover:text-[#9b87f5] transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-muted-foreground hover:text-[#9b87f5] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
        <p className="text-xs text-center text-muted-foreground/70 mt-8">
          Designed and built with React, Tailwind CSS, and shadcn/ui
        </p>
      </div>
    </footer>
  );
};

export default Footer;
