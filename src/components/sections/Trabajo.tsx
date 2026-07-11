import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { casos } from "@/content/casos";

export function Trabajo() {
  return (
    <section id="trabajo" className="border-t border-rule py-24">
      <Container>
        <SectionHead
          titulo="Proyectos en acción"
          lede="Agentes operativos 24/7 conectados a sistemas reales."
        />
        <div className="grid gap-px overflow-hidden rounded-[3px] border border-rule bg-rule md:grid-cols-3">
          {casos.map((c, i) => (
            <Reveal key={c.titulo} delay={i * 80} className="h-full">
              <article className="flex h-full flex-col bg-panel p-8">
                <span
                  className="font-mono text-[11px] uppercase tracking-[0.2em]"
                  style={{ color: `var(${c.tokenColor})` }}
                >
                  {c.tipo}
                </span>
                <h3 className="mt-4 text-xl font-semibold leading-snug">
                  {c.titulo}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-2">
                  {c.resumen}
                </p>
                <p className="mt-6 border-t border-rule pt-4 text-sm font-medium text-accent-ink">
                  {c.resultado}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
