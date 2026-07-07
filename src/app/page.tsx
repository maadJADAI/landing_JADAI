export default function Home() {
  return (
    <main className="min-h-dvh bg-bg font-sans text-ink">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10">
        {/* top bar */}
        <header className="flex items-center justify-between border-b border-rule py-6">
          <span className="text-[22px] font-semibold tracking-tight">
            JAD<span className="text-accent-ink">A</span>I
          </span>
          <nav className="hidden gap-6 font-mono text-xs uppercase tracking-[0.12em] text-ink-2 sm:flex">
            <a href="#" className="hover:text-accent-ink">Servicios</a>
            <a href="#" className="hover:text-accent-ink">Trabajo</a>
            <a href="#" className="hover:text-accent-ink">Enfoque</a>
            <a href="#" className="hover:text-accent-ink">Contacto</a>
          </nav>
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
            Guayaquil, EC
          </span>
        </header>

        {/* hero */}
        <section className="py-16 sm:py-24">
          <h1 className="text-hero max-w-[14ch] font-semibold">
            Construimos IA que <span className="text-accent-ink">factura</span>.
          </h1>
          <div className="mt-12 grid gap-10 sm:grid-cols-[1.4fr_1fr] sm:items-end">
            <p className="text-lead max-w-[46ch] text-ink-2">
              Agentes, chatbots y modelos a medida. Nos integramos a tu equipo y
              enviamos producto real — no slides.
            </p>
            <div className="font-mono text-xs leading-7 tracking-[0.12em] text-muted sm:text-right">
              FINTECH · AGRO · AGENTES
              <br />
              GUAYAQUIL, ECUADOR
              <br />
              ESTUDIO DE IA
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-[3px] bg-ink px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent-ink hover:text-white"
            >
              Agenda una llamada <span aria-hidden>↗</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-[3px] bg-accent px-6 py-3 text-sm font-semibold text-on-accent"
            >
              Hablar con un agente
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-[3px] border border-rule-strong px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              Ver trabajo
            </a>
          </div>
        </section>

        {/* verticales */}
        <section className="border-t border-rule py-10">
          <div className="grid gap-px overflow-hidden rounded-[3px] border border-rule bg-rule sm:grid-cols-3">
            <div className="bg-panel p-6">
              <span className="font-mono text-xs text-muted">01</span>
              <h3 className="text-title mt-3 font-medium">Fintech</h3>
              <span
                className="mt-3 block h-1 w-16 rounded-full"
                style={{ background: "var(--fintech-400)" }}
              />
            </div>
            <div className="bg-panel p-6">
              <span className="font-mono text-xs text-muted">02</span>
              <h3 className="text-title mt-3 font-medium">Agro</h3>
              <span
                className="mt-3 block h-1 w-16 rounded-full"
                style={{ background: "var(--agro-500)" }}
              />
            </div>
            <div className="bg-panel p-6">
              <span className="font-mono text-xs text-muted">03</span>
              <h3 className="text-title mt-3 font-medium">Agentes</h3>
              <span
                className="mt-3 block h-1 w-16 rounded-full"
                style={{ background: "var(--agents-400)" }}
              />
            </div>
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.12em] text-muted">
            base v0.1 · sistema de diseño aplicado
          </p>
        </section>
      </div>
    </main>
  );
}
