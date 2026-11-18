
import { useEffect, useState } from 'react';

interface HeroProps {
  startTyping: boolean;
}

export function Hero({ startTyping }: HeroProps) {
  const phrase = 'Creamos negocios que venden más.';
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    if (!startTyping) return;

    let index = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const type = () => {
      index++;
      setTypedText(phrase.slice(0, index));

      if (index < phrase.length) {
        timeout = setTimeout(type, 75);
      }
    };

    timeout = setTimeout(type, 75);

    return () => clearTimeout(timeout);
  }, [startTyping]);

  return (
    <section id="inicio" className="relative pt-12 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Column */}
        <div className="lg:col-span-6 flex flex-col gap-6 hero-reveal">

          <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-[#4A4D4D]">
            Desarrollo y Marketing Digital
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-[#141414]">
            En Código Fuente <br />
            no vendemos páginas web.{' '}

            <span className="bg-[#2BE88E] text-[#141414] px-2 py-0.5 rounded-[4px] inline">
              {typedText}
              <span className="typing-cursor">|</span>
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#4A4D4D] max-w-xl font-normal leading-relaxed">
            Desarrollo, diseño y estrategias digitales para llevar tu marca
            al siguiente nivel con soluciones modernas, rápidas y enfocadas
            en resultados.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#servicios"
              className="bg-[#141414] text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#2BE88E] hover:text-[#141414] transition-all duration-300 shadow-md"
            >
              Nuestros servicios →
            </a>

            <a
              href="#portafolio"
              className="border border-[#141414]/30 text-[#141414] px-7 py-3.5 rounded-full font-semibold text-sm hover:border-[#141414] transition-all duration-300"
            >
              Ver portafolio →
            </a>
          </div>
        </div>

        {/* Right Column: Mockup devices */}
        <div className="lg:col-span-6 relative flex justify-center hero-reveal hero-reveal-delay">
          <div className="relative w-full max-w-xl">

            {/* Decorative Orbits */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

              {/* Outer Orbit */}
              <div className="absolute w-[115%] aspect-square rounded-full border border-[#2BE88E]/20 animate-[spin_35s_linear_infinite]" />

              {/* Dashed Orbit */}
              <div className="absolute w-[95%] aspect-square rounded-full border-2 border-dashed border-[#2BE88E]/30 animate-[spin_45s_linear_infinite_reverse]" />

              {/* Inner Orbit */}
              <div className="absolute w-[75%] aspect-square rounded-full border border-[#2BE88E]/15" />

              {/* Orbital Dots */}
              <span className="absolute top-[8%] right-[20%] w-3 h-3 rounded-full bg-[#2BE88E] shadow-[0_0_18px_#2BE88E] animate-pulse" />

              <span className="absolute bottom-[12%] left-[15%] w-2 h-2 rounded-full bg-[#2BE88E] shadow-[0_0_15px_#2BE88E] animate-pulse" />

              {/* Decorative Stars */}
              <span className="absolute top-[18%] left-[12%] text-[#2BE88E] text-3xl font-light animate-pulse">
                ✳
              </span>

              <span className="absolute bottom-[20%] right-[8%] text-[#2BE88E] text-2xl font-light animate-[spin_12s_linear_infinite]">
                ✳
              </span>
            </div>

            {/* Laptop Mockup */}

<div className="bg-[#f8f6f0] rounded-xl overflow-hidden aspect-[16/10] flex flex-col text-[#24251f]">

  {/* Browser */}
  <div className="h-7 bg-[#eae8e1] flex items-center px-3 gap-1.5 shrink-0">
    <span className="w-2 h-2 rounded-full bg-red-400" />
    <span className="w-2 h-2 rounded-full bg-yellow-400" />
    <span className="w-2 h-2 rounded-full bg-green-400" />
    <div className="mx-auto bg-white rounded-md px-12 py-1 text-[6px] text-gray-400">
      www.casaoliva.com
    </div>
  </div>

  {/* Navigation */}
  <nav className="h-11 px-7 flex items-center justify-between shrink-0">
    <span className="font-serif text-lg font-bold tracking-widest">
      CASA OLIVA
    </span>

    <div className="flex gap-5 text-[7px] tracking-widest font-semibold">
      <span>INICIO</span>
      <span>MENÚ</span>
      <span>NOSOTROS</span>
      <span>CONTACTO</span>
    </div>

    <span className="bg-[#303b2c] text-white px-4 py-2 text-[7px] tracking-widest">
      RESERVAR
    </span>
  </nav>

  {/* Main hero */}
  <div className="flex-1 min-h-0 relative overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85"
      alt="Experiencia gastronómica en restaurante"
      className="absolute inset-0 w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

    <div className="absolute inset-0 flex flex-col justify-center px-9 text-white">
      <span className="text-[7px] tracking-[0.35em] mb-3 text-[#d6c7a1]">
        COCINA DE TEMPORADA
      </span>

      <h2 className="font-serif text-[clamp(22px,3vw,39px)] leading-[1.05] max-w-[55%]">
        El placer de
        <br />
        compartir.
      </h2>

      <p className="text-[8px] text-white/80 max-w-[190px] mt-3 leading-relaxed">
        Ingredientes excepcionales, sabores auténticos y momentos inolvidables.
      </p>

      <span className="mt-5 bg-[#d0b98a] text-[#24251f] px-4 py-2 text-[7px] font-bold w-fit tracking-widest">
        EXPLORAR MENÚ →
      </span>
    </div>
  </div>

  {/* Bottom strip */}
  <div className="h-9 flex items-center justify-between px-7 shrink-0">
    <span className="text-[7px] tracking-widest">
      UNA EXPERIENCIA PARA LOS SENTIDOS
    </span>
    <span className="text-[7px] text-[#777]">
      LUN — DOM · 13:00 — 23:00
    </span>
  </div>

</div>


            {/* Floating Mobile Mockup */}
            <div className="device-float absolute -bottom-6 -right-4 w-36 sm:w-44 bg-[#141414] p-2.5 rounded-2xl shadow-2xl border border-white/10 z-20">

<div className="bg-[#f8f6f0] rounded-xl overflow-hidden aspect-[9/16] flex flex-col text-[#24251f]">

  {/* Browser */}
  <div className="h-4 bg-[#eae8e1] flex items-center justify-center shrink-0">
    <span className="text-[5px] text-gray-500">
      casaoliva.com
    </span>
  </div>

  {/* Navigation */}
  <nav className="h-7 px-2 flex items-center justify-between shrink-0">
    <span className="font-serif text-[8px] font-bold tracking-widest">
      CASA OLIVA
    </span>
    <span className="text-[10px] leading-none">☰</span>
  </nav>

  {/* Hero text */}
  <div className="px-2 pt-2 pb-2 shrink-0">
    <span className="text-[5px] tracking-[0.15em] text-[#78816c]">
      COCINA DE TEMPORADA
    </span>

    <h2 className="font-serif text-[15px] leading-[1.08] mt-1.5">
      El placer de
      <br />
      compartir.
    </h2>

    <p className="text-[6px] text-gray-500 leading-relaxed mt-1.5">
      Sabores auténticos y momentos inolvidables.
    </p>

    <span className="inline-block bg-[#303b2c] text-white px-2 py-1 text-[5px] tracking-widest mt-2">
      VER MENÚ →
    </span>
  </div>

  {/* Food photography */}
  <div className="flex-1 min-h-0 px-2 pb-2">
    <img
      src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=85"
      alt="Restaurante Casa Oliva"
      className="w-full h-full object-cover rounded-sm"
    />
  </div>

  {/* Footer */}
  <div className="h-5 border-t border-[#dedbd1] flex items-center justify-center shrink-0">
    <span className="text-[5px] tracking-widest">
      RESERVACIONES · CASA OLIVA
    </span>
  </div>

</div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
