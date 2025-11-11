import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="fade-in-up text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Your Name
          </h1>
          <p className="fade-in-up animation-delay-200 mt-6 text-lg leading-8 text-primary font-semibold">
            Full Stack Developer | CSE Undergrad | Building real-world web solutions
          </p>
          <p className="fade-in-up animation-delay-400 mt-4 text-muted-foreground">
            A passionate Computer Science student with a focus on full-stack web development and data science. I thrive on building efficient, scalable, and user-friendly applications that solve real-world problems.
          </p>
          <div className="fade-in-up animation-delay-600 mt-10 flex items-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="link" size="lg">
              <Link href="/contact">Contact Me <span aria-hidden="true">→</span></Link>
            </Button>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  data-ai-hint={heroImage.imageHint}
                  width={2432}
                  height={1442}
                  className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
