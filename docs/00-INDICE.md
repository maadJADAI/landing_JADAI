# JADAI · Landing — Índice maestro de construcción

> **Qué es esto:** el manual con el que **varios agentes de IA** (y humanos) construyen la landing de JADAI sin pisarse. Léelo completo antes de tocar código. La **fuente de verdad visual** es [`01-SISTEMA-DE-DISENO.md`](./01-SISTEMA-DE-DISENO.md) (v0.5, dentro del repo) — respaldada por `../design-system.html` (sistema vivo, un nivel arriba).

**Deadline:** 18 de julio de 2026 · **Hoy:** 06 de julio de 2026 · **~12 días.**

---

## Cómo leer estos documentos (en orden)

| # | Archivo | Para qué |
|---|---|---|
| 00 | `00-INDICE.md` | Este mapa + reglas de oro |
| **SD** | `01-SISTEMA-DE-DISENO.md` | **Sistema de diseño v0.5 — fuente de verdad visual** (color, tipo, retícula, componentes, movimiento) |
| 01 | `01-PROYECTO.md` | Qué es JADAI, verticales, público, voz, referencias |
| 02 | `02-ARQUITECTURA.md` | Stack, estructura de carpetas, convenciones, deploy |
| 03 | `03-TOKENS-TAILWIND.md` | Tokens del sistema → config de Tailwind (copy-paste) |
| 04 | `04-SECCIONES.md` | Spec sección por sección (hero, servicios, demos, equipo, contacto…) |
| 05 | `05-INTERACTIVOS-3D.md` | Intro cinematográfico, constelación, nodo 3D, chatbot, marquee |
| 06 | `06-PLAN-FASES.md` | Paso a paso por fases hasta el 18 jul |
| 07 | `07-AGENTES.md` | Cómo se reparten el trabajo los agentes (mapa de propiedad de archivos) |
| 08 | `08-ASSETS-CONTENIDO.md` | **Checklist para humanos**: logos, fotos, contactos, copy, casos |
| 09 | `09-SEO-GEO.md` | Metadata, schema, `llms.txt` (para que las IA nos citen) |

---

## Reglas de oro (las rompes = se revierte tu PR)

1. **Nunca un hex suelto.** Todo color, espacio, tipo y radio sale de un **token** (ver `03`). Si necesitas un valor que no existe, se propone en el token, no se hardcodea.
2. **Un solo acento.** El cian aparece con disciplina, plano. Cero glow/glass/gradientes de IA.
3. **El sistema manda.** Ante la duda de estilo, gana `JADAI-SISTEMA-DE-DISENO.md`. No inventes componentes nuevos si hay uno equivalente.
4. **Movimiento con propósito** y **siempre** dentro de `@media (prefers-reduced-motion: reduce)`.
5. **Respeta tu carril.** Trabaja solo en los archivos que te asigna `07-AGENTES.md`. `src/app/page.tsx` lo ensambla el orquestador.
6. **Commits chicos, ramas por agente, PR a `main`.** Nada de push directo a `main`.
7. **Mobile-first real.** Cada sección se entrega responsive (probar 375 / 768 / 1280).
8. **Accesibilidad no es opcional:** foco visible, `alt`, contraste AA, semántica.

## Definición de "terminado" (DoD) por pieza
- [ ] Usa solo tokens · [ ] Responsive 375/768/1280 · [ ] `prefers-reduced-motion` ok
- [ ] Foco de teclado visible · [ ] `alt`/aria donde toca · [ ] Sin errores de consola
- [ ] Coincide con el spec de su sección · [ ] Lighthouse no baja de la línea base
