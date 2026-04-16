"use client";

import { useLang } from "./LangContext";

const content = {
  en: {
    heading: "Visa & Documentation",
    subtitle:
      "We handle the entire immigration process so you can focus on your career.",
    visas: [
      {
        name: "TN Visa",
        flag: "🇲🇽🇨🇦",
        timeline: "2–4 weeks",
        description:
          "For Mexican and Canadian professionals under the USMCA/T-MEC treaty. The fastest path for engineers, analysts, and other tech roles.",
        highlights: [
          "No annual cap or lottery",
          "Renewable indefinitely",
          "Spouse and dependents included (TD visa)",
        ],
      },
      {
        name: "H-1B Visa",
        flag: "🌎",
        timeline: "3–6 months",
        description:
          "For specialty occupation workers from any country. Ideal if you don't qualify for TN or need a dual-intent visa for permanent residency.",
        highlights: [
          "Path to green card",
          "Valid for up to 6 years",
          "Employer-sponsored",
        ],
      },
    ],
    docsHeading: "What We Handle For You",
    docs: [
      {
        icon: "passport",
        title: "Visa Application",
        description: "We prepare, review, and file your complete visa petition with USCIS.",
      },
      {
        icon: "briefcase",
        title: "Offer Letter & Contract",
        description: "We ensure your employment terms, salary, and benefits are clearly documented.",
      },
      {
        icon: "home",
        title: "Relocation Package",
        description: "Housing guidance, bank account setup, SSN application, and settling-in support.",
      },
      {
        icon: "shield",
        title: "Legal Compliance",
        description: "We verify everything meets U.S. immigration law so you arrive with full confidence.",
      },
    ],
    cta: "See Available Jobs",
    ctaHref: "/empleos",
    disclaimer: "All immigration costs are covered by the employer — zero cost to you.",
  },
  es: {
    heading: "Visa y Documentación",
    subtitle:
      "Nos encargamos de todo el proceso migratorio para que tú te enfoques en tu carrera.",
    visas: [
      {
        name: "Visa TN",
        flag: "🇲🇽🇨🇦",
        timeline: "2–4 semanas",
        description:
          "Para profesionales mexicanos y canadienses bajo el tratado USMCA/T-MEC. La vía más rápida para ingenieros, analistas y otros roles tech.",
        highlights: [
          "Sin tope anual ni lotería",
          "Renovable indefinidamente",
          "Cónyuge y dependientes incluidos (visa TD)",
        ],
      },
      {
        name: "Visa H-1B",
        flag: "🌎",
        timeline: "3–6 meses",
        description:
          "Para trabajadores de ocupaciones especializadas de cualquier país. Ideal si no calificas para TN o necesitas una visa con doble intención para residencia permanente.",
        highlights: [
          "Camino a la green card",
          "Válida hasta 6 años",
          "Patrocinada por el empleador",
        ],
      },
    ],
    docsHeading: "Lo Que Hacemos Por Ti",
    docs: [
      {
        icon: "passport",
        title: "Solicitud de Visa",
        description: "Preparamos, revisamos y presentamos tu petición completa ante USCIS.",
      },
      {
        icon: "briefcase",
        title: "Carta Oferta y Contrato",
        description: "Nos aseguramos de que tus condiciones laborales, salario y beneficios estén documentados.",
      },
      {
        icon: "home",
        title: "Paquete de Reubicación",
        description: "Guía de vivienda, apertura de cuenta bancaria, solicitud de SSN y apoyo para instalarte.",
      },
      {
        icon: "shield",
        title: "Cumplimiento Legal",
        description: "Verificamos que todo cumpla con la ley migratoria de EE.UU. para que llegues con total confianza.",
      },
    ],
    cta: "Ver Empleos Disponibles",
    ctaHref: "/empleos",
    disclaimer: "Todos los costos migratorios los cubre el empleador — cero costo para ti.",
  },
};

