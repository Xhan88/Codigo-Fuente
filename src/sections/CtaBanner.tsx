
export function CtaBanner() {
  return (
    <section id="contacto" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#141414] text-white p-10 sm:p-16 rounded-3xl relative overflow-hidden shadow-2xl border border-[#2BE88E]/30 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#2BE88E_1px,transparent_1px)] [background-size:20px_20px]" />

          <div className="relative z-10 max-w-xl text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
                ¿Listo para llevar <br />
                <span className="text-[#2BE88E]">tu negocio al siguiente nivel?</span>
              </h2>
              <p className="text-white/70 text-sm sm:text-base">
                Contáctanos y recibe una propuesta personalizada sin compromiso.
              </p>
          </div>

          <div className="relative z-10">
              <a
                href="mailto:contacto@codigomartinez.com"
                className="inline-flex items-center gap-2 bg-[#2BE88E] text-[#141414] px-8 py-4 rounded-full font-extrabold text-base hover:bg-white transition-all shadow-lg hover:scale-105 duration-300"
              >
                Enviar mensaje →
              </a>
          </div>

        </div>
      </div>
    </section>
  );
}