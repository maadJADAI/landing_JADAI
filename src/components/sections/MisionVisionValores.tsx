import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

const pilares = [
  {
    titulo: "Misión",
    texto:
      "Ayudar a las organizaciones a prosperar en un mundo impulsado por la inteligencia artificial.",
  },
  {
    titulo: "Visión",
    texto:
      "Redefinir lo que es posible en la industria, utilizando la tecnología para competir a nivel global.",
  },
];

const valores = [
  "Estamos obsesionados con que empresas ecuatorianas compitan a nivel global.",
  "Odiamos los cuellos de botella y procesos burocráticos.",
  "Iteramos constantemente para lograr el éxito.",
];

export function MisionVisionValores() {
  return (
    <section id="mision" className="border-t border-rule py-24">
      <Container>
        <SectionHead
          titulo="Misión, visión y valores"
          lede="La brújula que usamos para construir producto con impacto real."
        />
        <div className="grid gap-px overflow-hidden rounded-[3px] border border-rule bg-rule lg:grid-cols-3">
          {pilares.map((item, index) => (
            <Reveal key={item.titulo} delay={index * 80} className="h-full">
              <article className="h-full bg-panel p-8 sm:p-10">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-ink">
                  {item.titulo}
                </span>
                <p className="text-lead mt-5 max-w-[34ch] text-ink">
                  {item.texto}
                </p>
              </article>
            </Reveal>
          ))}
          <Reveal delay={160} className="h-full">
            <article className="h-full bg-panel p-8 sm:p-10">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-ink">
                Valores
              </span>
              <ul className="mt-5 space-y-4">
                {valores.map((valor) => (
                  <li key={valor} className="flex gap-3 text-ink-2">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    <span>{valor}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
