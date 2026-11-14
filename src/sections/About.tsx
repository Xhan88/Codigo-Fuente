
export function About() {
  return (
    <section id="nosotros" className="py-20 bg-[#C8CACA]/50 border-t border-b border-[#141414]/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#4A4D4D] block">
              Sobre nosotros
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141414] tracking-tight leading-tight">
              Más que tecnología, somos <span className="text-[#2BE88E] bg-[#141414] px-2.5 py-0.5 rounded">tu aliado digital.</span>
            </h2>

            <p className="text-[#4A4D4D] text-base leading-relaxed">
              En Código Fuente combinamos experiencia, creatividad y pasión por la tecnología para ayudarte a crecer en línea.
            </p>

            <div>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 border border-[#141414]/30 text-[#141414] px-7 py-3.5 rounded-full font-semibold text-sm hover:border-[#141414] transition-all"
              >
                Conoce más sobre nosotros →
              </a>
            </div>
        </div>

        <div className="lg:col-span-6">
          <div className="bg-[#141414] p-3 rounded-2xl shadow-xl border border-white/10 relative">
            <div className="bg-[#0a0a0a] rounded-xl overflow-hidden aspect-[16/10] flex items-center justify-center p-6 text-center">
              <span className="text-white font-bold text-lg tracking-wider">CÓDIGO FUENTE</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}