export interface Experience {
  id: string;
  title: string;
  type: string;
  status: string;
  github?: string;
  description: string;
  highlights: string[];
  stack: string[];
}

export interface SkillCategory {
  category:
    | "Frontend"
    | "Backend"
    | "Database"
    | "Cloud"
    | "DevOps"
    | "AI"
    | "Tools";
  items: string[];
}

export interface ProjectLink {
  demo?: string;
  github?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  featured: boolean;
  year: number;
  coverImage: string;
  screenshots: string[];
  stack: string[];
  tags: string[];
  links: ProjectLink;
  overview: {
    architecture: string;
    features: string[];
    challenges: string[];
  };
  detail: {
    problem: string;
    solution: string;
    architectureDiagram: string;
    databaseDesign: string;
    apiFlow: string;
    lessonsLearned: string[];
  };
}

export interface Profile {
  journey: string[];
  mindset: string[];
  learning: string[];
  goals: string[];
}
