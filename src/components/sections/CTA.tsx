import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { agendarHref, whatsappHref, site } from "@/content/site";

/* Cierre de conversión (docs/04 §8). */
export function CTA() {
  return (
    <section id="contacto" className="border-t border-rule py-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              07 · Contacto
            </p>
            <h2 className="text-display mt-6 font-semibold text-balance">
              ¿Tienes un proceso que debería{" "}
              <span className="text-accent-ink">trabajar solo</span>?
            </h2>
            <p className="text-lead mx-auto mt-6 max-w-[46ch] text-ink-2">
              Cuéntanos qué duele en tu operación. En 30 minutos te decimos si
              la IA lo resuelve — y cómo.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Magnetic>
                <Button asChild size="lg">
                  <a href={agendarHref()}>
                    Agenda una llamada <span aria-hidden>↗</span>
                  </a>
                </Button>
              </Magnetic>
              <Button asChild variant="accent" size="lg">
                <a href={whatsappHref()}>Hablar con un agente</a>
              </Button>
            </div>
            <p className="mt-8 font-mono text-xs text-muted">
              {site.email} · {site.ciudad}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
