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
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px]"
      style={{
        filter:
          "drop-shadow(0 20px 40px rgba(59,143,227,0.3)) drop-shadow(0 8px 16px rgba(0,0,0,0.15))",
      }}
    >
      <defs>
        <linearGradient id="backG" x1="100" y1="40" x2="100" y2="155" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#74BFFF" />
          <stop offset="1" stopColor="#2E7FD9" />
        </linearGradient>
        <linearGradient id="frontG" x1="100" y1="72" x2="100" y2="165" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#8AD2FF" />
          <stop offset="0.35" stopColor="#62B4F5" />
          <stop offset="0.7" stopColor="#4A9DE8" />
          <stop offset="1" stopColor="#3580D4" />
        </linearGradient>
        <linearGradient id="tabG" x1="50" y1="28" x2="50" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#68B8F8" />
          <stop offset="1" stopColor="#4A98DB" />
        </linearGradient>
        <linearGradient id="paper1G" x1="95" y1="10" x2="95" y2="75" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#EDF0F4" />
        </linearGradient>
        <linearGradient id="shineG" x1="100" y1="72" x2="100" y2="115" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="white" stopOpacity="0.5" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="edgeG" x1="100" y1="145" x2="100" y2="165" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2E7FD9" stopOpacity="0" />
          <stop offset="1" stopColor="#1B5FAA" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Back panel */}
      <rect x="16" y="42" width="168" height="118" rx="16" fill="url(#backG)" />
      {/* Inner back shadow */}
      <rect x="16" y="42" width="168" height="118" rx="16" fill="black" opacity="0.05" />

      {/* Tab */}
      <path
        d="M16 56C16 47.163 23.163 40 32 40H64C67.5 40 70.7 41.6 72.7 44.3L80 54H16V56Z"
        fill="url(#tabG)"
      />

      {/* Paper 1 — back, tilted left */}
      <g transform="rotate(-10, 90, 55)">
        <rect x="48" y="16" width="84" height="64" rx="6" fill="url(#paper1G)" />
        <rect x="48" y="16" width="84" height="64" rx="6" stroke="#DAE0E8" strokeWidth="0.5" />
        <rect x="60" y="30" width="44" height="4" rx="2" fill="#C0C8D4" />
        <rect x="60" y="40" width="34" height="4" rx="2" fill="#D2D8E0" />
        <rect x="60" y="50" width="40" height="4" rx="2" fill="#D2D8E0" />
        <rect x="60" y="60" width="26" height="4" rx="2" fill="#DEE2E8" />
      </g>

      {/* Paper 2 — front, tilted right */}
      <g transform="rotate(7, 105, 50)">
        <rect x="54" y="10" width="88" height="70" rx="6" fill="white" />
        <rect x="54" y="10" width="88" height="70" rx="6" stroke="#D4DAE2" strokeWidth="0.5" />
        <rect x="68" y="24" width="48" height="4.5" rx="2.25" fill="#B8C2CE" />
        <rect x="68" y="34" width="36" height="4.5" rx="2.25" fill="#C8D0DA" />
        <rect x="68" y="44" width="42" height="4.5" rx="2.25" fill="#C8D0DA" />
        <rect x="68" y="54" width="28" height="4.5" rx="2.25" fill="#D4DAE4" />
      </g>

      {/* Front panel */}
      <rect x="16" y="72" width="168" height="93" rx="16" fill="url(#frontG)" />

      {/* Glossy top highlight */}
      <path
        d="M32 72H168C176.837 72 184 79.163 184 88V96H16V88C16 79.163 23.163 72 32 72Z"
        fill="url(#shineG)"
      />

      {/* Top edge bright line */}
      <rect x="24" y="72" width="152" height="2" rx="1" fill="white" opacity="0.35" />

      {/* Bottom darkening for depth */}
      <rect x="16" y="145" width="168" height="20" rx="16" fill="url(#edgeG)" />

      {/* Specular reflection dot */}
      <ellipse cx="60" cy="84" rx="20" ry="6" fill="white" opacity="0.18" />
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

        {/* Big heading with floating 3D folder */}
        <div className="relative text-center">
          <h1 className="font-[family-name:var(--font-instrument-serif)] text-[clamp(3.5rem,10vw,9rem)] font-normal leading-[0.92] tracking-[-0.02em] text-foreground">
            {t.lines.map((line, i) => (
              <span key={`${lang}-${i}`} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* 3D folder — floating in front of "Not", slightly smaller */}
          <div
            className="absolute top-[50%] left-[48%] -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
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
            href="/empleos"
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
