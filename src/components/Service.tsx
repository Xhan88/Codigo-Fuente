import React from "react";

type Service = {
  id: number;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    id: 1,
    title: "Desarrollo web",
    description:
      "Creamos sitios y tiendas online rápidos, responsivos y optimizados para convertir. Nos enfocamos en la velocidad, experiencia de usuario y diseño atractivo para que tu negocio destaque en internet. Además, implementamos buenas prácticas de SEO técnico.",
  },
  {
    id: 2,
    title: "Manejo de redes sociales",
    description:
      "Planificamos y gestionamos estrategias completas en redes sociales: desde creación de contenido visual y copywriting, hasta calendarización y análisis de métricas para mejorar el engagement y la visibilidad de tu marca.",
  },
  {
    id: 3,
    title: "Comerciales promocionales",
    description:
      "Desarrollamos campañas creativas y anuncios promocionales con foco en ventas: videos cortos, animaciones, mensajes publicitarios y optimización de anuncios para maximizar el alcance y las conversiones.",
  },
];

const ServicesCards: React.FC = () => {
  return (
    <>
    <section className="w-full max-w-6xl mx-auto px-6 py-12">
   
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {services.map((s) => (
          <article
            key={s.id}
            className="group relative rounded-2xl overflow-hidden p-8 transform transition-all duration-400 will-change-transform bg-white border border-gray-100 shadow-lg hover:shadow-2xl flex flex-col items-center text-center"
            aria-labelledby={`service-${s.id}-title`}
            role="article"
          >
            <h3
              id={`service-${s.id}-title`}
              className="text-4xl sm:text-5xl font-bold leading-tight mb-4 text-gray-900 transition-transform duration-300 group-hover:-translate-y-1"
            >
              {s.title}
            </h3>

            <p className="text-base sm:text-lg text-gray-700">
              {s.description}
            </p>

            <style>
              {`
                .group:hover {
                  transform: translateY(-6px) scale(1.03);
                  box-shadow: 0 20px 40px rgba(2,6,23,0.12), 0 6px 12px rgba(2,6,23,0.06);
                }
                .group { transition: transform 280ms cubic-bezier(.2,.8,.2,1), box-shadow 280ms ease; }
              `}
            </style>
          </article>
        ))}
      </div>


    </section>

<div className="relative">
<svg
  className="w-full h-20 text-gray-200"
  viewBox="0 0 1440 320"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
>
  <path
    fill="currentColor"
    d="M0,240 C360,400 1080,80 1440,240 L1440,320 L0,320 Z"
  />
</svg>
</div> 

</>
  );
};

export default ServicesCards;
