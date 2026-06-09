import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-bg/95 backdrop-blur-md border-b border-white/5 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-lava-orange via-electric-purple to-neon-blue p-0.5 shadow-md shadow-lava-orange/10 transition-transform group-hover:scale-105">
              <span className="flex h-full w-full items-center justify-center rounded-[10px] bg-dark-bg">
                <Zap className="h-5 w-5 text-neon-green" />
              </span>
            </span>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tight text-white leading-none">
                SALTING REUS
              </span>
              <span className="font-mono text-[9px] tracking-widest text-[#00F0FF] leading-none mt-1">
                &amp; LASERTAG
              </span>
            </div>
          </a>

          {/* Nav links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#instalaciones" className="text-gray-300 hover:text-[#00F0FF] text-sm font-medium transition-colors">
              Instalaciones
            </a>
            <a href="#cumpleanos" className="text-gray-300 hover:text-neon-green text-sm font-medium transition-colors">
              Cumpleaños
            </a>
            <a href="#tarifas" className="text-gray-300 hover:text-lava-orange text-sm font-medium transition-colors">
              Tarifas
            </a>
            <a href="#contacto" className="text-gray-300 hover:text-[#00F0FF] text-sm font-medium transition-colors">
              Contacto
            </a>
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <button
              onClick={onOpenBooking}
              className="relative group overflow-hidden rounded-full py-2.5 px-6 font-display font-bold text-sm text-dark-bg bg-neon-green transition-transform active:scale-95 cursor-pointer shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:shadow-[0_0_25px_rgba(57,255,20,0.5)]"
            >
              <span className="relative z-10">¡Reserva Ahora!</span>
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </button>
          </div>

          {/* Mobile Menu Toggler */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-bg/95 backdrop-blur-lg border-b border-white/5 absolute top-full left-0 w-full px-4 py-6 space-y-4 shadow-xl">
          <a
            href="#instalaciones"
            onClick={() => setIsOpen(false)}
            className="block text-gray-200 hover:text-[#00F0FF] text-base font-medium py-2 transition-colors border-b border-white/5"
          >
            Instalaciones
          </a>
          <a
            href="#cumpleanos"
            onClick={() => setIsOpen(false)}
            className="block text-gray-200 hover:text-neon-green text-base font-medium py-2 transition-colors border-b border-white/5"
          >
            Cumpleaños
          </a>
          <a
            href="#tarifas"
            onClick={() => setIsOpen(false)}
            className="block text-gray-200 hover:text-lava-orange text-base font-medium py-2 transition-colors border-b border-white/5"
          >
            Tarifas
          </a>
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="block text-gray-200 hover:text-[#00F0FF] text-base font-medium py-2 transition-colors"
          >
            Contacto
          </a>
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenBooking();
            }}
            className="w-full text-center py-3 rounded-xl font-display font-bold text-dark-bg bg-neon-green block shadow-[0_0_15px_rgba(57,255,20,0.3)]"
          >
            ¡Reserva Ahora!
          </button>
        </div>
      )}
    </nav>
  );
}
