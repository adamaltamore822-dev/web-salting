import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Calendar, Users, Zap, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingForm({ isOpen, onClose }: BookingFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    participants: 10,
    activityType: 'combo', // 'trampolines' | 'lasertag' | 'combo' | 'birthday'
    addSocks: true,
    specialNotes: '',
    timeSlot: '17:30 - 19:30',
  });

  const [submitted, setSubmitted] = useState(false);

  // Pricing constants (in Euros)
  const prices: Record<string, number> = {
    trampolines: 10,
    lasertag: 8,
    combo: 15,
    birthday: 18,
  };

  const getPricePerPerson = () => {
    return prices[formData.activityType] || 10;
  };

  const calculateTotal = () => {
    const base = getPricePerPerson() * formData.participants;
    const socksPrice = formData.addSocks ? 2 * formData.participants : 0;
    return base + socksPrice;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      alert('Por favor, rellena los campos obligatorios (*)');
      return;
    }
    setSubmitted(true);
  };

  const resetForm = () => {
    setStep(1);
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      participants: 10,
      activityType: 'combo',
      addSocks: true,
      specialNotes: '',
      timeSlot: '17:30 - 19:30',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-dark-bg/85 backdrop-blur-md cursor-pointer"
        onClick={resetForm}
      />

      {/* Modal Card */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative bg-dark-card border border-white/10 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10 shadow-2xl p-6 sm:p-8"
      >
        {/* Close Button */}
        <button
          onClick={resetForm}
          className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="font-mono text-neon-blue text-xs uppercase tracking-widest block mb-1">
                Calculadora &amp; Pre-Reserva Gratis
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Personaliza tu Aventura
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Calcula el precio de tu visita o aniversario al instante y reserva tu plaza sin compromiso de pago online.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step indicator */}
              <div className="flex gap-2 mb-4">
                <span className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-[#00F0FF]' : 'bg-white/10'}`} />
                <span className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-electric-purple' : 'bg-white/10'}`} />
                <span className={`h-1.5 flex-1 rounded-full ${step >= 3 ? 'bg-neon-green' : 'bg-white/10'}`} />
              </div>

              {/* Step 1: Activity Type and Participants */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      ¿Qué quieres reservar?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, activityType: 'trampolines' })}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          formData.activityType === 'trampolines'
                            ? 'border-lava-orange bg-lava-orange/10 text-white'
                            : 'border-white/5 bg-white/5 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        <div className="font-bold text-sm">Saltos en Trampolines</div>
                        <div className="text-xs text-gray-400 mt-1">10€/pers · Camas olímpicas y arena libre</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, activityType: 'lasertag' })}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          formData.activityType === 'lasertag'
                            ? 'border-[#00F0FF] bg-neon-blue/10 text-white'
                            : 'border-white/5 bg-white/5 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        <div className="font-bold text-sm">Partidas de Laser Tag</div>
                        <div className="text-xs text-gray-400 mt-1">8€/pers · Laberinto neón y chalecos futuristas</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, activityType: 'combo' })}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          formData.activityType === 'combo'
                            ? 'border-electric-purple bg-electric-purple/10 text-white'
                            : 'border-white/5 bg-white/5 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        <div className="font-bold text-sm">Pack Aventura Combo 🔥</div>
                        <div className="text-xs text-gray-400 mt-1">15€/pers · 1h Saltos + 1 Partida Láser</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, activityType: 'birthday' })}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          formData.activityType === 'birthday'
                            ? 'border-neon-green bg-neon-green/10 text-white'
                            : 'border-white/5 bg-white/5 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        <div className="font-bold text-sm">Fiesta de Cumpleaños VIP 🎉</div>
                        <div className="text-xs text-gray-400 mt-1">18€/pers · Meriendas, monitor, tarta &amp; regalos</div>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      ¿Cuántas personas van a participar?
                    </label>
                    <div className="flex items-center gap-4 bg-white/5 border border-white/5 rounded-2xl p-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, participants: Math.max(1, formData.participants - 1) })}
                        className="h-10 w-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold"
                      >
                        -
                      </button>
                      <span className="font-display font-extrabold text-2xl text-white flex-1 text-center">
                        {formData.participants} {formData.participants === 1 ? 'Persona' : 'Personas'}
                      </span>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, participants: formData.participants + 1 })}
                        className="h-10 w-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold"
                      >
                        +
                      </button>
                    </div>
                    {formData.activityType === 'birthday' && formData.participants < 8 && (
                      <p className="text-amber-400 text-xs mt-1.5 flex items-center gap-1">
                        <ShieldAlert className="h-3.5 w-3.5 shrink-0" />
                        Aviso: Para cumpleaños VIP se requiere un mínimo de 8 invitados.
                      </p>
                    )}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="py-3 px-6 rounded-full font-display font-bold text-sm bg-neon-green text-dark-bg cursor-pointer hover:scale-105 transition-all"
                    >
                      Siguiente Paso →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Date, Time & Add-ons */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Fecha Seleccionada *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-white focus:outline-none focus:border-neon-blue"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Franja Horaria de Inicio
                      </label>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-white focus:outline-none"
                      >
                        <option value="16:00 - 18:00" className="bg-dark-bg">16:00 - 18:00 (Tarde)</option>
                        <option value="17:30 - 19:30" className="bg-dark-bg">17:30 - 19:30 (Recomendado)</option>
                        <option value="19:00 - 21:00" className="bg-dark-bg">19:00 - 21:00 (Último pase)</option>
                        <option value="11:00 - 13:00" className="bg-dark-bg">11:00 - 13:00 (Sábados/Domingos)</option>
                      </select>
                    </div>
                  </div>

                  {formData.activityType !== 'lasertag' && (
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                      <div className="flex-1 pr-4">
                        <div className="font-bold text-sm text-white">Calcetines Antideslizantes (+2€ por persona)</div>
                        <p className="text-xs text-gray-400 mt-1">
                          Obligatorio para saltar en los trampolines por motivos de higiene y seguridad. Si ya tienes en casa los puedes traer.
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={formData.addSocks}
                        onChange={(e) => setFormData({ ...formData, addSocks: e.target.checked })}
                        className="h-5 w-5 rounded border-white/10 bg-white/5 text-neon-green focus:ring-transparent accent-neon-green"
                      />
                    </div>
                  )}

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="py-3 px-6 rounded-full font-display font-bold text-sm border border-white/10 text-white hover:bg-white/5 transition-colors"
                    >
                      ← Atrás
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="py-3 px-6 rounded-full font-display font-bold text-sm bg-neon-green text-dark-bg cursor-pointer hover:scale-105 transition-all"
                    >
                      Siguiente Paso →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Details & Submit */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-1">
                        Nombre Completo de Contacto o Padre/Madre *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. María García"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-white focus:outline-none focus:border-neon-green"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-1">
                          Teléfono de Contacto Móvil *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="Ej. 699 30 09 00"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-white focus:outline-none focus:border-neon-green"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-1">
                          Correo Electrónico (Para recibir la confirmación)
                        </label>
                        <input
                          type="email"
                          placeholder="Ej. maria@correo.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-1">
                        Comentarios Especiales o Nombre del Cumpleañero
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Edades del grupo, alergias alimentarias, monitor preferido..."
                        value={formData.specialNotes}
                        onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-white focus:outline-none resize-none"
                      />
                    </div>
                  </div>

                  {/* Pricing Summary Card */}
                  <div className="bg-white/5 border border-white/5 rounded-2xl p-4 space-y-2">
                    <div className="flex justify-between text-xs text-gray-400 font-mono">
                      <span>Tarifa base ({formData.participants} pers x {getPricePerPerson()}€)</span>
                      <span>{getPricePerPerson() * formData.participants},00 €</span>
                    </div>
                    {formData.addSocks && formData.activityType !== 'lasertag' && (
                      <div className="flex justify-between text-xs text-gray-400 font-mono">
                        <span>Calcetines antideslizantes ({formData.participants} pers x 2€)</span>
                        <span>{2 * formData.participants},00 €</span>
                      </div>
                    )}
                    <span className="block border-t border-white/10 my-2" />
                    <div className="flex justify-between text-base font-bold text-white font-display">
                      <span>Precio Estimado Total:</span>
                      <span className="text-neon-green">{calculateTotal()},00 €</span>
                    </div>
                    <div className="text-[11px] text-gray-400 mt-1 flex items-center gap-1 font-light leading-snug">
                      <CheckCircle2 className="h-3 w-3 text-neon-green shrink-0" />
                      No cobramos nada hoy. Confirmamos tu disponibilidad por llamada o WhatsApp en menos de 2 horas laborables.
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="py-3 px-6 rounded-full font-display font-bold text-sm border border-white/10 text-white hover:bg-white/5 transition-colors"
                    >
                      ← Atrás
                    </button>
                    <button
                      type="submit"
                      className="py-3 px-8 rounded-full font-display font-bold text-base bg-neon-green text-dark-bg cursor-pointer hover:scale-105 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(57,255,20,0.3)]"
                    >
                      <Sparkles className="h-4 w-4" />
                      Enviar Solicitud Gratis
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        ) : (
          /* Submission success state */
          <div className="text-center py-10 space-y-6">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-neon-green/15 text-neon-green mb-2 ring-8 ring-neon-green/5">
              <Check className="h-10 w-10" />
            </div>

            <h3 className="text-3xl font-display font-extrabold text-white">
              ¡Pre-Reserva Enviada Correctamente!
            </h3>
            <p className="text-gray-300 text-base max-w-md mx-auto">
              Muchas gracias <strong>{formData.name}</strong>. Hemos registrado tu interés para el día <strong>{formData.date}</strong> a las <strong>{formData.timeSlot}</strong>.
            </p>

            {/* Receipt detail */}
            <div className="bg-white/5 max-w-sm mx-auto border border-white/10 rounded-2xl p-5 text-left space-y-3">
              <div className="text-xs font-mono text-neon-blue uppercase">Resumen de la Solicitud</div>
              <div className="flex justify-between text-sm text-gray-200">
                <span className="text-gray-400">Grupo:</span>
                <span>{formData.participants} participantes</span>
              </div>
              <div className="flex justify-between text-sm text-gray-200">
                <span className="text-gray-400">Actividad:</span>
                <span className="capitalize font-medium">
                  {formData.activityType === 'trampolines' && 'Saltos en Trampolines'}
                  {formData.activityType === 'lasertag' && 'Partidas Laser Tag'}
                  {formData.activityType === 'combo' && 'Pack Combo Salto + Láser'}
                  {formData.activityType === 'birthday' && 'Cumpleaños Aniversario 🎉'}
                </span>
              </div>
              <div className="flex justify-between text-sm text-gray-200">
                <span className="text-gray-400">Total calculado:</span>
                <span className="font-bold text-neon-green">{calculateTotal()}€</span>
              </div>
            </div>

            <p className="text-xs text-gray-400 max-w-md mx-auto">
              Un monitor del equipo de <strong>Salting Reus &amp; lasertag</strong> te llamará o escribirá un WhatsApp al número <strong>{formData.phone}</strong> para finalizar la confirmación de la hora exacta de entrada y resolver dudas.
            </p>

            <div className="pt-4">
              <button
                onClick={resetForm}
                className="py-3 px-8 rounded-full font-display font-bold text-sm bg-white/5 hover:bg-white/10 text-white transition-colors"
              >
                Volver a la Página Principal
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