const docIcons: Record<string, React.ReactNode> = {
  passport: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <defs>
        <linearGradient id="vi-passport" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA" /><stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
      <rect x="8" y="4" width="32" height="40" rx="6" fill="url(#vi-passport)" />
      <rect x="8" y="4" width="32" height="16" rx="6" fill="#93C5FD" opacity="0.35" />
      <circle cx="24" cy="22" r="7" fill="none" stroke="white" strokeWidth="2" opacity="0.7" />
      <rect x="16" y="34" width="16" height="2.5" rx="1" fill="white" opacity="0.6" />
      <rect x="18" y="38" width="12" height="2" rx="1" fill="white" opacity="0.4" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <defs>
        <linearGradient id="vi-brief" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDE68A" /><stop offset="1" stopColor="#D97706" />
        </linearGradient>
      </defs>
      <rect x="4" y="14" width="40" height="28" rx="6" fill="url(#vi-brief)" />
      <rect x="4" y="14" width="40" height="12" rx="6" fill="#FEF3C7" opacity="0.4" />
      <rect x="16" y="6" width="16" height="12" rx="4" fill="none" stroke="#D97706" strokeWidth="2.5" />
      <rect x="20" y="24" width="8" height="6" rx="2" fill="white" opacity="0.7" />
    </svg>
  ),
  home: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <defs>
        <linearGradient id="vi-home" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6EE7B7" /><stop offset="1" stopColor="#059669" />
        </linearGradient>
      </defs>
      <path d="M24 6L6 22h6v18h24V22h6L24 6z" fill="url(#vi-home)" />
      <path d="M24 6L6 22h6l12-12 12 12h6L24 6z" fill="#A7F3D0" opacity="0.45" />
      <rect x="20" y="28" width="8" height="12" rx="1.5" fill="#ECFDF5" opacity="0.8" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <defs>
        <linearGradient id="vi-shield" x1="24" y1="2" x2="24" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C4B5FD" /><stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <path d="M24 4L6 12v14c0 10.5 8 18 18 22 10-4 18-11.5 18-22V12L24 4z" fill="url(#vi-shield)" />
      <path d="M24 4L6 12v14c0 3 1 6 2.5 8.5L42 12V12L24 4z" fill="#DDD6FE" opacity="0.35" />
      <path d="M20 24l3 3 6-6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function VisaDocs() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="visa" className="py-20 md:py-28 px-6 bg-gray-50/60">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-instrument-serif)] italic text-3xl sm:text-4xl md:text-5xl tracking-tight">
            {t.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Visa type cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {t.visas.map((visa, i) => (
            <div
              key={visa.name}
              className={`rounded-2xl p-8 flex flex-col ${
                i === 0
                  ? "border-2 border-[#22c55e] bg-white shadow-md"
                  : "border border-gray-200 bg-white"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-foreground">{visa.name}</h3>
                <span className="text-2xl">{visa.flag}</span>
              </div>
              <span className="inline-block self-start rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 mb-4">
                {visa.timeline}
              </span>
              <p className="text-gray-500 leading-relaxed mb-5">
                {visa.description}
              </p>
              <ul className="space-y-2 mt-auto">
                {visa.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg
                      className="h-5 w-5 text-[#22c55e] shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Documents handled */}
        <h3 className="text-center font-[family-name:var(--font-instrument-serif)] italic text-2xl md:text-3xl tracking-tight mb-8">
          {t.docsHeading}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {t.docs.map((doc) => (
            <div
              key={doc.title}
              className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 text-center transition-shadow duration-200 hover:shadow-md"
            >
              <div className="flex justify-center mb-4 drop-shadow-md">
                {docIcons[doc.icon]}
              </div>
              <h4 className="font-bold text-foreground mb-2">{doc.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                {doc.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA + disclaimer */}
        <div className="text-center">
          <a
            href={t.ctaHref}
            className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white rounded-full px-8 py-3.5 text-lg font-medium transition-transform duration-200 hover:scale-105 hover:shadow-lg"
          >
            {t.cta}
          </a>
          <p className="mt-4 text-sm text-gray-400 flex items-center justify-center gap-1.5">
            <svg
              className="h-4 w-4 text-[#22c55e]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {t.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
