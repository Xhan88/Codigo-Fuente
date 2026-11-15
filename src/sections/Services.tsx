import { SERVICES } from '../data/siteData';
import { CornerBrackets } from '../components/ui/CornerBrackets';
import {
  Code2,
  ShoppingCart,
  Megaphone,
  PanelsTopLeft,
  Fingerprint,
  Workflow,
  Sparkles,
} from 'lucide-react';

const serviceIcons = {
  'desarrollo-web': Code2,
  'tiendas-online': ShoppingCart,
  'marketing-digital': Megaphone,
  'diseno-web': PanelsTopLeft,
  branding: Fingerprint,
  'soluciones-digitales': Workflow,
};

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-[#C8CACA]/50 border-t border-b border-[#141414]/10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#4A4D4D] block mb-2">
                Nuestros servicios
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141414] tracking-tight">
                Soluciones digitales<br />para hacer crecer tu negocio.
              </h2>
            </div>
            <p className="text-[#4A4D4D] max-w-sm text-sm sm:text-base">
              Desde páginas web hasta estrategias de marketing, te ayudamos a destacar en el mundo digital.
            </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {SERVICES.map((service) => (
  <div
    key={service.id}
    className="relative bg-[#D8DADA] p-8 rounded-xl border border-[#141414]/15 hover:border-[#2BE88E] transition-all duration-300 group flex flex-col justify-between h-56"
  >
                <CornerBrackets size={10} />
                <div>
                 <div className="w-10 h-10 rounded-lg bg-[#141414] text-[#2BE88E] flex items-center justify-center mb-4 group-hover:bg-[#2BE88E] group-hover:text-[#141414] transition-colors">
  {(() => {
    const Icon =
      serviceIcons[service.id as keyof typeof serviceIcons] ?? Sparkles;

    return <Icon size={20} strokeWidth={1.8} />;
  })()}
</div>
                  <h3 className="text-lg font-bold text-[#141414] mb-2">{service.title}</h3>
                  <p className="text-sm text-[#4A4D4D]">{service.description}</p>
                </div>
                <div className="text-[#2BE88E] font-bold text-lg group-hover:translate-x-1 transition-transform">
                  →
                </div>
              </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

// export const SERVICES: ServiceItem[] = [
//   {
//     id: "desarrollo-web",
//     title: "Desarrollo web",
//     description: "Sitios web modernos, rápidos y adaptados a cualquier dispositivo.",
//   },
//   {
//     id: "tiendas-online",
//     title: "Tiendas online",
//     description: "E-commerce para vender tus productos y gestionar tus pedidos.",
//   },
//   {
//     id: "marketing-digital",
//     title: "Marketing digital",
//     description: "Estrategias digitales para atraer clientes y aumentar tus ventas.",
//   },
//   {
//     id: "diseno-web",
//     title: "Diseño UI/UX",
//     description: "Experiencias visuales atractivas, intuitivas y enfocadas en el usuario.",
//   },
//   {
//     id: "branding",
//     title: "Identidad de marca",
//     description: "Construimos una imagen profesional y consistente para tu negocio.",
//   },
//   {
//     id: "soluciones-digitales",
//     title: "Soluciones digitales",
//     description: "Herramientas y automatizaciones para mejorar tus procesos comerciales.",
//   },
// ];