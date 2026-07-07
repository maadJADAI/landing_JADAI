# JADAI — Sistema de diseño

**Versión 0.5 · Guayaquil, Ecuador · Estudio de IA aplicada**

Este documento es la fuente de verdad del lenguaje visual de JADAI. Define color, tipografía, espaciado, retícula, componentes y movimiento. **Esto NO es la landing** — es el sistema con el que se construirá la landing y todo el producto.

> Filosofía en una línea: **editorial / suizo. Papel cálido, tinta, un solo acento (cian). El gusto lo hacen la tipografía, la retícula y el vacío — no los efectos.**

---

## 1. Principios

1. **El vacío trabaja.** El aire no es espacio desperdiciado: es jerarquía. El lujo viene del silencio, no de rellenar.
2. **Un solo acento.** El cian de la marca aparece con disciplina — plano, nunca como resplandor. Un color que grita deja de significar.
3. **Editorial, no efectista.** La tipografía y la retícula hacen el trabajo. Nada de glow, glass ni gradientes genéricos de IA ("vibecoded").
4. **Movimiento con propósito.** Cada interacción comunica algo — jerarquía, vida o feedback. Nada se mueve porque sí. Todo respeta `prefers-reduced-motion`.

**Anti-patrones prohibidos:** OLED negro con neón, cards glassy/blur por todos lados, pills flotantes, gradientes morado-azul de IA, sombras negras duras, `Inter` como fuente, animaciones en loop infinito sin motivo.

---

## 2. Color

Arquitectura de **dos niveles**: primitivos (valor crudo) → semánticos (intención). **Los componentes solo consumen semánticos**, nunca un hex suelto ni un primitivo directo. Un rebrand se hace cambiando primitivos; el modo oscuro, reasignando semánticos.

### 2.1 Primitivos — neutros (papel + tinta)

| Token | Hex | Uso |
|---|---|---|
| `--c-paper` | `#FAF8F3` | Fondo cálido |
| `--c-paper-2` | `#F1EEE6` | Banda alterna |
| `--c-paper-3` | `#E7E3D8` | Panel / tinte |
| `--c-ink` | `#17161A` | Texto principal |
| `--c-ink-2` | `#403F45` | Texto secundario |
| `--c-ink-3` | `#7C7A82` | Muted / labels |
| `--c-white` | `#FFFFFF` | Panel elevado |

Líneas (tinta translúcida, nunca gris plano): `--c-hair: rgba(23,22,26,.14)` · `--c-hair-strong: rgba(23,22,26,.30)`

### 2.2 Primitivos — acento (cian de marca)

| Token | Hex | Uso |
|---|---|---|
| `--c-cyan` | `#0FB2C6` | Relleno de acento |
| `--c-cyan-deep` | `#076A75` | Cian como texto/enlace (contraste AA) |
| `--c-cyan-wash` | `#DDEFF1` | Tinte suave |

### 2.3 Primitivos — categóricos por vertical de servicio

Paletas acordadas con el equipo. **Cada vertical tiene una rampa completa.** El tono base (`400`/`500`) es el principal.

**Agentes IA — naranja** (`--agents-*`)
`100 #FFB74D` · `200 #FF9E3D` · `300 #FF8F26` · **`400 #FF7D00` (base)** · `500 #E66A00` · `600 #C55A00`

**Fintech — azul** (`--fintech-*`)
`100 #B3CDE0` · `200 #7A9EC2` · `300 #4A7C9D` · **`400 #2B4F6E` (base)** · `500 #1C3C54`

**Agro — verde** (`--agro-*`)
`100 #D9E8D2` · `200 #B5C9B0` · `300 #8DA88D` · `400 #63956A` · **`500 #4B7B52` (base)** · `600 #2F5A3A` · `700 #1F3B28`

> Los colores categóricos viven **solo en su vertical/producto**. Fuera de su contexto, el sitio es papel + tinta + cian.

### 2.4 Semánticos — tema claro (por defecto, bloqueado)

```
--bg: var(--c-paper);          --text: var(--c-ink);
--bg-alt: var(--c-paper-2);    --text-2: var(--c-ink-2);
--panel: var(--c-white);       --text-muted: var(--c-ink-3);
--rule: var(--c-hair);         --rule-strong: var(--c-hair-strong);
--accent: var(--c-cyan);       --accent-ink: var(--c-cyan-deep);
--accent-wash: var(--c-cyan-wash);   --on-accent: var(--c-ink);   /* tinta sobre cian (AA) */
--focus-ring: var(--c-cyan-deep);
--svc-agents: var(--agents-400);  --svc-fintech: var(--fintech-400);  --svc-agro: var(--agro-500);
```

