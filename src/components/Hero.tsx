"use client";

import { useLang } from "./LangContext";

const content = {
  en: {
    lines: ["Tech Jobs That Match", "You, Not The Other", "Way Around"],
    subtitle:
      "Job matches, visa sponsorship, and a clear path to live and work legally in the U.S.",
    cta: "See Available Jobs",
    trust: "✓ 100% Legal · ✓ TN / H-1B Visa · ✓ Free for candidates",
  },
  es: {
    lines: ["Trabajos Tech Que", "Se Adaptan a Ti,", "No al Revés"],
    subtitle:
      "Ofertas personalizadas, visa patrocinada y un camino claro para vivir y trabajar legalmente en EE.UU.",
    cta: "Ver Empleos Disponibles",
    trust: "✓ 100% Legal · ✓ Visa TN / H-1B · ✓ Sin costo para ti",
  },
};


export default function Hero() {
  const { lang, setLang } = useLang();
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
          <h1 className="font-[family-name:var(--font-gloock)] text-[clamp(2.8rem,7vw,6rem)] font-normal leading-[0.95] tracking-[-0.02em] text-foreground">
            {t.lines.map((line, i) => (
              <span key={`${lang}-${i}`} className="block">
                {line}
              </span>
            ))}
          </h1>
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
