import React from 'react';
import { Separator } from '@/components/ui/separator';

const About = () => {
  // skills categorized
  const skills = {
    languages: [
      { name: 'Python', highlight: true },
      { name: 'Java', highlight: true },
      { name: 'C/C++', highlight: true },
      { name: 'C#', highlight: true },
      { name: 'JavaScript', highlight: true },
      { name: 'TypeScript', highlight: true },
      { name: 'SQL', highlight: true },
      { name: 'Bash', highlight: true }
    ],
    frontend: [
      { name: 'Vue', highlight: true },
      { name: 'React', highlight: true },
      { name: 'Next.js', highlight: true },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'HTML', highlight: true }
    ],
    backendAndDatabases: [
      { name: 'Spring Boot', highlight: true },
      { name: 'Django', highlight: true },
      { name: 'Fastify', highlight: true },
      { name: 'ASP.NET Core', highlight: true },
      { name: 'PostgreSQL', highlight: true },
      { name: 'Redis', highlight: true },
      { name: 'MongoDB', highlight: true }
    ],
    toolsAndDevops: [
      { name: 'Apache Spark', highlight: true },
      { name: 'Git', highlight: true },
      { name: 'Docker', highlight: true },
      { name: 'Prisma', highlight: true },
      { name: 'Vercel', highlight: true },
      { name: 'Unix Shell', highlight: true }
    ]
  };

  const SkillCategory = ({ title, skills }: { 
    title: string, 
    skills: (string | { name: string; highlight: boolean; })[] 
  }) => (
    <div className="space-y-3">
      <h4 className="text-lg font-semibold">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => {
          const isHighlighted = typeof skill === 'object' && skill.highlight;
          const skillName = typeof skill === 'object' ? skill.name : skill;
          
          return (
            <span 
              key={skillName} 
              className={`tech-tag ${
                isHighlighted ? 'bg-[#9b87f5]/20 text-[#9b87f5] font-semibold' : ''
              }`}
            >
              {skillName}
            </span>
          );
        })}
      </div>
    </div>
  );

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6 animate-fade-in animate-delay-100">
            <p className="text-lg">
              I'm a Computer Science student with advanced full-stack development skills and experience across numerous programming paradigms. 
              I've worked on diverse projects ranging from web applications to game development.
            </p>
            <p className="text-lg">
              I'm passionate about solving real world problems and expanding my technical expertise with up-coming technologies.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Education</h3>
              
              <div>
                <h4 className="font-medium">Universitatea Babeș-Bolyai din Cluj-Napoca <span className="text-muted-foreground">(2023-present)</span></h4>
                <p className="text-muted-foreground">BSc Computer Science</p>
              </div>
              
              <div>
                <h4 className="font-medium">Colegiul Național Nagy Mózes din Targu Secuiesc <span className="text-muted-foreground">(Graduated 2023)</span></h4>
                <ul className="text-muted-foreground list-disc list-inside">
                  <li>2nd Prize in OTI 2023 (C#)</li>
                  <li>Participated in numerous regional mathematics and programming competitions</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Languages</h3>
              <ul className="text-muted-foreground">
                <li>Hungarian (Native)</li>
                <li>English (Cambridge C1 Certified)</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-8 animate-fade-in animate-delay-200">
            <h3 className="text-xl font-semibold">Technical Skills</h3>
            
            <div className="space-y-6">
              <SkillCategory title="Programming Languages" skills={skills.languages} />
              <Separator />
              <SkillCategory title="Frontend" skills={skills.frontend} />
              <Separator />
              <SkillCategory title="Backend & Databases" skills={skills.backendAndDatabases} />
              <Separator />
              <SkillCategory title="Tools & DevOps" skills={skills.toolsAndDevops} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
