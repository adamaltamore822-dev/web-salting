import { motion } from 'motion/react';
import { Star, Zap, Calendar, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Media with Dark Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/60 via-dark-bg/85 to-dark-bg z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/95 via-transparent to-dark-bg/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1561571994-3c61c554181a?q=80&w=1920&auto=format&fit=crop"
          alt="Trampoline park action background"
          className="w-full h-full object-cover scale-105 filter blur-[1px] brightness-75"
        />
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-electric-purple/10 rounded-full filter blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-neon-blue/10 rounded-full filter blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Google Reviews Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-dark-card/90 border border-white/10 rounded-full px-4 py-2 mb-8 shadow-lg backdrop-blur-md"
        >
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-200">
            <strong>4.5/5 estrellas</strong> en Google (1.768+ reseñas)
          </span>
        </motion.div>

        {/* Hero Headlines */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight max-w-5xl mx-auto"
        >
          Siente la adrenalina y vuela alto en{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lava-orange via-electric-purple to-[#00F0FF]">
            Salting Reus
          </span>{' '}
          &amp; lasertag
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
        >
          El parque de trampolines definitivo del Baix Camp fusionado con una arena de Laser Tag futurista. Diversión sin límites, acrobacias, estrategia y los cumpleaños más épicos.
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-4 px-8 rounded-full font-display font-bold text-base bg-gradient-to-r from-lava-orange to-electric-purple text-white shadow-[0_0_20px_rgba(255,85,0,0.3)] hover:shadow-[0_0_35px_rgba(255,85,0,0.6)] hover:scale-105 transition-all text-center cursor-pointer"
          >
            <Calendar className="h-5 w-5" />
            ¡Reserva tu Entrada o Fiesta!
          </button>
          
          <a
            href="#instalaciones"
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-4 px-8 rounded-full font-display font-semibold text-base border border-white/20 hover:border-[#00F0FF] text-white hover:bg-white/5 transition-all"
          >
            Explorar Instalaciones
            <ArrowRight className="h-4 w-4 text-[#00F0FF]" />
          </a>
        </motion.div>

        {/* Key Info Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 bg-dark-card/60 backdrop-blur-sm border border-white/5 rounded-3xl p-6 max-w-4xl mx-auto shadow-2xl"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-display font-bold text-lava-orange">1.500m²</div>
            <div className="text-xs sm:text-sm text-gray-400 mt-1">Superficie Total</div>
          </div>
          <div className="text-center border-l border-white/10">
            <div className="text-2xl sm:text-3xl font-display font-bold text-neon-green">2 Áreas</div>
            <div className="text-xs sm:text-sm text-gray-400 mt-1">Salting + Laser Arena</div>
          </div>
          <div className="text-center border-l md:border-l border-white/10 max-md:col-start-1 max-md:row-start-2">
            <div className="text-2xl sm:text-3xl font-display font-bold text-[#00F0FF]">+15 camas</div>
            <div className="text-xs sm:text-sm text-gray-400 mt-1">Trampolines de Élite</div>
          </div>
          <div className="text-center border-l border-white/10 max-md:col-start-2 max-md:row-start-2">
            <div className="text-2xl sm:text-3xl font-display font-bold text-electric-purple">1.7kB+</div>
            <div className="text-xs sm:text-sm text-gray-400 mt-1">Opiniones de Familias</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
