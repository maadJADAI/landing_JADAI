"use client";

import Image from "next/image";
import { useState } from "react";

const messages = [
  { role: "in", text: "Hola, necesito revisar los leads de hoy." },
  { role: "out", text: "Listo. Hay 18 leads nuevos, 6 con alta intención." },
  { role: "in", text: "Prioriza los que pidieron agenda esta semana." },
  { role: "out", text: "Ya los marqué y preparé seguimiento por WhatsApp." },
];

export function IphoneMockup({ videoSrc }: { videoSrc?: string }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <div className="relative mx-auto w-full max-w-[420px] [perspective:1200px]">
      <div className="absolute -inset-8 rounded-full bg-accent/10 blur-3xl" aria-hidden />
      <div
        className="relative transition-transform duration-200 ease-out will-change-transform motion-reduce:transform-none motion-reduce:transition-none"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(0)`,
        }}
        onPointerMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          const px = (event.clientX - rect.left) / rect.width - 0.5;
          const py = (event.clientY - rect.top) / rect.height - 0.5;
          setTilt({ x: py * -7, y: px * 9 });
        }}
        onPointerLeave={() => setTilt({ x: 0, y: 0 })}
      >
        <div className="absolute inset-x-[5.9%] bottom-[2.8%] top-[2.7%] overflow-hidden rounded-[11.5%/5.6%] bg-black">
          {videoSrc ? (
            <video
              src={videoSrc}
              className="h-full w-full scale-[1.035] object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <div className="flex h-full flex-col bg-[#0b1410] text-white">
              <div className="border-b border-white/10 px-7 pb-4 pt-16">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-semibold text-on-accent">
                    J
                  </span>
                  <div>
                    <p className="text-sm font-semibold">JADAI Agente</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
                      WhatsApp real pendiente
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-end gap-3 px-5 py-6">
                {messages.map((message) => (
                  <div
                    key={message.text}
                    className={
                      message.role === "out"
                        ? "ml-auto max-w-[82%] rounded-[18px] rounded-br-[5px] bg-[#005c4b] px-4 py-3 text-sm leading-snug text-white"
                        : "mr-auto max-w-[82%] rounded-[18px] rounded-bl-[5px] bg-[#1f2c25] px-4 py-3 text-sm leading-snug text-white/88"
                    }
                  >
                    {message.text}
                  </div>
                ))}
              </div>

              <div className="px-5 pb-9">
                <div className="rounded-full bg-white/10 px-4 py-3 font-mono text-[11px] text-white/40">
                  Video real de WhatsApp aquí
                </div>
              </div>
            </div>
          )}
        </div>

        <Image
          src="/device/iphone-15-pro-natural.png"
          alt="iPhone 15 Pro mostrando una conversación de WhatsApp con un agente de JADAI"
          width={1299}
          height={2682}
          sizes="(min-width: 1024px) 420px, 82vw"
          className="relative z-10 h-auto w-full select-none drop-shadow-[0_42px_90px_rgba(34,204,230,.18)]"
        />
      </div>
    </div>
  );
}
