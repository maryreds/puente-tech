"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Qué es Puente Tech y cómo funciona?",
    answer:
      "Somos una plataforma que conecta desarrolladores y profesionales tech mexicanos con empleos en Estados Unidos. Nos encargamos de todo: desde encontrar el trabajo ideal hasta procesar tu visa y documentación.",
  },
  {
    question: "¿Realmente no tiene costo para mí?",
    answer:
      "Correcto. El empleador en Estados Unidos cubre todos los costos de reclutamiento, visa y reubicación. Tú no pagas nada.",
  },
  {
    question: "¿Qué tipo de visa necesito?",
    answer:
      "Depende de tu perfil. La visa TN (bajo el tratado USMCA/T-MEC) es la más rápida para profesionales mexicanos en tecnología — puede procesarse en 2-4 semanas. También manejamos visas H-1B para casos específicos.",
  },
  {
    question: "¿Necesito hablar inglés perfectamente?",
    answer:
      "Un nivel intermedio-avanzado es suficiente para la mayoría de los puestos. Evaluamos tu nivel durante el proceso y te conectamos con oportunidades que se ajusten a tu perfil.",
  },
  {
    question: "¿Puedo aplicar si vivo fuera de Ciudad de México?",
    answer:
      "¡Por supuesto! Aceptamos candidatos de toda la República Mexicana. Muchas posiciones también ofrecen opciones de trabajo remoto o híbrido.",
  },
  {
    question: "¿Cuánto tiempo tarda todo el proceso?",
    answer:
      "Desde que aplicas hasta que empiezas a trabajar, el proceso típico toma de 4 a 8 semanas con visa TN. Con H-1B puede tomar más tiempo dependiendo del ciclo de aplicación.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className="w-full rounded-xl border border-gray-200 p-5 text-left transition-colors hover:border-gray-300"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-medium text-foreground">{question}</span>
        <span
          className="flex h-6 w-6 shrink-0 items-center justify-center text-xl leading-none text-gray-medium transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </div>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="overflow-hidden">
          <p className="pt-3 text-gray-medium leading-relaxed">{answer}</p>
        </div>
      </div>
    </button>
  );
}

export default function FAQ() {
  return (
    <section id="preguntas" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-[family-name:var(--font-instrument-serif)] text-3xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16">
          ¿Tienes Preguntas? Tenemos Respuestas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
