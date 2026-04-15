export default function Testimonial() {
  return (
    <section className="bg-gray-light py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        {/* Quote */}
        <blockquote>
          <p className="font-[family-name:var(--font-instrument-serif)] italic text-2xl sm:text-3xl md:text-4xl leading-snug text-foreground">
            &ldquo;Lo que m&aacute;s me gust&oacute; fue que el proceso fue
            completamente transparente y en menos de seis semanas ya
            ten&iacute;a mi visa y estaba listo para trabajar como senior
            developer en Austin. Mi sueldo se triplic&oacute;.&rdquo;
          </p>
        </blockquote>

        {/* Author */}
        <div className="mt-10 flex flex-col items-center gap-4">
          {/* Avatar */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-accent text-white text-lg font-semibold select-none">
            CR
          </div>

          <div>
            <p className="text-lg font-semibold text-foreground">
              Carlos Rodr&iacute;guez
            </p>
            <p className="text-sm text-gray-medium">
              Senior Full-Stack Developer &middot; Austin, TX
            </p>
            <p className="mt-1 text-xs text-gray-medium">
              Antes: CDMX &middot; Ahora: Austin, TX
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
