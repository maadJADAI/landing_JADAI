import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { verticales } from "@/content/servicios";

/* Índice editorial de verticales (docs/04 §2): fila por vertical con
   nº mono + nombre + token + rampa completa. Hover: padding-left sutil.
   Los colores categóricos viven SOLO aquí, en su contexto. */
export function Servicios() {
  return (
    <section id="servicios" className="border-t border-rule bg-bg py-24">
      <Container>
        <SectionHead
          numero="01 · Servicios"
          titulo="Tres verticales, un mismo estándar"
          lede="Nos respaldamos en lo que ya construimos — sin bombardear con más."
        />
        <div className="divide-y divide-rule border-y border-rule">
          {verticales.map((v, i) => (
            <Reveal key={v.id} delay={i * 80}>
              <article className="group grid gap-6 py-10 transition-[padding] duration-300 hover:pl-3 sm:grid-cols-[64px_1fr_auto] sm:gap-10">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  {v.numero}
                </span>
                <div>
                  <h3 className="text-title font-medium">{v.nombre}</h3>
                  <p className="mt-3 max-w-[52ch] text-ink-2">{v.descripcion}</p>
                  <ul className="mt-4 space-y-1.5">
                    {v.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-baseline gap-2 text-sm text-ink-2"
                      >
                        <span
                          className="inline-block h-1.5 w-1.5 shrink-0 translate-y-[-1px] rounded-full"
                          style={{ background: `var(${v.token})` }}
                          aria-hidden
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-row items-end gap-3 sm:flex-col sm:items-end sm:justify-between">
                  <span className="font-mono text-[11px] text-muted">
                    {v.token}
                  </span>
                  <span className="flex gap-1" aria-hidden>
                    {v.rampa.map((r) => (
                      <span
                        key={r}
                        className="h-6 w-6 rounded-[3px]"
                        style={{ background: `var(${r})` }}
                      />
                    ))}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
