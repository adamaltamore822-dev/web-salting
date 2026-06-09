import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: '¿Qué ropa se debe llevar y se necesitan calcetines especiales?',
      answer: 'Para saltar en los trampolines es obligatorio vestir ropa cómoda o deportiva y usar calcetines antideslizantes de Salting. Si ya dispones de calcetines antideslizantes de visitas anteriores o de otros parques, puedes traerlos y usarlos sin problema. Si no tienes, puedes adquirirlos en el mostrador por solo 2€ por persona.',
    },
    {
      question: '¿Se requiere reserva previa para venir a saltar o jugar al Laser Tag?',
      answer: 'Para saltar por libre de lunes a jueves no suele ser obligatorio reservar, aunque se recomienda para asegurar tu hora de entrada. Para los fines de semana (viernes, sábados y domingos) y festivos, la reserva previa es ALTAMENTE RECOMENDADA ya que el aforo suele completarse rápido. Los cumpleaños siempre deben pre-reservarse con un mínimo de 1-2 semanas de antelación.',
    },
    {
      question: '¿Cuál es la edad mínima para participar en el Laser Tag?',
      answer: 'Recomendamos que los participantes de Laser Tag tengan al menos 6 años. Esto se debe a que el equipamiento (chaleco sensor de luz y pistola láser) tiene un peso ligero pero requiere que el niño se sienta cómodo desplazándose por la pista de neón a oscuras con el grupo de juego de forma autónoma. No hay límite de edad máxima, ¡también es divertidísimo para adultos!',
    },
    {
      question: '¿Cómo funcionan los monitores y la seguridad en los cumpleaños infantiles?',
      answer: 'En Salting Reus la seguridad es lo primero. En las fiestas de aniversario, asignamos monitores especializados (como Alex o Nahiara) que se encargan de guiar al grupo en todo momento, explicar las pautas de seguridad, animar las partidas y velar por el correcto comportamiento. En la merienda, asisten a los niños con las pizzas y la tarta.',
    },
    {
      question: '¿Tenéis opciones para intolerancias alimenticias o celíacos en los menús?',
      answer: 'Sí, absolutamente. En las fiestas de cumpleaños ofrecemos menús adaptados y opciones de snacks/pizzas sin gluten o sin lactosa para que ningún niño se quede sin merendar. Solo debes indicárnoslo al tramitar la pre-reserva o cuando te llamemos para coordinizar los detalles.',
    },
  ];

  return (
    <section className="py-24 bg-dark-bg/50 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-purple/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <HelpCircle className="h-10 w-10 text-electric-purple mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-400 mt-3 text-base">
            Todo lo que necesitas saber antes de tu visita a Salting Reus &amp; lasertag
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-dark-card border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-white text-base sm:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#00F0FF] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {isOpen && (
                  <div className="p-6 pt-0 border-t border-white/5 text-gray-300 text-sm sm:text-base font-light leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
