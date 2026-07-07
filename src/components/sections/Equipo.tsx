import Image from "next/image";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { equipo } from "@/content/equipo";

/* lucide ya no trae íconos de marcas — glifo de LinkedIn inline (Simple Icons) */
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452z" />
    </svg>
  );
}

/* Equipo (docs/04 §5): hay humanos detrás — anti-fatiga de IA.
   Fotos B/N → color al hover; contacto directo por correo y LinkedIn. */
export function Equipo() {
  return (
    <section id="equipo" className="border-t border-rule py-24">
      <Container>
        <SectionHead
          numero="04 · Equipo"
          titulo="Team"
          lede="Ingenieros que se integran a tu equipo y responden con nombre y apellido."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {equipo.map((p, i) => (
            <Reveal key={p.nombre} delay={i * 80}>
              <div className="group">
                <div className="overflow-hidden rounded-[3px] border border-rule bg-panel">
                  <Image
                    src={p.foto}
                    alt={`Retrato de ${p.nombre}`}
                    width={400}
                    height={400}
                    className="aspect-square w-full object-cover grayscale transition-[filter,transform] duration-500 group-hover:scale-[1.02] group-hover:grayscale-0 motion-reduce:transition-none"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold">{p.nombre}</h3>
                  <p className="mt-1 text-sm text-ink-2">{p.rol}</p>
                  {p.nota ? (
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-accent-ink">
                      {p.nota}
                    </p>
                  ) : null}
                  <div className="mt-3 flex items-center gap-3">
                    <a
                      href={`mailto:${p.email}`}
                      aria-label={`Escribir a ${p.nombre}`}
                      className="rounded-[3px] border border-rule p-2 text-ink-2 transition-colors hover:border-rule-strong hover:text-accent-ink"
                    >
                      <Mail className="size-4" aria-hidden />
                    </a>
                    <a
                      href={p.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.nombre} en LinkedIn`}
                      className="rounded-[3px] border border-rule p-2 text-ink-2 transition-colors hover:border-rule-strong hover:text-accent-ink"
                    >
                      <LinkedinIcon className="size-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
