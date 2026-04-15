import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = localFont({
  src: "./fonts/InstrumentSerif-Regular.ttf",
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Puente Tech — Trabajos Tech en EE.UU. para Desarrolladores Mexicanos",
  description:
    "Encuentra trabajo tech en Estados Unidos con buen sueldo. Nosotros nos encargamos de tu visa y documentos. Todo legal, todo transparente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
