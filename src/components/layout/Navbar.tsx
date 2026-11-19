
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Logo } from '../ui/Logo';
import { NAV_LINKS } from '../../data/siteData';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 80 || mobileMenuOpen) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 5) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current - 5) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mobileMenuOpen]);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  const menuVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    hidden: {
      opacity: 0,
      x: 25,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          y: isVisible ? 0 : '-100%',
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed top-0 left-0 w-full z-50 bg-[#9d9d9d]/75 backdrop-blur-md border-b border-[#141414]/10"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#inicio" className="focus:outline-none mt-1">
            <motion.div layoutId="codigo-fuente-logo">
              <Logo />
            </motion.div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#141414]">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors hover:text-[#2BE88E] ${
                  index === 0 ? 'border-b-2 border-[#2BE88E] pb-1' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden md:block">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-[#141414] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#2BE88E] hover:text-[#141414] transition-all duration-300"
            >
              Hablemos <span className="text-[#2BE88E]">→</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <motion.button
            type="button"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setIsVisible(true);
            }}
            whileTap={{ scale: 0.92 }}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden relative w-12 h-12 flex items-center justify-center rounded-xl bg-[#141414] border border-white/10 shadow-lg overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2BE88E]"
          >
            <motion.span
              animate={{
                opacity: mobileMenuOpen ? 0.18 : 0,
                scale: mobileMenuOpen ? 1.5 : 0.7,
              }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 bg-[#2BE88E] blur-xl rounded-full"
            />

            <span className="relative w-5 h-4 flex flex-col justify-between items-end">
              <motion.span
                animate={{
                  width: mobileMenuOpen ? '100%' : '75%',
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 7 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block h-[2px] bg-[#2BE88E] rounded-full origin-center"
              />

              <motion.span
                animate={{
                  opacity: mobileMenuOpen ? 0 : 1,
                  x: mobileMenuOpen ? 8 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="block h-[2px] w-full bg-white rounded-full"
              />

              <motion.span
                animate={{
                  width: mobileMenuOpen ? '100%' : '55%',
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? -7 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block h-[2px] bg-[#2BE88E] rounded-full origin-center"
              />
            </span>

            <motion.span
              animate={{
                opacity: mobileMenuOpen ? 1 : 0.5,
                scale: mobileMenuOpen ? 1 : 0.7,
              }}
              className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#2BE88E]"
            />
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Side Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMenu}
          >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-[#141414]/45 backdrop-blur-[3px]" />

            {/* Right side panel */}
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Navegación móvil"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) => event.stopPropagation()}
              className="absolute top-0 right-0 h-[100dvh] w-[88%] max-w-[420px] bg-[rgba(216,218,218,0.88)] backdrop-blur-2xl border-l border-white/40 shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-7 pt-8 pb-7 border-b border-[#141414]/10">
                <div>
                  <span className="text-[10px] tracking-[0.25em] font-bold text-[#141414]/45">
                    CÓDIGO FUENTE
                  </span>
                  <p className="text-xs text-[#141414]/55 mt-1">
                    DIGITAL STUDIO
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Cerrar menú"
                  className="w-11 h-11 rounded-full bg-[#141414] text-[#2BE88E] flex items-center justify-center hover:bg-[#2BE88E] hover:text-[#141414] transition-colors duration-300"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="w-5 h-5"
                  >
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation links */}
              <motion.nav
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                className="flex-1 flex flex-col justify-center px-7 gap-2"
              >
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#141414]/40 font-bold mb-5">
                  Explora nuestro sitio
                </span>

                {NAV_LINKS.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    variants={linkVariants}
                    onClick={closeMenu}
                    className="group flex items-center gap-5 py-4 border-b border-[#141414]/10"
                  >
                    <span className="text-[11px] font-mono text-[#2BE88E] font-bold">
                      0{index + 1}
                    </span>

                    <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#141414] group-hover:translate-x-2 group-hover:text-[#269c69] transition-all duration-300">
                      {link.label}
                    </span>

                    <span className="ml-auto text-[#141414]/30 group-hover:text-[#2BE88E] group-hover:translate-x-1 transition-all duration-300">
                      →
                    </span>
                  </motion.a>
                ))}
              </motion.nav>

              {/* Panel footer */}
              <div className="px-7 pb-9 pt-6 border-t border-[#141414]/10">
                <a
                  href="#contacto"
                  onClick={closeMenu}
                  className="flex items-center justify-between w-full bg-[#141414] text-white px-6 py-5 rounded-xl font-semibold group hover:bg-[#2BE88E] hover:text-[#141414] transition-all duration-300"
                >
                  <span>Hablemos de tu proyecto</span>
                  <span className="text-[#2BE88E] text-xl group-hover:text-[#141414] group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </a>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-[9px] tracking-[0.2em] text-[#141414]/40 font-semibold">
                    DESARROLLO & MARKETING DIGITAL
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#2BE88E] shadow-[0_0_10px_#2BE88E]" />
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
