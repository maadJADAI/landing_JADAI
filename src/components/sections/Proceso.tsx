import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { proceso } from "@/content/proceso";

/* Cómo trabajamos (docs/04 §7): 3 pasos con hairlines. */
export function Proceso() {
  return (
    <section id="proceso" className="border-t border-rule bg-bg py-24">
      <Container>
        <SectionHead
          numero="05 · Enfoque"
          titulo="Cómo trabajamos"
          lede="Tres pasos. Cero humo."
        />
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
