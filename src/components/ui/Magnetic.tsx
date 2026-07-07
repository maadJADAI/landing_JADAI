"use client";

import { useRef } from "react";
import { useReducedMotion } from "@/lib/hooks";

/* Botón magnético (docs/05·F): se acerca ligeramente al cursor. */
export function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const reduce = useReducedMotion();
  return (
    <span
      ref={ref}
      className="inline-block transition-transform duration-200 [transition-timing-function:cubic-bezier(.16,1,.3,1)]"
      onPointerMove={(e) => {
        if (reduce || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.22;
        const y = (e.clientY - r.top - r.height / 2) * 0.4;
        ref.current.style.transform = `translate(${x}px,${y}px)`;
      }}
      onPointerLeave={() => {
        if (ref.current) ref.current.style.transform = "";
      }}
    >
      {children}
    </span>
  );
}
