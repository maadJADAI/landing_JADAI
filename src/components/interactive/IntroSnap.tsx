"use client";

import { useEffect } from "react";

/* Snap de dos zonas entre la intro (acto 1) y el contenido (acto 2).
   La página nunca descansa a medio camino dentro de la intro: un gesto
   de scroll en la frontera dispara el viaje completo en ambos sentidos.
   El tope "real" del contenido es el inicio de <main id="contenido">
   (header + hero); más arriba de eso, se vuelve entero a la intro. */

const EDGE = 8; // tolerancia en px alrededor de los puntos de reposo
const SETTLE_MS = 140; // pausa que consideramos "scroll asentado"
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

    let animating = false;
    let raf = 0;
    let settleTimer = 0;
    let lastY = window.scrollY;
    let lastDir = 0;
    let swallowing = false; // tragar la cola de inercia tras una animación
    let lastWheelT = 0;
    let scrollbarDrag = false;
    // la red de asentamiento solo se arma tras un gesto real del usuario;
    // los layout shifts de la carga no deben disparar el snap
    let armed = false;

    const boundary = () =>
      Math.round(main.getBoundingClientRect().top + window.scrollY);

    const animateTo = (target: number) => {
      animating = true;
      cancelAnimationFrame(raf);
      const from = window.scrollY;
      const dist = target - from;
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / DURATION_MS);
        window.scrollTo(0, from + dist * easeInOutCubic(t));
        if (t < 1) {
          raf = requestAnimationFrame(step);
        } else {
          animating = false;
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
      if (insideScrollable(e.target)) return;
      const y = window.scrollY;
      const b = boundary();
      if (e.deltaY < 0 && y > EDGE && y <= b + EDGE) {
        e.preventDefault();
        animateTo(0);
      } else if (e.deltaY > 0 && y < b - EDGE) {
        e.preventDefault();
        animateTo(b);
      }
    };

    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => {
      armed = true;
      touchStartY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (animating) {
        e.preventDefault();
        return;
      }
      if (insideScrollable(e.target)) return;
      const dy = touchStartY - e.touches[0].clientY; // >0 = bajando
      if (Math.abs(dy) < 6) return;
      const y = window.scrollY;
      const b = boundary();
      if (dy < 0 && y > EDGE && y <= b + EDGE) {
        e.preventDefault();
        animateTo(0);
      } else if (dy > 0 && y < b - EDGE) {
        e.preventDefault();
        animateTo(b);
      }
    };

    // Red de seguridad para inercia táctil, teclado y scrollbar: si el
    // scroll se asienta dentro de la intro (ni arriba ni en el contenido),
    // completar el viaje hacia donde iba.
    const settle = () => {
      if (!armed || animating || scrollbarDrag) return;
      const b = boundary();
      const pos = window.scrollY;
      if (pos > EDGE && pos < b - EDGE) {
        animateTo(lastDir < 0 ? 0 : b);
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
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(settleTimer);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return null;
}
