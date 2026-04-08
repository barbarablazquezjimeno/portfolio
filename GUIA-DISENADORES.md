# Guía para diseñadoras y diseñadores UX/UI (sin ser programador)

Esta guía está en **castellano**, va despacio y asume que trabajas en **macOS**. No hace falta saber programar para **cambiar textos, casos e imágenes**. Sí hará falta usar el Mac un poco más allá del navegador si quieres **ver la web en local** o **publicarla**; aquí lo vamos contando por partes, como si nunca hubieras usado la Terminal.

Si en algún momento te atascas, anota el **mensaje de error** (o haz una captura) y pídele ayuda a quien te pasó el proyecto: con eso suele bastar.

---

## 1. Para quién es esto

- Sabes usar **correo, Drive, Figma**, etc.
- **No** te exigimos saber qué es un “framework” ni escribir código de cero.
- **Sí** te pediremos que **abra archivos de texto**, que **copie y pegue** comandos en la terminal y que **guarde** los cambios con Git cuando toque.

Todo eso está explicado abajo.

---

## 2. Qué es todo esto (idea general)

Piensa en el portfolio como un **folleto** que en realidad es una **carpeta llena de archivos**:

- Los **textos largos** (cada caso, la página “Sobre mí”) viven en archivos **Markdown** (`.md`). Es texto plano con reglas muy simples: una almohadilla para un título, un guion para una lista, y así.
- **Astro** es el programa que **lee** esos archivos y **genera** la web: páginas en español y en inglés, menús que enlazan bien, etc. Tú no tienes que “programar Astro”; solo saber **qué archivos editar**.
- **Git** es el **historial**. Cada vez que haces un **commit**, dejas una **versión guardada** del proyecto con un comentario (“actualicé el caso del banco”). Así no pierdes trabajo y puedes volver atrás si la lias.
- **GitHub** es una **copia del proyecto en internet**. **GitHub Pages** puede **publicar** la web para que cualquiera la abra con un enlace.

Nada de esto te obliga a entender cómo está hecho por dentro. Lo que importa es: **dónde está el texto**, **cómo lo ves en el navegador en tu casa** y **cómo lo subes** cuando esté listo.

---

## 3. La terminal: qué es y cómo se usa (desde cero)

### 3.1. Qué es

La **Terminal** es una ventana donde escribes **órdenes** al Mac en texto. No tienes iconos; escribes, pulsas **Intro** (a veces pone “return” en el teclado) y el Mac responde con líneas de texto.

No es peligrosa si copias comandos de **esta guía** o de alguien de confianza. Si algo sale mal, lo normal es que veas un mensaje en rojo y ya: **no** formatea el disco ni borra fotos de tu escritorio por usarla con normalidad.

### 3.2. Cómo abrirla

Abre **Spotlight** (**Cmd + barra espaciadora**), escribe `Terminal` y ábrela. O ve a **Aplicaciones → Utilidades → Terminal**.

### 3.3. La idea de “carpeta actual”

La terminal siempre está “dentro” de **una carpeta**. Los comandos que ejecutas suelen aplicar **a esa carpeta**.

Por eso, antes de `npm install` o `git status`, hay que estar en la carpeta del proyecto (la que se llama `portfolio` o como la tengas). Eso se hace con el comando **`cd`** (*change directory*):

```bash
cd Ruta/a/tu/carpeta/portfolio
```

Puedes arrastrar la carpeta del proyecto desde el **Finder** a la ventana de la Terminal después de escribir `cd ` (con un espacio al final): se rellena sola la ruta. Pulsas Intro.

Para comprobar que estás en el sitio correcto:

```bash
pwd
```

Te imprime la ruta completa de la carpeta actual.

Dentro de la carpeta del proyecto deberías ver archivos como `package.json` y la carpeta `src`. Si no los ves, no estás en la carpeta buena.

### 3.4. Cómo ejecutar un comando

1. Abre la terminal.
2. Ve a la carpeta del proyecto con `cd` (apartado anterior).
3. **Copia** el comando de esta guía (por ejemplo `npm install`).
4. **Pega** en la Terminal (**Cmd+V**, o clic derecho → **Pegar** si tu configuración lo permite).
5. Pulsa **Intro**.
6. Espera. A veces tarda un minuto y escribe muchas líneas: es normal.
7. Si al final no pone nada raro y vuelve a salir el “prompt” (la línea donde escribes), suele haber ido bien.

