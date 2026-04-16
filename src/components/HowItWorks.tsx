"use client";

import { useLang } from "./LangContext";

const content = {
  en: {
    heading: "How It Works",
    subtitle: "Three simple steps to start your tech career in the United States",
    steps: [
      {
        label: "Step 1",
        title: "Create Your Profile",
        description:
          "Sign up, upload your resume, and complete a brief questionnaire about your experience, skills, and English level.",
      },
      {
        label: "Step 2",
        badge: "Recommended",
        title: "Receive Personalized Offers",
        description:
          "Our team reviews your profile, evaluates your visa eligibility, and connects you with the best opportunities that match your skills.",
      },
      {
        label: "Step 3",
        title: "Start Your New Life",
        description:
          "Accept the offer, we process your visa and documents, and support you throughout the entire relocation process.",
      },
    ],
    footer: "No cost to the candidate — the employer covers all expenses",
  },
  es: {
    heading: "\u00bfC\u00f3mo Funciona?",
    subtitle: "Tres pasos simples para empezar tu carrera tech en Estados Unidos",
    steps: [
      {
        label: "Paso 1",
        title: "Crea Tu Perfil",
        description:
          "Reg\u00edstrate, sube tu CV y completa un breve cuestionario sobre tu experiencia, habilidades y nivel de ingl\u00e9s.",
      },
      {
        label: "Paso 2",
        badge: "Recomendado",
        title: "Recibe Ofertas Personalizadas",
        description:
          "Nuestro equipo revisa tu perfil, eval\u00faa tu elegibilidad de visa y te conecta con las mejores oportunidades que se adaptan a ti.",
      },
      {
        label: "Paso 3",
        title: "Empieza Tu Nueva Vida",
        description:
          "Aceptas la oferta, nosotros procesamos tu visa y documentos, y te acompa\u00f1amos en todo el proceso de reubicaci\u00f3n.",
      },
    ],
    footer: "Sin costo para el candidato \u2014 el empleador cubre todos los gastos",
  },
};

export default function HowItWorks() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="como-funciona" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-[family-name:var(--font-instrument-serif)] italic tracking-tight">
          {t.heading}
        </h2>

        <p className="mt-4 text-center text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.steps.map((step, i) => {
            const isHighlighted = i === 1;
            return (
              <div
                key={i}
                className={`rounded-2xl p-8 flex flex-col ${
                  isHighlighted
                    ? "border-2 border-[#22c55e] bg-green-50/50"
                    : "border border-gray-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    {step.label}
                  </span>
                  {step.badge && (
                    <span className="inline-block rounded-full bg-[#22c55e] px-3 py-1 text-xs font-semibold text-white">
                      &#9733; {step.badge}
                    </span>
                  )}
                </div>
                <span
                  className={`mt-4 text-6xl font-bold leading-none ${
                    isHighlighted ? "text-green-200" : "text-gray-200"
                  }`}
                >
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <p
                  className={`mt-3 leading-relaxed ${
                    isHighlighted ? "text-gray-600" : "text-gray-500"
                  }`}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-gray-500 flex items-center justify-center gap-2">
          <svg
            className="h-5 w-5 text-[#22c55e]"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          {t.footer}
        </p>
      </div>
    </section>
  );
}
