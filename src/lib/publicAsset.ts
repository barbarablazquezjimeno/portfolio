/** Resolve paths under `public/` or absolute media URLs for `<img src>`. */
export function getPublicAssetUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('//')) return path;
  const base = import.meta.env.BASE_URL || '/';
  const normalized = base.endsWith('/') ? base : `${base}/`;
  const trimmed = path.startsWith('/') ? path.slice(1) : path;
  return `${normalized}${trimmed}`;
}