### 3.5. Si algo “falla”

- **“command not found”** o **“no se reconoce…”**: falta instalar el programa del comando (por ejemplo Node.js para `npm`).
- **Texto rojo largo**: lee las **últimas** líneas; ahí suele estar la pista. Búscala en Google o pásala a quien te ayude.
- **Se queda pillada**: a veces está esperando **contraseña** (al instalar cosas te pide la del usuario del Mac; al escribir no se ven asteriscos, es normal) o va lenta por la red. Si no responde en varios minutos, **Ctrl+C** suele cancelar el comando (no pasa nada grave en un proyecto normal).

---

## 4. Qué hay montado en este proyecto (resumen)

- **Web estática**: páginas ya generadas, sin base de datos que mantener.
- **Dos idiomas**: direcciones tipo `/es/...` y `/en/...`.
- **Secciones**: inicio, listado de proyectos, cada proyecto, sobre mí / about, contacto.
- **Responsive** (se ve bien en móvil) y cuidado básico de **accesibilidad**.
- Preparado para **GitHub Pages** y un **workflow** en `.github/workflows/` si quieres publicar automático al subir cambios.

En `src/pages` sigue habiendo **rutas separadas** para `es` y `en` (así las URLs pueden ser `/es/proyectos` y `/en/projects`). Lo **pesado** de cada pantalla (HTML, estilos) vive una sola vez en **`src/components/pages/`** (`HomePage.astro`, `ContactPage.astro`, etc.); cada archivo bajo `pages/es/...` o `pages/en/...` solo dice el idioma y, si hace falta, carga el Markdown o el `slug` del caso.

---

## 5. Palabras que vas a oír (glosario)

| Término | Qué significa, sin rodeos |
|--------|---------------------------|
| **Carpeta / directorio** | En el día a día en Mac decimos **carpeta**; en textos técnicos a veces **directorio**. Es lo mismo. |
| **`src/`** | Donde está casi todo lo “tuyo”: contenido, estilos, piezas de la web. |
| **`public/`** | Archivos estáticos servidos tal cual: **imágenes**, favicon, PDFs… Las URLs en Markdown o en `cover` suelen ser `/images/...` (sin escribir `public` en la ruta). |
| **Ruta** | Cómo se llama un archivo dentro del proyecto, por ejemplo `src/content/projects/es/mi-caso.md`. |
| **Markdown (.md)** | Archivo de texto con formato sencillo: `#` título, `-` lista, `**negrita**`, etc. |
| **JSON** | Archivo de texto con llaves y comillas; sirve para listas de textos cortos (menú, botones). Hay que respetar comas y comillas o el archivo “rompe”. |
| **Node.js** | Programa que permite ejecutar herramientas de desarrollo en tu Mac. Trae **`npm`**, que instala dependencias del proyecto. |
| **npm** | Gestor de paquetes: lee `package.json` y descarga lo que hace falta para Astro. |
| **`npm install`** | Descarga dependencias a la carpeta `node_modules/`. Hacerlo **dentro** de la carpeta del proyecto. |
| **`npm run dev`** | Arranca un servidor en tu máquina para **ver la web mientras editas**. |
| **`localhost`** | “Este Mac”. `http://localhost:4321` es la web servida en tu equipo, no en internet. |
| **Build** | Generar la versión final en la carpeta **`dist/`** (HTML listo para publicar). Comando: `npm run build`. |
| **Repositorio (repo)** | El proyecto tal como lo ve **Git**; lo normal es que exista también en **GitHub**. |
| **Commit** | Guardas un **corte** del proyecto con un mensaje (“añado caso X”). Es tu punto de control. |
| **Push** | Subes esos commits a **GitHub**. |
| **Pull** | Bajas cambios que haya en GitHub a tu Mac. |
| **Rama (`main`)** | Línea de trabajo. Al principio casi todo el mundo va a **`main`**. |

---

## 6. Dónde va cada tipo de texto: Markdown o JSON

- **`src/content/.../*.md`** → Textos **largos** del portfolio: casos de estudio, párrafos de “Sobre mí”, secciones. Lo que se lee como **artículo**.
- **`src/i18n/strings.es.json`** y **`strings.en.json`** → Textos **cortos** que se repiten en toda la web: menú, botones, frases de accesibilidad, descripción por defecto del sitio, pie de página…

