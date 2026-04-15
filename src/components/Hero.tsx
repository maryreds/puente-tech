"use client";

import { useState } from "react";

const content = {
  en: {
    lines: ["Tech Jobs", "That Match", "You, Not The", "Other Way", "Around"],
    subtitle:
      "Job matches, visa sponsorship, and a clear path to live and work legally in the U.S.",
    cta: "See Available Jobs",
    trust: "✓ 100% Legal · ✓ TN / H-1B Visa · ✓ Free for candidates",
  },
  es: {
    lines: ["Trabajos Tech", "Que Se Adaptan", "a Ti, No al", "Revés"],
    subtitle:
      "Ofertas personalizadas, visa patrocinada y un camino claro para vivir y trabajar legalmente en EE.UU.",
    cta: "Ver Empleos Disponibles",
    trust: "✓ 100% Legal · ✓ Visa TN / H-1B · ✓ Sin costo para ti",
  },
};

function FolderIcon() {
  return (
    <svg
      width="140"
      height="140"
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[140px] md:h-[140px] drop-shadow-2xl"
    >
      {/* Back panel */}
      <rect x="10" y="30" width="120" height="85" rx="8" fill="#5B9BD5" />
      {/* Tab */}
      <path
        d="M10 38C10 33.5817 13.5817 30 18 30H50L60 18H122C126.418 18 130 21.5817 130 26V30H10V38Z"
        fill="#4A8AC4"
      />
      {/* Front panel */}
      <rect x="10" y="48" width="120" height="70" rx="6" fill="#6BB5F0" />
      {/* Shine */}
      <rect
        x="18"
        y="56"
        width="50"
        height="6"
        rx="3"
        fill="white"
        opacity="0.3"
      />
      {/* Paper sticking out */}
      <rect x="35" y="38" width="70" height="50" rx="3" fill="white" />
      <rect
        x="45"
        y="48"
        width="40"
        height="4"
        rx="2"
        fill="#CBD5E1"
      />
      <rect
        x="45"
        y="58"
        width="30"
        height="4"
        rx="2"
        fill="#CBD5E1"
      />
      <rect
        x="45"
        y="68"
        width="35"
        height="4"
        rx="2"
        fill="#CBD5E1"
      />
    </svg>
  );
}

export default function Hero() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const t = content[lang];

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-white">
      <div className="mx-auto max-w-5xl px-6">
        {/* Language toggle */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="inline-flex rounded-full border border-gray-200 bg-gray-50 p-1">
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-5 py-1.5 text-sm font-medium transition-all duration-200 ${
                lang === "en"
                  ? "bg-white text-foreground shadow-sm"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang("es")}
              className={`rounded-full px-5 py-1.5 text-sm font-medium transition-all duration-200 ${
                lang === "es"
                  ? "bg-white text-foreground shadow-sm"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Español
            </button>
          </div>
        </div>

        {/* Big heading with 3D folder overlay */}
        <div className="relative text-center">
          <h1 className="font-[family-name:var(--font-instrument-serif)] text-[clamp(3.5rem,10vw,9rem)] font-normal leading-[0.92] tracking-[-0.02em] text-foreground">
            {t.lines.map((line, i) => (
              <span key={`${lang}-${i}`} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* 3D folder — centered over the text */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
            aria-hidden="true"
          >
            <FolderIcon />
          </div>
        </div>

        {/* Subtitle */}
        <p className="mt-10 text-center text-base md:text-lg text-gray-400 max-w-md mx-auto leading-relaxed">
          {t.subtitle}
        </p>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#empleos"
            className="inline-block bg-[#22c55e] text-white rounded-full px-8 py-3.5 text-lg font-medium transition-transform duration-200 hover:scale-105 hover:shadow-lg"
          >
            {t.cta}
          </a>
        </div>

        {/* Trust line */}
        <p className="mt-6 text-center text-sm text-gray-400 tracking-wide">
          {t.trust}
        </p>
      </div>
    </section>
  );
}
