import { useState } from 'react';
import { Logo } from '../ui/Logo';
import { NAV_LINKS } from '../../data/siteData';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#9d9d9d] backdrop-blur-md border-b border-[#141414]/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#inicio" className="focus:outline-none">
          <Logo />
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

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-[#141414] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#2BE88E] hover:text-[#141414] transition-all duration-300"
          >
            Hablemos <span className="text-[#2BE88E] group-hover:text-[#141414]">→</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#141414] p-2 focus:outline-none"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#D8DADA] border-b border-[#141414]/10 py-6 px-6 shadow-xl flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-[#141414] hover:text-[#2BE88E]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center bg-[#141414] text-white py-3 rounded-full font-semibold"
          >
            Hablemos →
          </a>
        </div>
      )}
    </header>
  );
}