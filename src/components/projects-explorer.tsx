"use client";

import * as React from "react";
import { Search } from "lucide-react";

import type { Project } from "@/types/content";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { ProjectCard } from "@/components/project-card";

interface ProjectsExplorerProps {
  projects: Project[];
  tags: string[];
}

export function ProjectsExplorer({ projects, tags }: ProjectsExplorerProps) {
  const [query, setQuery] = React.useState("");
  const [activeTag, setActiveTag] = React.useState<string>("All");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesTag =
        activeTag === "All" || project.tags.includes(activeTag);
      if (!matchesTag) return false;
      if (!q) return true;
      const haystack = [
        project.title,
        project.tagline,
        project.description,
        ...project.stack,
        ...project.tags,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [projects, query, activeTag]);

  const allTags = React.useMemo(() => ["All", ...tags], [tags]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
            className="pl-9"
            aria-label="Search projects"
          />
        </div>

        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by tag">
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              role="tab"
              aria-selected={activeTag === tag}
              onClick={() => setActiveTag(tag)}
              className={cn(
                "rounded-full border px-3 py-1 text-sm transition-colors",
                activeTag === tag
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:text-foreground",
              )}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={i < 3}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed py-16 text-center">
          <p className="text-sm text-muted-foreground">
            No projects match your search.
          </p>
        </div>
      )}
    </div>
  );
}
