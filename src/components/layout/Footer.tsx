import { Logo } from '../ui/Logo';
import { NAV_LINKS } from '../../data/siteData';
import { Facebook, Instagram } from 'lucide-react';

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

{/* Social Icons */}
<div className="flex items-center gap-3 text-[#141414]">
  <a
    href="https://www.facebook.com/profile.php?id=61581919241061&locale=es_LA"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="w-10 h-10 rounded-full border border-[#141414]/20 flex items-center justify-center hover:bg-[#2BE88E] hover:border-[#2BE88E] hover:text-[#141414] transition-all duration-300"
  >
    <Facebook size={18} strokeWidth={1.8} />
  </a>

  <a
    href="https://www.instagram.com/codigofuentecm/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="w-10 h-10 rounded-full border border-[#141414]/20 flex items-center justify-center hover:bg-[#2BE88E] hover:border-[#2BE88E] hover:text-[#141414] transition-all duration-300"
  >
    <Instagram size={18} strokeWidth={1.8} />
  </a>
</div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#4A4D4D] gap-4">
        <p>© 2026 Código Fuente. Todos los derechos reservados.</p>
        <p>Desarrollo y marketing digital.</p>
        <a
  href="/aviso-de-privacidad"
  className="text-xs text-[#4A4D4D] hover:text-[#269c69] transition-colors"
>
  Aviso de privacidad
</a>
      </div>
    </footer>
  );
}