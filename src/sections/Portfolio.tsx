import { PROJECTS } from '../data/siteData';
import { CornerBrackets } from '../components/ui/CornerBrackets';

export function Portfolio() {
  return (
    <section id="portafolio" className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Big Mockup & Globe */}
        <div className="lg:col-span-7">
          <div className="relative bg-[#141414] p-4 rounded-2xl shadow-xl border border-white/10 overflow-hidden group">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2BE88E_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10 bg-[#0a0a0a] rounded-xl aspect-[16/10] flex items-center justify-center p-8 text-center">
              <div className="flex flex-col items-center">
                <span className="text-[#2BE88E] text-3xl font-black tracking-wider mb-2">CÓDIGO FUENTE</span>
                <p className="text-white/60 text-xs">Infraestructura web escalable y moderna</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Portfolio Projects */}
        <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#2BE88E] bg-[#141414] px-3 py-1 rounded">
              Portafolio
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141414] tracking-tight">
              Proyectos que hablan por sí mismos.
            </h2>

            <p className="text-[#4A4D4D] text-sm sm:text-base">
              Diseño, desarrollo y estrategias digitales para marcas que buscan crecer.
            </p>

          {/* Project Mini Cards */}
          <div className="flex flex-col gap-4 mt-2">
            {PROJECTS.map((project) => (
                <div className="relative bg-[#C8CACA]/60 p-4 rounded-xl border border-[#141414]/15 flex items-center justify-between hover:border-[#2BE88E] transition-all cursor-pointer group">
                  <CornerBrackets size={8} />
                  <div className="flex items-center gap-4">
                    <img src={project.image} alt={project.title} className="w-14 h-14 rounded-lg object-cover" />
                    <div>
                      <h4 className="font-bold text-[#141414] text-sm sm:text-base">{project.title}</h4>
                      <span className="text-xs text-[#4A4D4D]">{project.category}</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#2BE88E] text-[#141414] flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                    →
                  </div>
                </div>
            ))}
          </div>

          <div className="mt-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center bg-[#141414] text-white w-full py-4 rounded-full font-semibold text-sm hover:bg-[#2BE88E] hover:text-[#141414] transition-all duration-300"
            >
              Ver todos los proyectos →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}