El archivo **`src/i18n/ui.ts`** no es para editar frases a mano: **carga** los JSON y define **cómo se construyen las URLs** por idioma. Si solo cambias textos, con los JSON basta.

### Cuidado al editar JSON

- Las líneas van separadas por **comas**; la **última** propiedad de un bloque **no** debe llevar coma al final (si el editor te marca error, suele ser eso).
- Las cadenas van entre **comillas dobles** `"..."`.
- Si dudas, copia cómo está hecha la línea de arriba y cámbiale solo el texto por dentro de las comillas.

---

## 7. Qué puedes tocar tú (y qué mejor no)

### Seguro tocar (contenido y marca)

| Quiero… | Dónde está |
|--------|------------|
| Casos en **español** | `src/content/projects/es/` (archivos `.md`) |
| Casos en **inglés** | `src/content/projects/en/` (archivos `.md`) |
| **Imágenes** de casos (portadas, capturas dentro del texto, etc.) | Carpeta **`public/`** (por ejemplo `public/images/projects/…`); se explica en el **§8** |
| Texto **Sobre mí** (ES) | `src/content/sitePages/es/sobre-mi.md` |
| Texto **About** (EN) | `src/content/sitePages/en/about.md` |
| **Email** y enlaces LinkedIn / Behance | `src/data/site.ts` |
| Menú, botones, microcopy, textos de accesibilidad | `src/i18n/strings.es.json` y `strings.en.json` |
| **Colores**, tipografías base, espaciado general | `src/styles/global.css` |
| Ajustes finos de **una página o componente** | Sobre todo `src/components/pages/*.astro` (plantillas de cada pantalla) y `src/components/*.astro`; las rutas en `src/pages/es/...` y `src/pages/en/...` son finas y solo enlazan idioma + datos |

### Mejor con ayuda o leyendo mucho antes

- `astro.config.mjs` (URL del sitio y **base** si el repo no es `usuario.github.io`).
- `.github/workflows/pages.yml` (cómo se despliega a GitHub Pages).

### Cosas que Git **no** sube al repo (están en `.gitignore`)

- **`node_modules/`**: librerías descargadas con `npm install`. Ocupa mucho; cada quien las genera en su máquina.
- **`dist/`**: resultado del build; se puede volver a generar cuando quieras.
- **`.env`**: datos sensibles; este proyecto no lo exige por defecto.

---

## 8. Cómo editar un caso (Markdown)

1. En Cursor, VS Code o el editor que uses, abre la carpeta del proyecto y navega hasta `src/content/projects/es/` (o `en/`).
2. Abre un `.md`. Arriba del todo verás el **frontmatter**: un bloque entre tres guiones `---`:

```yaml
---
title: "Título del caso"
description: "Resumen corto que sale en la tarjeta"
date: 2025-01-15
pairSlug: mismo-valor-en-los-dos-idiomas
featured: true
draft: false
cover: "/images/projects/mi-caso/portada.webp"
coverAlt: "Descripción breve de la portada para accesibilidad"
---
```

- **`pairSlug`**: debe ser **idéntico** en la versión en español y en inglés de **ese mismo** proyecto, para que el cambio de idioma funcione. El **nombre del archivo** puede ser distinto en cada idioma.
- **`featured: true`**: el caso sale destacado en la portada. Si ninguno está destacado, la web enseña unos cuantos por defecto.
- **`draft: true`**: si está en `true`, el caso puede ocultarse del listado público (según la configuración del proyecto).
- **`cover`** (opcional): imagen que sale en la **tarjeta** del caso (home y listado de proyectos). Debe ser una ruta que empiece por **`/`**, apuntando a un archivo dentro de **`public/`** (ver apartado de imágenes más abajo). También puedes poner una **URL** `https://…` si la imagen está en otro sitio.
- **`coverAlt`** (opcional pero recomendable si hay `cover`): texto corto que describe la imagen para lectores de pantalla. Si la imagen es puramente decorativa, puedes omitirlo.

3. Debajo del segundo `---` escribes el contenido del caso:
   - `##` subtítulo principal, `###` más pequeño.
   - `-` para ítems de lista.
   - `**texto**` para negrita.

**Accesibilidad**: usa títulos en orden (`##` y luego `###`). No saltes de `##` a `####` sin un `###` intermedio.

