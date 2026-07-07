"use client";

import { useRef } from "react";
import { useReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";

/* Tilt 3D en hover (docs/05·F): rotateX/Y pequeños, solo transform. */
export function Tilt({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();
  return (
    <div
      ref={ref}
      className={cn(
        "transition-transform duration-300 [transition-timing-function:cubic-bezier(.16,1,.3,1)]",
        className,
      )}
      onPointerMove={(e) => {
        if (reduce || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        ref.current.style.transform = `perspective(900px) rotateY(${px * 7}deg) rotateX(${-py * 7}deg)`;
      }}
      onPointerLeave={() => {
        if (ref.current) ref.current.style.transform = "";
      }}
    >
      {children}
    </div>
  );
}
