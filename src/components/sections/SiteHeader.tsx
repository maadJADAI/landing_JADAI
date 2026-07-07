"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { OpenChatButton } from "@/components/ui/OpenChatButton";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Servicios", href: "#servicios" },
  { name: "Trabajo", href: "#trabajo" },
  { name: "Equipo", href: "#equipo" },
  { name: "Contacto", href: "#contacto" },
];

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const lastY = React.useRef(0);

  React.useEffect(() => {
    const main = document.getElementById("contenido");
    // el umbral se mide desde el inicio del contenido, no desde la intro:
    // en el tope (header + hero) el header queda siempre visible. Se cachea
    // para no forzar layout (getBoundingClientRect) en cada scroll.
    let contentTop = 0;
    const measure = () => {
      contentTop = main
        ? main.getBoundingClientRect().top + window.scrollY
        : 0;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);

    const onScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastY.current;

      setHidden(
        scrollingDown && currentY > contentTop + window.innerHeight * 0.35,
      );
      lastY.current = currentY;
    };

    lastY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-rule bg-bg/90 backdrop-blur-sm transition-transform duration-300",
        hidden && !open ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-6 py-5 sm:px-10">
        <Link href="/" aria-label="JADAI - inicio" className="flex items-center">
          <Image
            src="/brand/jadai-logo-white.png"
            alt="JADAI"
            width={172}
            height={44}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-[0.12em] text-ink-2 transition-colors duration-150 hover:text-accent-ink"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <OpenChatButton size="sm">Agenda una llamada</OpenChatButton>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={open}
          className="-m-2 p-2 lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>

        {open ? (
          <div className="w-full border-t border-rule pt-4 lg:hidden">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-mono text-sm uppercase tracking-[0.12em] text-ink-2 hover:text-accent-ink"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center justify-end gap-4 pb-2">
              <OpenChatButton size="sm" onClick={() => setOpen(false)}>
                Agendar
              </OpenChatButton>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
