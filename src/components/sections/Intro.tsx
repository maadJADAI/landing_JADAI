"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ReferentsMarquee } from "@/components/interactive/ReferentsMarquee";
import { useReducedMotion } from "@/lib/hooks";
import { readToken } from "@/lib/utils";

/* 3D diferido: no inflar el bundle inicial ni intentar SSR de WebGL (docs/05·C). */
const Node3D = dynamic(() => import("@/components/interactive/Node3D"), {
  ssr: false,
});

/* Acto 1 — intro cinematográfico full-screen oscuro (docs/04 §0 · 05·A).
   Constelación de fondo, nodo 3D, frases que movieron el mundo en marquee,
   CTA "Explorar" y hint de scroll. */
export function Intro() {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();
  const [colors, setColors] = useState<{ wire: string; point: string } | null>(
    null,
  );

  useEffect(() => {
    if (!ref.current) return;
    // degradar al motivo plano si no hay WebGL (docs/05·C)
    const probe = document.createElement("canvas");
    const gl =
      probe.getContext("webgl2") ?? probe.getContext("webgl");
    if (!gl) return;
    setColors({
      wire: readToken(ref.current, "--text"),
      point: readToken(ref.current, "--accent"),
    });
  }, []);

  const explorar = () => {
    // el tope del contenido es <main id="contenido"> (header + hero),
    // el mismo punto de reposo que usa IntroSnap
    document
      .getElementById("contenido")
      ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section
      ref={ref}
      data-theme="dark"
      className="relative z-10 flex min-h-dvh flex-col overflow-hidden text-ink"
      aria-label="Introducción"
    >
      {/* nodo 3D — sutil, detrás del contenido; 1 sola instancia (docs/05) */}
      {!reduce && colors ? (
        <div className="absolute inset-x-0 top-1/2 z-0 mx-auto h-[min(70vw,520px)] w-[min(70vw,520px)] -translate-y-1/2 opacity-55">
          <Node3D wireColor={colors.wire} pointColor={colors.point} />
        </div>
      ) : null}

      <div className="relative z-10 flex flex-1 flex-col">
        {/* logo blanco + label */}
        <div className="flex flex-col items-center gap-5 px-6 pt-[14vh] text-center">
          <Image
            src="/brand/jadai-logo-white.png"
            alt="JADAI"
            width={274}
            height={70}
            priority
            className="h-12 w-auto sm:h-16"
          />
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            IA aplicada / Ecuador
          </p>
        </div>

        {/* frases que movieron el mundo */}
        <div className="my-auto py-10">
          <ReferentsMarquee />
        </div>

        {/* CTA + hint */}
        <div className="flex flex-col items-center gap-6 pb-12">
          <Button variant="accent" size="lg" onClick={explorar}>
            Explorar
          </Button>
          <button
            onClick={explorar}
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-ink"
          >
            desliza <span className="inline-block animate-bounce motion-reduce:animate-none" aria-hidden>↓</span>
          </button>
        </div>
      </div>
    </section>
  );
}
