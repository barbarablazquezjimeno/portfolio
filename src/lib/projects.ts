import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '@/i18n/ui';

export type ProjectEntry = CollectionEntry<'projects'>;

const prefix: Record<Locale, string> = { es: 'es/', en: 'en/' };

/** URL-safe slug without .md (Astro content ids may include the extension). */
export function projectSlugFromId(id: string, locale: Locale): string {
  const p = prefix[locale];
  const rest = id.startsWith(p) ? id.slice(p.length) : id;
  return rest.replace(/\.md$/i, '');
}

export async function listProjects(locale: Locale, opts?: { featuredOnly?: boolean }): Promise<ProjectEntry[]> {
  const p = prefix[locale];
  let items = await getCollection('projects', ({ id, data }) => id.startsWith(p) && !data.draft);
  if (opts?.featuredOnly) {
    items = items.filter((e) => e.data.featured);
  }
  return items.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getProjectBySlug(locale: Locale, slug: string): Promise<ProjectEntry | undefined> {
  const base = slug.replace(/\.md$/i, '');
  const p = prefix[locale];
  const items = await getCollection('projects');
  return items.find((e) => projectSlugFromId(e.id, locale) === base);
}

export async function findProjectTranslation(pairSlug: string, locale: Locale): Promise<ProjectEntry | undefined> {
  const items = await getCollection('projects', ({ data }) => data.pairSlug === pairSlug && !data.draft);
  const p = prefix[locale];
  return items.find((e) => e.id.startsWith(p));
}
