"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/lib/hooks";

const columns = [
  [
    { src: "/fotos-frases/frase-01.png", height: "54%" },
    { src: "/fotos-frases/nyse-11.png", height: "46%" },
  ],
  [
    { src: "/fotos-frases/churchill-09.png", height: "62%" },
    { src: "/fotos-frases/gadsden-12.png", height: "38%" },
  ],
  [
    { src: "/fotos-frases/frase-02.png", height: "36%" },
    { src: "/fotos-frases/frase-03.png", height: "64%" },
  ],
  [
    { src: "/fotos-frases/libertad-10.png", height: "58%" },
    { src: "/fotos-frases/frase-04.png", height: "42%" },
  ],
  [
    { src: "/fotos-frases/frase-06.png", height: "48%" },
    { src: "/fotos-frases/symbol-13.png", height: "52%" },
  ],
  [
    { src: "/fotos-frases/frase-07.png", height: "44%" },
    { src: "/fotos-frases/frase-08.png", height: "56%" },
  ],
];

function CollageImage({
  src,
  preload,
}: {
  src: string;
  preload?: boolean;
}) {
  return (
    <Image
      src={src}
      alt=""
      fill
      sizes="(min-width: 1024px) 480px, 72vw"
      className="object-cover"
      preload={preload || undefined}
      loading={preload ? undefined : "lazy"}
    />
  );
}

function IntroCollage() {
  const sequence = [...columns, ...columns];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="intro-collage-track flex h-full w-max will-change-transform">
        {sequence.map((column, columnIndex) => (
          <div
            key={`${columnIndex}-${column[0].src}`}
            className="h-full w-[clamp(280px,32vw,480px)] shrink-0"
          >
            {column.map((image, imageIndex) => (
              <div
                key={image.src}
                className="relative w-full overflow-hidden"
                style={{ height: image.height }}
              >
                <CollageImage
                  src={image.src}
                  preload={columnIndex < 4 && imageIndex === 0}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div
        className="absolute inset-0 bg-[rgba(0,0,0,.58)] backdrop-blur-[1.5px] backdrop-saturate-[.72]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,var(--bg)_0%,transparent_18%,transparent_80%,var(--bg)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,var(--bg)_0%,transparent_12%,transparent_88%,var(--bg)_100%)] opacity-70"
        aria-hidden
      />
    </div>
  );
}

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
      className="relative z-10 flex min-h-svh flex-col overflow-hidden bg-bg text-ink"
      aria-label="Introducción"
    >
      <IntroCollage />

      <div className="relative z-10 flex flex-1 flex-col">
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

        <div className="my-auto min-h-[18vh]" aria-hidden="true" />

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
