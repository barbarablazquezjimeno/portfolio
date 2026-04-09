/**
 * UI copy (nav, buttons, a11y, meta). Source of truth: `strings.es.json` / `strings.en.json`.
 * Long-form content lives in Markdown under `content/`.
 */
import stringsEs from './strings.es.json';
import stringsEn from './strings.en.json';

export type Locale = 'es' | 'en';

export const defaultLocale: Locale = 'es';

export const locales: Locale[] = ['es', 'en'];

export const ui = {
  es: stringsEs,
  en: stringsEn,
} as const;

/** One-page anchors per locale (single HTML document per language). */
export function pathForLocale(locale: Locale, page: 'home' | 'projects' | 'about' | 'contact' | 'root'): string {
  const base = import.meta.env.BASE_URL || '/';
  const root = base.endsWith('/') ? base : `${base}/`;
  const home = `${root}${locale}/`;
  if (page === 'root') return home;
  if (page === 'home') return `${home}#top`;
  if (page === 'projects') return `${home}#projects`;
  if (page === 'about') return `${home}#about`;
  return `${home}#contact`;
}

/** Dedicated project case URL (localized). */
export function projectDetailPath(locale: Locale, slug: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const root = base.endsWith('/') ? base : `${base}/`;
  const segment = locale === 'es' ? `es/proyectos/${slug}` : `en/projects/${slug}`;
  return `${root}${segment}/`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}
