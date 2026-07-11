export type Integrante = {
  nombre: string;
  rol: string;
  foto: string;
  email: string;
  linkedin: string;
  nota?: string;
};

export const equipo: Integrante[] = [
  {
    nombre: "Luis Abrahan Cedeño",
    rol: "AI Software Engineer · Arquitecto de sistemas agénticos",
    foto: "/team/luis-cedeno.jpg",
    email: "info@jadai.biz",
    linkedin:
      "https://www.linkedin.com/in/luis-abrahan-cede%C3%B1o-arteaga-880547256/",
  },
  {
    nombre: "Cristian Intriago",
    rol: "Desarrollador de software de automatización",
    foto: "/team/cristian-intriago.jpg",
    email: "info@jadai.biz",
    linkedin: "https://www.linkedin.com/in/crisintriago/",
  },
  {
    nombre: "Jandony Guzmán",
    rol: "AI Solutions Engineer · Visión por computadora y agentes",
    foto: "/team/jandony-guzman.jpg",
    email: "info@jadai.biz",
    linkedin: "https://www.linkedin.com/in/jandony-guzm%C3%A1n-b737b2259/",
  },
];
