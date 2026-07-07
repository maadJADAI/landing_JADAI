# 02 · Arquitectura y stack

## Stack (real, ya scaffoldeado)
- **Next.js 16.2.10 (App Router) + React 19.2 + TypeScript** · gestor **npm** (hay `package-lock.json`).
- ⚠️ **Es un Next con cambios** respecto a lo conocido. `AGENTS.md` (raíz) obliga a **leer `node_modules/next/dist/docs/` antes de escribir código** (fonts, css, metadata, route-handlers). Cumplirlo.
- **Tailwind v4** — config **por CSS** con `@theme` en `globals.css`. **No hay `tailwind.config.ts`** (ver `03`).
- **React Three Fiber** (`@react-three/fiber` + `three`) para el objeto 3D (nodo/red). (No Three.js vanilla.)
- Animación general: **CSS + `IntersectionObserver`**. Motion/física solo si un efecto lo exige (aún no instalado).
- **Fuentes:** General Sans ya en `src/fonts/*.woff2` (cargar local con `next/font/local`; el `_generalsans.css` actual apunta al CDN de Fontshare → cambiar a local). **Falta JetBrains Mono** (`08`).
- **shadcn/ui:** opcional para primitivos de los bloques de `promt.txt`; restilar a tokens.
- **Deploy:** Vercel (SSG). **Back:** endpoints en Hetzner (los expone Jose Julio), consumidos por API. **Dominio:** subdominio de `jadai.biz`.

## Por qué Next (no Vite)
SEO/GEO real (Metadata API, OG, sitemap, SSG), objetivo del proyecto (`09`). Deploy en Vercel de un click.

## Estructura de carpetas
```
landing_JADAI/
├─ docs/                     # estos .md (fuente de plan)
├─ public/
│  ├─ brand/                 # jadai-logo.svg, jadai-logo-white.svg, favicon, og
│  ├─ team/                  # fotos equipo
│  └─ llms.txt               # para las IA (ver 09)
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx          # fuentes (next/font/local), metadata base, <body> lang="es"
│  │  ├─ page.tsx            # ENSAMBLA las secciones (dueño: orquestador)
│  │  ├─ globals.css         # tokens :root + @theme (Tailwind v4) + base
│  │  ├─ sitemap.ts · robots.ts
│  ├─ fonts/                 # *.woff2 self-host (General Sans ya está; falta JetBrains Mono)
│  ├─ components/
│  │  ├─ ui/                 # Button, Container, SectionHead, Mono… (primitives)
│  │  ├─ sections/           # Intro, Hero, Servicios, Demo, Trabajo, Equipo, Proceso, CTA, Footer
│  │  └─ interactive/        # Constellation, Node3D, ChatbotDemo, ReferentsMarquee, Stats
│  ├─ content/               # copy + data (servicios.ts, equipo.ts, casos.ts, referentes.ts)
│  └─ lib/                   # utils, hooks (useReducedMotion, useInView)
├─ next.config.ts · postcss.config.mjs · tsconfig.json · package.json   (Tailwind v4: SIN tailwind.config)
```

## Convenciones
- **TypeScript estricto.** Componentes en PascalCase, un componente por archivo.
- **Server Components por defecto**; `"use client"` solo donde haya interacción/estado (interactivos, nav).
- **Contenido separado del markup**: los textos y datos viven en `src/content/*`, no incrustados. Así el equipo edita copy sin tocar componentes.
- **Imágenes** con `next/image`. **Nada** de `<img>` salvo casos justificados.
- **Sin CSS suelto por componente** cuando Tailwind + tokens basten. Utilidades tipográficas y de color siempre vía tokens.
- **Ramas:** `feat/<carril>` por agente; PR a `main`; commits pequeños y descriptivos.

## Presupuesto de performance (línea base)
- Lighthouse ≥ 90 en Performance/SEO/Best-Practices/A11y (desktop) y ≥ 80 mobile.
- Intro 3D/canvas: `pause` fuera de viewport, degradar en móvil/reduced-motion.
- Fuentes `display:swap`, subset latino.

## Scripts esperados (`package.json`)
`pnpm dev` · `pnpm build` · `pnpm start` · `pnpm lint`
