/**
 * Datos de contacto y conversión (docs/08).
 * TODO(equipo): completar WhatsApp Business y link de agendar —
 * mientras estén vacíos, los CTAs caen al email real.
 */
export const site = {
  nombre: "JADAI",
  claim: "Construimos IA que factura.",
  descripcion:
    "Estudio de IA aplicada en Guayaquil, Ecuador. Agentes, chatbots y modelos a medida para fintech, agro y operaciones — producto en producción, no slides.",
  url: "https://jadai.biz",
  ciudad: "Guayaquil, Ecuador",
  email: "lacedeno@jadai.biz", // TODO(08): confirmar hello@jadai.biz
  whatsapp: "", // TODO(08): ej. "593999999999" → wa.me
  agendarUrl: "", // TODO(08): Calendly / Google Calendar appointments
} as const;

export function agendarHref(): string {
  return (
    site.agendarUrl ||
    `mailto:${site.email}?subject=${encodeURIComponent("Agendar una llamada — JADAI")}`
  );
}

export function whatsappHref(): string {
  return site.whatsapp
    ? `https://wa.me/${site.whatsapp}`
    : `mailto:${site.email}?subject=${encodeURIComponent("Hablar con un agente — JADAI")}`;
}
