import { MessageSquare, Phone, MapPin, Zap, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080E] text-gray-400 py-16 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          
          {/* Logo Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-lava-orange via-electric-purple to-neon-blue p-0.5 shadow-md shadow-lava-orange/10">
                <span className="flex h-full w-full items-center justify-center rounded-[7px] bg-dark-bg">
                  <Zap className="h-4 w-4 text-neon-green" />
                </span>
              </span>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg tracking-tight text-white leading-none">
                  SALTING REUS
                </span>
                <span className="font-mono text-[8px] tracking-widest text-[#00F0FF] leading-none mt-0.5">
                  &amp; LASERTAG
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-light text-gray-400 leading-relaxed max-w-sm">
              El centro de entretenimiento familiar y diversión extrema más completo del Baix Camp. Combinación inigualable de parque de camas elásticas de nivel olímpico con la arena futurista de Laser Tag.
            </p>

            {/* Micro rating */}
            <div className="flex items-center gap-2 pt-2 text-xs">
              <span className="h-2 w-2 rounded-full bg-neon-green" />
              <span>Valorado por miles de familias de Tarragona</span>
            </div>
          </div>

          {/* Quick links Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-extrabold text-[#F3F4F6] text-sm uppercase tracking-wider">Enlaces rápidos</h4>
            <div className="flex flex-col space-y-2.5 text-sm">
              <a href="#instalaciones" className="hover:text-neon-blue transition-colors w-fit">La Zona de Jumper</a>
              <a href="#instalaciones" className="hover:text-[#00F0FF] transition-colors w-fit">Laser Tag Arena</a>
              <a href="#instalaciones" className="hover:text-neon-green transition-colors w-fit">Cumpleaños de Aniversario</a>
              <a href="#contacto" className="hover:text-lava-orange transition-colors w-fit">Horarios de Apertura</a>
            </div>
          </div>

          {/* Location details Col */}
          <div className="md:col-span-4 space-y-4 text-sm font-light">
            <h4 className="font-display font-extrabold text-[#F3F4F6] text-sm uppercase tracking-wider">Datos Provinciales</h4>
            <div className="space-y-3">
              <div className="flex gap-2.5">
                <MapPin className="h-4 w-4 text-lava-orange shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-gray-400">
                  Carretera d'Alcolea del Pinar, 36 nave, 43206 Reus, Tarragona.
                </span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone className="h-4 w-4 text-[#00F0FF]" />
                <a href="tel:+34699300900" className="text-xs text-white hover:underline">
                  699 30 09 00
                </a>
              </div>
              <div className="flex gap-2.5 items-center">
                <MessageSquare className="h-4 w-4 text-neon-green" />
                <a href="https://saltingreus.com" target="_blank" rel="noreferrer" className="text-xs text-neon-green hover:underline">
                  saltingreus.com (Sitio web oficial)
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Lower footer copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-xs text-gray-500 font-light">
            &copy; {new Date().getFullYear()} Salting Reus &amp; lasertag. Todos los derechos reservados. Diseñado en Reus, Tarragona.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 hover:bg-white/10 text-xs text-gray-300 transition-colors"
          >
            Volver Arriba
            <ChevronUp className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
