
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  inProgress?: boolean;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Full-Stack Events Manager",
      description: "A web application with Vue frontend and Django REST API backend, integrated with PostgreSQL database. Built using modern development practices with Vite.",
      tech: ["Vue", "Django REST API", "PostgreSQL", "Vite"],
      inProgress: true,
    },
    {
      title: "Hospital Management Application",
      description: "A WinUI application using C# and MVVM architecture, working in a team environment with defined milestones. Implements complex business logic for hospital management.",
      tech: ["C#", "WinUI", "MVVM"],
      inProgress: true,
    },
    {
      title: "Toy Language Interpreter",
      description: "A language interpreter developed in Java, implementing lexical analysis and interpretation phases. Demonstrates understanding of compiler design principles.",
      tech: ["Java", "Compiler Design"],
    },
    {
      title: "Concurrent Client Chat Application",
      description: "A console-based chat application supporting multiple concurrent clients, implemented in Python with socket programming and threading. Focuses on handling race conditions and ensuring thread safety.",
      tech: ["Python", "Sockets", "Threading"],
    },
    {
      title: "Snake Game",
      description: "A console-based Snake game developed in Python, implementing game mechanics, collision detection, and score tracking.",
      tech: ["Python", "Game Development"],
    },
    {
      title: "Unity Chess Variant",
      description: "A custom chess variant designed and implemented using Unity game engine. Applied object-oriented design principles and game development patterns.",
      tech: ["Unity", "C#", "Game Development"],
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <h2 className="section-heading">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, index) => (
            <Card key={project.title} className="project-card border border-border/50 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                        <Github className="h-5 w-5 text-muted-foreground hover:text-[#9b87f5] transition-colors" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Project">
                        <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-[#9b87f5] transition-colors" />
                      </a>
                    )}
                  </div>
                </div>
                {project.inProgress && (
                  <Badge variant="outline" className="text-xs border-[#9b87f5] text-[#9b87f5] mt-2 w-fit">In Progress</Badge>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
