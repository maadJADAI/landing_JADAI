"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type CollageItem = {
  src: string;
  width: number;
  height: number;
};

const columns: CollageItem[][] = [
  [
    { src: "/fotos-frases/frase-01.png", width: 480, height: 360 },
    { src: "/fotos-frases/nyse-11.png", width: 480, height: 360 },
    { src: "/fotos-frases/frase-06.png", width: 480, height: 480 },
    { src: "/fotos-frases/gadsden-12.png", width: 480, height: 480 },
  ],
  [
    { src: "/fotos-frases/churchill-09.png", width: 480, height: 720 },
    { src: "/fotos-frases/frase-08.png", width: 600, height: 450 },
    { src: "/fotos-frases/symbol-13.png", width: 480, height: 720 },
  ],
  [
    { src: "/fotos-frases/frase-02.png", width: 600, height: 450 },
    { src: "/fotos-frases/frase-03.png", width: 480, height: 480 },
    { src: "/fotos-frases/libertad-10.png", width: 480, height: 720 },
  ],
  [
    { src: "/fotos-frases/libertad-10.png", width: 480, height: 720 },
    { src: "/fotos-frases/frase-04.png", width: 480, height: 720 },
    { src: "/fotos-frases/nyse-11.png", width: 480, height: 360 },
  ],
  [
    { src: "/fotos-frases/frase-07.png", width: 600, height: 900 },
    { src: "/fotos-frases/gadsden-12.png", width: 480, height: 480 },
    { src: "/fotos-frases/frase-01.png", width: 480, height: 360 },
  ],
  [
    { src: "/fotos-frases/symbol-13.png", width: 480, height: 720 },
    { src: "/fotos-frases/frase-06.png", width: 480, height: 480 },
    { src: "/fotos-frases/frase-02.png", width: 600, height: 450 },
  ],
];

function CollageImage({
  src,
  width,
  height,
  preload,
}: {
  src: string;
  width: number;
  height: number;
  preload?: boolean;
}) {
  return (
    <Image
      src={src}
      alt=""
      width={width}
      height={height}
      sizes="(min-width: 1024px) 420px, 74vw"
      className="block h-auto w-full"
      preload={preload || undefined}
      loading={preload ? undefined : "lazy"}
    />
  );
}

export function PhraseCollage({
  className,
  scrim = "strong",
}: {
  className?: string;
  scrim?: "soft" | "strong";
}) {
  const sequence = [...columns, ...columns];

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <div className="intro-collage-track flex h-full w-max will-change-transform">
        {sequence.map((column, columnIndex) => (
          <div
            key={`${columnIndex}-${column[0].src}`}
            className="min-h-full w-[clamp(280px,28vw,420px)] shrink-0"
          >
            {column.map((image, imageIndex) => (
              <div key={image.src} className="w-full overflow-hidden">
                <CollageImage
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  preload={columnIndex < 4 && imageIndex === 0}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div
        className={cn(
          "absolute inset-0 backdrop-blur-[1px] backdrop-saturate-[.72]",
          scrim === "strong" ? "bg-[rgba(0,0,0,.60)]" : "bg-[rgba(0,0,0,.46)]",
        )}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,var(--bg)_0%,transparent_18%,transparent_80%,var(--bg)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,var(--bg)_0%,transparent_10%,transparent_90%,var(--bg)_100%)] opacity-70"
        aria-hidden
      />
    </div>
  );
}
