# 05 · Objetos interactivos y 3D

Todos en `src/components/interactive/`, todos `"use client"`, todos con **fallback** para `prefers-reduced-motion` y **pausa fuera de viewport**. Curva estándar `cubic-bezier(.16,1,.3,1)`. Solo animar `transform`/`opacity`.

---

## A · Intro cinematográfico — `ReferentsMarquee.tsx` (dentro de `Intro.tsx`)
El Acto 1 full-screen oscuro.
- **Contenido = frases**, no caras (recomendado — más clase y cero riesgo legal; ver `08`). Cada ítem: frase grande (`text-display`) + autor en mono. Ej: *"Stay hungry, stay foolish."* — `S. JOBS`.
- **Movimiento:** dos filas en **marquee** horizontal, sentidos opuestos, velocidad lenta; se frena al hover. Loop con `transform: translateX` (duplicar el track para loop infinito sin salto).
- Logo JADAI blanco fijo + CTA "Explorar" (scroll al hero) + hint "desliza ↓".
- Si el equipo insiste en fotos: tratarlas **duotono** (tinta/cian) para que no se vean "poster". Requiere fotos con licencia (`08`).

## B · Constelación reactiva — `Constellation.tsx`
Red de nodos en `<canvas>` que sigue el cursor; los cercanos se vuelven cian y trazan línea hacia el mouse. Es el **motivo de marca** (nodo+línea del logo). `requestAnimationFrame`. Vive en el intro (oscuro) y opcionalmente sutil en el hero. Densidad según área; pausa off-screen; en reduced-motion queda estática.
> Ya existe una versión funcional en `../design-system.html` (bloque `#constellation`) — portarla a componente.

## C · Nodo 3D — `Node3D.tsx` (React Three Fiber)
Icosaedro de **nodos/wireframe cian** que gira solo y hace parallax con el mouse. **Degrada al nodo plano** (SVG/CSS) si WebGL no está o en móvil de gama baja.
- Usar **`@react-three/fiber`** (ya instalado) — `<Canvas>` + componentes R3F, no la API imperativa de Three vanilla. `@react-three/drei` si hace falta un helper.
- Cargar con `next/dynamic` (`ssr:false`) para no inflar el bundle inicial y evitar SSR de WebGL.
- Pausar el render fuera de viewport; no montar en `prefers-reduced-motion`.
> Hay una versión imperativa (Three vanilla) en `../design-system.html` (`#node3d`) como referencia de geometría/estética — **reimplementar en R3F**, no copiar la API imperativa.

## D · Chatbot demo — `ChatbotDemo.tsx`
Teléfono con conversación de WhatsApp que se **reproduce sola** al entrar en viewport: burbujas entrantes (izq, `--panel`) y salientes del agente (der, `--accent` + `--on-accent`), indicador "escribiendo…" (3 puntos). Guion en `content/demo.ts`. Se reproduce una vez (IntersectionObserver).
> Base funcional en `../design-system.html` (bloque `#chat`).

## E · Stats contadores — `Stats.tsx`
Números que animan de 0 al valor al entrar en vista (easing cúbico). En reduced-motion, muestran el valor final directo. **Redondear** siempre.

## F · Micro-interacciones (en `lib/`/`ui/`)
- **Botón magnético**: el botón se acerca ligeramente al cursor en hover.
- **Tilt 3D**: parallax de tarjeta/teléfono en hover (`rotateX/Y` pequeños).
- **Scroll-reveal**: fade + subida vía `IntersectionObserver` (`.reveal`→`.in`).
- Hooks reutilizables: `useReducedMotion()`, `useInView()`.

## Rendimiento
- `Constellation` y `Node3D`: cap de DPR a 2, pausar con `IntersectionObserver`, no correr si `reduced-motion`.
- 3D solo en el intro (1 instancia). No abusar de canvases simultáneos.
- Cargar Three con `next/dynamic` (`ssr:false`) para no inflar el bundle inicial.
