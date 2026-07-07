# 03 · Tokens → Tailwind v4 (copy-paste)

**Fuente de verdad:** `../JADAI-SISTEMA-DE-DISENO.md`. Aquí se traduce a este scaffold real.

> ⚠️ Este proyecto usa **Tailwind v4** (config por CSS, **no** hay `tailwind.config.ts`). Los tokens se declaran como CSS variables en `src/app/globals.css` y se exponen a Tailwind con `@theme inline`. Un rebrand o el modo oscuro = editar variables en un solo lugar.

## `src/app/globals.css` (reemplaza el default de create-next-app)
```css
@import "tailwindcss";

:root{
  /* neutros */
  --c-paper:#FAF8F3; --c-paper-2:#F1EEE6; --c-paper-3:#E7E3D8;
  --c-ink:#17161A; --c-ink-2:#403F45; --c-ink-3:#7C7A82; --c-white:#FFFFFF;
  --c-hair:rgba(23,22,26,.14); --c-hair-strong:rgba(23,22,26,.30);
  /* acento */
  --c-cyan:#0FB2C6; --c-cyan-deep:#076A75; --c-cyan-wash:#DDEFF1;
  /* verticales (base; completar rampas del sistema) */
  --agents-400:#FF7D00; --fintech-400:#2B4F6E; --agro-500:#4B7B52;
  /* semánticos claros */
  --bg:var(--c-paper); --bg-alt:var(--c-paper-2); --panel:var(--c-white);
  --text:var(--c-ink); --text-2:var(--c-ink-2); --text-muted:var(--c-ink-3);
  --rule:var(--c-hair); --rule-strong:var(--c-hair-strong);
  --accent:var(--c-cyan); --accent-ink:var(--c-cyan-deep); --accent-wash:var(--c-cyan-wash);
  --on-accent:var(--c-ink);
}
/* Acto 1 (intro) / oscuro: reasigna SOLO semánticos */
[data-theme="dark"]{
  --bg:#0F0E12; --panel:#1A1922; --text:#F4F2EC; --text-muted:#8E8B95;
  --accent:#22CCE6; --accent-ink:#3FE0F5; --on-accent:#0F0E12;
  --rule:rgba(255,255,255,.10); --rule-strong:rgba(255,255,255,.18);
}

@theme inline{
  --color-bg:var(--bg); --color-bg-alt:var(--bg-alt); --color-panel:var(--panel);
  --color-ink:var(--text); --color-ink-2:var(--text-2); --color-muted:var(--text-muted);
  --color-rule:var(--rule); --color-rule-strong:var(--rule-strong);
  --color-accent:var(--accent); --color-accent-ink:var(--accent-ink); --color-accent-wash:var(--accent-wash);
  --color-agents:var(--agents-400); --color-fintech:var(--fintech-400); --color-agro:var(--agro-500);
  --font-sans:var(--font-general-sans);
  --font-mono:var(--font-jetbrains-mono);
}

body{ background:var(--bg); color:var(--text); font-family:var(--font-sans); }
```
> Con `@theme inline`, Tailwind genera utilidades: `bg-bg`, `bg-panel`, `text-ink`, `text-muted`, `border-rule`, `text-accent-ink`, `text-agents`, `font-sans`, `font-mono`, etc.

## Tipografía (utilidades a mano, no fontSize de config)
Tailwind v4 no lee `tailwind.config`. Define los tamaños fluidos como clases utilitarias en `globals.css` con `@utility`, o usa `text-[clamp(...)]`. Recomendado — `@utility`:
```css
@utility text-hero{ font-size:clamp(46px,8.5vw,112px); line-height:.96; letter-spacing:-.04em; }
@utility text-display{ font-size:clamp(32px,5vw,64px); line-height:1.05; letter-spacing:-.04em; }
@utility text-title{ font-size:clamp(26px,3.4vw,40px); line-height:1.2; letter-spacing:-.02em; }
@utility text-lead{ font-size:clamp(18px,1.7vw,23px); line-height:1.2; }
```

## Fuentes (`src/app/layout.tsx`) — con `next/font/local`
General Sans ya está en `src/fonts/*.woff2`. Cargarla local (no por CDN) y añadir JetBrains Mono:
```ts
import localFont from "next/font/local";
const generalSans = localFont({
  variable: "--font-general-sans",
  src: [
    { path:"../fonts/GeneralSans-400.woff2", weight:"400", style:"normal" },
    { path:"../fonts/GeneralSans-500.woff2", weight:"500", style:"normal" },
    { path:"../fonts/GeneralSans-600.woff2", weight:"600", style:"normal" },
    { path:"../fonts/GeneralSans-700.woff2", weight:"700", style:"normal" },
  ],
  display:"swap",
});
// JetBrains Mono: next/font/google o self-host en src/fonts (ver 08)
```
> **Pendiente (08):** conseguir JetBrains Mono `.woff2` + decidir el énfasis: General Sans **no tiene itálica** cargada. Opciones: (a) bajar General Sans Italic, o (b) hacer el énfasis solo con `text-accent-ink` (sin itálica). Recomendado (b) hasta tener la itálica.

## Reglas de uso
- Colores/tipos siempre por token/utilidad. Nada de hex suelto.
- Botones radio `sm` (rectos), no pills. Elevación con hairlines + vacío, no sombras.
- Espaciado por múltiplos de 4 (escala Tailwind).
