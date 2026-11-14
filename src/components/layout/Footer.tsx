import { Logo } from '../ui/Logo';
import { NAV_LINKS } from '../../data/siteData';

export function Footer() {
  return (
    <footer className="bg-[#D8DADA] border-t border-[#141414]/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#141414]/10">
        <Logo />

        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-[#141414]">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-[#2BE88E] transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-[#141414]">
          {['facebook', 'instagram', 'youtube', 'linkedin'].map((social) => (
            <a
              key={social}
              href={`#${social}`}
              className="w-10 h-10 rounded-full border border-[#141414]/20 flex items-center justify-center hover:bg-[#2BE88E] hover:border-[#2BE88E] hover:text-[#141414] transition-all"
              aria-label={social}
            >
              <span className="capitalize text-xs font-bold">{social[0].toUpperCase()}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#4A4D4D] gap-4">
        <p>© 2026 Código Fuente. Todos los derechos reservados.</p>
        <p>Desarrollo y marketing digital.</p>
      </div>
    </footer>
  );
}