### Imágenes del caso: varias por proyecto

Las imágenes **no** van dentro de `src/content/…` como regla general: van en la carpeta **`public/`** en la raíz del proyecto. Todo lo que copies ahí se publica en la web con la misma estructura de carpetas.

#### Dónde guardar los archivos

1. Crea una carpeta por caso para no mezclar archivos, por ejemplo:
   - `public/images/projects/onboarding-banco/`
   - `public/images/projects/marketplace-2024/`
2. Mete ahí **todas** las fotos de ese caso: `portada.webp`, `flujo-01.png`, `wireframe.svg`, etc.
3. Los nombres mejor **sin espacios** (usa guiones: `pantalla-login.png`).

#### Imagen de la tarjeta (una por idioma si quieres)

En el **frontmatter** del `.md` (español e inglés del mismo `pairSlug`):

- En **cada** archivo puedes poner un **`cover`** distinto (captura en ES vs EN) o **el mismo** path si usas la misma imagen.
- La ruta en el YAML es la URL “pública”, **no** la ruta del Finder:
  - Archivo en disco: `public/images/projects/mi-caso/portada.webp`
  - En el frontmatter: `cover: "/images/projects/mi-caso/portada.webp"` (fíjate: empieza por **`/images/…`**, sin `public`).

Si no pones `cover`, la tarjeta muestra un **marcador de posición** vacío (sigue funcionando el enlace al caso).

#### Más imágenes dentro del texto del caso

En el cuerpo del Markdown (debajo del segundo `---`), usa la sintaxis habitual, **una línea por imagen**:

```markdown
![Flujo de alta simplificado en Figma](/images/projects/mi-caso/flujo-alta.png)

Párrafo que comenta la imagen…

![Detalle del paso de verificación](/images/projects/mi-caso/verificacion.webp)
```

- Entre corchetes va una **descripción** (accesibilidad); puede ser corta.
- Entre paréntesis va la misma clase de ruta **`/images/...`** que apunta a un fichero dentro de **`public/`**.

Así puedes tener **todas las que necesites** por caso: solo añades archivos en la carpeta del caso y líneas `![…](…)` en el `.md`.

#### Subir las imágenes al repo (Git)

Las imágenes son archivos más: al hacer **`git add`**, **`commit`** y **`push`**, suben con el resto del proyecto. Si una imagen no se ve en la web publicada, casi siempre falta **subirla** o la ruta en el Markdown no coincide **exactamente** con la carpeta bajo `public/` (mayúsculas/minúsculas importan).

#### Formatos

**WebP** o **AVIF** suelen pesar poco y cargar rápido; **PNG** (capturas con transparencia) y **JPG** también sirven.

#### Enlaces a Figma y vista incrustada (tipo “preview”)

**Solo enlace** (abre Figma en otra pestaña): en el Markdown, como cualquier enlace:

```markdown
[Abrir prototipo en Figma](https://www.figma.com/design/XXXX/…)
```

**Vista incrustada** (mini player de Figma dentro de la página, parecido a lo que ves al pegar un enlace en Jira/Notion): Figma genera un **iframe**; el proyecto permite pegar **HTML** dentro del `.md` del caso (o de Sobre mí).

1. En Figma, el archivo debe permitir verlo **con el enlace** (por ejemplo “Anyone with the link can view”), si no el embed quedará vacío para los visitantes.
2. Abre el menú **Share** (Compartir) → pestaña **Embed** (o “Incrustar”) → **Copy** del código que te da Figma.
3. En tu `.md`, pega el bloque y envuélvelo en un `div` con clase **`embed-frame`** para que sea **responsive** y no desborde en móvil:

```html
<div class="embed-frame">
  <iframe
    title="Prototipo del flujo de alta en Figma"
    src="https://www.figma.com/embed?embed_host=share&url=…"
    loading="lazy"
    allowfullscreen
  ></iframe>
</div>
```

- Sustituye el `src` por el que te copió Figma (suele ser una URL larga con `figma.com/embed`).
- El atributo **`title`** es obligatorio a nivel de accesibilidad: pon una frase que describa qué hay dentro (no dejes el iframe sin `title`).
- Si Figma te da `width` y `height` en el código original, puedes **quitarlos**: el contenedor `embed-frame` ya fuerza ancho completo y proporción tipo 16:9.

