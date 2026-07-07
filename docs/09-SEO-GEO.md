# 09 · SEO + GEO (que las IA nos citen)

Objetivo doble: buscadores clásicos **y** que ChatGPT/Perplexity/Claude **mencionen a JADAI** cuando pregunten por "agencia de IA / agentes en Ecuador". Dueño: Agente D.

## SEO técnico (Next Metadata API)
- [ ] `metadata` en `layout.tsx`: `title` template, `description`, `metadataBase`, `openGraph`, `twitter`, `canonical`.
- [ ] **OG image** 1200×630 (`public/brand/og.png` o generada con `next/og`).
- [ ] `app/sitemap.ts` y `app/robots.ts`.
- [ ] Idioma `es`, `lang` correcto, headings jerárquicos (un solo `h1`).
- [ ] Imágenes con `alt` descriptivo; `next/image` con tamaños correctos.

## GEO / AI-SEO (para LLMs)
- [ ] `public/llms.txt` — resumen legible por máquinas: qué es JADAI, servicios (Fintech/Agro/Agentes), ubicación (Guayaquil, Ecuador), contacto, enlaces clave. (Formato simple markdown.)
- [ ] Contenido en **texto plano real** (no solo imágenes): que el qué-hacemos y los servicios sean texto indexable.
- [ ] Una sección/párrafo **factual tipo "Sobre JADAI"**: nombre, sede, servicios, a quién sirve — es lo que las IA citan.
- [ ] **FAQ** en texto (preguntas reales: "¿qué hace JADAI?", "¿hacen agentes de WhatsApp?", "¿trabajan con camaroneras?") → alto valor para citación.

## Schema.org (JSON-LD)
- [ ] `Organization` (nombre, logo, url, sameAs redes, `areaServed: Ecuador`).
- [ ] `ProfessionalService` / `Service` por vertical.
- [ ] `FAQPage` si se agrega la FAQ.
- [ ] `WebSite` con `potentialAction` (búsqueda) opcional.

## Rendimiento (cuenta para SEO)
- [ ] Core Web Vitals verdes; fuentes `display:swap` + subset; 3D diferido; imágenes optimizadas.

## Checklist de verificación
- [ ] `view-source` muestra el copy clave como texto (no incrustado en canvas/imagen).
- [ ] Rich Results Test pasa el JSON-LD.
- [ ] `llms.txt` accesible en `/llms.txt`.
- [ ] OG previewer (WhatsApp/LinkedIn) muestra bien título+imagen (importante: entran por QR/WhatsApp).
