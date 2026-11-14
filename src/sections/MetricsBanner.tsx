import { METRICS } from '../data/siteData';


export function MetricsBanner() {
  return (
    <section className="bg-[#141414] text-white py-14 border-t border-b border-[#2BE88E]/20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {METRICS.map((metric) => (
          <div
            key={metric.label}
            className="flex flex-col items-center justify-center"
          >
            <span className="text-3xl sm:text-4xl font-black text-[#2BE88E] mb-1">
              {metric.value}
            </span>
            <span className="text-xs sm:text-sm text-white/70 font-medium">
              {metric.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

