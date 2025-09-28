import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

type Service = {
  id: number;
  title: string;
  description: string;
};


const services: Service[] = [
  {
    id: 1,
    title: "Aumenta tu presencia digital",
    description:
      "Con una estrategia bien ejecutada en redes sociales y sitio web profesional, más personas conocerán tu negocio, tus productos y servicios.",
  },
  {
    id: 2,
    title: "Conecta con más clientes potenciales",
    description:
      "Creamos campañas publicitarias inteligentes que te ayudan a llegar justo al público que realmente está interesado en lo que ofreces.",
  },
  {
    id: 3,
    title: "Convierte visitas en ventas",
    description:
      "Optimizamos tu contenido y diseño para que tus visitantes se conviertan en clientes reales, aumentando tus ingresos mes a mes.",
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className=" mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
      
      
      <div className="flex justify-center md:justify-end">
        <div className="w-[50rem] max-w-full">
          <DotLottieReact
            src="https://lottie.host/5e26bbcd-e9ac-4577-9eba-df8408833ca7/xJvXenD9D1.lottie"
            loop
            autoplay
          />
        </div>
      </div>

     
      <div>
      <h2 className="text-4xl font-bold mb-4">
          Haz crecer tus <span className="text-[#c8ed4e]">ganancias</span> con una <br /> estrategia digital efectiva.
        </h2>
        <p className="text-gray-600 mb-8">
        Hoy, estar en internet no es suficiente. Necesitas destacar. <br /> En <strong>Código Fuente</strong> desarrollamos estrategias digitales que impulsan tu visibilidad, <br /> generan confianza y multiplican tus ventas.

        </p>

        
        <div className="space-y-9">
          {services.map((service) => (
            <div key={service.id}>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
