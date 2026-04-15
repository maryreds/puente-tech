const features = [
  {
    emoji: "🎯",
    title: "Empleos Que Se Adaptan a Ti",
    description:
      "Algoritmos inteligentes que encuentran las mejores oportunidades tech en EE.UU. bas\u00e1ndose en tu experiencia y habilidades.",
  },
  {
    emoji: "📄",
    title: "Visa y Documentos Resueltos",
    description:
      "Nos encargamos de todo el proceso migratorio: visa TN, H-1B, documentaci\u00f3n y tr\u00e1mites. T\u00fa solo enf\u00f3cate en tu carrera.",
  },
  {
    emoji: "💰",
    title: "Salarios Transparentes",
    description:
      "Ve el sueldo neto estimado en USD y MXN antes de aplicar. Sin sorpresas, sin informaci\u00f3n oculta.",
  },
  {
    emoji: "🏠",
    title: "Apoyo en Reubicaci\u00f3n",
    description:
      "Te ayudamos con la transici\u00f3n: desde encontrar vivienda hasta abrir cuenta bancaria en Estados Unidos.",
  },
];

export default function Features() {
  return (
    <section id="empleos" className="py-20 md:py-28 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Section heading */}
        <div className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-instrument-serif)] italic text-3xl sm:text-4xl md:text-5xl tracking-tight">
            Herramientas Que Trabajan Por Ti
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Todo lo que necesitas para encontrar trabajo tech en Estados Unidos,
            en un solo lugar.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature) => (
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
            &iquest;Conoces a alguien que quiera trabajar en EE.UU.?
          </h3>
          <p className="mt-2 text-gray-600 text-lg leading-relaxed">
            Refiere a un amigo y ambos reciben beneficios exclusivos.
          </p>
          <a
            href="#"
            className="mt-5 inline-block bg-green-accent text-white rounded-full px-7 py-3 font-medium transition-transform duration-200 hover:scale-105 hover:shadow-lg"
          >
            Invitar Amigo
          </a>
        </div>
      </div>
    </section>
  );
}
