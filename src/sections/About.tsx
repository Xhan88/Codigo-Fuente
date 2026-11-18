
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Scene = 'code' | 'deploy' | 'website';

type WebsiteVisual =
  | {
      id: string;
      kind: 'photo';
      src: string;
      alt: string;
    }
  | {
      id: string;
      kind: 'illustration';
      accent: string;
      secondary: string;
    };

const websiteVisuals: WebsiteVisual[] = [
  {
    id: 'architecture',
    kind: 'photo',
    src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=85',
    alt: 'Interiorismo moderno',
  },
  {
    id: 'restaurant',
    kind: 'photo',
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=85',
    alt: 'Experiencia gastronómica',
  },
  {
    id: 'product',
    kind: 'photo',
    src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=85',
    alt: 'Fotografía de producto',
  },
  {
    id: 'creative',
    kind: 'illustration',
    accent: '#2BE88E',
    secondary: '#A78BFA',
  },
  {
    id: 'technology',
    kind: 'illustration',
    accent: '#60A5FA',
    secondary: '#2BE88E',
  },
  {
    id: 'digital',
    kind: 'illustration',
    accent: '#FBBF24',
    secondary: '#F472B6',
  },
];


const codeLines = [
  { code: 'import React from "react";', color: 'text-purple-400' },
  { code: 'import { motion } from "framer-motion";', color: 'text-purple-400' },
  { code: '', color: 'text-white' },
  { code: 'export function DigitalExperience() {', color: 'text-blue-400' },
  { code: '  const brand = "Código Fuente";', color: 'text-emerald-300' },
  { code: '  const vision = "Transformar ideas";', color: 'text-emerald-300' },
  { code: '', color: 'text-white' },
  { code: '  return (', color: 'text-purple-400' },
  { code: '    <motion.main', color: 'text-white' },
  { code: '      initial={{ opacity: 0 }}', color: 'text-amber-300' },
  { code: '      animate={{ opacity: 1 }}', color: 'text-amber-300' },
  { code: '    >', color: 'text-white' },
  { code: '      <h1>Tu próximo proyecto.</h1>', color: 'text-emerald-300' },
  { code: '    </motion.main>', color: 'text-white' },
  { code: '  );', color: 'text-purple-400' },
  { code: '}', color: 'text-blue-400' },
];

