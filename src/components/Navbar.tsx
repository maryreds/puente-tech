"use client";

import { useState } from "react";
import Image from "next/image";
import { useLang } from "./LangContext";

const navContent = {
  en: {
    links: [
      { label: "Jobs", href: "/empleos" },
      { label: "How It Works", href: "#como-funciona" },
      { label: "Visa & Docs", href: "#visa" },
      { label: "FAQ", href: "#preguntas" },
    ],
    login: "Sign In",
    cta: "Apply Now",
  },
  es: {
    links: [
      { label: "Empleos", href: "/empleos" },
      { label: "Cómo Funciona", href: "#como-funciona" },
      { label: "Visa y Documentos", href: "#visa" },
      { label: "Preguntas", href: "#preguntas" },
    ],
    login: "Iniciar Sesión",
    cta: "Aplicar Ahora",
  },
};

export default function Navbar() {
  const { lang } = useLang();
  const t = navContent[lang];
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) {
      setMobileOpen(false);
      return;
    }
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* TalentOS Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/talentos-icon.png"
              alt="TalentOS"
              width={36}
              height={40}
              priority
              className="h-10 w-auto"
            />
            <span
              className="text-[22px] tracking-tight text-foreground"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontWeight: 400, WebkitTextStroke: "0px" }}
            >
              TalentOS
            </span>
          </a>

          {/* Center nav links — desktop */}
          <div className="hidden md:flex items-center gap-8">
            {t.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-sm text-gray-medium hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right actions — desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#iniciar-sesion"
              className="text-sm text-gray-medium hover:text-foreground transition-colors"
            >
              {t.login}
            </a>
            <a
              href="#aplicar"
              className="bg-[#22c55e] hover:bg-[#16a34a] text-white text-sm font-medium rounded-full px-6 py-2.5 transition-colors"
            >
              {t.cta}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-medium hover:text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-border bg-white px-4 pb-4 pt-2">
          <div className="flex flex-col gap-3">
            {t.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-sm text-gray-medium hover:text-foreground transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <hr className="border-gray-border" />
            <a
              href="#iniciar-sesion"
              className="text-sm text-gray-medium hover:text-foreground transition-colors py-1"
            >
              {t.login}
            </a>
            <a
              href="#aplicar"
              className="bg-[#22c55e] hover:bg-[#16a34a] text-white text-sm font-medium rounded-full px-6 py-2.5 text-center transition-colors"
            >
              {t.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
