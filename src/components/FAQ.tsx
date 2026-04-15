"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Qué es TalentOS y cómo funciona?",
    answer:
      "TalentOS conecta talento tecnológico mexicano con oportunidades en Estados Unidos en un momento único.\n\nLa explosión de la inteligencia artificial ha disparado la demanda de talento tech a nivel global, y Estados Unidos no tiene suficiente oferta local para cubrirla. México se ha convertido en uno de los mercados más confiables y cercanos para encontrar ese talento.\n\nAhí es donde entramos nosotros.\n\nTe acompañamos de principio a fin: identificamos las mejores oportunidades para tu perfil y gestionamos todo el proceso, incluyendo visa y documentación.\n\nTú te enfocas en crecer. Nosotros en abrirte la puerta.",
  },
  {
    question: "¿Realmente no tiene costo para mí?",
    answer:
      "Sí, es completamente gratis para ti.\n\nLas empresas en Estados Unidos cubren todos los costos: reclutamiento, visa y reubicación.\n\nTu única inversión es prepararte para dar el siguiente paso en tu carrera.",
  },
  {
    question: "¿Qué tipo de visa necesito?",
    answer:
      "Depende de tu perfil.\n\nLa visa TN (bajo el tratado USMCA/T-MEC) suele ser la opción más rápida para profesionales tech, con tiempos de 2 a 4 semanas.\n\nEn algunos casos, también trabajamos con visas H-1B.",
  },
  {
    question: "¿Necesito hablar inglés perfectamente?",
    answer:
      "No necesitas tener un inglés perfecto.\n\nUn nivel intermedio-avanzado es suficiente para la mayoría de los roles. Evaluamos tu nivel y te conectamos con oportunidades donde puedas destacar.",
  },
  {
    question: "¿Puedo aplicar si vivo fuera de Ciudad de México?",
    answer:
      "Sí.\n\nTrabajamos con talento en toda la República Mexicana.\n\nAdemás, muchas posiciones ofrecen modalidades remotas o híbridas.",
  },
  {
    question: "¿Cuánto tiempo tarda todo el proceso?",
    answer:
      "En promedio, entre 4 y 8 semanas desde que aplicas hasta que comienzas a trabajar (con visa TN).\n\nLos tiempos pueden variar según la disponibilidad en consulados en México y el tipo de visa.\n\nPara H-1B, el proceso depende del ciclo anual de aplicación.",
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
          <p className="pt-3 text-gray-medium leading-relaxed whitespace-pre-line">{answer}</p>
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
