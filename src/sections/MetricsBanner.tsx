
import { motion } from 'framer-motion';
import { METRICS } from '../data/siteData';

export function MetricsBanner() {
  return (
    <section className="relative bg-[#141414] text-white py-9 border-t border-b border-[#2BE88E]/20 overflow-hidden">

      {/* Background details */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#2BE88E 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />

      {/* Section label */}
      <div className="max-w-7xl mx-auto px-6 mb-7 flex items-center justify-between relative z-10">
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#2BE88E] font-bold">
          Lo que hacemos
        </span>

        <span className="text-[9px] text-white/30 font-mono tracking-widest">
          OUR EXPERTISE / 001—004
        </span>
      </div>

      {/* Infinite carousel */}
      <div className="relative overflow-hidden">

        {/* Edge gradients */}
        <div className="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#141414] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#141414] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 28,
            ease: 'linear',
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {[0, 1].map((group) => (
            <div
              key={group}
              className="flex shrink-0 items-center"
              aria-hidden={group === 1}
            >
              {METRICS.map((metric) => (
                <div
                  key={`${group}-${metric.value}`}
                  className="flex items-center gap-5 sm:gap-8 px-7 sm:px-12"
                >
                  <div className="flex items-center gap-3 sm:gap-4 whitespace-nowrap">

                    <span className="text-3xl sm:text-5xl font-black tracking-tighter text-[#2BE88E]">
                      {metric.value}
                    </span>

                    <span className="text-sm sm:text-xl font-bold tracking-tight text-white">
                      {metric.label}
                    </span>

                  </div>

                  {/* Technical separator */}
                  <div className="relative flex items-center justify-center w-5 h-5">
                    <span className="absolute w-5 h-px bg-[#2BE88E]/50" />
                    <span className="absolute h-5 w-px bg-[#2BE88E]/50" />
                    <span className="w-1.5 h-1.5 bg-[#2BE88E] rotate-45" />
                  </div>

                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom detail */}
      <div className="max-w-7xl mx-auto px-6 mt-7 flex justify-end">
        <span className="text-[9px] text-white/25 font-mono tracking-widest">
          IDEAS INTO DIGITAL EXPERIENCES.
        </span>
      </div>

    </section>
  );
}
