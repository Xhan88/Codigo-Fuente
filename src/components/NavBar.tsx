import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setShowNav(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    if (isOpen) {
      setAnimateOut(true);
      setTimeout(() => {
        setIsOpen(false);
        setAnimateOut(false);
      }, 400);
    } else {
      setIsOpen(true);
    }
  };

  const closeMenu = () => toggleMenu();

  // 🔹 Función para ir al inicio
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (isOpen) closeMenu();
  };

  return (
    <nav
      className={`
        bg-[rgb(24,18,146)] text-white fixed w-full top-0 left-0 z-50
        transition-transform duration-500 ease-in-out
        ${showNav ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="flex justify-between items-center px-6 py-3 max-w-[1400px] mx-auto">
        {/* Logo */}
        <img
          className="w-20 cursor-pointer hover:bg-[#b2dc28] rounded-md"
          src="200.png"
          alt="icon-image"
          onClick={scrollToTop} // 👈 también puedes usar el logo
        />

        {/* Menu desktop */}
        <ul className="hidden md:flex justify-center space-x-12">
          <li
            className="cursor-pointer hover:text-[#b2dc28] transition-colors"
            onClick={scrollToTop} // 👈 Scroll suave
          >
            Inicio
          </li>
          <li className="cursor-pointer hover:text-[#b2dc28] transition-colors">Sobre nosotros</li>
          <li className="cursor-pointer hover:text-[#b2dc28] transition-colors">Paginas</li>
          <li className="cursor-pointer hover:text-[#b2dc28] transition-colors">Contacto</li>
        </ul>

        {/* Redes + botón desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-xl cursor-pointer" />
          <FontAwesomeIcon icon={faInstagram} className="text-purple-300 text-xl cursor-pointer" />
          <button className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-[rgb(24,18,146)] transition">
            Contáctanos
          </button>
        </div>

        {/* Hamburguesa móvil */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon
              icon={isOpen ? faXmark : faBars}
              className="text-2xl transition-transform duration-300"
            />
          </button>
        </div>
      </div>

      {/* Overlay menú móvil */}
      {isOpen && (
        <div
          className={`
            fixed top-0 left-0 w-full h-screen
            bg-[rgba(24,18,146,0.95)] backdrop-blur-sm
            flex flex-col items-center justify-center
            text-2xl z-40 overflow-y-auto
            ${animateOut ? "animate-fadeSlideOut" : "animate-fadeSlideIn"}
          `}
        >
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 text-3xl hover:text-[#b2dc28] transition-colors"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>

          <ul className="flex flex-col items-center space-y-6">
            <li
              onClick={scrollToTop} // 👈 También en móvil
              className="cursor-pointer hover:text-[#b2dc28] transition-colors"
            >
              Inicio
            </li>
            <li onClick={closeMenu} className="cursor-pointer hover:text-[#b2dc28] transition-colors">
              Sobre nosotros
            </li>
            <li onClick={closeMenu} className="cursor-pointer hover:text-[#b2dc28] transition-colors">
              Paginas
            </li>
            <li onClick={closeMenu} className="cursor-pointer hover:text-[#b2dc28] transition-colors">
              Contacto
            </li>
          </ul>

          <div className="flex flex-col items-center space-y-6 mt-6">
            <div className="flex space-x-4">
              <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-2xl cursor-pointer" />
              <FontAwesomeIcon icon={faInstagram} className="text-purple-300 text-2xl cursor-pointer" />
            </div>
            <button
              onClick={closeMenu}
              className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[rgb(24,18,146)] transition"
            >
              Contáctanos
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
