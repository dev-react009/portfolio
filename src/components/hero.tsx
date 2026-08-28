import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "@/components/particles-background";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <ParticlesBackground />
      <div className="container-page relative z-10 flex min-h-[calc(100vh-4rem)] flex-col justify-center py-20">
        <div className="max-w-3xl space-y-8">
        <div className="space-y-4">
          <p className="text-sm font-medium text-muted-foreground">
            {siteConfig.role} · {siteConfig.location}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {siteConfig.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button asChild>
            <Link href="/projects">
              View Projects
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Download className="size-4" />
              Download Resume
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-5 pt-2">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="size-4" />
            GitHub
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="size-4" />
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="size-4" />
            Email
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}
