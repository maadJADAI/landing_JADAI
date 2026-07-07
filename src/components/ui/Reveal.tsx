"use client";

import { useInView } from "@/lib/hooks";
import { cn } from "@/lib/utils";

/* Scroll-reveal: fade + subida vía IntersectionObserver (docs/05·F).
   Solo transform/opacity; en reduced-motion queda visible sin animar. */
export function Reveal({
  className,
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children: React.ReactNode;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-[transform,opacity] duration-700 [transition-timing-function:cubic-bezier(.16,1,.3,1)]",
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        "motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none",
        className,
      )}
    >
      {children}
    </div>
  );
}
