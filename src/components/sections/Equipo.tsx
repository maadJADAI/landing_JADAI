import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { equipo } from "@/content/equipo";

/* Equipo (docs/04 §5): hay humanos detrás — anti-fatiga de IA.
   Fotos B/N → color al hover; nombre + rol suben. */
export function Equipo() {
  return (
    <section id="equipo" className="border-t border-rule bg-bg py-24">
      <Container>
        <SectionHead
          numero="04 · Equipo"
          titulo="Humanos detrás de la IA"
          lede="Ingenieros que se integran a tu equipo y responden con nombre y apellido."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {equipo.map((p, i) => (
            <Reveal key={p.nombre} delay={i * 80}>
              <a
                href={p.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                aria-label={`${p.nombre} en LinkedIn`}
              >
                <div className="overflow-hidden rounded-[3px] border border-rule bg-panel">
                  <Image
                    src={p.foto}
                    alt={`Retrato de ${p.nombre}`}
                    width={400}
                    height={400}
                    className="aspect-square w-full object-cover grayscale transition-[filter,transform] duration-500 group-hover:scale-[1.02] group-hover:grayscale-0 motion-reduce:transition-none"
                  />
                </div>
                <div className="mt-4 transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transition-none">
                  <h3 className="font-semibold">{p.nombre}</h3>
                  <p className="mt-1 text-sm text-ink-2">{p.rol}</p>
                  {p.nota ? (
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-accent-ink">
                      {p.nota}
                    </p>
                  ) : null}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
