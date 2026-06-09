import { useState, FormEvent } from 'react';
import { MapPin, Phone, Clock, Mail, Globe, Send, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Por favor, rellena el nombre y el teléfono.');
      return;
    }
    setSuccess(true);
  };

  const handleReset = () => {
    setSuccess(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contacto" className="py-24 bg-dark-bg border-t border-white/5 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-lava-orange/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-mono text-[#00F0FF] uppercase tracking-widest font-bold">Ubicación y Horarios</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-display font-extrabold text-white">
            ¿Dónde estamos? ¡Ven a Salting!
          </p>
          <p className="mt-4 text-gray-400 text-lg">
            Estamos situados en el polígono industrial de Reus, muy fácil de llegar y con gran facilidad para aparcar gratis en la misma puerta.
          </p>
        </div>

        {/* Contact Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Details & Hours (Left Side) - 5 Cols */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-dark-card border border-white/5 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-display font-extrabold text-white flex items-center gap-2 pb-4 border-b border-white/10">
                <Clock className="text-neon-green h-5 w-5" />
                Horarios de Apertura
              </h3>
              
              <div className="space-y-4 font-light text-sm text-gray-300">
                <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                  <span className="font-semibold text-white">Lunes a Jueves</span>
                  <span className="font-mono text-xs bg-white/5 rounded px-2.5 py-1 text-gray-300">16:30 h - 20:30 h</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                  <span className="font-semibold text-white">Viernes</span>
                  <span className="font-mono text-xs bg-white/5 rounded px-2.5 py-1 text-[#00F0FF]">16:00 h - 21:00 h</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                  <span className="font-semibold text-white">Sábados</span>
                  <span className="font-mono text-xs bg-neon-green/10 rounded px-2.5 py-1 text-neon-green font-bold">11:00 h - 21:00 h *</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="font-semibold text-white">Domingos y Festivos</span>
                  <span className="font-mono text-xs bg-neon-green/10 rounded px-2.5 py-1 text-neon-green font-bold">11:00 h - 21:00 h *</span>
                </div>
                <div className="text-xs text-gray-400 font-light italic leading-relaxed pt-2">
                  * Fin de semana con apertura ininterrumpida todo el día. Recomendamos reservar franjas de cumpleaños con una antelación mínima de 2-3 semanas.
                </div>
              </div>
            </div>

            {/* Direct Contact Handles */}
            <div className="bg-dark-card border border-white/5 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
              <h3 className="text-xl font-display font-extrabold text-white pb-4 border-b border-white/10">
                Datos de Contacto
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-lava-orange/10 border border-lava-orange/20 text-lava-orange">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Dirección Física</h4>
                    <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                      Carretera d'Alcolea del Pinar, 36 nave, 43206 Reus, Tarragona.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-neon-blue/10 border border-neon-blue/20 text-[#00F0FF]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Teléfono Fijo / Móvil / WhatsApp</h4>
                    <p className="text-gray-400 text-xs mt-1">
                      <a href="tel:+34699300900" className="hover:text-neon-blue transition-colors text-base font-bold text-white">
                        699 30 09 00
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-neon-green/10 border border-neon-green/20 text-neon-green">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Página Web de Referencia</h4>
                    <p className="text-gray-400 text-xs mt-1">
                      <a href="https://saltingreus.com" target="_blank" rel="noreferrer" className="hover:text-neon-green underline transition-colors">
                        saltingreus.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map & Quick Message Form (Right Side) - 7 Cols */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Mock Map Placeholder */}
            <div className="bg-dark-card border border-white/5 rounded-3xl overflow-hidden shadow-xl group">
              <div className="p-4 bg-white/5 border-b border-white/5 flex items-center justify-between">
                <span className="font-display font-bold text-xs text-white uppercase tracking-wider block">
                  Ubicación exacta en Reus, Baix Camp
                </span>
                <span className="text-xs bg-neon-green/10 rounded-full px-2 py-0.5 text-neon-green font-mono">Fácil aparcamiento</span>
              </div>
              
              <div className="relative h-[254px] bg-dark-bg overflow-hidden flex items-center justify-center">
                {/* Background image map screenshot overlay styled beautifully */}
                <div className="absolute inset-0 bg-cover bg-center brightness-75 select-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />
                
                {/* Map Marker overlay */}
                <div className="relative z-10 bg-dark-card/90 border border-white/10 rounded-2xl p-4 max-w-sm mx-4 backdrop-blur-md text-left shadow-2xl flex items-start gap-3">
                  <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-lg bg-lava-orange text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">Salting Reus &amp; lasertag</h5>
                    <p className="text-xs text-gray-400 mt-1 leading-normal">
                      Ctra. d'Alcolea del Pinar, 36 (frente a naves comerciales). Reus, Tarragona.
                    </p>
                    <a 
                      href="https://maps.google.com/?q=Carretera+d'Alcolea+del+Pinar,+36,+43206+Reus,+Tarragona" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-block mt-2 font-display text-xs font-bold text-neon-blue hover:underline"
                    >
                      Abrir en Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact / Message Form */}
            <div className="bg-dark-card border border-white/5 rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-display font-extrabold text-white mb-2">
                ¿Tienes alguna duda o consulta?
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm font-light mb-6">
                Escríbenos directamente y Alex, Nahiara o nuestro equipo de recepción te responderán de inmediato.
              </p>

              {!success ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-1">Nombre Completo *</label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Juan Pérez"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-neon-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-1">Teléfono Móvil *</label>
                      <input
                        type="tel"
                        required
                        placeholder="Ej. 654 32 10 98"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-neon-blue"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1">Correo Electrónico (Opcional)</label>
                    <input
                      type="email"
                      placeholder="Ej. juan@correo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-neon-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1">Escribe tu pregunta o aclaración</label>
                    <textarea
                      rows={3}
                      placeholder="Preguntas sobre cumpleaños, reservas de grupos grandes o vestuarios..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white text-sm focus:outline-none resize-none focus:border-neon-blue"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-display font-bold text-sm bg-neon-blue text-dark-bg hover:scale-[1.01] transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                  >
                    <Send className="h-4 w-4" />
                    Enviar Consulta Directa
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-neon-green/15 text-neon-green">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">¡Mensaje Recibido!</h4>
                    <p className="text-gray-400 text-xs mt-1">
                      Gracias <strong>{formData.name}</strong>, nos pondremos en contacto contigo lo antes posible para resolver tus dudas.
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="mt-2 py-2 px-6 rounded-full font-display font-bold text-xs bg-white/5 hover:bg-white/10 text-white transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
