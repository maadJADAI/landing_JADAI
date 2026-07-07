import { cn } from "@/lib/utils";

/* Wordmark tipográfico con el motivo nodo→línea de la marca
   (docs/01-SISTEMA §5). El PNG en tinta no es apto para web (docs/08);
   la versión blanca se usa en el intro y el footer oscuros. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[20px] font-semibold tracking-tight text-ink",
        className,
      )}
    >
      <svg
        width="30"
        height="10"
        viewBox="0 0 30 10"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle
          cx="5"
          cy="5"
          r="3.1"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.2"
        />
        <line
          x1="9.4"
          y1="5"
          x2="28.5"
          y2="5"
          stroke="var(--accent)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
      JADAI
    </span>
  );
}
