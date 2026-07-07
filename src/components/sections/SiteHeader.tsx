"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/ui/Wordmark";
import { LocalTime } from "@/components/ui/LocalTime";
import { agendarHref } from "@/content/site";

/* Top bar editorial (docs/04 §1), adaptado del bloque hero-section-9:
   wordmark + nav mono + hora local + CTA; menú hamburguesa en móvil. */
const menuItems = [
  { name: "Servicios", href: "#servicios" },
  { name: "Trabajo", href: "#trabajo" },
  { name: "Equipo", href: "#equipo" },
  { name: "Contacto", href: "#contacto" },
];

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="relative z-30 border-b border-rule bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-6 py-5 sm:px-10">
        <Link href="/" aria-label="JADAI — inicio" className="flex items-center">
          <Wordmark />
        </Link>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-8 lg:flex"
        >
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
          <LocalTime />
          <Button asChild size="sm">
            <a href={agendarHref()}>Agenda una llamada</a>
          </Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
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
            <div className="mt-6 flex items-center justify-between gap-4 pb-2">
              <LocalTime />
              <Button asChild size="sm">
                <a href={agendarHref()}>Agendar</a>
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
