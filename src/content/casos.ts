export type Caso = {
  titulo: string;
  tipo: "Agentes";
  tokenColor: string;
  resumen: string;
  resultado: string;
};

export const casos: Caso[] = [
  {
    titulo: "Agentes de WhatsApp para operación",
    tipo: "Agentes",
    tokenColor: "--agents-400",
    resumen:
      "Agentes conversacionales que atienden, consultan sistemas internos y ejecutan tareas de back-office.",
    resultado: "Atención 24/7 conectada a los sistemas del negocio",
  },
];
