"use client";

import { useLang } from "./LangContext";

const content = {
  en: {
    heading: "Tools That Work For You",
    subheading:
      "Everything you need to land a tech job in the United States, all in one place.",
    features: [
      {
        emoji: "🎯",
        title: "Jobs Tailored to You",
        description:
          "Smart algorithms that find the best tech opportunities in the U.S. based on your experience and skills.",
      },
      {
        emoji: "📄",
        title: "Visa and Docs Handled",
        description:
          "We take care of the entire immigration process: TN visa, H-1B, documentation and paperwork. You just focus on your career.",
      },
      {
        emoji: "💰",
        title: "Transparent Salaries",
        description:
          "See your estimated net pay in USD and MXN before you apply. No surprises, no hidden information.",
      },
      {
        emoji: "🏠",
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
        emoji: "🎯",
        title: "Empleos Que Se Adaptan a Ti",
        description:
          "Algoritmos inteligentes que encuentran las mejores oportunidades tech en EE.UU. basándose en tu experiencia y habilidades.",
      },
      {
        emoji: "📄",
        title: "Visa y Documentos Resueltos",
        description:
          "Nos encargamos de todo el proceso migratorio: visa TN, H-1B, documentación y trámites. Tú solo enfócate en tu carrera.",
      },
      {
        emoji: "💰",
        title: "Salarios Transparentes",
        description:
          "Ve el sueldo neto estimado en USD y MXN antes de aplicar. Sin sorpresas, sin información oculta.",
      },
      {
        emoji: "🏠",
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
          {t.features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white border border-gray-100 shadow-sm p-7 transition-shadow duration-200 hover:shadow-md"
            >
              <div className="text-[40px] leading-none mb-4" aria-hidden="true">
                {feature.emoji}
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
