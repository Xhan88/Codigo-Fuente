import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center text-white py-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80')] 
        bg-cover bg-center bg-fixed opacity-80"
      ></div>

      <div className="absolute inset-0 bg-blue-700/70"></div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight"  data-aos="fade-up">
          looking for the best <br className="hidden md:block" />
          <span className="text-white">digital agency & marketing solution?</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200">
          En <span className="font-semibold text-white">Código Fuente</span> impulsamos tu marca con estrategias digitales,
          diseño web y marketing moderno para alcanzar tus metas.
        </p>

        <motion.a
          href="#contact"
          className="mt-10 inline-block px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.a>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-700 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
