"use client";

import { useEffect, useState } from "react";

/* Hora local de Guayaquil en el top bar (docs/04 §1). */
export function LocalTime() {
  const [hora, setHora] = useState("--:--");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("es-EC", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "America/Guayaquil",
    });
    const tick = () => setHora(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
      Guayaquil, EC — {hora}
    </span>
  );
}
