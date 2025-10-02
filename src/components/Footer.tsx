import React from "react";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

const TikTokIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
  >
    <path d="M448,209.3v102.4a200,200,0,0,1-200-200V80h68.1A127.8,127.8,0,0,0,448,209.3ZM336,0H256V240a80,80,0,1,1-80-80V80H96V160A144,144,0,1,0,240,304h0A144.16,144.16,0,0,0,384,160V48A48,48,0,0,1,336,0Z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-700 pt-16">
      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">ABOUT US</h3>
          <ul className="space-y-2 text-gray-500">
            <li>Quiénes somos</li>
            <li>Testimonios</li>
            <li>Empleos</li>
            <li>Socios</li>
            <li>Programa de afiliados</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">SERVICES</h3>
          <ul className="space-y-2 text-gray-500">
            <li>Desarrollo Web</li>
            <li>Gestión de Productos</li>
            <li>Diseño UX/UI</li>
            <li>Consultoría Digital</li>
            <li>Marketing en Redes Sociales</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">SUPPORT</h3>
          <ul className="space-y-2 text-gray-500">
            <li>Preguntas Frecuentes</li>
            <li>Términos y Condiciones</li>
            <li>Política de Privacidad</li>
            <li>Centro de Ayuda</li>
            <li>Contáctanos</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">FOLLOW US</h3>
          <p className="text-gray-500 mb-4">
            Síguenos en redes sociales y mantente al tanto de nuestras novedades.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-blue-600">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-black">
              <TikTokIcon size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-600">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-700">
              <Linkedin size={20} />
            </a>
            <a href="mailto:equipo.codigofuente@gmail.com" className="text-gray-500 hover:text-red-600">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-gray-200 mt-12"></div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Código Fuente. Todos los derechos reservados.</p>
        <p className="flex items-center gap-1 mt-2 md:mt-0">
          Hecho con <span className="text-red-500">♥</span> por{" "}
          <span className="font-medium text-gray-700">Código Fuente</span>
        </p>
      </div>

      {/* Botón scroll-top */}
      <a
        href="#top"
        className="fixed bottom-6 right-6 bg-[#b2dc28] text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all"
      >
        ↑
      </a>
    </footer>
  );
};

export default Footer;
