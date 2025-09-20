import React from "react";
import NavBar from "./NavBar";

const Header: React.FC = () => {
  return (
    <header className="relative bg-yellow-300 text-black overflow-hidden">
      {/* Navbar */}
      <NavBar />

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-20">
        
        {/* Columna Izquierda - Texto */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
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
          <img
            src="./thumb_1.png"
            alt="Fondo"
            className="absolute top-0 left-0 w-full h-full object-contain"
          />
          <img
            src="./thumb_2.png"
            alt="Gráfico"
            className="absolute top-10 left-12 w-56"
          />
          <img
            src="./thumb_3.png"
            alt="Persona"
            className="absolute bottom-0 right-6 w-48"
          />
          <img
            src="./thumb_4.png"
            alt="Detalles"
            className="absolute top-20 right-0 w-28"
          />
        </div>
      </div>

      {/* Curva SVG inferior */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path
            d="M0,0 C40,150 60,150 100,0 L100,100 L0,100 Z"
            className="fill-white"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
