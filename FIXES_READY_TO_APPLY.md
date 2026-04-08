# 🛠️ SOLUCIONES APLICABLES - PORTFOLIO ASTRO

Documento con código corregido listo para aplicar. Cada sección corresponde a un problema del reporte de auditoría.

---

## 🔧 FIX 1: Hardcoding de color en Chip.astro

**Archivo**: `src/components/Chip.astro`
**Línea**: 20

### Antes:
```css
.chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 32px 0 0;
  background: transparent;
  border: none;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #163a70;  /* ❌ Hardcodeado */
  white-space: nowrap;
}
```

### Después:
```css
.chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 32px 0 0;
  background: transparent;
  border: none;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);  /* ✅ Variable global */
  white-space: nowrap;
}
```

**Benefício**: El color se ajustará automáticamente en light/dark mode.

---

## 🔧 FIX 2: Color negro hardcodeado en ProjectCardDefault

**Archivo**: `src/components/ProjectCardDefault.astro`
**Línea**: 95

### Antes:
```css
.card-default__desc {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.5;
  color: #000000;  /* ❌ Hardcodeado - invisible en dark mode */
}
```

### Después:
```css
.card-default__desc {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.5;
  color: var(--text);  /* ✅ Respeta tema */
}
```

---

## 🔧 FIX 3: Logo "Portfolio" hardcodeado en Header.astro

**Archivo 1**: `src/i18n/strings.es.json`

### Agregar en sección "nav":
```json
{
  "nav": {
    "logo": "Portfolio",  // ← Nueva línea
    "home": "Inicio",
    "projects": "Proyectos",
    "about": "Sobre mí",
    "contact": "Contacto"
  }
}
```

**Archivo 2**: `src/i18n/strings.en.json`

### Agregar en sección "nav":
```json
{
  "nav": {
    "logo": "Portfolio",  // ← Nueva línea
    "home": "Home",
    "projects": "Projects",
    "about": "About",
    "contact": "Contact"
  }
}
```

**Archivo 3**: `src/components/Header.astro`
**Línea**: 48

### Antes:
```astro
<a class="logo" href={linkFor('home')} aria-label={t.a11y.logoToHome}>
  <span aria-hidden="true">Portfolio</span>
</a>
```

### Después:
```astro
<a class="logo" href={linkFor('home')} aria-label={t.a11y.logoToHome}>
  <span aria-hidden="true">{t.nav.logo}</span>
</a>
```

---

## 🔧 FIX 4: Strings incompletos en i18n

**Archivo**: `src/i18n/strings.es.json`
**Línea**: 55-58

### Antes:
```json
{
  "a11y": {
    "notFoundHomeEs": "",  // ❌ Vacío
    "viewCaseInSpanish": ""  // ❌ Vacío
  }
}
```

### Después:
```json
{
  "a11y": {
    "notFoundHomeEs": "Ir al inicio en español",  // ✅ Lleno
    "viewCaseInSpanish": "Ver este caso en español"  // ✅ Lleno
  }
}
```

**Archivo**: `src/i18n/strings.en.json`
**Línea**: 55-58

### Antes:
```json
{
  "a11y": {
    "notFoundHomeEn": "",  // ❌ Vacío
    "viewCaseInEnglish": ""  // ❌ Vacío
  }
}
```

### Después:
```json
{
  "a11y": {
    "notFoundHomeEn": "Go to English home",  // ✅ Lleno
    "viewCaseInEnglish": "View this case in English"  // ✅ Lleno
  }
}
```

---

## 🔧 FIX 5: "headline" faltante en strings.es.json

**Archivo**: `src/i18n/strings.es.json`
**Después de sección "home"**

### Antes:
```json
{
  "home": {
    "kicker": "Bárbara Blazquez",
    "sub": "Selección de trabajo reciente. Cada caso resume el problema, el proceso y el impacto.",
    "ctaProjects": "Ver mis proyectos",
    "ctaContact": "Contacto",
    "moreTitle": "Más de mí"
  }
}
```

### Después:
```json
{
  "home": {
    "kicker": "Bárbara Blazquez",
    "headline": "Diseño enfocado en claridad, accesibilidad e impacto medible.",  // ← Agregar
    "sub": "Selección de trabajo reciente. Cada caso resume el problema, el proceso y el impacto.",
    "ctaProjects": "Ver mis proyectos",
    "ctaContact": "Contacto",
    "moreTitle": "Más de mí"
  }
}
```

---

## 🔧 FIX 6: Type 'any' en Button.astro

**Archivo**: `src/components/Button.astro`
**Línea**: 1-10

### Antes:
```astro
interface Props {
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  children?: any;  // ❌ Demasiado genérico
  icon?: string;
  class?: string;
  id?: string;
  'aria-label'?: string;
  title?: string;
  [key: string]: any;  // ❌ Permite props no documentadas
}
```

