export type Integrante = {
  nombre: string;
  rol: string;
  foto: string;
  email: string;
  linkedin: string;
  nota?: string;
};

/** Datos reales — "info del team y contactos.txt" (docs/08). */
export const equipo: Integrante[] = [
  {
    nombre: "Luis Abrahan Cedeño",
    rol: "AI Software Engineer · Arquitecto de sistemas agénticos",
    foto: "/team/luis-cedeno.jpg",
    email: "lacedeno@jadai.biz",
    linkedin:
      "https://www.linkedin.com/in/luis-abrahan-cede%C3%B1o-arteaga-880547256/",
  },
  {
    nombre: "Cristian Intriago",
    rol: "Desarrollador de software de automatización",
    foto: "/team/cristian-intriago.jpg",
    email: "cristian@jadai.biz",
    linkedin: "https://www.linkedin.com/in/crisintriago/",
  },
  {
    nombre: "Jandony Guzmán",
    rol: "AI Solutions Engineer · Fintech y visión por computadora",
    foto: "/team/jandony-guzman.jpg",
    email: "JdesaG@jadai.biz",
    linkedin: "https://www.linkedin.com/in/jandony-guzm%C3%A1n-b737b2259/",
    nota: "Ganador del 1er Hackathon de IA de Ecuador",
  },
];
