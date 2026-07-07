"use client";

import { Constellation } from "@/components/interactive/Constellation";

/* Fondo global fijo (docs/05·B extendido): la página entera vive sobre el
   motivo nodo+línea oscuro — al hacer scroll se "baja" dentro del mismo
   espacio, sin corte a blanco. Dos capas de constelación a distinta escala
   y opacidad crean profundidad; brillos cian y viñeta dan atmósfera. */
export function SiteBackground() {
  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      {/* capa lejana: más tenue y desenfocada */}
      <div className="absolute inset-0 opacity-45 blur-[1.5px]">
        <Constellation density={17000} />
      </div>
      {/* capa cercana: nítida */}
      <div className="absolute inset-0 opacity-90">
        <Constellation density={26000} />
      </div>
      {/* viñeta: oscurece bordes para que el contenido respire */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,.35)_100%)]" />
    </div>
  );
}
