export type Servicio = {
  numero: string;
  id: string;
  nombre: string;
  token: string;
  rampa: string[];
  descripcion: string;
  bullets: string[];
};

export const agentes: Servicio = {
  numero: "01",
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
    "Procesos repetitivos de tu operación convertidos en agentes que atienden, consultan sistemas y ejecutan tareas sin depender de horarios.",
  bullets: [
    "Agentes de WhatsApp para ventas, soporte y seguimiento",
    "Automatización de back-office conectada a tus sistemas",
    "Escalamiento a humanos cuando la operación lo necesita",
  ],
};

export const servicios: Servicio[] = [agentes];

export const proyectosEnAccion = [
  {
    titulo: "Atención por WhatsApp",
    resumen:
      "Conversaciones conectadas a datos internos para responder, calificar y dar seguimiento.",
    resultado: "Operativo 24/7",
  },
  {
    titulo: "Back-office automatizado",
    resumen:
      "Tareas repetitivas convertidas en flujos trazables que no dependen de una persona revisando pantallas.",
    resultado: "Menos cuellos de botella",
  },
  {
    titulo: "Reportes y alertas",
    resumen:
      "Agentes que consultan sistemas, resumen cambios y avisan cuando la operación necesita acción.",
    resultado: "Decisiones con contexto",
  },
];
