"use client";

import { useEffect, useState } from "react";
import { stats, statsNota, type Stat } from "@/content/stats";
import { useInView, useReducedMotion } from "@/lib/hooks";

/* Contadores (docs/05·E): animan de 0 al valor al entrar en vista,
   easing cúbico, redondeados. Reduced-motion = valor final directo. */
function Counter({ stat, play }: { stat: Stat; play: boolean }) {
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!play) return;
    if (reduce) {
      setN(stat.valor);
      return;
    }
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
    <div className="border-l border-rule pl-5">
      <p className="text-display font-semibold tracking-[-.04em]">
        {stat.prefijo}
        {n}
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
    <div ref={ref}>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Counter key={s.label} stat={s} play={inView} />
        ))}
      </div>
      <p className="mt-8 font-mono text-[11px] text-muted">{statsNota}</p>
    </div>
  );
}
