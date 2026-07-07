# 07 · Orquestación de agentes

Varios agentes en paralelo. La regla que evita el caos: **cada agente es dueño de sus archivos**. No edites fuera de tu carril; si necesitas algo de otro, pídelo por el archivo de coordinación, no lo toques.

## Carriles (file ownership)

| Agente | Carril | Rama | Es dueño de |
|---|---|---|---|
| **A · Fundación** | tokens + sistema de diseño | `feat/fundacion` | `src/app/globals.css` (tokens + `@theme`), `layout.tsx`, `src/fonts/**`, `src/components/ui/**`, `src/lib/**` |
| **B · Secciones** | secciones estáticas | `feat/secciones` | `src/components/sections/**` (menos Intro), `src/content/**` |
| **C · Interactivos** | movimiento + 3D | `feat/interactivos` | `src/components/interactive/**`, `Intro.tsx` |
| **D · Contenido/SEO** | copy real + SEO + QA | `feat/seo` | `src/app/sitemap.ts`, `robots.ts`, `public/llms.txt`, metadata, schema; edita `content/**` **por PR coordinado** con B |
| **Orquestador** | ensamblaje + merges | `main` | `src/app/page.tsx`, resolución de conflictos, revisión de PRs |

> `page.tsx` (el ensamblaje) y `content/**` son zonas compartidas: cambios ahí van **por PR pequeño** y los mergea el orquestador. Todo lo demás es de un solo dueño.

## Flujo de trabajo (git)
1. `git switch -c feat/<carril>` desde `main` actualizado.
2. Commits chicos e imperativos: `feat(hero): H1 + top bar`.
3. Abrir **PR a `main`**; el orquestador revisa contra la **DoD** (`00`) y el spec de la sección (`04`).
4. Nadie pushea directo a `main`. Rebase sobre `main` antes de pedir merge.

## Contrato entre agentes
- **A publica primero.** Hasta que `feat/fundacion` esté en `main` (tokens + `ui/` + fuentes corriendo), B/C/D no arrancan componentes finales (pueden preparar `content/**` y specs).
- **B y C consumen** los tokens y primitivos de A; **no redefinen** colores/tipos.
- **D no reescribe** componentes: cambia datos en `content/**` y añade capa SEO.
- Si falta un token/primitivo, se **pide a A** (issue/nota), no se hardcodea.

## Definición de terminado
La de `00-INDICE.md` (DoD). Un PR que no la cumple, se devuelve.

## Cómo lanzar agentes (si se usa Claude Code / Cursor)
Un agente por carril, cada uno con este prompt de arranque:
> "Lee `docs/00` a `docs/09`. Trabajas SOLO en el carril **<X>** de `docs/07-AGENTES.md`. Respeta tokens (`03`) y specs (`04`/`05`). Rama `feat/<carril>`. No toques archivos de otros carriles. Entrega cumpliendo la DoD de `00`."
