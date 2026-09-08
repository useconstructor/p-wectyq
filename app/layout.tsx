import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mente Plena | Psicología clínica en CDMX",
  description: "Terapia psicológica individual, de pareja y familiar en Ciudad de México y online.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
