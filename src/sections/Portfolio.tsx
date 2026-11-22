
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PROJECTS } from '../data/siteData';
import { CornerBrackets } from '../components/ui/CornerBrackets';

export function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeProject = PROJECTS[activeIndex];

  useEffect(() => {
    if (isPaused || PROJECTS.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % PROJECTS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="proyectos" className="py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Column: Animated Project Gallery */}
        <div className="lg:col-span-7">
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative bg-[#141414] p-4 rounded-2xl shadow-xl border border-white/10 overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2BE88E_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 bg-[#0a0a0a] rounded-xl aspect-[4/5] sm:aspect-[16/10] overflow-hidden">

              {/* Fixed Brand Header */}
              <div className="absolute top-0 left-0 right-0 z-30 px-4 py-4 sm:p-8 bg-gradient-to-b from-black/90 via-black/50 to-transparent">

                <span className="text-[#2BE88E] text-base sm:text-3xl font-black tracking-wider block">
                  CÓDIGO FUENTE
                </span>

                <p className="text-white/70 text-[9px] sm:text-xs mt-1 max-w-[220px] sm:max-w-none">
                  Infraestructura web escalable y moderna
                </p>
              </div>

              {/* Animated Gallery */}
              {activeProject && (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  >
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                    {/* Project Information */}
                    <div className="absolute bottom-0 left-0 right-0 px-4 pb-10 pt-16 sm:p-8">

                      <span className="text-[#2BE88E] text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold">
                        Proyecto destacado
                      </span>

                      <h3 className="text-white text-lg sm:text-2xl font-extrabold mt-1 leading-tight max-w-full">
                        {activeProject.title}
                      </h3>

                      <p className="text-white/70 text-[10px] sm:text-xs mt-1">
                        {activeProject.category}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}

              {/* Gallery Indicators */}
              <div className="absolute bottom-4 right-5 z-30 flex items-center gap-1.5">
                {PROJECTS.map((project, index) => (
                  <button
                    key={project.id ?? project.title}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Ver proyecto ${project.title}`}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      activeIndex === index
                        ? 'w-7 bg-[#2BE88E]'
                        : 'w-2 bg-white/40 hover:bg-white'
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Right Column: Portfolio Projects */}
        <div className="lg:col-span-5 flex flex-col gap-6">

          <span className="text-xs uppercase tracking-widest font-extrabold text-[#2BE88E] bg-[#141414] px-3 py-1 rounded w-fit">
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
            {PROJECTS.map((project, index) => (
              <div
                key={project.id ?? project.title}
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative bg-[#C8CACA]/60 p-4 rounded-xl border flex items-center justify-between transition-all duration-300 cursor-pointer group ${
                  activeIndex === index
                    ? 'border-[#2BE88E] bg-[#C8CACA]'
                    : 'border-[#141414]/15 hover:border-[#2BE88E]'
                }`}
              >
                <CornerBrackets size={8} />

                <div className="flex items-center gap-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-14 h-14 rounded-lg object-cover"
                  />

                  <div>
                    <h4 className="font-bold text-[#141414] text-sm sm:text-base">
                      {project.title}
                    </h4>

                    <span className="text-xs text-[#4A4D4D]">
                      {project.category}
                    </span>
                  </div>
                </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visitar sitio web de ${project.title}`}
                      onClick={(e) => e.stopPropagation()}
                      className="w-8 h-8 shrink-0 rounded-full bg-[#2BE88E] text-[#141414] flex items-center justify-center font-bold group-hover:scale-110 transition-transform"
                    >
  →
</a>
              </div>
            ))}
          </div>

          <div className="mt-4">
           <a
              href="https://github.com/Xhan88"
              target="_blank"
              rel="noopener noreferrer"
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
