import type { Metadata } from "next";

import { getExperience } from "@/lib/content";
import { PageShell } from "@/components/page-shell";
import { ExperienceTimeline } from "@/components/experience-timeline";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Roles, responsibilities, tech stacks, and measurable achievements across my career.",
};

export default function ExperiencePage() {
  const experience = getExperience();

  return (
    <PageShell
      eyebrow="Experience"
      title="Where I've made an impact"
      description="A track record of shipping reliable systems and measurable outcomes."
    >
      <ExperienceTimeline items={experience} />
    </PageShell>
  );
}
