"use client";

import { useLang } from "./LangContext";
import { ReactNode } from "react";

/* 3D-style gradient SVG icons — matches the JobCard icon aesthetic */
const featureIcons: ReactNode[] = [
  // Target — 3D red/rose
  <svg key="target" viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <defs>
      <linearGradient id="ft-target" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDA4AF"/><stop offset="1" stopColor="#E11D48"/>
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="18" fill="url(#ft-target)"/>
    <circle cx="24" cy="24" r="18" fill="#FECDD3" opacity="0.35" style={{clipPath:"inset(0 0 50% 0)"}}/>
    <circle cx="24" cy="24" r="12" fill="none" stroke="white" strokeWidth="2.5" opacity="0.6"/>
    <circle cx="24" cy="24" r="6" fill="none" stroke="white" strokeWidth="2.5" opacity="0.6"/>
    <circle cx="24" cy="24" r="2" fill="white"/>
  </svg>,
  // Document — 3D blue
  <svg key="document" viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <defs>
      <linearGradient id="ft-doc" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#60A5FA"/><stop offset="1" stopColor="#2563EB"/>
      </linearGradient>
    </defs>
    <rect x="10" y="4" width="28" height="40" rx="5" fill="url(#ft-doc)"/>
    <rect x="10" y="4" width="28" height="16" rx="5" fill="#93C5FD" opacity="0.4"/>
    <path d="M30 4v10h8" fill="#DBEAFE" opacity="0.5"/>
    <rect x="16" y="20" width="16" height="2.5" rx="1" fill="white" opacity="0.7"/>
    <rect x="16" y="26" width="12" height="2.5" rx="1" fill="white" opacity="0.5"/>
    <rect x="16" y="32" width="14" height="2.5" rx="1" fill="white" opacity="0.5"/>
  </svg>,
  // Coin — 3D gold/amber
  <svg key="coin" viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <defs>
      <linearGradient id="ft-coin" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDE68A"/><stop offset="1" stopColor="#D97706"/>
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="18" fill="url(#ft-coin)"/>
    <circle cx="24" cy="24" r="18" fill="#FEF3C7" opacity="0.4" style={{clipPath:"inset(0 0 50% 0)"}}/>
    <circle cx="24" cy="24" r="13" fill="none" stroke="white" strokeWidth="2" opacity="0.4"/>
    <text x="24" y="30" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="system-ui">$</text>
  </svg>,
  // House — 3D emerald/green
  <svg key="house" viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <defs>
      <linearGradient id="ft-house" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6EE7B7"/><stop offset="1" stopColor="#059669"/>
      </linearGradient>
    </defs>
    <path d="M24 6L6 22h6v18h24V22h6L24 6z" fill="url(#ft-house)"/>
    <path d="M24 6L6 22h6l12-12 12 12h6L24 6z" fill="#A7F3D0" opacity="0.45"/>
    <rect x="20" y="28" width="8" height="12" rx="1.5" fill="#ECFDF5" opacity="0.8"/>
  </svg>,
];

const content = {
  en: {
    heading: "Tools That Work For You",
    subheading:
      "Everything you need to land a tech job in the United States, all in one place.",
    features: [
      {
        title: "Jobs Tailored to You",
        description:
          "Smart algorithms that find the best tech opportunities in the U.S. based on your experience and skills.",
      },
      {
        title: "Visa and Docs Handled",
        description:
          "We take care of the entire immigration process: TN visa, H-1B, documentation and paperwork. You just focus on your career.",
      },
      {
        title: "Transparent Salaries",
        description:
          "See your estimated net pay in USD and MXN before you apply. No surprises, no hidden information.",
      },
      {
        title: "Relocation Support",
        description:
          "We help you with the transition: from finding housing to opening a bank account in the United States.",
      },
    ],
    referralHeading: "Know someone who wants to work in the U.S.?",
    referralDescription:
      "Refer a friend and you both receive exclusive benefits.",
    referralCta: "Invite a Friend",
  },
  es: {
    heading: "Herramientas Que Trabajan Por Ti",
    subheading:
      "Todo lo que necesitas para encontrar trabajo tech en Estados Unidos, en un solo lugar.",
    features: [
      {
        title: "Empleos Que Se Adaptan a Ti",
        description:
          "Algoritmos inteligentes que encuentran las mejores oportunidades tech en EE.UU. basándose en tu experiencia y habilidades.",
      },
      {
        title: "Visa y Documentos Resueltos",
        description:
          "Nos encargamos de todo el proceso migratorio: visa TN, H-1B, documentación y trámites. Tú solo enfócate en tu carrera.",
      },
      {
        title: "Salarios Transparentes",
        description:
          "Ve el sueldo neto estimado en USD y MXN antes de aplicar. Sin sorpresas, sin información oculta.",
      },
      {
        title: "Apoyo en Reubicación",
        description:
          "Te ayudamos con la transición: desde encontrar vivienda hasta abrir cuenta bancaria en Estados Unidos.",
      },
    ],
    referralHeading: "\u00bfConoces a alguien que quiera trabajar en EE.UU.?",
    referralDescription:
      "Refiere a un amigo y ambos reciben beneficios exclusivos.",
    referralCta: "Invitar Amigo",
  },
};

export default function Features() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="empleos" className="py-20 md:py-28 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Section heading */}
        <div className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-instrument-serif)] italic text-3xl sm:text-4xl md:text-5xl tracking-tight">
            {t.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {t.subheading}
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {t.features.map((feature, i) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white border border-gray-100 shadow-sm p-7 transition-shadow duration-200 hover:shadow-md"
            >
              <div className="mb-4 drop-shadow-md" aria-hidden="true">
                {featureIcons[i]}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Referral banner */}
        <div className="mt-5 rounded-2xl bg-green-light p-8 md:p-10">
          <h3 className="font-[family-name:var(--font-instrument-serif)] italic text-2xl md:text-3xl tracking-tight">
            {t.referralHeading}
          </h3>
          <p className="mt-2 text-gray-600 text-lg leading-relaxed">
            {t.referralDescription}
          </p>
          <a
            href="#"
            className="mt-5 inline-block bg-green-accent text-white rounded-full px-7 py-3 font-medium transition-transform duration-200 hover:scale-105 hover:shadow-lg"
          >
            {t.referralCta}
          </a>
        </div>
      </div>
    </section>
  );
}
