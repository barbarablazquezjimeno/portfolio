import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '@/i18n/ui';

export type ExperienceItemEntry = CollectionEntry<'experience'>;

export async function listExperienceEntries(locale: Locale): Promise<ExperienceItemEntry[]> {
  const all = await getCollection('experience');
  const items = all.filter((e) => {
    if (e.data.draft) return false;
    // Slugs are prefixed with the locale (e.g. 'es-softtek-rm')
    return e.id.startsWith(`${locale}-`);
  });
  return items.sort((a, b) => a.data.order - b.data.order);
}
