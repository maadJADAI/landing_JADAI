import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { faq } from "@/content/faq";

/* FAQ en texto plano real — GEO/citación por IA (docs/09). */
export function Faq() {
  return (
    <section id="faq" className="border-t border-rule py-24">
      <Container>
        <SectionHead
          titulo="Preguntas frecuentes"
        />
        <div className="mx-auto max-w-3xl divide-y divide-rule border-y border-rule">
          {faq.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 font-medium marker:content-none">
                {f.q}
                <span
                  className="font-mono text-accent-ink transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-[64ch] text-sm leading-relaxed text-ink-2">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
