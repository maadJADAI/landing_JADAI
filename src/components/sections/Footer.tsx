import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { equipo } from "@/content/equipo";
import { servicios } from "@/content/servicios";
import { site } from "@/content/site";

/* Footer (docs/04 §9), restilado a tokens. */
export function Footer() {
  return (
    <footer className="relative z-10 border-t border-rule bg-bg-alt py-16 text-ink">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/brand/jadai-logo.png"
              alt="JADAI"
              width={172}
              height={44}
              className="h-12 w-auto sm:h-14"
            />
            <p className="mt-5 max-w-[32ch] text-sm leading-relaxed text-ink-2">
              {site.claim} IA aplicada desde {site.ciudad}.
            </p>
          </div>

          <nav aria-label="Servicios">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Servicios
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {servicios.map((v) => (
                <li key={v.id}>
                  <a
                    href="#servicios"
                    className="text-ink-2 transition-colors hover:text-accent-ink"
                  >
                    {v.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Compañía">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Compañía
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#equipo" className="text-ink-2 transition-colors hover:text-accent-ink">
                  Equipo
                </a>
              </li>
              <li>
                <a href="#proceso" className="text-ink-2 transition-colors hover:text-accent-ink">
                  Cómo trabajamos
                </a>
              </li>
              <li>
                <a href="#trabajo" className="text-ink-2 transition-colors hover:text-accent-ink">
                  Trabajo
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-ink-2 transition-colors hover:text-accent-ink">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Social">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              LinkedIn
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {equipo.map((p) => (
                <li key={p.nombre}>
                  <a
                    href={p.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-2 transition-colors hover:text-accent-ink"
                  >
                    {p.nombre.split(" ").slice(0, 2).join(" ")}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-ink-2 transition-colors hover:text-accent-ink"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            © {new Date().getFullYear()} JADAI · {site.ciudad}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            IA que factura — hecha por humanos
          </p>
        </div>
      </Container>
    </footer>
  );
}
