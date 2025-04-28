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
      { name: 'Assembly (x86/x86-64)', highlight: true },
      { name: 'Prolog', highlight: true },
      { name: 'Lisp', highlight: true },
      { name: 'MATLAB', highlight: true },
      { name: 'Bash', highlight: true },
      { name: 'SQL', highlight: true },
      { name: 'Lua', highlight: true },
      { name: 'AWK', highlight: true }
    ],
    frontend: [
      { name: 'React', highlight: true },
      { name: 'Vue', highlight: true },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'HTML', highlight: true },
      { name: 'Markdown', highlight: true },
      { name: 'CommonMark', highlight: true }
    ],
    backend: [
      { name: 'Django', highlight: true },
      { name: 'ASP.NET Core', highlight: true },
      { name: 'Django REST API', highlight: true }
    ],
    databases: [
      { name: 'PostgreSQL', highlight: true },
      { name: 'SQLite', highlight: true },
      { name: 'Microsoft SQL Server', highlight: true },
      { name: 'MongoDB', highlight: true }
    ],
    other: [
      { name: 'Entity Framework', highlight: true },
      { name: 'TypeORM', highlight: true },
      { name: 'Git', highlight: true },
      { name: 'Vercel', highlight: true },
      { name: 'Unix Shell', highlight: true },
      { name: 'npm', highlight: true },
      { name: 'pnpm', highlight: true },
      { name: 'PyTest', highlight: true },
      { name: 'Vitest', highlight: true },
      { name: 'Moq', highlight: true },
      { name: 'Firebase', highlight: true },
      { name: 'Unity', highlight: true }
    ],
    ml: [
      { name: 'TensorFlow', highlight: true },
      { name: 'PyTorch', highlight: true },
      { name: 'scikit-learn', highlight: true },
      { name: 'pandas', highlight: true },
      { name: 'NumPy', highlight: true }
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
                  <li>Participated in numerous mathematics and programming competitions</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Languages</h3>
              <ul className="text-muted-foreground">
                <li>Hungarian (Native)</li>
                <li>English (Cambridge C1 Certified)</li>
                <li>Romanian (Comprehension)</li>
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
              <SkillCategory title="Backend" skills={skills.backend} />
              <Separator />
              <SkillCategory title="Databases" skills={skills.databases} />
              <Separator />
              <SkillCategory title="ML/Data Science" skills={skills.ml} />
              <Separator />
              <SkillCategory title="Other Tools & Technologies" skills={skills.other} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
