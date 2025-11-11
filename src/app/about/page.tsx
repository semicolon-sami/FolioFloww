import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about my background, education, and passion for technology.',
};

export default function AboutPage() {
    const profileImage = PlaceHolderImages.find(p => p.id === 'about-profile');

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        <div className="fade-in-up md:col-span-1">
            {profileImage && (
                <Image
                    src={profileImage.imageUrl}
                    alt={profileImage.description}
                    data-ai-hint={profileImage.imageHint}
                    width={500}
                    height={500}
                    className="aspect-square w-full rounded-lg object-cover shadow-lg"
                />
            )}
        </div>
        <div className="fade-in-up animation-delay-200 md:col-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About Me
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            I am a Computer Science undergraduate with a deep passion for web technologies, backend systems, and data-driven solutions. My journey in tech started with a curiosity for how things work, which quickly evolved into a drive to build meaningful applications.
          </p>
          <div className="mt-8 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-primary">Education</h2>
              <p className="mt-2 text-muted-foreground">
                <strong>B.Tech in Computer Science & Engineering</strong><br />
                [Your University Name], [Expected Graduation Year]
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-primary">My Interests</h2>
              <p className="mt-2 text-muted-foreground">
                Beyond coding, I'm an avid problem-solver who enjoys tackling challenges on platforms like LeetCode. I am also a firm believer in the power of open-source and enjoy contributing to projects that make a difference. When I'm not at my computer, you can find me exploring new technologies or reading up on the latest trends in software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
