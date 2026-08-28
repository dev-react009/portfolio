# Portfolio

A modern, production-quality developer portfolio built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui**.

## Features

- Clean, minimal, recruiter-focused design
- Light / dark mode (system-aware)
- Fully responsive with accessible navigation
- Subtle Framer Motion animations
- SEO metadata, Open Graph, sitemap, and robots.txt
- Image optimization and lazy loading
- Strict TypeScript

## Content as a mini CMS

All content is JSON-driven — **add new content without touching component code**:

| File | Purpose |
| --- | --- |
| `src/content/projects.json` | Projects list + full detail pages |
| `src/content/experience.json` | Work experience timeline |
| `src/content/skills.json` | Categorized skills |
| `src/content/profile.json` | About page content |
| `src/lib/site.ts` | Name, role, links, resume URL |

Add a new object to `projects.json` and a dynamic page at `/projects/<slug>` is generated automatically (see `generateStaticParams`).

## Getting started

```bash
pnpm install   # or npm install / yarn
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Add your resume at `public/resume.pdf` and an OG image at `public/og.png`.

## Scripts

- `pnpm dev` — start dev server
- `pnpm build` — production build
- `pnpm start` — run production build
- `pnpm lint` — lint
- `pnpm typecheck` — type-check without emitting

## Structure

```
src/
  app/            # App Router pages, sitemap, robots, API route
  components/      # Reusable + shadcn/ui components
  content/        # JSON content (the CMS)
  lib/            # Content loaders, site config, utils
  types/          # Shared TypeScript types
```
