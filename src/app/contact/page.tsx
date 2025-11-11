import { ContactForm } from '@/components/contact-form';
import { SOCIALS } from '@/lib/data';
import type { Metadata } from 'next';
import { Mail, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Get in touch with me through the contact form or my social media profiles.',
};

const socialIconMap = {
    'GitHub': Github,
    'LinkedIn': Linkedin,
    'Email': Mail,
}

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          I'm open to discussing new opportunities and collaborations.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div className="fade-in-up">
            <ContactForm />
        </div>
        <div className="fade-in-up animation-delay-200">
            <h2 className="text-2xl font-semibold text-primary">Contact Information</h2>
            <p className="mt-2 text-muted-foreground">
                You can also reach me directly through the following channels.
            </p>
            <div className="mt-6 space-y-4">
                {SOCIALS.map(social => {
                    const Icon = socialIconMap[social.name as keyof typeof socialIconMap];
                    return (
                        <div key={social.name} className="flex items-center gap-4">
                            <div className="rounded-full bg-primary/10 p-3">
                                <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold">{social.name}</h3>
                                <Button variant="link" asChild className="p-0 h-auto">
                                <Link href={social.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                                    {social.url.replace('mailto:', '')}
                                </Link>
                                </Button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
      </div>
    </div>
  );
}
