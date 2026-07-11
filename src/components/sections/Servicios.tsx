import { IphoneMockup } from "@/components/interactive/IphoneMockup";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { agentes, proyectosEnAccion } from "@/content/servicios";

export function Servicios() {
  return (
    <section id="servicios" className="border-t border-rule py-24">
      <Container>
        <SectionHead
          titulo="Qué hacemos"
          lede="Agentes operativos 24/7 conectados a tus sistemas."
        />
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <Reveal>
              <article className="rounded-md border border-rule bg-panel/70 p-8 backdrop-blur-[2px] sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    {agentes.numero}
                  </span>
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: `var(${agentes.token})` }}
                    aria-hidden
                  />
                </div>
                <h3 className="text-title mt-5 font-medium">{agentes.nombre}</h3>
                <p className="mt-3 max-w-[58ch] text-ink-2">{agentes.descripcion}</p>
                <ul className="mt-5 space-y-1.5">
                  {agentes.bullets.map((b) => (
                    <li key={b} className="flex items-baseline gap-2 text-sm text-ink-2">
                      <span
                        className="inline-block h-1.5 w-1.5 shrink-0 translate-y-[-1px] rounded-full"
                        style={{ background: `var(${agentes.token})` }}
                        aria-hidden
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <div id="trabajo" className="mt-10 scroll-mt-24">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent-ink">
                Proyectos en acción
              </h3>
              <div className="mt-5 grid gap-px overflow-hidden rounded-[3px] border border-rule bg-rule sm:grid-cols-3">
                {proyectosEnAccion.map((proyecto, index) => (
                  <Reveal key={proyecto.titulo} delay={index * 80} className="h-full">
                    <article className="flex h-full flex-col bg-panel p-6">
                      <h4 className="text-base font-semibold leading-snug">
                        {proyecto.titulo}
                      </h4>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-2">
                        {proyecto.resumen}
                      </p>
                      <p className="mt-6 border-t border-rule pt-4 text-sm font-medium text-accent-ink">
                        {proyecto.resultado}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          <Reveal delay={120}>
            <IphoneMockup />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
