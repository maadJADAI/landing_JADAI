import { Intro } from "@/components/sections/Intro";
import { SiteBackground } from "@/components/interactive/SiteBackground";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { Servicios } from "@/components/sections/Servicios";
import { Demo } from "@/components/sections/Demo";
import { Trabajo } from "@/components/sections/Trabajo";
import { Equipo } from "@/components/sections/Equipo";
import { StatsSection } from "@/components/sections/StatsSection";
import { Proceso } from "@/components/sections/Proceso";
import { Faq } from "@/components/sections/Faq";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { ChatWidget } from "@/components/ui/ChatWidget";
import { equipo } from "@/content/equipo";
import { faq } from "@/content/faq";
import { verticales } from "@/content/servicios";
import { site } from "@/content/site";

/* Schema.org JSON-LD (docs/09): Organization + Services + FAQPage. */
function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#org`,
        name: site.nombre,
        url: site.url,
        logo: `${site.url}/brand/jadai-logo-white.png`,
        description: site.descripcion,
        email: site.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Guayaquil",
          addressCountry: "EC",
        },
        areaServed: "Ecuador",
        sameAs: equipo.map((p) => p.linkedin),
      },
      ...verticales.map((v) => ({
        "@type": "Service",
        name: `IA aplicada — ${v.nombre}`,
        description: v.descripcion,
        provider: { "@id": `${site.url}/#org` },
        areaServed: "Ecuador",
      })),
      {
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

/* Orden de secciones según docs/04. Acto 1 oscuro → Acto 2 editorial claro. */
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
      />
      <SiteBackground />
      <Intro />
      <main className="relative z-10">
        <SiteHeader />
        <Hero />
        <Servicios />
        <Demo />
        <Trabajo />
        <Equipo />
        <StatsSection />
        <Proceso />
        <Faq />
        <CTA />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
