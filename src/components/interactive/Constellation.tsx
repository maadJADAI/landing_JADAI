"use client";

import { useEffect, useRef } from "react";
import { hexToRgb, readToken, cn } from "@/lib/utils";

/* Constelación reactiva (docs/05·B) — motivo de marca nodo+línea.
   Portada del design-system.html. Colores leídos de los tokens del
   contexto ([data-theme]); pausa fuera de viewport; en reduced-motion
   y en pantallas táctiles se dibuja estática una sola vez — dos capas
   full-screen a 60fps compiten con el compositor del scroll en móvil. */
export function Constellation({
  className,
  density = 16000,
}: {
  className?: string;
  density?: number;
}) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const coarse = matchMedia("(pointer: coarse)").matches;
    const reduce =
      matchMedia("(prefers-reduced-motion: reduce)").matches || coarse;
    const ink = hexToRgb(readToken(cv, "--text") || "#17161A");
    const cyan = hexToRgb(readToken(cv, "--accent") || "#0FB2C6");

    type Node = { x: number; y: number; vx: number; vy: number };
    let nodes: Node[] = [];
    let mx = -999;
    let my = -999;
    let raf = 0;
    let running = false;

    function build() {
      const rw = cv!.clientWidth;
      const rh = cv!.clientHeight;
      const n = Math.min(72, Math.floor((rw * rh) / density));
      nodes = [];
      for (let i = 0; i < n; i++) {
        nodes.push({
          x: Math.random() * rw,
          y: Math.random() * rh,
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.16,
        });
      }
    }

    let lastW = 0;
    function resize() {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      cv!.width = cv!.clientWidth * dpr;
      cv!.height = cv!.clientHeight * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      // en iOS colapsar la barra dispara resize solo de alto: no
      // re-randomizar los nodos en pleno scroll
      if (cv!.clientWidth !== lastW) {
        lastW = cv!.clientWidth;
        build();
      }
      if (reduce) draw();
    }

    function draw() {
      const rw = cv!.clientWidth;
      const rh = cv!.clientHeight;
      ctx!.clearRect(0, 0, rw, rh);
      for (const n of nodes) {
        if (!reduce) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > rw) n.vx *= -1;
          if (n.y < 0 || n.y > rh) n.vy *= -1;
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 118) {
            ctx!.strokeStyle = `rgba(${ink},${0.07 * (1 - d / 118)})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }
      for (const n of nodes) {
        const dm = Math.hypot(n.x - mx, n.y - my);
        const near = Math.max(0, 1 - dm / 150);
        ctx!.fillStyle =
          near > 0.08
            ? `rgba(${cyan},${0.35 + near * 0.55})`
            : `rgba(${ink},.22)`;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, 1.5 + near * 2.4, 0, 6.283);
        ctx!.fill();
        if (near > 0.08) {
          ctx!.strokeStyle = `rgba(${cyan},${near * 0.4})`;
          ctx!.lineWidth = 1;
          ctx!.beginPath();
          ctx!.moveTo(n.x, n.y);
          ctx!.lineTo(mx, my);
          ctx!.stroke();
        }
      }
    }

    function frame() {
      draw();
      if (running && !reduce) raf = requestAnimationFrame(frame);
    }

    function start() {
      if (running || reduce) return;
      running = true;
      raf = requestAnimationFrame(frame);
    }
    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    const onMove = (e: PointerEvent) => {
      const r = cv!.getBoundingClientRect();
      mx = ((e.clientX - r.left) / r.width) * cv!.clientWidth;
      my = ((e.clientY - r.top) / r.height) * cv!.clientHeight;
    };
    const onLeave = () => {
      mx = my = -999;
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) start();
          else stop();
        }
      },
      { threshold: 0.05 },
    );

    resize();
    io.observe(cv);
    addEventListener("resize", resize);
    // el brillo que sigue al puntero es cosa de mouse; en táctil los
    // pointermove del drag forzarían layout (getBoundingClientRect) por evento
    if (!coarse) {
      addEventListener("pointermove", onMove);
      addEventListener("pointerleave", onLeave);
    }
    if (reduce) draw();

    return () => {
      stop();
      io.disconnect();
      removeEventListener("resize", resize);
      if (!coarse) {
        removeEventListener("pointermove", onMove);
        removeEventListener("pointerleave", onLeave);
      }
    };
  }, [density]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={cn("pointer-events-none h-full w-full", className)}
    />
  );
}
