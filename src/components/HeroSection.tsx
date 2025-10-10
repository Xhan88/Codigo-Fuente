import React from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center text-white py-32 overflow-hidden">
      {/* Fondo */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80')]
        bg-cover bg-center bg-fixed opacity-80"
      ></div>
      <div className="absolute inset-0 bg-blue-700/70"></div>

      {/* Contenido */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className="text-4xl md:text-6xl font-bold leading-tight"
          data-aos="fade-up"
        >
          looking for the best <br className="hidden md:block" />
          <span className="text-white">
            digital agency & marketing solution?
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200">
          En <span className="font-semibold text-white">Código Fuente</span> impulsamos tu marca con estrategias digitales,
          diseño web y marketing moderno para alcanzar tus metas.
        </p>

        {/* Animación Lottie centrada */}
        <div className="flex justify-center items-center mt-8 scale-[2]">
          <DotLottieReact
            src="https://lottie.host/f08c6659-76d4-48a4-a35d-e159e5e4b177/edF8vot912.lottie"
            loop
            autoplay
            className="w-[300px] h-[300px]"
          />
        </div>
      </motion.div>

      {/* Gradiente inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-700 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
