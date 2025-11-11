import { SOCIALS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download, Linkedin, Github, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resume & Links',
  description: 'Download my resume and find links to my professional profiles.',
};

const iconMap = {
  'LinkedIn': Linkedin,
  'GitHub': Github,
  'Email': Mail,
};

export default function ResumePage() {
    const qrCodeImage = PlaceHolderImages.find(p => p.id === 'resume-qr-code');

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Resume & Links
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Download my resume or connect with me through my online profiles.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="fade-in-up">
            <Card className="flex h-full flex-col items-center justify-center p-8 text-center">
                <Download className="h-16 w-16 text-primary" />
                <h2 className="mt-4 text-2xl font-semibold">Download My Resume</h2>
                <p className="mt-2 text-muted-foreground">
                    Get a copy of my full resume in PDF format.
                </p>
                <Button asChild className="mt-6" size="lg">
                    <a href="/resume.pdf" download="YourName_Resume.pdf">
                        Download PDF
                    </a>
                </Button>
            </Card>
        </div>

        <div className="fade-in-up animation-delay-200">
            <Card className="flex h-full flex-col items-center justify-center p-8 text-center">
                {qrCodeImage && (
                    <Image
                        src={qrCodeImage.imageUrl}
                        alt="Resume QR Code"
                        data-ai-hint={qrCodeImage.imageHint}
                        width={150}
                        height={150}
                        className="rounded-md"
                    />
                )}
                <h2 className="mt-4 text-2xl font-semibold">Scan Me</h2>
                <p className="mt-2 text-muted-foreground">
                    Scan the QR code to view my resume on your mobile device.
                </p>
            </Card>
        </div>
      </div>

      <div className="mt-16 text-center fade-in-up animation-delay-400">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Connect With Me
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
            {SOCIALS.map((social) => {
                const Icon = iconMap[social.name as keyof typeof iconMap] || social.icon;
                return (
                    <Button key={social.name} variant="outline" size="lg" asChild>
                        <Link href={social.url} target="_blank" rel="noopener noreferrer">
                            <Icon className="mr-2 h-5 w-5" />
                            {social.name}
                        </Link>
                    </Button>
                )
            })}
        </div>
      </div>
    </div>
  );
}
