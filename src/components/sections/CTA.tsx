import { Container } from "@/components/ui/Container";
import { Magnetic } from "@/components/ui/Magnetic";
import { OpenChatButton } from "@/components/ui/OpenChatButton";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

export function CTA() {
  return (
    <section id="contacto" className="border-t border-rule bg-bg-alt py-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-display font-semibold text-balance">
              ¿Tienes un proceso que debería{" "}
              <span className="text-accent-ink">trabajar solo</span>?
            </h2>
            <p className="text-lead mx-auto mt-6 max-w-[46ch] text-ink-2">
              Cuéntanos qué duele en tu operación. En 30 minutos te decimos si
              la IA lo resuelve - y cómo.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Magnetic>
                <OpenChatButton size="lg">
                  Agenda una llamada <span aria-hidden>↗</span>
                </OpenChatButton>
              </Magnetic>
              <OpenChatButton variant="accent" size="lg">
                Hablar con un agente
              </OpenChatButton>
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
