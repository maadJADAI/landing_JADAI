import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "JADAI — IA aplicada";

/* OG 1200×630 (docs/09): tema oscuro del sistema, wordmark + claim.
   Valores de color = tokens del modo oscuro (docs/01 §2.5). */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0F0E12",
          color: "#F4F2EC",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: 999,
              border: "6px solid #22CCE6",
            }}
          />
          <div style={{ width: 120, height: 7, background: "#22CCE6" }} />
          <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>
            JADAI
          </div>
        </div>
        <div
          style={{
            fontSize: 92,
            fontWeight: 700,
            letterSpacing: -4,
            lineHeight: 1.02,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Construimos IA</span>
          <span style={{ display: "flex", gap: 24 }}>
            que <span style={{ color: "#22CCE6" }}>factura.</span>
          </span>
        </div>
        <div
          style={{
            fontSize: 24,
            letterSpacing: 4,
            color: "#8E8B95",
            textTransform: "uppercase",
          }}
        >
          Fintech · Agro · Agentes — IA aplicada / Ecuador
        </div>
      </div>
    ),
    { ...size },
  );
}