**Nota:** no es una captura estática: es **contenido vivo** de Figma (carga más lento que una imagen y depende de que Figma esté disponible). Para el portfolio mucha gente combina **captura en `public/`** + **enlace “Ver en Figma”**; el embed es opcional cuando quieres que se pueda navegar el archivo sin salir de tu web.

---

## 9. Cómo cambiar colores y estilos (CSS)

### Paleta global

Abre **`src/styles/global.css`**. Al principio hay variables, por ejemplo:

```css
:root {
  --text: #14120f;
  --text-muted: #4a4640;
  --accent: #1a5e52;
  --bg: #faf9f7;
}
```

Ahí cambias **colores** que usa todo el sitio. Más abajo suele haber reglas para **modo oscuro** (cuando el sistema del visitante está en oscuro).

### Un solo botón o una sección

Muchos archivos `.astro` llevan al final un bloque `<style>...</style>`. Lo que pongas ahí afecta **solo** a ese componente o página. Si cambias algo y no ves efecto, comprueba que estás editando el archivo de la página que estás mirando en el navegador.

### Tipografías

Se cargan en **`src/layouts/BaseLayout.astro`** (enlace a Google Fonts, o similar). Si cambias el nombre de la fuente ahí, actualiza **`--font-sans`** y **`--font-display`** en `global.css` para que coincida.

---

## 10. Instalar Node.js y ver la web en tu Mac

### 10.1. Instalar Node.js

**Node.js** es gratis. Entra en la web oficial de Node (busca “Node.js download”) y baja la versión **LTS** (la recomendada para la mayoría).

- Instálala con el instalador como cualquier programa.
- Cierra y vuelve a abrir la **terminal** después de instalar.

Comprueba que está bien:

```bash
node -v
```

Debería salir un número de versión. Luego:

```bash
npm -v
```

Otro número: bien.

### 10.2. Primera vez en el proyecto: dependencias

Abre la terminal, ve con `cd` a la carpeta del proyecto (donde está `package.json`) y ejecuta:

```bash
npm install
```

Espera a que termine. Solo hace falta repetir esto si borras `node_modules` o alguien añade librerías nuevas al proyecto.

### 10.3. Modo desarrollo: ver cambios al vuelo

```bash
npm run dev
```

La terminal mostrará una **URL**, casi siempre `http://localhost:4321`. Ábrela en el navegador (Chrome, Firefox, Safari…).

- Si editas un `.md` o muchos otros archivos, la página **suele** refrescarse sola al guardar.
- Para **parar** el servidor, en la Terminal pulsa **Ctrl+C**.

La raíz `/` suele **redirigir** a **`/es/`** (portada en español).

### 10.4. Generar la versión “final” en `dist/`

```bash
npm run build
```

Crea o actualiza la carpeta **`dist/`** con HTML y archivos listos para subir a un hosting.

### 10.5. Previsualizar lo que hay en `dist/`

```bash
npm run preview
```

Sirve para comprobar cómo quedaría lo generado por `build`, sin el modo desarrollo.

---

## 11. Git y GitHub: guardar versiones y subirlas

### 11.1. Qué necesitas

