import experienceData from "@/content/experience.json";
import projectsData from "@/content/projects.json";
import skillsData from "@/content/skills.json";
import profileData from "@/content/profile.json";
import type {
  Experience,
  Profile,
  Project,
  SkillCategory,
} from "@/types/content";

export function getProjects(): Project[] {
  return (projectsData as Project[])
    .slice()
    .sort((a, b) => Number(b.featured) - Number(a.featured) || b.year - a.year);
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((p) => p.featured);
}

export function getProjectSlugs(): string[] {
  return (projectsData as Project[]).map((p) => p.slug);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return (projectsData as Project[]).find((p) => p.slug === slug);
}

export function getExperience(): Experience[] {
  return experienceData as Experience[];
}

export function getSkills(): SkillCategory[] {
  return skillsData as SkillCategory[];
}

export function getProfile(): Profile {
  return profileData as Profile;
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  for (const project of getProjects()) {
    for (const tag of project.tags) tags.add(tag);
  }
  return Array.from(tags).sort();
}
