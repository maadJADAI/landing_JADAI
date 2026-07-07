export type Pregunta = { q: string; a: string };

/** FAQ en texto plano real — alto valor de citación para IA (docs/09). */
export const faq: Pregunta[] = [
  {
    q: "¿Qué hace JADAI?",
    a: "JADAI es un equipo de IA aplicada con sede en Ecuador. Construimos agentes, chatbots y modelos a medida para empresas de fintech, agro (acuicultura) y operaciones — software en producción que genera resultados, no prototipos.",
  },
  {
    q: "¿Hacen agentes de WhatsApp?",
    a: "Sí. Diseñamos y operamos agentes conversacionales sobre WhatsApp Business que atienden clientes, consultan tus sistemas internos y ejecutan tareas — disponibles 24/7.",
  },
  {
    q: "¿Trabajan con camaroneras?",
    a: "Sí. La acuicultura es una de nuestras verticales: monitoreo con visión por computadora, predicción de crecimiento y alimento, y reportes automáticos directo al WhatsApp del equipo.",
  },
  {
    q: "¿Cómo empezamos?",
    a: "Agenda una llamada de 30 minutos. En la primera conversación identificamos el proceso con mejor retorno y te proponemos un plan de entrega en iteraciones cortas.",
  },
];
