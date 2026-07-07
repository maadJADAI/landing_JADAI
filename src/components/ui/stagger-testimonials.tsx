"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial:
      "Pasamos de revisar solicitudes a mano a tener un flujo trazable para tomar decisiones en minutos.",
    by: "Fintech, onboarding y scoring",
    imgSrc: "/team/luis-cedeno.jpg",
  },
  {
    tempId: 1,
    testimonial:
      "El agente responde con contexto operativo y deja cada interacción lista para auditar.",
    by: "Agentes, operación por WhatsApp",
    imgSrc: "/team/crew.webp",
  },
  {
    tempId: 2,
    testimonial:
      "Los reportes diarios salen conectados a la operación, no como un documento aislado.",
    by: "Agro, monitoreo acuícola",
    imgSrc: "/team/cristian-intriago.jpg",
  },
  {
    tempId: 3,
    testimonial:
      "Construimos sobre los sistemas existentes y dejamos producto funcionando, no una promesa.",
    by: "Implementación JADAI",
    imgSrc: "/team/jandony-guzman.jpg",
  },
  {
    tempId: 4,
    testimonial:
      "El equipo entiende rápido dónde duele el proceso y convierte ese dolor en una automatización concreta.",
    by: "Producto en producción",
    imgSrc: "/team/crew.webp",
  },
];

interface TestimonialCardProps {
  position: number;
  testimonial: (typeof testimonials)[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

function TestimonialCard({
  position,
  testimonial,
  handleMove,
  cardSize,
}: TestimonialCardProps) {
  const isCenter = position === 0;

  return (
    <button
      type="button"
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-7 text-left transition-all duration-500 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:p-8",
        isCenter
          ? "z-10 border-ink bg-ink text-bg"
          : "z-0 border-rule bg-panel text-ink hover:border-rule-strong",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath:
          "polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)",
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.55) * position}px)
          translateY(${isCenter ? -60 : position % 2 ? 18 : -18}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter
          ? "0 10px 0 3px var(--rule-strong)"
          : "0 0 0 0 transparent",
      }}
      aria-label={`Ver testimonio: ${testimonial.by}`}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-rule-strong"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <Image
        src={testimonial.imgSrc}
        alt={testimonial.by}
        width={96}
        height={112}
        className="mb-5 h-14 w-12 bg-tint object-cover object-top"
        style={{
          boxShadow: isCenter
            ? "3px 3px 0 var(--bg)"
            : "3px 3px 0 var(--tint)",
        }}
      />
      <h3
        className={cn(
          "text-base font-medium leading-snug sm:text-xl",
          isCenter ? "text-bg" : "text-ink",
        )}
      >
        “{testimonial.testimonial}”
      </h3>
      <p
        className={cn(
          "absolute bottom-7 left-7 right-7 mt-2 text-sm italic sm:bottom-8 sm:left-8 sm:right-8",
          isCenter ? "text-bg/76" : "text-ink-2",
        )}
      >
        {testimonial.by}
      </p>
    </button>
  );
}

export function StaggerTestimonials() {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    if (steps === 0) return;

    setTestimonialsList((current) => {
      const newList = [...current];

      if (steps > 0) {
        for (let i = steps; i > 0; i -= 1) {
          const item = newList.shift();
          if (!item) return current;
          newList.push({ ...item, tempId: Math.random() });
        }
      } else {
        for (let i = steps; i < 0; i += 1) {
          const item = newList.pop();
          if (!item) return current;
          newList.unshift({ ...item, tempId: Math.random() });
        }
      }

      return newList;
    });
  };

  useEffect(() => {
    const updateSize = () => {
      setCardSize(window.matchMedia("(min-width: 640px)").matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="relative h-[560px] w-full overflow-hidden rounded-md border border-rule bg-bg-alt/70 sm:h-[600px]">
      {testimonialsList.map((testimonial, index) => {
        const position =
          index - Math.floor(testimonialsList.length / 2);

        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          type="button"
          onClick={() => handleMove(-1)}
          className="flex h-12 w-12 items-center justify-center border-2 border-rule bg-panel text-ink transition-colors hover:bg-ink hover:text-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:h-14 sm:w-14"
          aria-label="Testimonio anterior"
        >
          <ChevronLeft className="size-5" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => handleMove(1)}
          className="flex h-12 w-12 items-center justify-center border-2 border-rule bg-panel text-ink transition-colors hover:bg-ink hover:text-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:h-14 sm:w-14"
          aria-label="Siguiente testimonio"
        >
          <ChevronRight className="size-5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
