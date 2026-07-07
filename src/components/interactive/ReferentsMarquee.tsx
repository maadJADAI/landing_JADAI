import { filaA, filaB, type Referente } from "@/content/referentes";

/* Marquee del intro (docs/05·A): dos filas en sentidos opuestos,
   lentas, pausa al hover. Loop sin salto duplicando el track.
   Reduced-motion: filas estáticas (animate-none vía CSS). */
function Fila({
  items,
  reverse = false,
}: {
  items: Referente[];
  reverse?: boolean;
}) {
  const track = [...items, ...items];
  return (
    <div className="group overflow-hidden" aria-hidden={reverse}>
      <div
        className={`marquee-track flex w-max items-baseline gap-16 py-4 group-hover:[animation-play-state:paused] motion-reduce:animate-none ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
      >
        {track.map((r, i) => (
          <span key={i} className="flex shrink-0 items-baseline gap-4">
            <span className="text-display font-semibold text-ink/90 whitespace-nowrap">
              “{r.frase}”
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-ink whitespace-nowrap">
              {r.autor}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function ReferentsMarquee() {
  return (
    <div className="flex flex-col gap-2">
      <Fila items={filaA} />
      <Fila items={filaB} reverse />
    </div>
  );
}
