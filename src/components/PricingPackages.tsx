import React from "react";

type Package = {
  id: number;
  name: string;
  price: string;
  renewal: string;
  features: string[];
  extras: string[];
  color: string;
};

const packages: Package[] = [
  {
    id: 1,
    name: "Básico",
    price: "$3,300 Pago Único",
    renewal: "Renovación anual $1,600",
    color: "border-cyan-500",
    features: [
      "Dominio .com gratis por un año",
      "Correos Ilimitados",
      "4 pestañas informativas",
      "Galería de imágenes (17 programadas)",
      "5GB de espacio en Host",
      "Cuenta con Cpanel",
      "Respaldo mensual",
      "Programadas con WordPress",
    ],
    extras: [
      "Landing Page o One Page",
      "Botón a WhatsApp",
      "Compatible con cualquier dispositivo",
      "Enlace a sus redes sociales",
      "Formulario de contacto por departamento",
      "SE ENTREGAN VIDEOS EXPLICATIVOS PERSONALIZADOS",
    ],
  },
  {
    id: 2,
    name: "Profesional",
    price: "$5,300 Pago Único",
    renewal: "Renovación anual $1,800",
    color: "border-purple-500",
    features: [
      "Dominio .com gratis por un año",
      "Correos Ilimitados",
      "7 pestañas informativas",
      "Galería de imágenes (15 programadas)",
      "10GB de espacio en Host",
      "Cuenta con Cpanel",
      "Respaldo mensual",
      "Programadas con WordPress",
    ],
    extras: [
      "Página con pestañas múltiples",
      "Blog o sección de Noticias",
      "Feed con Instagram y Facebook",
      "Botón a WhatsApp",
      "Compatible con cualquier dispositivo",
      "Enlace a sus redes sociales",
      "Formulario de contacto por departamento",
      "SE ENTREGAN VIDEOS EXPLICATIVOS PERSONALIZADOS",
    ],
  },
  {
    id: 3,
    name: "Tienda en línea",
    price: "$7,300 Pago Único",
    renewal: "Renovación anual $2,320",
    color: "border-yellow-500",
    features: [
      "Dominio .com gratis por un año",
      "Correos Ilimitados",
      "6 a 12 pestañas informativas",
      "Galería de imágenes",
      "20GB de espacio en Host",
      "Respaldo mensual",
      "Programadas con WordPress",
      "Pagos con PayPal, OpenPay y Mercado Pago",
    ],
    extras: [
      "Capacidad para más de 15,000 productos",
      "Plugin para ofertas y descuentos por volumen",
      "Conexión a sistema de cobro de paquetería",
      "Sistema de Inventarios por código",
      "Sistema de Producto múltiple por subdivisiones",
      "Blog o sección de Noticias",
      "Feed con Instagram y Facebook",
      "Botón a WhatsApp",
      "Compatible con cualquier dispositivo",
      "Enlace a sus redes sociales",
      "Formulario de contacto por departamento",
      "SE ENTREGAN VIDEOS EXPLICATIVOS PERSONALIZADOS",
    ],
  },
];

const PricingPackages: React.FC = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Paquetes de Desarrollo Web
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Elige el plan que mejor se adapte a tu negocio. Todos incluyen dominio,
          hosting y soporte básico.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`flex flex-col p-6 bg-white shadow-lg rounded-2xl border-t-4 ${pkg.color}`}
            >
              <h3 className="text-xl font-semibold text-gray-900">{pkg.name}</h3>
              <p className="mt-2 text-indigo-600 font-bold">{pkg.price}</p>
              <p className="text-sm text-gray-500">{pkg.renewal}</p>

              <h4 className="mt-4 font-semibold text-gray-800">Incluye:</h4>
              <ul className="mt-2 space-y-2 text-left text-gray-600">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-500 mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <h4 className="mt-6 font-semibold text-gray-800">Características:</h4>
              <ul className="mt-2 space-y-2 text-left text-gray-600">
                {pkg.extras.map((extra, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-500 mr-2">★</span>
                    {extra}
                  </li>
                ))}
              </ul>

              <button className="mt-6 w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
                Contratar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;
