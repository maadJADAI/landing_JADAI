# 06 · Plan por fases (hoy → 18 jul)

12 días. Cada fase tiene tareas y quién la puede tomar (ver carriles en `07`). ✅ = hecho.

## F0 · Fundación (día 0-1) — Agente A
> Scaffold Next 16 + Tailwind v4 + R3F **ya existe** (`jadai-web`). F0 = convertirlo en la base JADAI.
- [ ] `globals.css`: reemplazar tokens default por los de JADAI + `@theme` + `[data-theme="dark"]` (`03`).
- [ ] Fuentes: cargar General Sans con `next/font/local` (desde `src/fonts/*.woff2`, no CDN) + añadir JetBrains Mono → `--font-general-sans`, `--font-jetbrains-mono`.
- [ ] `layout.tsx`: `lang="es"`, metadata base JADAI, variables de fuente en `<html>`.
- [ ] `page.tsx`: limpiar el template default; render de `<Hero/>` placeholder.
- [ ] `ui/`: `Container`, `Button` (primary/accent/ghost), `SectionHead`, `Mono`.
- [ ] (Antes de codear) leer `node_modules/next/dist/docs/01-app/01-getting-started/{11-css,13-fonts,14-metadata-and-og-images}.md` por `AGENTS.md`.
- [ ] Corre en `localhost:3000`. **Commit + PR.** → desbloquea a todos.

## F1 · Sistema vivo (día 1-3) — Agente A + B
- [ ] Portar componentes base del `design-system.html` a `ui/`.
- [ ] `Hero.tsx`, `Servicios.tsx`, `Proceso.tsx` (estáticos, con tokens).
- [ ] `content/servicios.ts` (los 3 verticales, copy provisional).

## F2 · Secciones directas (día 3-6) — Agente B
- [ ] `Trabajo.tsx` (placeholder de casos), `CTA.tsx`.
- [ ] `Equipo.tsx` y `Footer.tsx` desde los bloques de `promt.txt`, restilados a tokens.
- [ ] `content/equipo.ts`, `content/footer.ts`, `content/casos.ts` (placeholders marcados).

## F3 · Interactivos + 3D (día 5-8) — Agente C
- [ ] `Constellation.tsx`, `Node3D.tsx`, `ChatbotDemo.tsx`, `Stats.tsx` (portar de `design-system.html`).
- [ ] `Intro.tsx` + `ReferentsMarquee.tsx` (Acto 1 cinematográfico, `content/referentes.ts`).
- [ ] Micro-interacciones (`useReducedMotion`, `useInView`, botón magnético, tilt, scroll-reveal).

## F4 · Contenido + SEO/GEO (día 8-10) — Agente D
- [ ] Reemplazar copy y placeholders por **contenido real** (ver `08`).
- [ ] Fotos del equipo, logos de clientes, cifras reales.
- [ ] Metadata, OG, `sitemap.ts`, `robots.ts`, `llms.txt`, schema JSON-LD (`09`).
- [ ] QA responsive (375/768/1280) + accesibilidad + `prefers-reduced-motion`.

## F5 · Pulido + deploy (día 10-12) — Todos
- [ ] Integraciones: link de agendar (Calendar/Calendly) + WhatsApp real.
- [ ] Lighthouse ≥ objetivos (`02`). Optimizar imágenes/fuentes/3D.
- [ ] Deploy en Vercel + dominio `jadai.biz`. Revisión final con el equipo.

## Ruta crítica
`F0` bloquea todo → hacerla primero y bien. `Intro` (F3) y `contenido real` (F4) son los que más dependen de **assets del equipo** (`08`): pedirlos **hoy**.
