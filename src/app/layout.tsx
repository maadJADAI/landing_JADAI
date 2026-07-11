import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const generalSans = localFont({
  variable: "--font-general-sans",
  display: "swap",
  src: [
    { path: "../fonts/GeneralSans-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/GeneralSans-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/GeneralSans-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/GeneralSans-700.woff2", weight: "700", style: "normal" },
  ],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jadai.biz"),
  title: {
    default: "JADAI - IA aplicada",
    template: "%s - JADAI",
  },
  description:
    "Construimos IA que factura. Agentes, chatbots y modelos a medida para operaciones. IA aplicada, Ecuador.",
  keywords: [
    "IA Ecuador",
    "agentes de IA",
    "chatbots WhatsApp",
    "automatización con IA",
    "agentes WhatsApp",
    "estudio de IA Guayaquil",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "JADAI - IA aplicada",
    description:
      "Construimos IA que factura. Agentes, chatbots y modelos a medida.",
    url: "https://jadai.biz",
    siteName: "JADAI",
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JADAI - IA aplicada",
    description:
      "Construimos IA que factura. Agentes, chatbots y modelos a medida.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${generalSans.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body data-theme="dark" className="min-h-full antialiased">
        {children}
      </body>
    </html>
  );
}
