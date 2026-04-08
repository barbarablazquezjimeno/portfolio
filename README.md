# UX portfolio (static)

Astro static site with **Spanish** and **English** routes, **Markdown** for case studies and about pages, and GitHub Pages–friendly output.

**Non-developers / UX (Spanish):** see **[GUIA-DISENADORES.md](./GUIA-DISENADORES.md)** for a plain-language guide (Git, commits, publishing, what to edit, CSS/colors).

## Run locally

From this directory (repository root if you publish only this project):

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:4321`). Root `/` redirects to `/es/`.

Telemetry is disabled via `ASTRO_TELEMETRY_DISABLED=1` in npm scripts to avoid CLI writes outside the project on some systems.

## Edit content (no UI code)

| What | Where |
|------|--------|
| Case studies (ES) | `src/content/projects/es/*.md` |
| Case studies (EN) | `src/content/projects/en/*.md` |
| About (ES) | `src/content/sitePages/es/sobre-mi.md` |
| About (EN) | `src/content/sitePages/en/about.md` |
| Email & social | `src/data/site.ts` |
| Nav labels, home copy, microcopy, a11y strings | `src/i18n/strings.es.json` and `strings.en.json` |

### Pairing two languages

Use the same `pairSlug` in the frontmatter of the Spanish and English file so the case page can link to the translation. File names (URL slugs) can differ per language.

### Project frontmatter

```yaml
---
title: "Title"
description: "Short summary for cards and SEO"
date: 2025-01-15
pairSlug: unique-key-shared-across-languages
featured: true
cover: /images/covers/my-project.jpg   # optional
draft: false
---
```

Place images under `public/` (e.g. `public/images/covers/...`).

## Build & preview

```bash
npm run build
npm run preview
```

## GitHub Pages

1. **User site** (`username.github.io`): keep `base` as `/` in `astro.config.mjs` (default when `PUBLIC_BASE_PATH` is not set).
2. **Project site** (`username.github.io/repo/`): set `PUBLIC_BASE_PATH` to `/<repo>/` when building, and set `PUBLIC_SITE_URL` to the full site URL.

Example:

```bash
PUBLIC_SITE_URL=https://username.github.io PUBLIC_BASE_PATH=/portfolio npm run build
```

Deploy the `dist/` folder (e.g. GitHub Actions `actions/upload-pages-artifact`).

## Stack

- [Astro](https://astro.build/) (static)
- Content Collections + Markdown

## Accessibility & responsive layout

The template includes:

- Skip link to `#main`, with `tabindex="-1"` on `<main>` for keyboard focus.
- Visible `:focus-visible` outlines, `prefers-reduced-motion` for scroll and card motion.
- Minimum **44×44px** touch targets (`--tap-min`), mobile-first navigation with an accessible menu button (`aria-expanded`, `aria-controls`, Escape to close, resize handling).
- `aria-current="page"` on the active nav item; translated `aria-label` strings for logo, language switcher, and menu.
- Project cards: `<time datetime>`, visible “View case / Ver caso” CTA, `aria-label` on the card link; decorative covers use `alt=""`.
- Contact: `aria-live="polite"` for copy confirmation, `aria-describedby` / labels on controls, external links announce a new tab.
- `404` page: bilingual title and body, two home links (ES/EN).
- `viewport-fit=cover` and `safe-area-inset` padding where relevant.
- Dark/light `theme-color` meta; adjusted text/foreground tokens for better contrast on body copy.

**Still your responsibility in Markdown:** use a logical heading order (`h2` → `h3`), meaningful link text, and real `alt` text when you add non-decorative images (optional `coverAlt` on cards can be wired via frontmatter later).

Run an automated pass (e.g. [axe DevTools](https://www.deque.com/axe/devtools/)) and a quick screen reader check (VoiceOver / TalkBack) before launch.
