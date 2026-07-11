"use client";

import Image from "next/image";
import Node3D from "@/components/interactive/Node3D";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/lib/hooks";

export function Intro() {
  const reduce = useReducedMotion();

  const explorar = () => {
    document
      .getElementById("contenido")
      ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section
      data-theme="dark"
      className="relative z-10 flex min-h-svh flex-col overflow-hidden bg-transparent text-ink"
      aria-label="Introducción"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(34,204,230,.18),transparent_34%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,.08),transparent_25%)]" />
        {!reduce ? (
          <Node3D className="absolute left-1/2 top-1/2 h-[min(86vw,660px)] w-[min(86vw,660px)] -translate-x-1/2 -translate-y-1/2 opacity-90" />
        ) : null}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_44%,rgba(15,14,18,.62)_78%,rgba(15,14,18,.88)_100%)]" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col lg:justify-center">
        <div className="flex flex-col items-center gap-5 px-6 pt-[14vh] text-center lg:pt-0">
          <Image
            src="/brand/jadai-logo-white.png"
            alt="JADAI"
            width={274}
            height={70}
            priority
            className="h-14 w-auto sm:h-16 lg:h-24 xl:h-28"
          />
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            IA aplicada / Ecuador
          </p>
        </div>

        <div className="my-auto min-h-[18vh] lg:my-0 lg:min-h-12" aria-hidden="true" />

        <div className="flex flex-col items-center gap-6 pb-12">
          <Button variant="accent" size="lg" onClick={explorar}>
            Explorar
          </Button>
          <button
            onClick={explorar}
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-ink"
          >
            desliza{" "}
            <span
              className="inline-block animate-bounce motion-reduce:animate-none"
              aria-hidden
            >
              ↓
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
