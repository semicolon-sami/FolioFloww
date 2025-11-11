import { SKILLS } from '@/lib/data';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Code, Database, Server, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'My Skills',
  description: 'A list of my technical skills in frontend, backend, data science, and tools.',
};

const categoryIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Frontend: Code,
  Backend: Server,
  "Data Science": Database,
  Tools: Wrench,
};

export default function SkillsPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Technical Skills
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A summary of the technologies I work with.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((category, index) => {
          const Icon = categoryIcons[category.name];
          return (
            <div
              key={category.name}
              className="fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card>
                <CardHeader className="flex-row items-center gap-4">
                  {Icon && <Icon className="h-8 w-8 text-primary" />}
                  <CardTitle>{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <TooltipProvider>
                    <div className="flex flex-wrap gap-4">
                      {category.skills.map((skill) => (
                        <Tooltip key={skill.name}>
                          <TooltipTrigger>
                            <div className="flex flex-col items-center gap-2 rounded-lg bg-secondary p-4 transition-transform hover:scale-110">
                              <skill.icon className="h-8 w-8" />
                              <span className="text-sm font-medium">{skill.name}</span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </TooltipProvider>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
