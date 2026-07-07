export type Herramienta = { nombre: string; slug: string };

/**
 * Logos reales (Simple Icons), auto-hospedados en /public/stack
 * en monocromo tinta (#17161A) — respeta "un solo acento".
 */
export const stack: Herramienta[] = [
  { nombre: "Anthropic", slug: "anthropic" },
  { nombre: "Hugging Face", slug: "huggingface" },
  { nombre: "LangChain", slug: "langchain" },
  { nombre: "Python", slug: "python" },
  { nombre: "React", slug: "react" },
  { nombre: "Next.js", slug: "nextdotjs" },
  { nombre: "PostgreSQL", slug: "postgresql" },
  { nombre: "Vercel", slug: "vercel" },
];

export function logoUrl(h: Herramienta): string {
  return `/stack/${h.slug}.svg`;
}