### 2.5 Semánticos — tema oscuro (para modo oscuro de la landing)

| Token | Hex |
|---|---|
| `--bg` | `#0F0E12` |
| `--surface` | `#1A1922` |
| `--surface-2` | `#24232E` |
| `--text` | `#F4F2EC` |
| `--text-muted` | `#8E8B95` |
| `--accent` | `#22CCE6` (cian más brillante sobre negro) |
| `--accent-strong` | `#3FE0F5` |

El modo oscuro **reasigna solo semánticos**: mismos componentes, misma marca, sobre tinta profunda. El logo cambia a su versión blanca (`jadai-logo-white.png`).

### 2.6 Accesibilidad de color
- Texto de cuerpo usa `--text` / `--text-2` (AA holgado sobre papel).
- `--text-muted` solo para labels/mono o texto grande.
- Botón cian usa **tinta** encima (`--on-accent`), no blanco (contraste ≈ 6.7:1).
- Enlaces/acento como texto usan `--accent-ink` (#076A75), no `--accent`.

---

## 3. Tipografía

Dos familias. **General Sans para todo, JetBrains Mono para datos/etiquetas.** El énfasis se hace con la **itálica de la misma fuente**, nunca metiendo otra tipografía.

- **General Sans** (Fontshare, gratis) — geométrica, pesos 400/500/600/700. `--sans: 'General Sans', -apple-system, system-ui, sans-serif`
- **JetBrains Mono** — micro-labels, tokens, datos, hora. `--mono: 'JetBrains Mono', ui-monospace, monospace`

### Escala (tokens `--fs-*`)

| Token | Tamaño | Uso |
|---|---|---|
| `--fs-hero` | `clamp(46px,8.5vw,112px)` | Titular del hero |
| `--fs-display` | `clamp(32px,5vw,64px)` | Display / specimens |
| `--fs-title` | `clamp(26px,3.4vw,40px)` | Títulos de sección |
| `--fs-lead` | `clamp(18px,1.7vw,23px)` | Subtítulo / lede |
| `--fs-h3` | `20px` | Subtítulos |
| `--fs-body` | `16px` | Cuerpo |
| `--fs-sm` | `14px` | Small |
| `--fs-label` | `12px` | Labels |
| `--fs-micro` | `11px` | Micro / mono |

**Pesos:** `--fw-regular:400` `--fw-medium:500` `--fw-semibold:600` `--fw-bold:700`
**Interlineado:** `--lh-solid:0.96` (hero) `--lh-tight:1.05` `--lh-snug:1.2` `--lh-base:1.55` (cuerpo)
**Tracking:** `--ls-mega:-.04em` (display) `--ls-tight:-.02em` `--ls-wide:.12em` `--ls-wider:.2em` (mono caps)

Regla de énfasis: `Construimos IA que <em>factura</em>` → la itálica va en `--accent-ink`. **Nunca** mezclar una serif dentro de un titular sans.

---

## 4. Espaciado y retícula

**Base de 4px.** Todo margen, gap y padding sale de la escala. Nada de píxeles sueltos.

`--space-1:4` `-2:8` `-3:12` `-4:16` `-5:20` `-6:24` `-7:28` `-8:32` `-10:40` `-12:48` `-16:64` `-20:80` `-24:96` `-32:128`

**Radios (editorial = casi rectos):** `--radius-none:0` `--radius-sm:3px` `--radius-md:6px` `--radius-pill:999px`
Botones = radio 3px (rectos), no pills. Pills solo en el punto del nodo/avatares.

**Retícula:** contenedor `--maxw:1180px`, `--gutter: clamp(24px,5vw,80px)`, 12 columnas. Secciones con `padding: var(--space-24) 0` y `border-top: 1px solid var(--rule)`.

---

## 5. La marca

El **nodo + línea** del wordmark JADAI es la unidad gráfica del sistema: red, conexión, integración, IA. Plano y firme.

- **Lockup:** `jadai-logo.png` (tinta, sobre papel) · `jadai-logo-white.png` (blanco, sobre negro). Aspect ≈ 3.91:1.
- **Área de respeto:** la altura de la "A" alrededor.
- **Motivo:** nodo lleno → línea → nodo abierto (origen, camino, destino).
- **Do:** plano, un color, sobre espacio limpio. **Don't:** glow, gradiente, rotarlo.
- En 3D/interactivo, el motivo se vuelve una **red de nodos** (constelación / icosaedro de nodos cian).

---

## 6. Componentes

### Botones
Formas rectas (radio 3px), sin píldoras brillantes. Fuente `--sans`, peso 500, `--fs-sm`, padding `12px 24px`.

| Variante | Reposo | Hover |
|---|---|---|
| **Primary** | fondo `--text` (tinta), texto `--bg` | fondo `--accent-ink`, texto blanco |
| **Accent** | fondo `--accent` (cian), texto `--on-accent` (tinta) | fondo `--accent-ink`, texto blanco |
| **Ghost** | transparente, borde `--rule-strong` | fondo `--text`, texto `--bg` |

**Estados obligatorios:** default · hover (magnético, se acerca al cursor) · **focus visible** (`outline: 2px solid var(--focus-ring); offset 3px`) · disabled (opacidad 40%, `not-allowed`). Al `:active`, `translateY(1px)`.

### Servicios (índice de verticales)
Fila por vertical: número mono + nombre (General Sans medium ~clamp(24-38px)) + token + **rampa de color** de esa vertical. Hover: `padding-left` sutil.

### Card / panel
Fondo `--panel`, borde `1px solid --rule`, radio pequeño o recto. **Elevación con hairlines y vacío, no con sombras** (salvo el mockup de teléfono, que sí lleva sombra tintada suave).

### Chatbot demo (WhatsApp)
Teléfono (`--panel`, `border-radius:26px`, sombra tintada). Mensajes: entrantes `--panel` a la izquierda, salientes (agente JADAI) `--accent` a la derecha con texto `--on-accent`. Indicador "escribiendo…" con 3 puntos. Se reproduce al entrar en viewport.

### Team grid
Fotos B/N que pasan a color al hover, con nombre + rol que sube. Grid 6→3→2 columnas.

### Stats
Cifras grandes (`--fw-semibold`, `--ls-mega`) que cuentan hacia arriba al entrar en vista, con label mono.

---

## 7. Movimiento

Motivado y sutil. Curvas `cubic-bezier(.16,1,.3,1)`. **Solo `transform` y `opacity`** (nunca `top/left/width/height`).

1. **Constelación reactiva** (hero) — red de nodos que sigue el cursor; los cercanos se vuelven cian y trazan líneas hacia él. Es el motivo de marca. `<canvas>` + `requestAnimationFrame`.
2. **Nodo 3D** (Three.js, icosaedro de nodos cian) — gira solo y hace parallax con el mouse. Degrada a nodo plano si no carga.
3. **Tilt + botón magnético** en hover.
4. **Scroll-reveal** suave (fade + subir) vía `IntersectionObserver`.

Todo dentro de `@media (prefers-reduced-motion: reduce)` se desactiva.

---

## 8. Voz (placeholder — el equipo la afina)

Directo. Humano. Sin humo. Resultados, no tecnología por la tecnología.
- ✅ "Construimos IA que factura." ❌ "Soluciones de IA de vanguardia."
- ✅ "Nos integramos a tu equipo y enviamos producto." ❌ "Sinergias disruptivas."

---

## 9. Stack técnico recomendado (landing)

- **Front:** React (Vite o Next.js) → build estático en **Vercel** (gratis).
- **Back:** endpoints en **Hetzner** (los expone Jose Julio); el front los consume por API (calendar, sheets, etc.).
- **Dominio:** subdominio de `jadai.biz` apuntando a Vercel.
- **Fuentes:** self-host con `@font-face` + `font-display:swap` (no `<link>` a Google en prod).
- **3D:** Three.js. **Animación:** CSS/`IntersectionObserver`; Motion (framer) si se necesita físico.
- **Assets:** `jadai-logo.png`, `jadai-logo-white.png` en la carpeta del repo.

---

## 10. Archivos de referencia

- `design-system.html` — sistema vivo e interactivo (fuente de verdad de tokens y componentes).
- `JADAI-Sistema-de-Diseno.pdf` — guidelines maquetadas (11 páginas).
- `jadai-logo.png` / `jadai-logo-white.png` — lockups.
- `JADAI-BUILD-PROMPT.md` — prompt + directrices para construir/replicar con IA (Fable 5 / Cursor).