### Después:
```astro
interface Props {
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  children?: string | number;  // ✅ Específico
  icon?: string;
  class?: string;
  id?: string;
  'aria-label'?: string;
  title?: string;
}
```

---

## 🔧 FIX 7: Type 'any' en Chip.astro

**Archivo**: `src/components/Chip.astro`
**Línea**: 1-5

### Antes:
```astro
interface Props {
  label?: string;
  children?: any;  // ❌ Genérico
  class?: string;
}
```

### Después:
```astro
interface Props {
  label?: string;
  children?: string | number;  // ✅ Específico
  class?: string;
}
```

---

## 🔧 FIX 8: Duplicación de `publicAssetSrc` - Crear nueva utilidad

**Nuevo Archivo**: `src/lib/assets.ts`

### Crear:
```typescript
/**
 * Convierte una ruta de asset a URL pública considerando BASE_URL
 * @param path - Ruta relativa, absoluta, o URL completa
 * @returns URL pública del asset
 */
export function publicAssetSrc(path: string): string {
  // Si ya es una URL absoluta, devolverla tal cual
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('//')) {
    return path;
  }

  // Obtener BASE_URL del proyecto
  const base = import.meta.env.BASE_URL || '/';
  const normalized = base.endsWith('/') ? base : `${base}/`;
  const trimmed = path.startsWith('/') ? path.slice(1) : path;
  
  return `${normalized}${trimmed}`;
}
```

### En `src/components/ProjectCardDefault.astro`:
**Línea**: 1

#### Antes:
```astro
---
import Button from '@/components/Button.astro';
import Chip from '@/components/Chip.astro';

interface Props {
  ...
}

const { ... } = Astro.props;

function publicAssetSrc(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('//')) return path;
  const base = import.meta.env.BASE_URL || '/';
  const normalized = base.endsWith('/') ? base : `${base}/`;
  const trimmed = path.startsWith('/') ? path.slice(1) : path;
  return `${normalized}${trimmed}`;
}
```

#### Después:
```astro
---
import Button from '@/components/Button.astro';
import Chip from '@/components/Chip.astro';
import { publicAssetSrc } from '@/lib/assets';  // ← Agregar

interface Props {
  ...
}

const { ... } = Astro.props;

// Remover la función duplicada
```

### En `src/components/ProjectCardPreview.astro`:
**Línea**: 1

#### Antes:
```astro
---
interface Props {
  ...
}

const { ... } = Astro.props;

function publicAssetSrc(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('//')) return path;
  const base = import.meta.env.BASE_URL || '/';
  const normalized = base.endsWith('/') ? base : `${base}/`;
  const trimmed = path.startsWith('/') ? path.slice(1) : path;
  return `${normalized}${trimmed}`;
}
```

#### Después:
```astro
---
import { publicAssetSrc } from '@/lib/assets';  // ← Agregar

interface Props {
  ...
}

const { ... } = Astro.props;

// Remover la función duplicada
```

---

## 🔧 FIX 9: Variable `year` sin usar en ProjectCardPreview

**Archivo**: `src/components/ProjectCardPreview.astro`
**Línea**: 10

### Antes:
```astro
const { href, title, description, date, cover, viewCaseLabel, coverAlt } = Astro.props;
const year = date.getFullYear();  // ❌ Sin usar
const linkName = `${viewCaseLabel}: ${title}`;
```

### Después:
```astro
const { href, title, description, date, cover, viewCaseLabel, coverAlt } = Astro.props;
const linkName = `${viewCaseLabel}: ${title}`;
```

---

## 🔧 FIX 10: Remover clases CSS no usadas en ProjectCardDefault

**Archivo**: `src/components/ProjectCardDefault.astro`
**Línea**: 130-155

### Antes:
```css
.card-default__section {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.card-default__section-title {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text);
}

.card-default__section-text {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.card-default__footer :global(.btn--secondary) {
  padding: 0;
}
```

### Después (opción 1 - Remover):
```css
.card-default__footer :global(.btn--secondary) {
  padding: 0;
}
```

### O Después (opción 2 - Comentar para futuro):
```css
/* Reservado para expansión de card - problem statement / solution
.card-default__section {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.card-default__section-title {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text);
}

.card-default__section-text {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
}
*/

.card-default__footer :global(.btn--secondary) {
  padding: 0;
}
```

---

## 🔧 FIX 11: Usar CSS variables en Button padding/gap

**Archivo**: `src/components/Button.astro`
**Línea**: 36-48

### Antes:
```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;  /* ❌ Valor mágico */
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1rem;
}

.btn--primary {
  padding: 0.65rem 1.25rem;  /* ❌ Valores mágicos */
  min-height: var(--tap-min);
  color: var(--text);
  border: 2px solid var(--text);
  background: transparent;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}

.btn--secondary {
  padding: 0.35rem 0;  /* ❌ Valores mágicos */
  min-height: auto;
  color: var(--text);
  border: none;
  background: transparent;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
}
```

