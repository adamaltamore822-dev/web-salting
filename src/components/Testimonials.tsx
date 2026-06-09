import { Star, MessageSquare } from 'lucide-react';
import { Review } from '../types';

export default function Testimonials() {
  const reviews: Review[] = [
    {
      id: 'rev_1',
      author: 'Lorena Fuentes Martínez',
      rating: 5,
      date: 'Hace 1 semana',
      text: '¡Es el segundo cumpleaños que celebramos aquí y todo ha sido perfecto! El monitor Alex estuvo increíblemente atento con todos los niños, se encargó de dinamizar los juegos en el salto libre y en el laser tag. Los niños salieron cansadísimos pero contentísimos. Para los padres es comodísimo porque se ocupan de absolutamente todo: las pizzas, refrescos y los regalos.',
      tag: 'Cumpleaños',
    },
    {
      id: 'rev_2',
      author: 'Joan Clua Rovira',
      rating: 5,
      date: 'Hace 3 semanas',
      text: 'Instalaciones gigantescas y muy limpias. Los trampolines están en perfecto estado y la arena de laser tag es brutal, de las mejores en el Baix Camp de Tarragona ya que está totalmente tematizada de neón. El trato de la monitora Nahiara fue maravilloso, súper atenta con las medidas de seguridad pero haciendo que los niños se lo pasaran en grande. Volveremos sin duda.',
      tag: 'Laser Tag',
    },
    {
      id: 'rev_3',
      author: 'Patricia Beltrán Santamaría',
      rating: 4,
      date: 'Hace 1 mes',
      text: 'Fuimos un grupo de amigos a jugar al laser tag y luego saltar una hora. Es genial que tengan el pack combo porque te permite probar las dos zonas por un precio muy razonable. Reus necesitaba un sitio así de ocio juvenil y familiar. El personal de recepción es súper ágil gestionando las entradas y dando las pautas iniciales de seguridad.',
      tag: 'Trampolines',
    },
  ];

  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden border-t border-white/5">
      {/* Glow decorative blur */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-electric-purple/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-mono text-neon-green uppercase tracking-widest">Testimonios Reales</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-display font-extrabold text-white">
            Lo que opinan las familias de Reus
          </p>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span className="text-gray-300 text-sm">
              <strong>4.5 / 5 estrellas</strong> de valoración media basado en <strong>1.768+ opiniones</strong> en Google.
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-dark-card border border-white/5 hover:border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all relative group"
            >
              {/* Quote bubble style ornament */}
              <div className="absolute top-4 right-6 text-white/5 group-hover:text-white/10 transition-colors">
                <MessageSquare className="h-12 w-12" />
              </div>

              <div className="space-y-4">
                {/* Stars and Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-500">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                    review.tag === 'Cumpleaños' ? 'bg-neon-green/10 text-neon-green border border-neon-green/20' :
                    review.tag === 'Laser Tag' ? 'bg-neon-blue/10 text-neon-blue border border-neon-blue/20' :
                    'bg-lava-orange/10 text-lava-orange border border-lava-orange/20'
                  }`}>
                    {review.tag}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-sm font-light leading-relaxed relative z-10">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author / Metadata */}
              <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-br from-lava-orange to-electric-purple text-white font-display font-extrabold text-sm shadow-md">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">{review.author}</h4>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <span>Verificada en Google</span>
                    <span className="text-gray-600 font-bold">·</span>
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout box */}
        <div className="mt-16 bg-white/5 border border-white/5 rounded-2xl p-6 text-center max-w-2xl mx-auto">
          <p className="text-sm text-gray-300 font-light">
            ¿Has venido recientemente a celebrar un aniversario o saltar con nosotros? Déjanos tu valoración en Google y ayúdanos a seguir mejorando para ofrecer el mejor servicio de Reus. ¡Pregunta a Alex o Nahiara para saber tu regalo!
          </p>
        </div>
      </div>
    </section>
  );
}
