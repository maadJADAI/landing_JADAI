export function SectionHead({
  numero,
  titulo,
  lede,
}: {
  numero?: string;
  titulo: string;
  lede?: string;
}) {
  return (
    <div className="mb-12 grid gap-4 sm:mb-16 sm:grid-cols-[1fr_auto] sm:items-end">
      <div>
        {numero ? (
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {numero}
          </span>
        ) : null}
        <h2 className={numero ? "text-title mt-3 font-semibold" : "text-title font-semibold"}>
          {titulo}
        </h2>
      </div>
      {lede ? (
        <p className="text-lead max-w-[38ch] text-ink-2 sm:text-right">{lede}</p>
      ) : null}
    </div>
  );
}
