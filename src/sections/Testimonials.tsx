import { useState } from 'react';
import { TESTIMONIALS } from '../data/siteData';

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const active = TESTIMONIALS[current];

  return (
    <section className="py-24 bg-[#C8CACA]/50 border-t border-b border-[#141414]/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#4A4D4D] block">
              Testimonios
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141414] tracking-tight leading-tight">
              Clientes que ya confían en Código Fuente.
            </h2>

            <p className="text-[#4A4D4D] text-base">
              Historias reales de negocios que han crecido con nosotros.
            </p>

            <div>
              <a
                href="#contacto"
                className="inline-flex items-center bg-[#141414] text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#2BE88E] hover:text-[#141414] transition-all"
              >
                Ver más testimonios →
              </a>
            </div>
        </div>

        {/* Testimonial Card Slider */}
        <div className="lg:col-span-7">
          <div className="bg-[#D8DADA] p-8 sm:p-10 rounded-2xl border border-[#141414]/20 shadow-xl relative flex flex-col justify-between min-h-[280px]">
            <span className="text-5xl font-serif text-[#2BE88E] leading-none mb-2">“</span>
            <p className="text-lg sm:text-xl font-medium text-[#141414] mb-8 leading-snug">
              {active.quote}
            </p>

            <div className="flex items-center justify-between border-t border-[#141414]/10 pt-6">
              <div className="flex items-center gap-4">
                <img src={active.avatar} alt={active.author} className="w-12 h-12 rounded-full object-cover border border-[#2BE88E]" />
                <div>
                  <h4 className="font-bold text-[#141414] text-sm">{active.author}</h4>
                  <span className="text-xs text-[#4A4D4D]">{active.company}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-[#141414]/20 flex items-center justify-center hover:bg-[#141414] hover:text-white transition-colors"
                  aria-label="Anterior"
                >
                  ←
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-[#141414]/20 flex items-center justify-center hover:bg-[#141414] hover:text-white transition-colors"
                  aria-label="Siguiente"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export interface TestimonialItem {
  quote: string;
  author: string;
  company: string;
  avatar: string;
}

// export const TESTIMONIALS: TestimonialItem[] = [
//   {
//     quote: "Aquí irá la opinión real de tu cliente sobre su experiencia.",
//     author: "Cliente de demostración",
//     company: "Carnicería Matamoros",
//     avatar: "https://i.pravatar.cc/150?img=12",
//   },
//   {
//     quote: "Aquí irá otro comentario real sobre el proyecto y sus resultados.",
//     author: "Cliente de demostración",
//     company: "Pizzería Imperium",
//     avatar: "https://i.pravatar.cc/150?img=47",
//   },
//   {
//     quote: "Aquí irá una experiencia real de trabajo con Código Fuente.",
//     author: "Cliente de demostración",
//     company: "Proyecto de diseño web",
//     avatar: "https://i.pravatar.cc/150?img=33",
//   },
// ];