import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { proceso } from "@/content/proceso";

export function Proceso() {
  return (
    <section id="proceso" className="border-t border-rule py-24">
      <Container>
        <SectionHead titulo="Cómo trabajamos" />
        <div className="grid gap-10 sm:grid-cols-3">
          {proceso.map((p, i) => (
            <Reveal key={p.numero} delay={i * 80}>
              <div className="border-t-2 border-ink pt-6">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-ink">
                  {p.numero}
                </span>
                <h3 className="mt-3 text-xl font-semibold">{p.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-2">
                  {p.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
