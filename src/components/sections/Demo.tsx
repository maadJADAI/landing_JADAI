import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Tilt } from "@/components/ui/Tilt";
import { ChatbotDemo } from "@/components/interactive/ChatbotDemo";

/* "Lo que construimos" (docs/04 §3): demo viva, no mockup muerto. */
export function Demo() {
  return (
    <section id="demo" className="border-t border-rule bg-bg-alt py-24">
      <Container>
        <SectionHead
          numero="02 · Producto"
          titulo="Lo que construimos, funcionando"
          lede="Un agente real respondiendo la operación diaria de una camaronera."
        />
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="max-w-[46ch]">
              <p className="text-lead text-ink-2">
                Nuestros agentes no viven en un slide: atienden por WhatsApp,
                consultan tus sistemas y responden con datos de tu operación.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Conectados a tus datos — no respuestas genéricas",
                  "Disponibles 24/7, con escalamiento a humanos",
                  "Auditables: cada respuesta queda trazada",
                ].map((t) => (
                  <li key={t} className="flex items-baseline gap-3">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    <span className="text-ink-2">{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                Guion demostrativo — datos ilustrativos
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Tilt>
              <ChatbotDemo />
            </Tilt>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
