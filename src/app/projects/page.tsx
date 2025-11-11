import { ProjectCard } from '@/components/project-card';
import { PROJECTS } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Projects',
  description: 'A collection of my projects in web development, data science, and more.',
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          My Projects
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Here are some of the projects I've worked on.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <div
            key={project.slug}
            className="fade-in-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
