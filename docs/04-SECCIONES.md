# 04 · Secciones (spec pieza por pieza)

Orden en `page.tsx`. Cada sección = un componente en `src/components/sections/`. "Bloque" = esqueleto que se saca de `../promt.txt` (shadcn) y se **restila a tokens**.

---

## 0 · Intro cinematográfico — `Intro.tsx` `[client]` `data-theme="dark"`
Full-screen (100dvh). Acto 1. Ver detalle en `05`.
- Logo JADAI blanco centrado + **frase que movió el mundo** (grande) + **nombre del referente en mono**, deslizando de lado (marquee).
- Fondo: constelación de nodos (canvas).
- CTA: "Explorar" (scroll suave al hero) + hint "desliza ↓".
- Al hacer scroll, transición al cuerpo claro.
- **Contenido:** `content/referentes.ts` (frase + autor). Enfoque recomendado: **frase tipográfica, sin fotos** (ver `05` y `08`).

## 1 · Hero editorial — `Hero.tsx`
- Top bar: logo (tinta) · nav mono (Servicios/Trabajo/Enfoque/Contacto) · hora local "Guayaquil, EC — HH:MM".
- H1 `text-hero`: "Construimos IA que *factura*." (itálica cian en "factura").
- Sub `text-lead` + índice mono a la derecha.
- Nav opcional: se muestra al hover (reduce estorbo), como pidió Mateo.

## 2 · Servicios — `Servicios.tsx`
Índice editorial de los 3 verticales (no cards flotantes). Fila por vertical: nº mono + nombre (`text-title` medium) + token + **rampa de color** de esa vertical. Hover: `padding-left` sutil.
- Fintech (azul) · Agro (verde) · Agentes (naranja). Copy en `content/servicios.ts`.

## 3 · Demo de producto — `Demo.tsx` + `<ChatbotDemo/>`
"Lo que construimos" — no mockup muerto. Teléfono con **chatbot de WhatsApp** que se auto-reproduce al entrar en viewport (mensajes entrantes/salientes + "escribiendo…"). Copy demo en `content/demo.ts`. Detalle en `05`.

## 4 · Trabajo / casos — `Trabajo.tsx`
Casos reales (Watch/fintech, camaronera) como cards tipo JetBrains: título + vertical + 1 línea de resultado. **Requiere permiso del cliente** (ver `08`). Placeholder hasta tener datos.

## 5 · Equipo — `Equipo.tsx` (bloque de `promt.txt` restilado)
Grid de fotos B/N → color al hover, nombre + rol suben. 6→3→2 columnas. Base: `TeamSection` de `../promt.txt`, restilado a tokens (nada de sombras zinc ni rounded-full por defecto; editorial). Datos en `content/equipo.ts`. **Fotos reales pendientes** (`08`).

## 6 · Stats — `Stats.tsx` + contadores
Cifras grandes que cuentan hacia arriba al entrar en vista + label mono. **Números reales pendientes** (`08`); hoy van de ejemplo marcados como tal.

## 7 · Proceso — `Proceso.tsx`
"Cómo trabajamos" en 3 pasos (01 Agenda · 02 Nos integramos · 03 Enviamos en iteraciones). Grid de 3 con hairlines.

## 8 · CTA / Agendar — `CTA.tsx`
Cierre de conversión: "Agenda una llamada" (→ link Google Calendar/Calendly) + "Hablar con un agente" (→ WhatsApp `wa.me/<número>`). Ver contactos en `08`.

## 9 · Footer — `Footer.tsx` (bloque de `promt.txt` restilado)
Base: `Footer2` de `../promt.txt`. Restilar a tokens. Columnas: Producto/Servicios · Compañía · Recursos · Social. Logo + tagline + copyright + legal. Datos en `content/footer.ts`.

---

### Notas transversales
- **Ritmo dark/claro art-directed** (sin toggle): intro oscuro → cuerpo claro; alternar bandas `bg`/`bg-alt`.
- Cada sección abre con `SectionHead` (nº mono + título + lede).
- Todo texto/enlace/número real vive en `src/content/*` para que el equipo lo edite sin tocar componentes.
