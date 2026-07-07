export type Stat = {
  valor: number;
  prefijo?: string;
  sufijo?: string;
  label: string;
};

export const stats: Stat[] = [
  { valor: 3, label: "Tres verticales en producción" },
  { valor: 1, sufijo: "er", label: "Primer hackathon ya ganado" },
  { valor: 24, sufijo: "/7", label: "Agentes 24/7" },
];
