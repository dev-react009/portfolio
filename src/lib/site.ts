export const siteConfig = {
  name: "Sriram Garapati",
  role: "Full-Stack Engineer",
  title: "Sriram Garapati — Full-Stack Engineer",
  description:
    "Full-Stack Engineer building fast, reliable, and well-architected web products. TypeScript, React, Next.js, Node.js, and cloud-native systems.",
  url: "https://sriram-garapati.vercel.app",
  ogImage: "/og.png",

  resumeUrl: "https://drive.google.com/file/d/1u1I4PCLZkSAlt-26Ogq6b9xmKZStXHY3/view?usp=drive_link",
  email: "sriram.gsr16@gmail.com",
  location: "Remote & Hybrid",
  links: {
    github: "https://github.com/dev-react009",
    linkedin: "https://www.linkedin.com/in/sriram-g-67a2001a4/",
    // twitter: "https://twitter.com/sriramgarapati",
  },
} as const;

export type SiteConfig = typeof siteConfig;

export const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Experience", href: "/experience" },
  { title: "Projects", href: "/projects" },
  { title: "Skills", href: "/skills" },
  { title: "Contact", href: "/contact" },
] as const;
