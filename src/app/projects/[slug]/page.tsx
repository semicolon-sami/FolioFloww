import { PROJECTS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailsPage({ params }: Props) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const projectImage = PlaceHolderImages.find(p => p.id === project.imagePlaceholderId);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <div className="fade-in-up">
        {projectImage && (
            <Image
                src={projectImage.imageUrl}
                alt={project.title}
                data-ai-hint={projectImage.imageHint}
                width={1200}
                height={800}
                className="w-full rounded-lg object-cover shadow-lg"
            />
        )}
      </div>

      <div className="mt-8">
        <h1 className="fade-in-up text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {project.title}
        </h1>

        <div className="fade-in-up animation-delay-200 mt-6 flex flex-wrap items-center gap-4">
            <Button asChild>
                <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </Link>
            </Button>
            <Button variant="secondary" asChild>
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                </Link>
            </Button>
        </div>

        <div className="mt-12 space-y-10">
            <section className="fade-in-up animation-delay-400">
                <h2 className="text-2xl font-semibold text-primary">Problem Statement</h2>
                <p className="mt-2 text-muted-foreground">{project.problem}</p>
            </section>

            <section className="fade-in-up animation-delay-400">
                <h2 className="text-2xl font-semibold text-primary">Tech Stack</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                        <Badge key={tech} variant="default">{tech}</Badge>
                    ))}
                </div>
            </section>

            <section className="fade-in-up animation-delay-600">
                <h2 className="text-2xl font-semibold text-primary">Key Features</h2>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-muted-foreground">
                    {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </section>

            <section className="fade-in-up animation-delay-600">
                <h2 className="text-2xl font-semibold text-primary">What I Learned</h2>
                <p className="mt-2 text-muted-foreground">{project.learnings}</p>
            </section>
        </div>
      </div>
    </div>
  );
}
