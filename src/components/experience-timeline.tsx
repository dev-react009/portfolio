import type { Experience } from "@/types/content";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { Github } from "lucide-react";

interface ExperienceTimelineProps {
  items: Experience[];
}

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <ol className="relative space-y-10 border-l border-border pl-8">
      {items.map((item, index) => (
        <li key={item.id} className="relative">
          <span
            className="absolute -left-[37px] top-1.5 flex size-4 items-center justify-center rounded-full border-2 border-background bg-foreground"
            aria-hidden
          />
          <FadeIn delay={index * 0.05} className="space-y-4">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.type}</p>
              </div>
              <span className="text-sm text-muted-foreground">
                {item.status}
              </span>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>

            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Highlights
              </p>
              <ul className="space-y-1.5 text-sm">
                {item.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span aria-hidden className="text-muted-foreground">
                      —
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {item.stack.map((tech) => (
                <Badge key={tech} variant="secondary" className="font-normal">
                  {tech}
                </Badge>
              ))}
            </div>

            {item.github ? (
              <a
                href={item.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="size-4" />
                View source
              </a>
            ) : null}
          </FadeIn>
        </li>
      ))}
    </ol>
  );
}
