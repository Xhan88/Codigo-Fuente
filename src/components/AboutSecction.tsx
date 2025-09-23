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
    title: "Digital Agency & Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, distinctio.",
  },
  {
    id: 2,
    title: "Planning To Startup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, distinctio.",
  },
  {
    id: 3,
    title: "Content Management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, distinctio.",
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

<div className='w-[724px]'>
     <div className="w-full">
      <DotLottieReact
      src="https://lottie.host/5e26bbcd-e9ac-4577-9eba-df8408833ca7/xJvXenD9D1.lottie"
      loop
      autoplay
    />
      </div>
</div>


      {/* Texto derecha */}
      <div>
        <h2 className="text-4xl font-bold mb-4">
          Work <span className="text-[#71f82d]">smarter</span>, not harder.
        </h2>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
          obcaecati dignissimos quae quo ad iste ipsum officiis deleniti
          asperiores sit.
        </p>

        {/* Bloques de servicios */}
        <div className="space-y-6">
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
