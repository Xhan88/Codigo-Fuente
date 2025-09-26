import React from "react";
import NavBar from "./NavBar";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Header: React.FC = () => {
  return (
    <header className="relative bg-[rgb(24,18,146)] text-white overflow-hidden">
      {/* Navbar */}
      <NavBar />

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-20">
        
        {/* Columna Izquierda - Texto */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold mb-6 leading-tight text-[#c8ed4e]">
            We are digital agency <br /> & Marketing
          </h1>
          <p className="text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Impedit
            nihil tenetur minus quidem est deserunt molestias accusamus harum.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
              Start a Project
            </button>
            <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Columna Derecha - Imágenes */}
        <div className="relative w-[500px] h-[400px]">
        <DotLottieReact
          src="https://lottie.host/01326b74-3dce-49b4-b4b0-0f42b07f57c3/zSLbdfdh9T.lottie"
          loop
          autoplay
        />
        </div>
      </div>

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
