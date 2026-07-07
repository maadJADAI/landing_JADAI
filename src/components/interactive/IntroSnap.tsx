"use client";

import { useEffect } from "react";

/* Snap de dos zonas entre la intro (acto 1) y el contenido (acto 2).
   La página nunca descansa a medio camino dentro de la intro: el tope
   "real" del contenido es el inicio de <main id="contenido"> (header +
   hero); más arriba de eso, se vuelve entero a la intro.

   Desktop (rueda): un gesto en la frontera dispara el viaje completo.
   Táctil: el scroll nativo NUNCA se intercepta (ningún listener táctil
   no-pasivo — bloquear touchmove es lo que produce lag en iOS Safari);
   el viaje se completa solo al soltar el dedo o al morir la inercia. */

const EDGE = 8; // tolerancia en px alrededor de los puntos de reposo
const SETTLE_MS = 180; // pausa que consideramos "scroll asentado"
const INERTIA_GAP_MS = 160; // gap máximo entre eventos de una misma inercia
const DURATION_MS = 700;

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/** ¿El gesto ocurre dentro de un contenedor con scroll propio (chat, demo)? */
function insideScrollable(target: EventTarget | null): boolean {
  let el = target instanceof Element ? target : null;
  while (el && el !== document.body) {
    if (el.scrollHeight > el.clientHeight + 1) {
      const overflowY = getComputedStyle(el).overflowY;
      if (overflowY === "auto" || overflowY === "scroll") return true;
    }
    el = el.parentElement;
  }
  return false;
}

export function IntroSnap() {
  useEffect(() => {
    const main = document.getElementById("contenido");
    if (!main) return;
    // con motion reducido no secuestramos el scroll (docs/05·C)
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const html = document.documentElement;
    let animating = false;
    let raf = 0;
    let settleTimer = 0;
    let lastY = window.scrollY;
    let lastDir = 0;
    let swallowing = false; // tragar la cola de inercia de rueda tras animar
    let lastWheelT = 0;
    let scrollbarDrag = false;
    let touchActive = false; // jamás animar con el dedo en pantalla
    // la red de asentamiento solo se arma tras un gesto real del usuario;
    // los layout shifts de la carga no deben disparar el snap
    let armed = false;

    // frontera cacheada: medirla en cada evento fuerza layout en pleno
    // scroll; se recalcula solo cuando cambia el tamaño del documento
    let boundary = 0;
    const measure = () => {
      boundary = Math.round(main.getBoundingClientRect().top + window.scrollY);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);

    const stopAnim = () => {
      cancelAnimationFrame(raf);
      animating = false;
      html.style.scrollBehavior = "";
    };

    const animateTo = (getTarget: () => number) => {
      stopAnim();
      animating = true;
      // sin esto, cada scrollTo del rAF relanzaría el scroll-behavior:smooth
      // global y la animación se vuelve gomosa
      html.style.scrollBehavior = "auto";
      const from = window.scrollY;
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / DURATION_MS);
        // target vivo: en iOS la barra del navegador puede mover la frontera
        window.scrollTo(0, from + (getTarget() - from) * easeInOutCubic(t));
        if (t < 1) {
          raf = requestAnimationFrame(step);
        } else {
          stopAnim();
          swallowing = true;
          lastWheelT = performance.now();
        }
      };
      raf = requestAnimationFrame(step);
    };

    const onWheel = (e: WheelEvent) => {
      armed = true;
      const now = performance.now();
      if (animating) {
        e.preventDefault();
        return;
      }
      if (swallowing) {
        if (now - lastWheelT < INERTIA_GAP_MS) {
          e.preventDefault();
          lastWheelT = now;
          return;
        }
        swallowing = false;
      }
      lastWheelT = now;
      const y = window.scrollY;
      const up = e.deltaY < 0 && y > EDGE && y <= boundary + EDGE;
      const down = e.deltaY > 0 && y < boundary - EDGE;
      if (!up && !down) return;
      if (insideScrollable(e.target)) return;
      e.preventDefault();
      animateTo(up ? () => 0 : () => boundary);
    };

    // Táctil: solo observamos. Tocar la pantalla devuelve el control al
    // usuario (cancela la animación); al soltar, el settle completa el viaje.
    const onTouchStart = () => {
      armed = true;
      touchActive = true;
      if (animating) stopAnim();
      clearTimeout(settleTimer);
    };
    const onTouchEnd = () => {
      touchActive = false;
      clearTimeout(settleTimer);
      settleTimer = window.setTimeout(settle, SETTLE_MS);
    };

    // Red de asentamiento (único disparador en táctil; en desktop cubre
    // teclado y scrollbar): si el scroll queda varado dentro de la intro,
    // completar el viaje hacia donde iba.
    const settle = () => {
      if (!armed || animating || touchActive || scrollbarDrag) return;
      const pos = window.scrollY;
      if (pos > EDGE && pos < boundary - EDGE) {
        animateTo(lastDir < 0 ? () => 0 : () => boundary);
      }
    };
    const onScroll = () => {
      const y = window.scrollY;
      lastDir = y > lastY ? 1 : y < lastY ? -1 : lastDir;
      lastY = y;
      if (animating) return;
      clearTimeout(settleTimer);
      settleTimer = window.setTimeout(settle, SETTLE_MS);
    };

    const scrollKeys = new Set([
      "ArrowUp",
      "ArrowDown",
      "PageUp",
      "PageDown",
      "Home",
      "End",
      " ",
    ]);
    const onKeyDown = (e: KeyboardEvent) => {
      if (scrollKeys.has(e.key)) armed = true;
    };

    const onMouseDown = (e: MouseEvent) => {
      if (e.clientX >= document.documentElement.clientWidth) {
        scrollbarDrag = true;
        armed = true;
      }
    };
    const onMouseUp = () => {
      if (scrollbarDrag) {
        scrollbarDrag = false;
        clearTimeout(settleTimer);
        settleTimer = window.setTimeout(settle, SETTLE_MS);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("touchcancel", onTouchEnd, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      stopAnim();
      clearTimeout(settleTimer);
      ro.disconnect();
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchEnd);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return null;
}
