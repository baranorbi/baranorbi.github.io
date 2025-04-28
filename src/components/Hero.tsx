
import React, { useEffect, useState } from 'react';
import { ArrowDownIcon, Download, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fetchGreeting } from '@/utils/greetingService';
import { useQuery } from '@tanstack/react-query';

const Hero = () => {
  const { data: greeting = "Hi" } = useQuery({
    queryKey: ['greeting'],
    queryFn: fetchGreeting,
  });

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzBhMGExMCI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIwLjgiIGZpbGw9IiMyMDIwMzAiPjwvY2lyY2xlPgo8L3N2Zz4=')] opacity-5"></div>
      
      <div className="container px-4 md:px-6 space-y-8 relative z-10 animate-fade-in">
        <div className="space-y-4 text-center md:text-left max-w-3xl mx-auto md:mx-0">
          <div className="flex items-center justify-center md:justify-start gap-2 text-[#9b87f5]">
            <Server className="w-4 h-4" />
            <p className="font-mono">{greeting}, my name is</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">Bara Norbert</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground">
            Computer Science Student &
            <span className="text-[#9b87f5]"> Developer</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
            I'm a full-stack developer with experience in a wide range of technologies,
            creating everything from web applications to game development.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 pt-6 justify-center md:justify-start">
            <Button asChild>
              <a href="#projects">View My Projects</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="/bara_norbert_cv.pdf" download>
                <Download className="mr-2" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-[#9b87f5] transition-colors"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDownIcon size={24} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
