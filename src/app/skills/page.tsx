import type { Metadata } from "next";

import { getSkills } from "@/lib/content";
import { PageShell } from "@/components/page-shell";
import { SkillsGrid } from "@/components/skills-grid";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technologies and tools I use across frontend, backend, databases, cloud, DevOps, and AI.",
};

export default function SkillsPage() {
  const skills = getSkills();

  return (
    <PageShell
      eyebrow="Skills"
      title="Tools of the trade"
      description="A pragmatic toolkit organized by where it fits in the stack."
    >
      <SkillsGrid skills={skills} />
    </PageShell>
  );
}
