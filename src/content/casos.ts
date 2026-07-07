export type Caso = {
  titulo: string;
  vertical: "Fintech" | "Agro" | "Agentes";
  tokenColor: string;
  resumen: string;
  resultado: string;
};

/**
 * PLACEHOLDER (docs/04 §4 · 08): casos reales pendientes de permiso
 * del cliente para nombre/logo/cifras. No publicar nombres sin permiso.
 */
export const casos: Caso[] = [
  {
    titulo: "Verificación y scoring para una fintech",
    vertical: "Fintech",
    tokenColor: "--fintech-400",
    resumen:
      "Automatización del onboarding: verificación de identidad, análisis documental y scoring asistido por IA.",
    resultado: "Aprobaciones que tomaban días, en minutos",
  },
  {
    titulo: "Monitoreo inteligente en camaronera",
    vertical: "Agro",
    tokenColor: "--agro-500",
    resumen:
      "Visión por computadora y modelos de predicción integrados a la operación diaria de las piscinas.",
    resultado: "Reportes diarios sin intervención humana",
  },
  {
    titulo: "Agentes de WhatsApp para operación",
    vertical: "Agentes",
    tokenColor: "--agents-400",
    resumen:
      "Agentes conversacionales que atienden, consultan sistemas internos y ejecutan tareas de back-office.",
    resultado: "Atención 24/7 conectada a los sistemas del negocio",
  },
];
