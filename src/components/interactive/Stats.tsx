"use client";

import { useEffect, useState } from "react";
import { stats, type Stat } from "@/content/stats";
import { useInView, useReducedMotion } from "@/lib/hooks";

/* Contadores (docs/05·E): animan de 0 al valor al entrar en vista,
   easing cúbico, redondeados. Reduced-motion = valor final directo. */
function Counter({ stat, play }: { stat: Stat; play: boolean }) {
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    // reduced-motion no anima: se renderiza el valor final directo (abajo)
    if (!play || reduce) return;
    let raf = 0;
    const t0 = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / 1100);
      setN(Math.round(stat.valor * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [play, reduce, stat.valor]);

  return (
    <div className="border-l border-rule-strong pl-5">
      <p className="text-display font-semibold tracking-[-.04em]">
        {stat.prefijo}
        {reduce ? stat.valor : n}
        {stat.sufijo}
      </p>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
        {stat.label}
      </p>
    </div>
  );
}

export function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>(0.5);
  return (
    <div ref={ref} className="rounded-md border border-rule bg-bg-alt/80 p-8 sm:p-10">
      <div className="grid gap-10 sm:grid-cols-3">
        {stats.map((s) => (
          <Counter key={s.label} stat={s} play={inView} />
        ))}
      </div>
    </div>
  );
}
