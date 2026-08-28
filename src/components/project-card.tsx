import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

import type { Project } from "@/types/content";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-colors hover:border-foreground/20">
      <Link
        href={`/projects/${project.slug}`}
        className="relative block aspect-[16/9] overflow-hidden bg-muted"
        aria-label={`View ${project.title}`}
      >
        <Image
          src={project.coverImage}
          alt={`${project.title} screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          priority={priority}
        />
      </Link>

      <CardContent className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1 font-semibold tracking-tight hover:underline"
            >
              {project.title}
              <ArrowUpRight className="size-4 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
            <p className="text-sm text-muted-foreground">{project.tagline}</p>
          </div>
          <span className="shrink-0 text-xs text-muted-foreground">
            {project.year}
          </span>
        </div>

        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-auto space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="secondary" className="font-normal">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-1 text-sm">
            {project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <ExternalLink className="size-3.5" />
                Live Demo
              </a>
            ) : null}
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="size-3.5" />
                Code
              </a>
            ) : null}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
