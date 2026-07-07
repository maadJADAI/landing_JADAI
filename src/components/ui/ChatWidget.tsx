"use client";

import * as React from "react";
import { MessageCircle, Send, X } from "lucide-react";

export function ChatWidget() {
  const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const updateVisibility = () => {
      setVisible(window.scrollY > window.innerHeight * 0.95);
    };

    const openChat = () => {
      setVisible(true);
      setOpen(true);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("jadai:open-chat", openChat);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("jadai:open-chat", openChat);
    };
  }, []);

  if (!visible && !open) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open ? (
        <section className="w-[min(calc(100vw-40px),360px)] overflow-hidden rounded-md border border-rule bg-panel text-ink shadow-[0_24px_80px_-24px_rgba(7,106,117,0.42)]">
          <div className="flex items-center justify-between border-b border-rule bg-bg-alt px-4 py-3">
            <div>
              <p className="text-sm font-semibold">Chat JADAI</p>
              <p className="text-xs text-ink-2">Aquí va un chat.</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar chat"
              className="rounded-[3px] p-2 text-ink-2 transition-colors hover:bg-tint hover:text-ink"
            >
              <X className="size-4" aria-hidden />
            </button>
          </div>
          <div className="space-y-3 p-4">
            <div className="max-w-[85%] rounded-md bg-bg-alt p-3 text-sm leading-relaxed text-ink-2">
              Hola. Este espacio queda reservado para conectar agenda, WhatsApp
              o el agente de JADAI.
            </div>
            <div className="ml-auto max-w-[82%] rounded-md bg-ink p-3 text-sm leading-relaxed text-bg">
              Quiero hablar con alguien del equipo.
            </div>
          </div>
          <div className="flex items-center gap-2 border-t border-rule p-3">
            <input
              disabled
              value="Próximamente..."
              aria-label="Mensaje de chat"
              className="min-w-0 flex-1 rounded-[3px] border border-rule bg-bg px-3 py-2 text-sm text-muted"
              readOnly
            />
            <button
              type="button"
              disabled
              aria-label="Enviar mensaje"
              className="rounded-[3px] bg-accent p-2.5 text-on-accent opacity-60"
            >
              <Send className="size-4" aria-hidden />
            </button>
          </div>
        </section>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Cerrar chat" : "Abrir chat"}
        className="flex size-14 items-center justify-center rounded-full bg-ink text-bg shadow-[0_16px_44px_-16px_rgba(7,106,117,0.5)] transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        {open ? (
          <X className="size-6" aria-hidden />
        ) : (
          <MessageCircle className="size-6" aria-hidden />
        )}
      </button>
    </div>
  );
}