export function About() {
  const [scene, setScene] = useState<Scene>('code');
  
  const [visualIndex, setVisualIndex] = useState(0);

const currentVisual = websiteVisuals[visualIndex];

  useEffect(() => {
    const duration =
      scene === 'code' ? 6500 :
      scene === 'deploy' ? 2200 :
      6500;

    const timer = setTimeout(() => {
      setScene(
        scene === 'code' ? 'deploy' :
        scene === 'deploy' ? 'website' :
        'code'
      );
    }, duration);

    return () => clearTimeout(timer);
  }, [scene]);

  useEffect(() => {
  if (scene !== 'website') return;

  const nextIndex = Math.floor(
    Math.random() * websiteVisuals.length
  );

  setVisualIndex((current) =>
    nextIndex === current
      ? (nextIndex + 1) % websiteVisuals.length
      : nextIndex
  );
}, [scene]);

  return (
    <section id="nosotros" className="py-20 bg-[#C8CACA]/50 border-t border-b border-[#141414]/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Column */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#4A4D4D] block">
            Sobre nosotros
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141414] tracking-tight leading-tight">
            Más que tecnología, somos{' '}
            <span className="text-[#2BE88E] bg-[#141414] px-2.5 py-0.5 rounded">
              tu aliado digital.
            </span>
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

        {/* Right Column: Code to Website */}
        <div className="lg:col-span-6">
          <div className="bg-[#141414] p-3 rounded-2xl shadow-xl border border-white/10 relative overflow-hidden">

            <div className="relative bg-[#0a0a0a] rounded-xl overflow-hidden aspect-[16/10]">

              {/* Background details */}
              <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#2BE88E 1px, transparent 1px)',
                  backgroundSize: '18px 18px',
                }}
              />

              <AnimatePresence mode="wait">

                {/* SCENE 1: CODE EDITOR */}
                {scene === 'code' && (
                  <motion.div
                    key="code"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0 flex flex-col"
                  >
                    {/* Editor header */}
                    <div className="h-11 border-b border-white/10 flex items-center justify-between px-4 bg-[#141414]">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#2BE88E]" />
                      </div>

                      <span className="text-[9px] text-white/40 font-mono tracking-widest">
                        CÓDIGO FUENTE
                      </span>

                      <span className="text-[9px] text-white/30 font-mono">
                        TSX
                      </span>
                    </div>

                    {/* Editor content */}
                    <div className="flex-1 p-4 sm:p-6 overflow-hidden">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-[#2BE88E] text-[10px]">●</span>
                        <span className="text-white/50 text-[10px] font-mono">
                          DigitalExperience.tsx
                        </span>
                      </div>

                      <div className="font-mono text-[9px] sm:text-xs leading-[1.9]">
                        {codeLines.map((line, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: index * 0.32,
                              duration: 0.35,
                            }}
                            className="flex gap-4 whitespace-pre"
                          >
                            <span className="text-white/20 w-3 text-right select-none">
                              {index + 1}
                            </span>

                            <span className={line.color}>
                              {line.code}
                              {index === 15 && (
                                <motion.span
                                  animate={{ opacity: [1, 0] }}
                                  transition={{
                                    duration: 0.7,
                                    repeat: Infinity,
                                  }}
                                  className="inline-block w-1.5 h-3 bg-[#2BE88E] ml-1 align-middle"
                                />
                              )}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Editor footer */}
                    <div className="h-7 bg-[#2BE88E]/10 border-t border-[#2BE88E]/10 flex items-center justify-between px-4">
                      <span className="text-[9px] text-[#2BE88E] font-mono">
                        ● DEVELOPING EXPERIENCE
                      </span>
                      <span className="text-[9px] text-white/30 font-mono">
                        React · TypeScript
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* SCENE 2: DEPLOY */}
                {scene === 'deploy' && (
                  <motion.div
                    key="deploy"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex flex-col items-center justify-center p-8"
                  >
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 rounded-2xl bg-[#2BE88E]/10 border border-[#2BE88E]/30 flex items-center justify-center mb-5"
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#2BE88E]">
                        <path d="M12 16V4m0 0L7 9m5-5 5 5M5 16v3h14v-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>

                    <p className="text-white font-bold text-sm sm:text-base tracking-widest">
                      DEPLOYING PROJECT
                    </p>

                    <p className="text-white/40 text-[10px] font-mono mt-2">
                      Building your digital experience...
                    </p>

                    <div className="w-3/4 max-w-[240px] h-1 bg-white/10 rounded-full overflow-hidden mt-6">
                      <motion.div
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1.8, ease: 'easeInOut' }}
                        className="h-full bg-[#2BE88E] rounded-full"
                      />
                    </div>

                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                      className="text-[#2BE88E] text-[10px] font-mono mt-4"
                    >
                      ✓ BUILD SUCCESSFUL
                    </motion.span>
                  </motion.div>
                )}

                {/* SCENE 3: FINISHED WEBSITE */}
                {scene === 'website' && (
                  <motion.div
                    key="website"
                    initial={{ opacity: 0, scale: 0.94, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.03 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-[#101814] flex flex-col"
                  >
                    {/* Browser header */}
                    <div className="h-9 bg-[#1c2420] border-b border-white/10 flex items-center gap-2 px-3 shrink-0">
                      <div className="flex gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-400/70" />
                        <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
                        <span className="w-2 h-2 rounded-full bg-[#2BE88E]/70" />
                      </div>

                      <div className="flex-1 max-w-[180px] mx-auto bg-black/30 rounded px-3 py-1 text-center">
                        <span className="text-[8px] text-white/40 font-mono">
                          www.tumarca.com
                        </span>
                      </div>

                      <span className="text-[8px] text-[#2BE88E] font-mono">
                        LIVE
                      </span>
                    </div>

                    {/* Website content */}
                    <div className="flex-1 p-5 sm:p-7 flex flex-col justify-between overflow-hidden">

                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center justify-between"
                      >
                        <span className="text-white text-[10px] sm:text-xs font-black tracking-widest">
                          YOUR BRAND<span className="text-[#2BE88E]">.</span>
                        </span>

                        <div className="flex gap-3 text-[7px] sm:text-[9px] text-white/60">
                          <span>Inicio</span>
                          <span>Servicios</span>
                          <span>Contacto</span>
                        </div>
                      </motion.div>


<div className="flex items-center gap-3 sm:gap-5">

  {/* Website text */}
  <div className="w-[62%] min-w-0">

    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="text-[#2BE88E] text-[8px] sm:text-[10px] tracking-[0.25em] uppercase font-bold"
    >
      Diseñado para crecer
    </motion.span>

    <motion.h3
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.7 }}
      className="text-white text-xl sm:text-3xl font-black leading-[1.05] mt-3"
    >
      Ideas que se convierten en
      <span className="text-[#2BE88E]"> resultados.</span>
    </motion.h3>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.1 }}
      className="text-white/50 text-[8px] sm:text-[10px] mt-3 leading-relaxed"
    >
      Una experiencia digital creada para conectar con tus clientes y hacer crecer tu negocio.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.3 }}
      className="mt-4 inline-flex items-center gap-2 bg-[#2BE88E] text-[#141414] px-3 py-2 rounded text-[8px] sm:text-[10px] font-bold"
    >
      CONOCE MÁS <span>→</span>
    </motion.div>

  </div>

  {/* Random visual */}
  <motion.div
    key={currentVisual.id}
    initial={{ opacity: 0, x: 15, scale: 0.92 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ delay: 1.2, duration: 0.7 }}
    className="w-[38%] min-w-0 aspect-[4/5] rounded-xl overflow-hidden border border-white/10 shadow-xl bg-[#1c2922] relative"
  >

    {currentVisual.kind === 'photo' ? (
      <img
        src={currentVisual.src}
        alt={currentVisual.alt}
        className="w-full h-full object-cover"
      />
    ) : (
      <svg
        viewBox="0 0 240 300"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id={`gradient-${currentVisual.id}`}
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor={currentVisual.accent} />
            <stop offset="100%" stopColor={currentVisual.secondary} />
          </linearGradient>
        </defs>

        <rect width="240" height="300" fill="#17251E" />

        <circle
          cx="190"
          cy="65"
          r="75"
          fill={currentVisual.accent}
          opacity="0.12"
        />

        <circle
          cx="40"
          cy="240"
          r="65"
          fill={currentVisual.secondary}
          opacity="0.12"
        />

        <rect
          x="35"
          y="55"
          width="170"
          height="190"
          rx="24"
          fill={`url(#gradient-${currentVisual.id})`}
          opacity="0.15"
        />

        <path
          d="M70 190 L120 95 L170 190 Z"
          fill={currentVisual.accent}
          opacity="0.9"
        />

        <circle
          cx="120"
          cy="115"
          r="28"
          fill={currentVisual.secondary}
        />

        <rect
          x="65"
          y="205"
          width="110"
          height="9"
          rx="5"
          fill="white"
          opacity="0.8"
        />

        <rect
          x="85"
          y="222"
          width="70"
          height="5"
          rx="3"
          fill="white"
          opacity="0.3"
        />

        <circle
          cx="190"
          cy="250"
          r="8"
          fill={currentVisual.accent}
        />

        <circle
          cx="48"
          cy="65"
          r="5"
          fill={currentVisual.secondary}
        />
      </svg>
    )}

  </motion.div>

</div>


                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                        className="grid grid-cols-3 gap-2"
                      >
                        {[1, 2, 3].map((item) => (
                          <div
                            key={item}
                            className="h-10 sm:h-14 rounded-lg bg-white/[0.06] border border-white/10 p-2 flex flex-col justify-between"
                          >
                            <span className="w-4 h-1 rounded bg-[#2BE88E]/70" />
                            <span className="w-3/4 h-1 rounded bg-white/20" />
                          </div>
                        ))}
                      </motion.div>
                    </div>

                    {/* Live footer */}
                    <div className="h-6 bg-[#2BE88E]/10 border-t border-[#2BE88E]/20 flex items-center justify-center gap-2 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2BE88E]" />
                      <span className="text-[8px] text-[#2BE88E] tracking-widest font-mono">
                        YOUR WEBSITE IS LIVE
                      </span>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
