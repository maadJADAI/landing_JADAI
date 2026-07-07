export type Vertical = {
  numero: string;
  id: string;
  nombre: string;
  token: string;
  /** CSS vars de la rampa completa de la vertical (docs/01-SISTEMA §2.3) */
  rampa: string[];
  descripcion: string;
  bullets: string[];
};

export const verticales: Vertical[] = [
  {
    numero: "01",
    id: "fintech",
    nombre: "Fintech",
    token: "--fintech-400",
    rampa: [
      "--fintech-100",
      "--fintech-200",
      "--fintech-300",
      "--fintech-400",
      "--fintech-500",
    ],
    descripcion:
      "IA para el sistema financiero: procesos que hoy toman días, resueltos en minutos y con trazabilidad.",
    bullets: [
      "Agentes de atención y cobranza",
      "Verificación de identidad y scoring",
      "Procesamiento de documentos KYC",
    ],
  },
  {
    numero: "02",
    id: "agro",
    nombre: "Agro",
    token: "--agro-500",
    rampa: [
      "--agro-100",
      "--agro-200",
      "--agro-300",
      "--agro-400",
      "--agro-500",
      "--agro-600",
      "--agro-700",
    ],
    descripcion:
      "Hoy acuicultura (camaroneras); mañana todo el agro. Monitoreo, predicción y reportes que llegan solos.",
    bullets: [
      "Visión por computadora en campo",
      "Predicción de crecimiento y alimento",
      "Reportes automáticos por WhatsApp",
    ],
  },
  {
    numero: "03",
    id: "agentes",
    nombre: "Agentes",
    token: "--agents-400",
    rampa: [
      "--agents-100",
      "--agents-200",
      "--agents-300",
      "--agents-400",
      "--agents-500",
      "--agents-600",
    ],
    descripcion:
      "Todo lo agentizable: procesos repetitivos de tu operación convertidos en agentes que trabajan 24/7.",
    bullets: [
      "Agentes de WhatsApp para ventas y soporte",
      "Automatización de back-office",
      "Orquestación multi-agente (LangGraph)",
    ],
  },
];
