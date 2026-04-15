import type { Metadata } from "next";
import { Noto_Sans, Gloock } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const gloock = Gloock({
  variable: "--font-gloock",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TalentOS — Tech Jobs in the U.S. for Latin American Developers",
  description:
    "Find tech jobs in the United States with competitive salaries. We handle your visa and documentation. 100% legal, 100% transparent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${notoSans.variable} ${gloock.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
