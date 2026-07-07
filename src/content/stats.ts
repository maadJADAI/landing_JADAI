export type Stat = {
  valor: number;
  prefijo?: string;
  sufijo?: string;
  label: string;
};

/** ⚠ Cifras de ejemplo marcadas como tal (docs/04 §6) — reemplazar con datos reales (08). */
export const stats: Stat[] = [
  { valor: 3, label: "Verticales en producción" },
  { valor: 1, sufijo: "er", label: "Hackathon de IA de Ecuador — ganado" },
  { valor: 24, sufijo: "/7", label: "Agentes operando" },
  { valor: 12, prefijo: "<", sufijo: " sem", label: "De idea a producción*" },
];

export const statsNota = "* cifras ilustrativas — se actualizan con datos reales del equipo";
