import React from "react";

const Header: React.FC = () => {
  return (
    <>
      {/* HEADER */}
      <header className="relative bg-purple-700 text-white">
        <div className="max-w-5xl mx-auto text-center py-24 px-6">
          <h1 className="text-5xl font-bold mb-6">
            We are digital agency <br /> & Marketing
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Impedit
            nihil tenetur minus quidem est deserunt molestias accusamus harum.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
              Start a Project
            </button>
            <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* CURVA BLANCA */}
        <svg
          className="absolute bottom-0 left-0 w-full h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="transparent"
            d="M0,128L30,138.7C60,149,120,171,180,186.7C240,203,300,213,360,202.7C420,192,480,160,540,160C600,160,660,192,720,202.7C780,213,840,203,900,186.7C960,171,1020,149,1080,138.7C1140,128,1200,128,1260,138.7C1320,149,1380,171,1410,181.3L1440,192L1440,320L0,320Z"
          />
        </svg>
      </header>
    </>
  );
};

export default Header;
