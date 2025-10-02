import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AOS from "aos"
import "aos/dist/aos.css"; 


const Header: React.FC = () => {

   
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh(); 
  }, []);

  return (
    <>
    <NavBar />
    <header className="relative bg-[rgb(24,18,146)] h-[55rem] sm:h-[55rem] md:h-[45rem] text-white overflow-hidden">

    

      <div className="mt-20 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-20 gap-10">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-[#c8ed4e]" data-aos="fade-up">
            "Código Fuente" <br /> Tu agencia de Marketing digital
          </h1>

          <p className="text-lg mb-8 max-w-lg" data-aos="fade-up">
            Construimos lo que tu negocio necesita para crecer.  
            <span className="block mt-2">Transformamos ideas en resultados digitales.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4"  data-aos="fade-up">
            <button className="bg-[#b2dc28] text-[rgb(24,18,146)] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
              Start a Project
            </button>
            <button className="bg-[#b2dc28] text-[rgb(24,18,146)] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
              Contact Us
            </button>
          </div>
        </div>

        <div className="relative flex justify-center items-center w-full md:w-1/2 overflow-visible scale-[1.5]">
  <DotLottieReact
    src="https://lottie.host/01326b74-3dce-49b4-b4b0-0f42b07f57c3/zSLbdfdh9T.lottie"
    loop
    autoplay
    style={{
      width: "100%",
      maxWidth: "600px",
      height: "13rem",
    }}
    
    data-aos="fade-left"
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
    </>
  );
};

export default Header;
