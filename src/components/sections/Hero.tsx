import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Magnetic } from "@/components/ui/Magnetic";
import { agendarHref, whatsappHref } from "@/content/site";

/* Hero (docs/04 §1): titular centrado + CTAs + foto del crew como visual
   principal — humanos reales, no un mockup. La foto se funde con el fondo
   oscuro mediante un degradado inferior. */
export function Hero() {
  return (
    <section id="hero" className="overflow-hidden">
      <Container className="relative z-10 pb-6 pt-20 sm:pt-28">
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

      {/* el crew: la cara humana del estudio */}
      <div className="relative z-10 mx-auto mt-14 max-w-6xl px-6 sm:px-10">
        <div className="relative overflow-hidden rounded-md border border-rule">
          <Image
            src="/team/crew.webp"
            alt="El equipo de trabajo reunido en el estudio"
            width={2870}
            height={1915}
            priority
            sizes="(min-width: 1180px) 1100px, 100vw"
            className="w-full object-cover"
          />
          {/* funde la foto con el fondo oscuro de la página */}
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_55%,var(--bg)_100%)]"
            aria-hidden
          />
          <p className="absolute bottom-5 left-6 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/90 sm:left-8">
            Nos integramos a tu equipo — desde el día uno
          </p>
        </div>
      </div>
    </section>
  );
}
