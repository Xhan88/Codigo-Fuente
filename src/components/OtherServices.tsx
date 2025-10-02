import React from "react";
import { Monitor, LineChart, Globe, Smartphone, Mail, Users } from "lucide-react";

type Feature = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

const features: Feature[] = [
  {
    id: 1,
    title: "Data Analytics",
    description: "Análisis de datos para optimizar la toma de decisiones y estrategias digitales.",
    icon: <LineChart className="w-8 h-8 text-purple-600" />,
    color: "bg-purple-100",
  },
  {
    id: 2,
    title: "Website Growth",
    description: "Estrategias para mejorar el tráfico, la conversión y el posicionamiento de tu web.",
    icon: <Monitor className="w-8 h-8 text-cyan-600" />,
    color: "bg-cyan-100",
  },
  {
    id: 3,
    title: "SEO Ranking",
    description: "Optimización SEO para lograr mayor visibilidad y mejores posiciones en buscadores.",
    icon: <Globe className="w-8 h-8 text-red-600" />,
    color: "bg-red-100",
  },
  {
    id: 4,
    title: "App Development",
    description: "Desarrollo de aplicaciones móviles modernas, rápidas y fáciles de usar.",
    icon: <Smartphone className="w-8 h-8 text-green-600" />,
    color: "bg-green-100",
  },
  {
    id: 5,
    title: "Email Marketing",
    description: "Campañas efectivas de email marketing para fidelizar clientes y aumentar ventas.",
    icon: <Mail className="w-8 h-8 text-yellow-600" />,
    color: "bg-yellow-100",
  },
  {
    id: 6,
    title: "Affiliate Marketing",
    description: "Crecimiento mediante programas de afiliados y colaboraciones estratégicas.",
    icon: <Users className="w-8 h-8 text-orange-600" />,
    color: "bg-orange-100",
  },
];

const OtherServices: React.FC = () => {
  return (
    <>
    <section className="relative bg-gray-50 py-20"  data-aos="fade-up">
      

      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          we provide the best <br /> digital services
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Soluciones digitales que impulsan tu negocio: desde desarrollo web hasta estrategias de marketing efectivas.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-down">
          {features.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition"
            >
              <div className={`p-4 rounded-xl ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>

            </div>
          ))}
        </div>
      </div>

     
  
    </section>


</>
  );
};

export default OtherServices;
