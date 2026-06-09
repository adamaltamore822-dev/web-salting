import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Cake, ShieldCheck, Gamepad2, Award, Users, Star, Smile } from 'lucide-react';

interface FeaturesProps {
  onOpenBooking: () => void;
}

export default function Features({ onOpenBooking }: FeaturesProps) {
  const [activeTab, setActiveTab] = useState<'trampolines' | 'lasertag' | 'cumpleanos'>('trampolines');

  const tabs = [
    {
      id: 'trampolines' as const,
      label: 'Zona de Saltos',
      icon: Zap,
      color: 'text-lava-orange border-lava-orange',
      bgGlow: 'bg-lava-orange/10',
    },
    {
      id: 'lasertag' as const,
      label: 'Arena Laser Tag',
      icon: Gamepad2,
      color: 'text-neon-blue border-neon-blue',
      bgGlow: 'bg-neon-blue/10',
    },
    {
      id: 'cumpleanos' as const,
      label: 'Cumpleaños Épicos',
      icon: Cake,
      color: 'text-neon-green border-neon-green',
      bgGlow: 'bg-neon-green/10',
    },
  ];

  return (
    <section id="instalaciones" className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Absolute Decorative Glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-lava-orange/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-neon-green/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title / Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-mono text-[#00F0FF] uppercase tracking-widest">Nuestras Atracciones</h2>
          <p className="mt-3 text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white">
            Explora la diversión extrema en Reus
          </p>
          <p className="mt-4 text-gray-400 text-lg">
            Combinamos trampolines de salto libre con la arena de combate láser más avanzada de Tarragona. ¡Apto para todas las edades!
          </p>
        </div>

        {/* Dynamic Tab Toggles */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-dark-card/80 border border-white/5 rounded-2xl p-1.5 backdrop-blur-md max-w-full overflow-x-auto gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-3 px-6 rounded-xl font-display font-bold text-sm sm:text-base whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-dark-bg to-dark-card text-white border border-white/10 shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? tab.color.split(' ')[0] : 'text-gray-400'}`} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Contents with AnimatePresence */}
        <div className="bg-dark-card/40 border border-white/5 rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden backdrop-blur-sm">
          <AnimatePresence mode="wait">
            {activeTab === 'trampolines' && (
              <motion.div
                key="trampolines"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-block bg-lava-orange/10 border border-lava-orange/25 text-lava-orange font-mono font-bold text-xs rounded-full px-3 py-1">
                    Camas Elásticas de Última Generación
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                    Superficie de Salto Infinitas &amp; Zonas Pro
                  </h3>
                  <p className="text-gray-300 font-light leading-relaxed">
                    Siente la libertad en un espacio diseñado de forma segura para dar rienda suelta a tus trucos y saltos. Contamos con camas de alto rendimiento, zonas de canastas de baloncesto acolchadas y fosos de espuma blanda para amortiguar tus acrobacias más atrevidas.
                  </p>
                  
                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-lava-orange/10 border border-lava-orange/20 text-lava-orange">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Seguridad Certificada</h4>
                        <p className="text-xs text-gray-400 mt-0.5">Mallado reforzado y protección acolchada integral de 5cm.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-lava-orange/10 border border-lava-orange/20 text-lava-orange">
                        <Award className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Zona de Free Jump y Pro</h4>
                        <p className="text-xs text-gray-400 mt-0.5">Trampolines olímpicos de rebote rápido para saltadores experimentados.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-lava-orange/10 border border-lava-orange/20 text-lava-orange">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Monitores Calificados</h4>
                        <p className="text-xs text-gray-400 mt-0.5">Asistencia supervisada constante para guiar tus trucos.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-lava-orange/10 border border-lava-orange/20 text-lava-orange">
                        <Smile className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Apto Desde los 4 Años</h4>
                        <p className="text-xs text-gray-400 mt-0.5">Zonas adaptadas con camas para que los más peques salten seguros.</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={onOpenBooking}
                      className="py-3.5 px-8 rounded-full font-display font-bold text-sm bg-lava-orange hover:bg-lava-orange/90 text-white shadow-lg hover:scale-105 transition-all"
                    >
                      Reservar Saltos (Desde 10€)
                    </button>
                    <span className="ml-4 text-xs text-gray-400 font-mono">*Requiere calcetines antideslizantes</span>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-lava-orange/20 to-transparent rounded-2xl filter blur-2xl pointer-events-none" />
                  <img
                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop"
                    alt="Salto de trampolín acrobático"
                    className="relative z-10 w-full h-[380px] object-cover rounded-2xl border border-white/10 shadow-2xl"
                  />
                </div>
              </motion.div>
            )}

            {activeTab === 'lasertag' && (
              <motion.div
                key="lasertag"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-block bg-[#00F0FF]/10 border border-[#00F0FF]/25 text-[#00F0FF] font-mono font-bold text-xs rounded-full px-3 py-1">
                    Arena Tematizada Láser 2.0
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                    Combates Láser de Alta Tecnología
                  </h3>
                  <p className="text-gray-300 font-light leading-relaxed">
                    Adéntrate en nuestra arena laberíntica futurista con iluminación negra, humo controlado, música trepidante y efectos de luces de neón. Equipado con pistolas láser y chalecos de última generación que detectan impactos al milisegundo. Todo un desafío de estrategia en grupo.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neon-blue/10 border border-neon-blue/20 text-[#00F0FF]">
                        <Star className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white font-display">Equipamiento Avanzado</h4>
                        <p className="text-xs text-gray-400 mt-0.5">Chalecos inteligentes táctiles y emisores láser infrarrojos seguros.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neon-blue/10 border border-neon-blue/20 text-[#00F0FF]">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Multijugador Dinámico</h4>
                        <p className="text-xs text-gray-400 mt-0.5">De 6 a 18 jugadores en simultáneo por equipos o todos contra todos.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neon-blue/10 border border-neon-blue/20 text-[#00F0FF]">
                        <Gamepad2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Modos de Juego Variados</h4>
                        <p className="text-xs text-gray-400 mt-0.5">Captura la base, infección zombie y rey de la colina.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neon-blue/10 border border-neon-blue/20 text-[#00F0FF]">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Infrarrojos No-Daños</h4>
                        <p className="text-xs text-gray-400 mt-0.5">Totalmente inofensivo para los ojos. Certificación de seguridad.</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={onOpenBooking}
                      className="py-3.5 px-8 rounded-full font-display font-bold text-sm bg-neon-blue hover:bg-[#00D0DF] text-dark-bg shadow-lg hover:scale-105 transition-all shadow-[#00F0FF]/25"
                    >
                      Reservar Partida Laser Tag (Desde 8€)
                    </button>
                    <span className="ml-4 text-xs text-gray-400 font-mono">*Mínimo recomendado: 6 años</span>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#00F0FF]/20 to-transparent rounded-2xl filter blur-2xl pointer-events-none" />
                  <img
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop"
                    alt="Futuristic Laser tag Arena"
                    className="relative z-10 w-full h-[380px] object-cover rounded-2xl border border-white/10 shadow-2xl"
                  />
                </div>
              </motion.div>
            )}

            {activeTab === 'cumpleanos' && (
              <motion.div
                key="cumpleanos"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-block bg-neon-green/10 border border-neon-green/25 text-neon-green font-mono font-bold text-xs rounded-full px-3 py-1">
                    Fiestas de Cumpleaños Personalizadas sin Estrés
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                    Los Cumpleaños Más Épicos con Monitores Exclusivos
                  </h3>
                  <p className="text-gray-300 font-light leading-relaxed">
                    ¿Quieres un cumpleaños inolvidable y libre de estrés para los padres? Nos encargamos de todo. Nuestro pack incluye saltos ilimitados, batallas en la arena de Laser Tag, merienda deliciosa (con opciones sin gluten y variadas) y el cuidado atento de nuestros monitores favoritos como <strong>Alex</strong> o <strong>Nahiara</strong>, quienes se encargarán de dinamizar los juegos y soplar las velas.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neon-green/10 border border-neon-green/20 text-neon-green">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Monitor Dedicado</h4>
                        <p className="text-xs text-gray-400 mt-0.5">Alex o Nahiara guiarán al grupo por todas las atracciones paso a paso.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neon-green/10 border border-neon-green/20 text-neon-green">
                        <Cake className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Merienda Incluida</h4>
                        <p className="text-xs text-gray-400 mt-0.5">Pizzas, snacks, refrescos, tarta de aniversario elegida y bolsas de chuches.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neon-green/10 border border-neon-green/20 text-neon-green">
                        <Smile className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white font-display">Sala Privada</h4>
                        <p className="text-xs text-gray-400 mt-0.5">Mesa reservada para abrir los regalos y soplar las velas tranquilamente.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neon-green/10 border border-neon-green/20 text-neon-green">
                        <Award className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Anfitrión VIP Regalado</h4>
                        <p className="text-xs text-gray-400 mt-0.5">¡El cumpleañero recibe una entrada de 1 hora gratis para su próxima visita!</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={onOpenBooking}
                      className="py-3.5 px-8 rounded-full font-display font-bold text-sm bg-neon-green hover:bg-neon-green/90 text-dark-bg shadow-lg hover:scale-105 transition-all shadow-neon-green/25"
                    >
                      Reservar Cumpleaños (Desde 15€/persona)
                    </button>
                    <span className="ml-4 text-xs text-gray-400 font-mono">*Mínimo 8 participantes para activar pack aniversario</span>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-neon-green/20 to-transparent rounded-2xl filter blur-2xl pointer-events-none" />
                  <img
                    src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop"
                    alt="Celebración infantil cumpleaños"
                    className="relative z-10 w-full h-[380px] object-cover rounded-2xl border border-white/10 shadow-2xl"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
