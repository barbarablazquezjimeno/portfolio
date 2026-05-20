import type { Locale } from '@/i18n/ui';

export function stripBasePath(pathname: string, baseUrl: string): string {
  const b = baseUrl.replace(/\/$/, '');
  if (!b || b === '') return pathname;
  if (pathname === b || pathname === `${b}/`) return '/';
  if (pathname.startsWith(`${b}/`)) return pathname.slice(b.length);
  return pathname;
}

export function withBasePath(relative: string, baseUrl: string): string {
  const b = baseUrl.replace(/\/$/, '');
  const rel = relative.startsWith('/') ? relative : `/${relative}`;
  if (!b) return rel;
  return `${b}${rel}`;
}

/** Map localized path to the same logical page in the other locale */
export function swapLocaleInPath(relative: string, from: Locale, to: Locale): string {
  if (from === to) return relative;

  if (from === 'es' && to === 'en') {
    return relative
      .replace(/^\/(?:es\/)?projects\/([^/]+)\/?$/, '/en/projects/$1/')
      .replace(/^\/(?:es\/)?projects\/?$/, '/en/projects/')
      .replace(/^\/(?:es\/)?sobre-mi\/?$/, '/en/about/')
      .replace(/^\/(?:es\/)?contacto\/?$/, '/en/contact/')
      .replace(/^\/(?:es\/)?$/, '/en/');
  }

  return relative
    .replace(/^\/en\/projects\/([^/]+)\/?$/, '/proyectos/$1/')
    .replace(/^\/en\/projects\/?$/, '/proyectos/')
    .replace(/^\/en\/about\/?$/, '/#about')
    .replace(/^\/en\/contact\/?$/, '/#contact')
    .replace(/^\/en\/?$/, '/');
}
