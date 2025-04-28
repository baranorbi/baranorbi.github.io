
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in animate-delay-100">
          <p className="text-lg text-muted-foreground">
            I'm currently looking for new opportunities to collaborate and work on interesting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center pt-4">
            <a 
              href="mailto:baranorbi12@gmail.com" 
              className="flex items-center space-x-2 text-foreground hover:text-[#9b87f5] transition-colors"
            >
              <Mail size={20} />
              <span>baranorbi12@gmail.com</span>
            </a>
            
            <a 
              href="https://github.com/baranorbi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-foreground hover:text-[#9b87f5] transition-colors"
            >
              <Github size={20} />
              <span>github.com/baranorbi</span>
            </a>
            
            <a 
              href="#" 
              className="flex items-center space-x-2 text-foreground hover:text-[#9b87f5] transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
          
          <div className="pt-8">
            <Button size="lg" asChild>
              <a href="mailto:baranorbi12@gmail.com">Send an Email</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