- **Git** en el Mac. Si al escribir `git` en la Terminal te dice que no existe, instálalo: por ejemplo desde [git-scm.com](https://git-scm.com/download/mac) o, si usas **Homebrew**, `brew install git`.
- Una cuenta en **GitHub** si vas a subir el proyecto allí.
- Que el proyecto **ya sea** un repo Git (carpeta con `.git` dentro) o que alguien te guíe la primera vez para inicializarlo y conectarlo.

### 11.2. Qué es un commit (otra vez, en plan humano)

Es un **momento congelado** del proyecto con una nota tuya: “actualicé fotos del caso banco”, “cambié el email”. Así, dentro de dos meses sabes qué hiciste y puedes volver si hace falta.

Mensajes **útiles**:

- `Añade caso de marketplace`
- `Actualiza bio y email de contacto`
- `Ajusta colores del modo oscuro`

Mensajes **que no ayudan**:

- `cambios`
- `aaa`
- `asdf`

### 11.3. Secuencia habitual en terminal

Desde la carpeta del proyecto:

```bash
git status
```

Lista archivos modificados, nuevos o borrados.

```bash
git add .
```

Marca **todos** los cambios para el próximo commit. (Más adelante se puede aprender a añadir archivo a archivo.)

```bash
git commit -m "Describe el cambio en una frase clara"
```

Crea el commit con ese mensaje.

```bash
git push
```

Sube los commits a GitHub (si ya está configurado el **remote**).

Si `git push` pide **usuario y contraseña**, GitHub ya no usa la contraseña de la web para esto: hace falta un **token** o **SSH**; eso lo configura una vez quien te dé soporte o la documentación de GitHub.

### 11.4. Si aún no hay repo en GitHub

1. Crea un repositorio **vacío** en github.com (sin subir archivos desde la web si te dan la opción de “subir archivos”; lo ideal es conectar tu carpeta local).
2. GitHub te enseña unos comandos del tipo `git remote add origin ...` y `git push -u origin main`. Cópialos tal cual o pide que te los adapten a tu rama (`main` vs `master`).

---

## 12. Publicar en GitHub Pages (idea general)

Hay dos casos típicos:

### A) El repositorio se llama exactamente `tuusuario.github.io`

La web suele colgarse en la **raíz** de tu dominio `https://tuusuario.github.io`. A veces hay que ajustar la **URL base** en `astro.config.mjs` y variables del build; el detalle depende del dominio y de cómo esté montado el despliegue.

### B) Repositorio con otro nombre (ej. `mi-portfolio`)

La URL suele ser `https://tuusuario.github.io/mi-portfolio/`. El build tiene que saber ese **subpath** (en el README técnico aparece como algo tipo `PUBLIC_BASE_PATH`).

Este proyecto trae un **workflow** de GitHub Actions en `.github/workflows/pages.yml`. Si en la configuración del repo activas **GitHub Pages** tomando el origen desde **Actions**, cada **push** a la rama principal puede **volver a construir** y **publicar** la web sola.

La **primera vez** toca entrar en **Settings → Pages** del repo y elegir el origen que toque. Si falla algo, mira la pestaña **Actions**: ahí salen los errores del último intento.

---

## 13. Si algo sale mal (preguntas rápidas)

| Qué pasa | Qué probar |
|----------|------------|
| `npm: command not found` o similar | Instala **Node.js LTS**, cierra la terminal, ábrela de nuevo, vuelve a probar `node -v` y `npm -v`. |
| Estás en la carpeta del proyecto pero falla `npm install` | Mira el mensaje completo. A veces es la **red** (Wi‑Fi inestable, VPN) o **permisos** de carpeta. Prueba otra red; si el proyecto está en una carpeta “rara” (Disco de red, sincronizada con poca confianza), muévelo a **Documentos** o al escritorio y vuelve a intentarlo. |
| Errores raros después de tocar dependencias | Borra la carpeta `node_modules`, vuelve a ejecutar `npm install`. |
| La web en GitHub se ve **sin estilos** | Casi siempre **base path** mal para un repo que no es `usuario.github.io`. Revisa `astro.config.mjs` y variables del workflow / README. |
| Cambié un `.md` y no se ve | Guarda el archivo. Con `npm run dev` suele recargar. Si solo miras `dist/` antiguo, hay que `npm run build` otra vez. |
| `git` no se reconoce | Instala Git y reinicia la terminal. |

---

## 14. Resumen del día a día

1. Editas **Markdown** (`content/...`) y, si toca, **`site.ts`** y los JSON **`strings.es.json` / `strings.en.json`**.
2. Opcional: tocas **`global.css`** para marca.
3. En la terminal: `cd` al proyecto, **`npm run dev`**, miras en el navegador.
4. Cuando te guste: **`git status`** → **`git add .`** → **`git commit -m "..."`** → **`git push`**.
5. Si tienes **GitHub Actions** para Pages, la web pública se actualiza sola al subir a la rama que toque; si no, alguien te dirá cómo subir **`dist/`** a tu hosting.

---

## 15. ¿Y el README en inglés?

Hay un **`README.md`** más técnico **en inglés** (comandos, variables de entorno, detalles para quien despliega). **Esta guía** es la referencia en castellano para **perfil diseño / contenido**. Si algo no cuadra entre ambos, gana lo que diga quien mantenga el repo o lo que esté probado en el último despliegue.

---

*Cuando tengas el nombre final del repositorio y el flujo de publicación cerrado, conviene añadir capturas de GitHub (Settings → Pages, pestaña Actions) con **tus** nombres de repo y rama; reduce muchas dudas la primera vez.*
