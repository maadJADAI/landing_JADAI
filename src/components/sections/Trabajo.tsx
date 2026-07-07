import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

/* Casos (docs/04 §4): testimonios escalonados para casos de producción. */
export function Trabajo() {
  return (
    <section id="trabajo" className="border-t border-rule py-24">
      <Container>
        <SectionHead
          titulo="Producto en producción"
          lede="Casos reales de nuestras tres verticales."
        />
        <Reveal>
          <StaggerTestimonials />
        </Reveal>
      </Container>
    </section>
  );
}
