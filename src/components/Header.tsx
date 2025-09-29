import React from "react";
import NavBar from "./NavBar";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Header: React.FC = () => {
  return (
    <header className="relative bg-[rgb(24,18,146)] text-white overflow-hidden">
      <NavBar />

      {/* Contenedor principal */}
      <div className="mt-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-20 gap-3 md:gap-6">
        
        {/* Sección de texto */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-[#c8ed4e]">
            "Código Fuente" <br /> Tu agencia de Marketing digital
          </h1>

          <p className="text-lg mb-8 max-w-lg">
            Construimos lo que tu negocio necesita para crecer.  
            <span className="block mt-2">Transformamos ideas en resultados digitales.</span>
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#b2dc28] text-[rgb(24,18,146)] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
              Start a Project
            </button>
            <button className="bg-[#b2dc28] text-[rgb(24,18,146)] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Animación Lottie */}
        <div className=" w-[500px] sm:w-[550px] md:w-[500px] lg:w-[1100px] flex justify-center">
  <DotLottieReact
    src="https://lottie.host/01326b74-3dce-49b4-b4b0-0f42b07f57c3/zSLbdfdh9T.lottie"
    loop
    autoplay
  />
</div>

      </div>

      {/* Curva inferior */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-32"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            d="M0,240 C360,400 1080,80 1440,240 L1440,320 L0,320 Z"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
