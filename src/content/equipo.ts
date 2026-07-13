export type Integrante = {
  nombre: string;
  rol: string;
  foto: string;
  email: string;
  linkedin?: string;
  nota?: string;
};

export const equipo: Integrante[] = [
  {
    nombre: "Luis Abrahan Cedeño",
    rol: "CTO",
    foto: "/team/luis-cedeno.jpg",
    email: "info@jadai.biz",
    linkedin:
      "https://www.linkedin.com/in/luis-abrahan-cede%C3%B1o-arteaga-880547256/",
  },
  {
    nombre: "Cristian Intriago",
    rol: "CFO",
    foto: "/team/cristian-intriago.jpg",
    email: "info@jadai.biz",
    linkedin: "https://www.linkedin.com/in/crisintriago/",
  },
  {
    nombre: "Eduardo Zambrano",
    rol: "CMO · Área de finanzas",
    foto: "/team/eduardo-zambrano.jpeg",
    email: "info@jadai.biz",
  },
  {
    nombre: "Jandony Guzmán",
    rol: "AI Solutions Engineer · Visión por computadora y agentes",
    foto: "/team/jandony-guzman.jpg",
    email: "info@jadai.biz",
    linkedin: "https://www.linkedin.com/in/jandony-guzm%C3%A1n-b737b2259/",
  },
];
