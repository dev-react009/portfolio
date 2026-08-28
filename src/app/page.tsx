import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getFeaturedProjects, getSkills } from "@/lib/content";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

export default function HomePage() {
  const featured = getFeaturedProjects();
  const skills = getSkills();

  return (
    <>
      <Hero />

      <section className="border-t border-border/60 py-20">
        <div className="container-page space-y-10">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Selected work"
              title="Featured projects"
              description="A few systems I've designed and shipped end to end."
            />
            <Button variant="ghost" asChild className="hidden sm:inline-flex">
              <Link href="/projects">
                All projects
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                priority={i < 3}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-20">
        <div className="container-page space-y-10">
          <SectionHeading
            eyebrow="Toolbox"
            title="Technologies I work with"
            description="A pragmatic stack chosen for reliability and speed of delivery."
          />
          <div className="flex flex-wrap gap-2">
            {skills.flatMap((group) =>
              group.items.map((item) => (
                <FadeIn key={`${group.category}-${item}`}>
                  <Badge variant="secondary" className="font-normal">
                    {item}
                  </Badge>
                </FadeIn>
              )),
            )}
          </div>
          <Button variant="outline" asChild>
            <Link href="/skills">
              Explore skills
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
