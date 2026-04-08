/**
 * Textos de la interfaz (menús, botones, accesibilidad, meta…).
 * Edita los JSON: `strings.es.json` y `strings.en.json`.
 * Los archivos Markdown (`content/`) son el contenido largo de casos y páginas.
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

export function pathForLocale(locale: Locale, page: 'home' | 'projects' | 'about' | 'contact'): string {
  const base = import.meta.env.BASE_URL || '/';
  const root = base.endsWith('/') ? base : `${base}/`;
  if (page === 'home') return `${root}${locale}/`;
  if (locale === 'es') {
    if (page === 'projects') return `${root}es/proyectos/`;
    if (page === 'about') return `${root}es/sobre-mi/`;
    return `${root}es/contacto/`;
  }
  if (page === 'projects') return `${root}en/projects/`;
  if (page === 'about') return `${root}en/about/`;
  return `${root}en/contact/`;
}

export function projectDetailPath(locale: Locale, slug: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const root = base.endsWith('/') ? base : `${base}/`;
  if (locale === 'es') return `${root}es/proyectos/${slug}/`;
  return `${root}en/projects/${slug}/`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}
