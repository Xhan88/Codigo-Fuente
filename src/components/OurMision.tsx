import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const BusinessSection: React.FC = () => {
  return (
    <section id='nosotros' className="bg-gray-200 w-full relative">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center" data-aos="fade-up">
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Somos el crecimiento de tu negocio.
          </h2>
          <p className="text-lg text-gray-600 mb-8">
          En Código Fuente te ayudamos a llevar tu marca al siguiente nivel. Creamos estrategias digitales efectivas que aumentan tu visibilidad, atraen clientes y potencian tus ventas.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
              💼 Presencia Online
              </h3>
              <p className="text-gray-600">
              Construimos tu presencia digital con un sitio web profesional y redes sociales activas que conectan con tu audiencia y reflejan la esencia de tu marca.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">
              📈 Estrategia de Marketing
              </h3>
              <p className="text-gray-600">
              Diseñamos campañas personalizadas para posicionar tu negocio, atraer clientes potenciales y generar resultados medibles.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">
              🛍️ Impulso a Ventas Locales
              </h3>
              <p className="text-gray-600">
              Aumenta tus ventas en tu comunidad con estrategias locales que te ayudan a destacar frente a la competencia.
              </p>
            </div>
          </div>
        </div>

       
        <div className="flex justify-center">
          <div className="w-[444px] h-[444px]">
            <DotLottieReact
              src="https://lottie.host/12286d84-df29-440e-ab24-2ce0d5d58e99/QBiQrYDpCM.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </div>

     
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-20"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            d="M0,224 C480,320 960,128 1440,224 L1440,320 L0,320 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default BusinessSection;
