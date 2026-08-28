import type { Metadata } from "next";

import { getAllTags, getProjects } from "@/lib/content";
import { PageShell } from "@/components/page-shell";
import { ProjectsExplorer } from "@/components/projects-explorer";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected engineering projects with architecture, features, and the problems they solve.",
};

export default function ProjectsPage() {
  const projects = getProjects();
  const tags = getAllTags();

  return (
    <PageShell
      eyebrow="Projects"
      title="Things I've built"
      description="Search and filter through systems I've designed and shipped."
    >
      <ProjectsExplorer projects={projects} tags={tags} />
    </PageShell>
  );
}
