import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const BusinessSection: React.FC = () => {
  return (
    <section className="bg-gray-200 w-full relative">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Columna izquierda */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            We help to grow your business.
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            obcaecati dignissimos quae quo ad iste ipsum officiis deleniti
            asperiores sit.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Online Presence
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veritatis, distinctio.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Marketing Strategy
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veritatis, distinctio.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Promote Local Sales
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veritatis, distinctio.
              </p>
            </div>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="flex justify-center">
          <div className="w-[424px] h-[424px]">
            <DotLottieReact
              src="https://lottie.host/12286d84-df29-440e-ab24-2ce0d5d58e99/QBiQrYDpCM.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </div>

      {/* Separador curvo */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-20"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,128 C480,320 960,0 1440,192 L1440,320 L0,320 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default BusinessSection;
