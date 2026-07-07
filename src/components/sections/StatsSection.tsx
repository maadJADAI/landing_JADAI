import { Container } from "@/components/ui/Container";
import { Stats } from "@/components/interactive/Stats";

/* Stats (docs/04 §6): cifras grandes que cuentan hacia arriba. */
export function StatsSection() {
  return (
    <section className="border-t border-rule bg-bg-alt py-20">
      <Container>
        <Stats />
      </Container>
    </section>
  );
}
