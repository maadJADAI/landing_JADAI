import Image from "next/image";
import { Magnetic } from "@/components/ui/Magnetic";
import { OpenChatButton } from "@/components/ui/OpenChatButton";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 overflow-hidden bg-ink"
    >
      <Image
        src="/hero/arboles.jpg"
        alt="Arboles vistos desde abajo hacia el cielo"
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,14,18,.18)_0%,rgba(15,14,18,.46)_48%,rgba(15,14,18,.74)_100%)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-[1180px] items-center px-6 py-28 text-left sm:min-h-[760px] sm:px-10">
        <div className="max-w-4xl">
          <h1 className="text-hero max-w-[10ch] font-semibold text-white text-balance">
            Construimos IA que{" "}
            <span className="text-accent-ink">factura</span>.
          </h1>
          <p className="text-lead mt-6 max-w-[52ch] text-white/82">
            Agentes, chatbots y modelos a medida. Nos integramos a tu equipo y
            enviamos producto en producción - no slides.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Magnetic>
              <OpenChatButton size="lg">
                Agenda una llamada <span aria-hidden>↗</span>
              </OpenChatButton>
            </Magnetic>
            <OpenChatButton
              variant="ghost"
              size="lg"
              className="border-rule-strong text-white hover:bg-white hover:text-ink"
            >
              Hablar con un agente
            </OpenChatButton>
          </div>
        </div>
      </div>
    </section>
  );
}
