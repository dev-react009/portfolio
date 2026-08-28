import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

import {
  getProjectBySlug,
  getProjectSlugs,
} from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} · ${siteConfig.name}`,
      description: project.description,
      images: [{ url: project.coverImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.coverImage],
    },
  };
}

function DetailBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const { detail, overview } = project;

  return (
    <article className="container-page py-16 sm:py-20">
      <Button variant="ghost" size="sm" asChild className="mb-8 -ml-2">
        <Link href="/projects">
          <ArrowLeft className="size-4" />
          Back to projects
        </Link>
      </Button>

      <header className="max-w-3xl space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="font-normal">
              {tag}
            </Badge>
          ))}
          <span className="text-sm text-muted-foreground">{project.year}</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {project.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.links.demo ? (
            <Button asChild>
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer noopener"
              >
                <ExternalLink className="size-4" />
                Live Demo
              </a>
            </Button>
          ) : null}
          {project.links.github ? (
            <Button variant="outline" asChild>
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Github className="size-4" />
                View Code
              </a>
            </Button>
          ) : null}
        </div>
      </header>

      <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-xl border bg-muted">
        <Image
          src={project.coverImage}
          alt={`${project.title} cover`}
          fill
          sizes="(max-width: 1024px) 100vw, 900px"
          className="object-cover"
          priority
        />
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-3">
        <div className="space-y-10 lg:col-span-2">
          <DetailBlock title="Problem statement">
            <p className="leading-relaxed text-muted-foreground">
              {detail.problem}
            </p>
          </DetailBlock>

          <DetailBlock title="Solution">
            <p className="leading-relaxed text-muted-foreground">
              {detail.solution}
            </p>
          </DetailBlock>

          <DetailBlock title="Architecture overview">
            <p className="leading-relaxed text-muted-foreground">
              {overview.architecture}
            </p>
            <pre className="mt-4 overflow-x-auto rounded-lg border bg-muted/50 p-4 text-sm text-muted-foreground">
              <code className="font-mono">{detail.architectureDiagram}</code>
            </pre>
          </DetailBlock>

          <DetailBlock title="Database design">
            <p className="leading-relaxed text-muted-foreground">
              {detail.databaseDesign}
            </p>
          </DetailBlock>

          <DetailBlock title="API flow">
            <p className="leading-relaxed text-muted-foreground">
              {detail.apiFlow}
            </p>
          </DetailBlock>

          <DetailBlock title="Features">
            <ul className="space-y-2 text-muted-foreground">
              {overview.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span aria-hidden className="text-foreground">
                    —
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </DetailBlock>

          <DetailBlock title="Challenges solved">
            <ul className="space-y-2 text-muted-foreground">
              {overview.challenges.map((c) => (
                <li key={c} className="flex gap-2">
                  <span aria-hidden className="text-foreground">
                    —
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </DetailBlock>

          {project.screenshots.length > 0 ? (
            <DetailBlock title="Screenshots">
              <div className="grid gap-4 sm:grid-cols-2">
                {project.screenshots.map((src, i) => (
                  <div
                    key={src}
                    className="relative aspect-[16/10] overflow-hidden rounded-lg border bg-muted"
                  >
                    <Image
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 400px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </DetailBlock>
          ) : null}

          <DetailBlock title="Lessons learned">
            <ul className="space-y-2 text-muted-foreground">
              {detail.lessonsLearned.map((l) => (
                <li key={l} className="flex gap-2">
                  <span aria-hidden className="text-foreground">
                    —
                  </span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </DetailBlock>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-6 rounded-xl border p-6">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Tech stack</h3>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="font-normal"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <Separator />
            <div className="space-y-3 text-sm">
              {project.links.demo ? (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ExternalLink className="size-4" />
                  Live Demo
                </a>
              ) : null}
              {project.links.github ? (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="size-4" />
                  Source Code
                </a>
              ) : null}
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
