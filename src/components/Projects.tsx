
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
      title: "E-Commerce Hybrid Recommendation System",
      description: "Engineered a scalable hybrid recommendation engine integrating Alternating Least Squares (ALS) collaborative filtering and GRU neural networks for session-based modeling. Developed a price-adaptive re-ranking layer to align recommendations with user affordability constraints, significantly increasing NDCG and catalog recall. Architected a containerized data flow, utilizing Spark for batch processing and a Spring Boot REST API backed by PostgreSQL and Redis for low-latency delivery.",
      tech: ["Java", "Apache Spark", "Spring Boot", "Redis", "PostgreSQL"],
    },
    {
      title: "Fixar Marketplace Platform",
      description: "Developing a dual-language tradesperson marketplace utilizing Next.js App Router for SEO-optimized SSR and a Fastify backend. Architected an ad-style listing system for tradespeople, managing relational data and queries with Prisma and PostgreSQL. Implemented real-time bidirectional chat messaging between clients and tradespeople utilizing Socket.io.",
      tech: ["Next.js 14", "Fastify", "Prisma", "PostgreSQL", "Socket.io"],
      inProgress: true,
    },
    {
      title: "Events Manager",
      description: "Developed a scalable, production-ready web application for event management with a Vue frontend and Django backend. Engineered advanced features including real-time updates via WebSockets and chunked file uploads for large media. Implemented secure user authentication with role-based access control and an automated security monitoring background thread.",
      tech: ["Vue 3", "TypeScript", "Django REST API", "PostgreSQL", "Redis"],
    },
    {
      title: "Hospital Management Application",
      description: "Built a comprehensive desktop application utilizing C# and the MVVM architectural pattern. Collaborated effectively in a team environment to hit defined milestones, successfully implementing complex business logic.",
      tech: ["C#", "WinUI", "MVVM Architecture"],
    }
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
