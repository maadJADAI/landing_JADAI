import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { casos } from "@/content/casos";

/* Casos (docs/04 §4): cards tipo JetBrains — título + vertical + resultado.
   Nombres/cifras de clientes pendientes de permiso (docs/08). */
export function Trabajo() {
  return (
    <section id="trabajo" className="border-t border-rule py-24">
      <Container>
        <SectionHead
          numero="03 · Trabajo"
          titulo="Producto en producción"
          lede="Casos reales de nuestras tres verticales."
        />
        <div className="grid gap-px overflow-hidden rounded-[3px] border border-rule bg-rule md:grid-cols-3">
          {casos.map((c, i) => (
            <Reveal key={c.titulo} delay={i * 80} className="h-full">
              <article className="flex h-full flex-col bg-panel p-8">
                <span
                  className="font-mono text-[11px] uppercase tracking-[0.2em]"
                  style={{ color: `var(${c.tokenColor})` }}
                >
                  {c.vertical}
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
        <p className="mt-6 font-mono text-[11px] text-muted">
          nombres y cifras de clientes se publican con su permiso — en camino
        </p>
      </Container>
    </section>
  );
}
