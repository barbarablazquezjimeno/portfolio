import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    /** Same value in ES and EN pairs for language switching */
    pairSlug: z.string(),
    /** Path under `public/` (e.g. `/images/projects/caso.webp`) or absolute URL */
    cover: z.string().optional(),
    /** Short alt text for the cover (accessibility); omit only if the image is decorative */
    coverAlt: z.string().optional(),
    overline: z.string().optional(),
    cta: z.string().optional(),
    externalUrl: z.string().url().optional(),
    externalLabel: z.string().optional(),
    problem: z.string().optional(),
    solution: z.string().optional(),
    tools: z.array(z.string()).optional(),
    skills: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const sitePages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sitePages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

/** Career timeline entries embedded in About (`content/experience/es/` and `en/`). */
const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    order: z.number(),
    /** Unique across all experience files (ES and EN); Astro uses it as the entry id. Anchors: `exp-step-{slug}`. */
    slug: z.string(),
    range: z.string(),
    title: z.string(),
    subtitle: z.string(),
    company: z.string(),
    meta: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  projects,
  sitePages,
  experience,
};
