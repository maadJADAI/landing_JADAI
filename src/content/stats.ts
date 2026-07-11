export type Stat = {
  valor: number;
  prefijo?: string;
  sufijo?: string;
  label: string;
};

export const stats: Stat[] = [
  { valor: 24, sufijo: "/7", label: "Agentes 24/7" },
  { valor: 30, sufijo: " min", label: "Para detectar oportunidades" },
  { valor: 1, label: "Equipo de implementación dedicado" },
];
