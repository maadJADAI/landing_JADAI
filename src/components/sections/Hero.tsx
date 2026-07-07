import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Magnetic } from "@/components/ui/Magnetic";
import { Constellation } from "@/components/interactive/Constellation";
import { agendarHref, whatsappHref } from "@/content/site";
import { stack, logoUrl } from "@/content/stack";

/* Acto 2 — hero editorial claro (docs/04 §1), estructura adaptada del
   bloque hero-section-9: titular centrado + CTAs + "suelo" en perspectiva.
   El suelo NO es una imagen muerta: es la constelación reactiva del
   sistema (docs/05·B) inclinada en 3D. */
export function Hero() {
  return (
    <section id="hero" className="overflow-hidden bg-bg">
      <Container className="relative z-10 pb-4 pt-20 sm:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            Fintech · Agro · Agentes
          </p>
          <h1 className="text-hero mt-6 font-semibold text-balance">
            Construimos IA que{" "}
            <span className="text-accent-ink">factura</span>.
          </h1>
          <p className="text-lead mx-auto mt-8 max-w-[52ch] text-ink-2">
            Agentes, chatbots y modelos a medida. Nos integramos a tu equipo y
            enviamos producto en producción — no slides.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <Button asChild size="lg">
                <a href={agendarHref()}>
                  Agenda una llamada <span aria-hidden>↗</span>
                </a>
              </Button>
            </Magnetic>
            <Button asChild variant="ghost" size="lg">
              <a href={whatsappHref()}>Hablar con un agente</a>
            </Button>
          </div>
        </div>
      </Container>

      {/* suelo interactivo: constelación en perspectiva */}
      <div
        className="relative mx-auto -mt-2 max-w-6xl px-6 [mask-image:linear-gradient(to_bottom,black_45%,transparent_98%)]"
        aria-hidden="true"
      >
        <div className="[perspective:1100px]">
          <div className="origin-top [transform:rotateX(42deg)]">
            <div className="h-[320px] rounded-md border border-rule bg-panel/50 sm:h-[420px]">
              <Constellation density={9000} />
            </div>
          </div>
        </div>
      </div>

      {/* stack real con el que construimos (adaptación de la banda de logos) */}
      <div className="relative z-10 border-t border-rule bg-bg py-14">
        <Container>
          <h2 className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            Construimos sobre
          </h2>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {stack.map((h) => (
              /* SVGs externos de Simple Icons — caso justificado de <img> (docs/02) */
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={h.slug}
                src={logoUrl(h)}
                alt={`Logo de ${h.nombre}`}
                width={24}
                height={24}
                loading="lazy"
                className="h-6 w-auto opacity-55 transition-opacity duration-200 hover:opacity-100"
              />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
