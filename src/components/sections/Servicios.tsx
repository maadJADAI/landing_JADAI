import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { agentes, proyectosEnAccion } from "@/content/servicios";

function PhoneSpace() {
  return (
    <div className="relative mx-auto w-full max-w-[390px]">
      <div className="absolute -inset-8 rounded-full bg-accent/10 blur-3xl" aria-hidden />
      <div className="relative rounded-[46px] border border-white/20 bg-[linear-gradient(145deg,rgba(255,255,255,.22),rgba(255,255,255,.03))] p-2 shadow-[0_34px_90px_-30px_rgba(34,204,230,.45)]">
        <div className="rounded-[38px] border border-black/70 bg-[#0b0c0f] p-3">
          <div className="relative h-[620px] overflow-hidden rounded-[30px] bg-[linear-gradient(180deg,#111b14_0%,#09110c_100%)]">
            <div className="absolute left-1/2 top-3 h-6 w-28 -translate-x-1/2 rounded-full bg-black/80" />
            <div className="flex h-full flex-col px-4 pb-5 pt-12">
              <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-semibold text-on-accent">
                  J
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">JADAI Agente</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
                    WhatsApp real pendiente
                  </p>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center text-center">
                <div className="max-w-[24ch]">
                  <p className="text-lg font-semibold text-white">
                    Espacio reservado para demo real
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    Aquí va una captura o video interactivo del bot cuando tengamos
                    el número de WhatsApp y la conversación real.
                  </p>
                </div>
              </div>
              <div className="rounded-full border border-white/10 bg-white/10 px-4 py-3 font-mono text-[11px] text-white/40">
                Conversación real, no mockup HTML
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
            <PhoneSpace />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
