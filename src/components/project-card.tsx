import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { PROJECTS } from '@/lib/data';

type ProjectCardProps = {
  project: (typeof PROJECTS)[0];
};

export function ProjectCard({ project }: ProjectCardProps) {
  const projectImage = PlaceHolderImages.find(p => p.id === project.imagePlaceholderId);

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      {projectImage && (
        <div className="aspect-video overflow-hidden">
            <Image
                src={projectImage.imageUrl}
                alt={project.title}
                data-ai-hint={projectImage.imageHint}
                width={600}
                height={400}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
        </div>
      )}
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" asChild>
          <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">Live Demo</Link>
        </Button>
        <Button asChild>
          <Link href={`/projects/${project.slug}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
