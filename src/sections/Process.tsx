import { PROCESS_STEPS } from '../data/siteData';

export function Process() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#4A4D4D] block mb-2">
                Cómo trabajamos
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141414] tracking-tight">
                Un proceso claro<br />para grandes resultados.
              </h2>
            </div>
            <div>
              <p className="text-[#4A4D4D] max-w-sm text-sm sm:text-base mb-4">
                Trabajamos contigo de forma simple y transparente, desde la idea hasta el lanzamiento.
              </p>
              <a href="#contacto" className="inline-flex items-center gap-2 border border-[#141414]/30 text-[#141414] px-6 py-3 rounded-full font-semibold text-sm hover:border-[#141414] transition-all">
                Ver el proceso →
              </a>
            </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{PROCESS_STEPS.map((step) => (
  <div
    key={step.number}
    className="bg-[#C8CACA]/50 p-6 rounded-xl border border-[#141414]/15 flex flex-col justify-between h-48 relative group hover:border-[#2BE88E] transition-all"
  >
                <span className="text-xs font-black text-[#2BE88E] bg-[#141414] px-2.5 py-1 rounded w-max">
                  {step.number}
                </span>
                <h3 className="text-base font-bold text-[#141414] mt-4">{step.title}</h3>
                <div className="text-right text-[#2BE88E] font-bold">→</div>
              </div>
          ))}
        </div>

      </div>
    </section>
  );
}