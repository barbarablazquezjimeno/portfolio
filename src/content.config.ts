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

export const collections = {
  projects,
  sitePages,
};
