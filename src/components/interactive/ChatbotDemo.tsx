"use client";

import { useEffect, useRef, useState } from "react";
import { conversacion } from "@/content/demo";
import { useInView, useReducedMotion } from "@/lib/hooks";

/* Chatbot demo WhatsApp (docs/05·D): se reproduce solo al entrar en
   viewport, una vez. Entrantes = panel izq · salientes = accent der. */
export function ChatbotDemo() {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const reduce = useReducedMotion();
  const [visibles, setVisibles] = useState(0);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const played = useRef(false);

  useEffect(() => {
    // reduced-motion no reproduce: se muestra la conversación completa (abajo)
    if (!inView || played.current || reduce) return;
    played.current = true;
    let cancel = false;
    const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));
    (async () => {
      for (let i = 0; i < conversacion.length; i++) {
        if (cancel) return;
        if (conversacion[i].role === "out") {
          setTyping(true);
          await delay(820);
          setTyping(false);
        }
        await delay(240);
        if (cancel) return;
        setVisibles(i + 1);
        await delay(560);
      }
    })();
    return () => {
      cancel = true;
    };
  }, [inView, reduce]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [visibles, typing]);

  return (
    <div
      ref={ref}
      className="mx-auto w-full max-w-[340px] rounded-[26px] border border-rule bg-panel p-3 shadow-[0_24px_60px_-16px_rgba(7,106,117,0.22)]"
    >
      {/* header del teléfono */}
      <div className="flex items-center gap-3 border-b border-rule px-2 pb-3 pt-1">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent font-semibold text-on-accent">
          J
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold">JADAI · Agente</p>
          <p className="font-mono text-[11px] text-muted">en línea</p>
        </div>
      </div>

      {/* conversación */}
      <div
        ref={scrollRef}
        className="flex h-[320px] flex-col gap-2 overflow-y-auto bg-bg-alt px-2 py-3"
        aria-label="Demostración de conversación con un agente de JADAI"
      >
        {conversacion.slice(0, reduce ? conversacion.length : visibles).map((m, i) => (
          <div
            key={i}
            className={
              m.role === "out"
                ? "ml-auto max-w-[85%] rounded-md rounded-br-none bg-accent px-3 py-2 text-sm text-on-accent"
                : "mr-auto max-w-[85%] rounded-md rounded-bl-none border border-rule bg-panel px-3 py-2 text-sm"
            }
          >
            {m.texto}
            <span
              className={
                m.role === "out"
                  ? "mt-1 block text-right font-mono text-[10px] opacity-60"
                  : "mt-1 block text-right font-mono text-[10px] text-muted"
              }
            >
              {m.hora}
            </span>
          </div>
        ))}
        {typing ? (
          <div className="ml-auto flex gap-1 rounded-md bg-accent/80 px-3 py-2.5">
            <i className="typing-dot" />
            <i className="typing-dot [animation-delay:150ms]" />
            <i className="typing-dot [animation-delay:300ms]" />
          </div>
        ) : null}
      </div>

      {/* input falso */}
      <div className="flex items-center gap-2 px-2 pb-1 pt-3">
        <span className="h-9 flex-1 rounded-full border border-rule bg-bg px-4 py-2 font-mono text-[11px] text-muted">
          Escribe un mensaje…
        </span>
      </div>
    </div>
  );
}
