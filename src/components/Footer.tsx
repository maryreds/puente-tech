"use client";

export default function Footer() {
  return (
    <footer>
      {/* ── Big CTA Section ── */}
      <section className="bg-gradient-to-b from-green-gradient-start to-green-gradient-end py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-[family-name:var(--font-gloock)] italic text-3xl sm:text-4xl md:text-5xl leading-tight text-foreground">
            Impulsa Tu Carrera Tech en Estados Unidos
          </h2>

          <p className="mt-6 text-lg text-gray-medium max-w-xl mx-auto leading-relaxed">
            Miles de oportunidades te esperan. Reg&iacute;strate hoy y da el
            primer paso.
          </p>

          <div className="mt-10">
            <a
              href="#registro"
              className="inline-block bg-[#22c55e] text-white rounded-full px-8 py-3.5 text-lg font-medium transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            >
              Crear Mi Perfil Gratis
            </a>
          </div>

          {/* Email capture */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 mx-auto flex max-w-md items-center gap-2 rounded-full border border-gray-border bg-white px-2 py-1.5 shadow-sm"
          >
            <input
              type="email"
              placeholder="Tu correo electr&oacute;nico"
              className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-gray-medium"
            />
            <button
              type="submit"
              className="rounded-full bg-[#22c55e] px-6 py-2 text-sm font-medium text-white transition-transform duration-200 hover:scale-105"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>

      {/* ── Bottom Footer ── */}
      <section className="bg-gray-light border-t border-gray-border">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Col 1 — Brand */}
            <div>
              <img src="/jsm-logo.svg" alt="JSM Consulting" className="h-10 w-auto" />
              <p className="mt-3 text-sm leading-relaxed text-gray-medium">
                Conectando talento tech mexicano con oportunidades en Estados
                Unidos.
              </p>
            </div>

            {/* Col 2 — Plataforma */}
            <div>
              <p className="font-semibold text-foreground">Plataforma</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-medium">
                <li>
                  <a href="#empleos" className="hover:text-foreground transition-colors">
                    Empleos
                  </a>
                </li>
                <li>
                  <a href="#como-funciona" className="hover:text-foreground transition-colors">
                    C&oacute;mo Funciona
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-foreground transition-colors">
                    Preguntas Frecuentes
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3 — Legal */}
            <div>
              <p className="font-semibold text-foreground">Legal</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-medium">
                <li>
                  <a href="#terminos" className="hover:text-foreground transition-colors">
                    T&eacute;rminos y Condiciones
                  </a>
                </li>
                <li>
                  <a href="#privacidad" className="hover:text-foreground transition-colors">
                    Pol&iacute;tica de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#aviso-legal" className="hover:text-foreground transition-colors">
                    Aviso Legal
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4 — Contacto */}
            <div>
              <p className="font-semibold text-foreground">Contacto</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-medium">
                <li>
                  <a
                    href="mailto:info@puentetech.com"
                    className="hover:text-foreground transition-colors"
                  >
                    info@puentetech.com
                  </a>
                </li>
                <li>CDMX &middot; Monterrey &middot; Austin</li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-border pt-8 sm:flex-row">
            <p className="text-xs text-gray-medium">
              &copy; 2026 JSM Consulting. Todos los derechos reservados.
            </p>

            {/* Social links placeholder */}
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-medium hover:text-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-medium hover:text-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="text-gray-medium hover:text-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