### Después:
```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);  /* ✅ 0.65rem */
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1rem;
}

.btn--primary {
  padding: var(--space-sm) var(--space-md);  /* ✅ 0.65rem 1rem */
  min-height: var(--tap-min);
  color: var(--text);
  border: 2px solid var(--text);
  background: transparent;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}

.btn--secondary {
  padding: var(--space-xs) 0;  /* ✅ 0.35rem 0 */
  min-height: auto;
  color: var(--text);
  border: none;
  background: transparent;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
}
```

---

## 🔧 FIX 12: Mover `.page-title` a global.css

**Archivo**: `src/styles/global.css`
**Al final, agregar:**

```css
/* Page titles - reutilizable en múltiples páginas */
.page-title {
  margin: 0 0 var(--space-xl);
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 600;
}
```

### En `src/components/pages/HomePage.astro`:
**Remover** esta sección de `<style>`:
```css
.page-title {
  margin: 0 0 var(--space-xl);
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 600;
}
```

### En `src/components/pages/ProjectsIndexPage.astro`:
**Remover** esta sección de `<style>`:
```css
.page-title {
  margin: 0 0 var(--space-xl);
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 600;
}
```

### En `src/components/pages/ContactPage.astro`:
**Remover** esta sección de `<style>`:
```css
.page-title {
  margin: 0 0 var(--space-mb);
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 600;
}
```

### En `src/components/pages/SiteMarkdownPage.astro`:
**Remover** esta sección de `<style>`:
```css
.page-title {
  margin: 0 0 var(--space-xl);
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 600;
}
```

---

## 🔧 FIX 13: Mejorar type guards en Header.astro

**Archivo**: `src/components/Header.astro`
**Línea**: 92-98

### Antes:
```javascript
<script>
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    const openL = toggle.getAttribute('data-open-label') ?? '';
    const closeL = toggle.getAttribute('data-close-label') ?? '';
    const mq = window.matchMedia('(min-width: 48rem)');
```

### Después:
```javascript
<script>
  const toggle = document.getElementById('nav-toggle') as HTMLButtonElement | null;
  const nav = document.getElementById('site-nav') as HTMLElement | null;
  
  if (!toggle || !nav) {
    throw new Error('Header elements not found in DOM');
  }
  
  const openL = toggle.getAttribute('data-open-label') ?? '';
  const closeL = toggle.getAttribute('data-close-label') ?? '';
  const mq = window.matchMedia('(min-width: 48rem)');
```

---

## 🔧 FIX 14: Mejorar type guards en ContactPage.astro

**Archivo**: `src/components/pages/ContactPage.astro`
**Línea**: 70-75

### Antes:
```javascript
<script>
  const btn = document.getElementById('copy-email');
  const feedback = document.getElementById('copy-feedback');
  btn?.addEventListener('click', async () => {
    const email = btn.getAttribute('data-email');
    const copied = btn.getAttribute('data-copied') ?? '';
    if (!email || !feedback) return;
```

### Después:
```javascript
<script>
  const btn = document.getElementById('copy-email') as HTMLButtonElement | null;
  const feedback = document.getElementById('copy-feedback') as HTMLElement | null;
  
  if (!btn) {
    throw new Error('Copy email button not found in DOM');
  }
  
  btn.addEventListener('click', async () => {
    const email = btn.getAttribute('data-email');
    const copied = btn.getAttribute('data-copied') ?? '';
    if (!email || !feedback) return;
```

---

## 📋 Resumen de cambios por archivo

| Archivo | Total cambios | Prioridad |
|---------|---|---|
| src/components/Chip.astro | 1 | MEDIA |
| src/components/ProjectCardDefault.astro | 2 | MEDIA + BAJA |
| src/components/Button.astro | 2 | MEDIA + BAJA |
| src/components/Header.astro | 1 | BAJA |
| src/components/pages/ContactPage.astro | 1 | BAJA |
| src/components/pages/ProjectCardPreview.astro | 1 | BAJA |
| src/i18n/strings.es.json | 3 | MEDIA |
| src/i18n/strings.en.json | 2 | MEDIA |
| src/styles/global.css | 1 | BAJA |
| src/lib/assets.ts | 1 (nuevo) | BAJA |

---

## ✅ Verificación post-fixes

Después de aplicar todos los cambios:

```bash
# 1. Verificar que el código compila sin errores
npm run build

# 2. (Opcional) Usar type checker
astro check

# 3. Inspeccionar con dev server
npm run dev
# Entrar a http://localhost:3000 y verificar:
# - Light mode se ve correcto
# - Dark mode se ve correcto (verificar Chip y ProjectCard descriptions)
# - Traducción ES/EN funciona
```

---

**Documento generado**: 8 de abril de 2026
