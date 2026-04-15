export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-[family-name:var(--font-gloock)] italic tracking-tight">
          &iquest;C&oacute;mo Funciona?
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-center text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Tres pasos simples para empezar tu carrera tech en Estados Unidos
        </p>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-2xl border border-gray-200 p-8 flex flex-col">
            <span className="inline-block self-start rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              Paso 1
            </span>
            <span className="mt-4 text-6xl font-bold text-gray-200 leading-none">
              01
            </span>
            <h3 className="mt-4 text-xl font-bold text-gray-900">
              Crea Tu Perfil
            </h3>
            <p className="mt-3 text-gray-500 leading-relaxed">
              Reg&iacute;strate, sube tu CV y completa un breve cuestionario
              sobre tu experiencia, habilidades y nivel de ingl&eacute;s.
            </p>
          </div>

          {/* Card 2 — Highlighted */}
          <div className="rounded-2xl border-2 border-[#22c55e] bg-green-50/50 p-8 flex flex-col relative">
            <div className="flex items-center gap-2">
              <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                Paso 2
              </span>
              <span className="inline-block rounded-full bg-[#22c55e] px-3 py-1 text-xs font-semibold text-white">
                &#9733; Recomendado
              </span>
            </div>
            <span className="mt-4 text-6xl font-bold text-green-200 leading-none">
              02
            </span>
            <h3 className="mt-4 text-xl font-bold text-gray-900">
              Recibe Ofertas Personalizadas
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Nuestro equipo revisa tu perfil, eval&uacute;a tu elegibilidad de
              visa y te conecta con las mejores oportunidades que se adaptan a
              ti.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-gray-200 p-8 flex flex-col">
            <span className="inline-block self-start rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              Paso 3
            </span>
            <span className="mt-4 text-6xl font-bold text-gray-200 leading-none">
              03
            </span>
            <h3 className="mt-4 text-xl font-bold text-gray-900">
              Empieza Tu Nueva Vida
            </h3>
            <p className="mt-3 text-gray-500 leading-relaxed">
              Aceptas la oferta, nosotros procesamos tu visa y documentos, y te
              acompa&ntilde;amos en todo el proceso de reubicaci&oacute;n.
            </p>
          </div>
        </div>

        {/* Footer note */}
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
          Sin costo para el candidato &mdash; el empleador cubre todos los
          gastos
        </p>
      </div>
    </section>
  );
}
