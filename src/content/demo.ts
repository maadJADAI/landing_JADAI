export type Mensaje = { role: "in" | "out"; texto: string; hora: string };

/** Guion del chatbot demo (docs/04 §3 · 05·D) — borrador a validar por el equipo. */
export const conversacion: Mensaje[] = [
  {
    role: "in",
    texto: "Hola, ¿me pasas el reporte de la piscina 4?",
    hora: "07:42",
  },
  {
    role: "out",
    texto:
      "Buenos días, Carlos. Piscina 4 — biomasa estimada 2.3 t, supervivencia 87 %, FCA 1.4. ¿Te envío el PDF completo?",
    hora: "07:42",
  },
  { role: "in", texto: "Sí. ¿Y cómo va el alimento hoy?", hora: "07:43" },
  {
    role: "out",
    texto:
      "Consumo de hoy: 480 kg (−4 % vs. ayer). El modelo recomienda mantener la tasa. PDF enviado ✓",
    hora: "07:43",
  },
];
