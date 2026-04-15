export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-3xl px-6 text-center">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight">
          <span className="font-[family-name:var(--font-instrument-serif)] italic">
            Trabajos Tech en EE.UU.
          </span>
          <br />
          <span className="font-sans font-bold not-italic">
            Que Se Adaptan a{" "}
            <span className="underline decoration-[#22c55e] decoration-4 underline-offset-6">
              Ti
            </span>
          </span>
        </h1>

        {/* Briefcase emoji */}
        <div
          className="mt-8 text-[80px] leading-none drop-shadow-lg select-none"
          aria-hidden="true"
        >
          💼
        </div>

        {/* Subtitle */}
        <p className="mt-8 text-lg md:text-xl text-gray-medium max-w-2xl mx-auto leading-relaxed">
          Encuentra oportunidades tech en Estados Unidos con salarios
          competitivos. Nosotros nos encargamos de tu visa y documentaci&oacute;n.
          Todo legal, todo transparente.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="#empleos"
            className="inline-block bg-[#22c55e] text-white rounded-full px-8 py-3.5 text-lg font-medium transition-transform duration-200 hover:scale-105 hover:shadow-lg"
          >
            Ver Empleos Disponibles
          </a>
        </div>

        {/* Trust line */}
        <p className="mt-6 text-sm text-gray-500 tracking-wide">
          ✓ 100% Legal &middot; ✓ Visa TN/H-1B &middot; ✓ Sin costo para ti
        </p>
      </div>

      {/* Bottom gradient overlay */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(240, 253, 244, 0.4))",
        }}
      />
    </section>
  );
}
