import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { verticales } from "@/content/servicios";

/* Verticales (docs/04 §2) en grid pirámide: Fintech y Agro en la primera
   fila; Agentes centrado debajo, al mismo tamaño. Los colores categóricos
   viven SOLO aquí — como acento puntual, sin rampas expuestas. */
export function Servicios() {
  return (
    <section id="servicios" className="border-t border-rule py-24">
      <Container>
        <SectionHead
          numero="01 · Servicios"
          titulo="Tres verticales, un mismo estándar"
          lede="Nos respaldamos en lo que ya construimos — sin bombardear con más."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {verticales.map((v, i) => (
            <Reveal
              key={v.id}
              delay={i * 80}
              className={
                v.id === "agentes"
                  ? "lg:col-span-2 lg:mx-auto lg:w-full lg:max-w-[640px]"
                  : undefined
              }
            >
              <article className="group h-full rounded-md border border-rule bg-panel/60 p-8 backdrop-blur-[2px] transition-colors duration-300 hover:border-rule-strong sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    {v.numero}
                  </span>
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: `var(${v.token})` }}
                    aria-hidden
                  />
                </div>
                <h3 className="text-title mt-5 font-medium">{v.nombre}</h3>
                <p className="mt-3 max-w-[52ch] text-ink-2">{v.descripcion}</p>
                <ul className="mt-5 space-y-1.5">
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
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
