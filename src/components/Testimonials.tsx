import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name:    'Carlos Mendoza',
    role:    'Propietario de flota de transporte',
    stars:   5,
    comment: 'Llevé mi camión con un problema de motor que nadie había podido diagnosticar. En IPSA lo identificaron en minutos con su escáner. Trabajo excelente, precio justo y me explicaron todo el proceso. Ya son mis mecánicos de confianza.',
    vehicle: 'Camión Hino',
    initials: 'CM',
  },
  {
    name:    'María Fernanda Torres',
    role:    'Clienta frecuente',
    stars:   5,
    comment: 'Siempre traigo mi auto aquí para el mantenimiento. Me gusta que son honestos, te dicen exactamente qué necesitas y qué puede esperar. Los repuestos son originales y el trabajo tiene garantía. 100% recomendados.',
    vehicle: 'Chevrolet Sail',
    initials: 'MT',
  },
  {
    name:    'Roberto Alvarado',
    role:    'Empresario',
    stars:   5,
    comment: 'El sistema de frenos de mi camioneta estaba fallando y lo arreglaron en un día. Atienden rápido, son responsables y el precio fue muy razonable. La calidad del servicio supera a cualquier otro taller de la ciudad.',
    vehicle: 'Toyota Hilux',
    initials: 'RA',
  },
  {
    name:    'Patricia Vega',
    role:    'Docente',
    stars:   5,
    comment: 'Me atendieron con mucha amabilidad y profesionalismo. Tenía miedo de que me cobraran demás por ser mujer, pero todo fue transparente. Me mostraron las piezas cambiadas y explicaron por qué. Excelente servicio.',
    vehicle: 'Hyundai i10',
    initials: 'PV',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section className="py-24 md:py-32 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
            Lo que dicen nuestros clientes
          </p>
          <h2 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl uppercase text-white leading-none">
            TESTIMONIOS<br /><span className="text-brand-red">REALES</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: 'easeOut' }}
              className="relative bg-brand-black border border-white/5 hover:border-brand-red/20 rounded-2xl p-8 flex flex-col gap-5 transition-colors duration-300"
            >
              {/* Quote icon */}
              <Quote size={28} className="text-brand-red/20 flex-shrink-0" />

              {/* Stars */}
              <Stars count={t.stars} />

              {/* Comment */}
              <p className="text-white/65 text-sm leading-relaxed flex-1">"{t.comment}"</p>

              {/* Vehicle tag */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-brand-red/10 border border-brand-red/15 rounded-full w-fit">
                <span className="text-brand-red text-xs font-medium">{t.vehicle}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0">
                  <span className="font-heading font-bold text-sm text-white">{t.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <div className="inline-flex flex-col items-center gap-2 px-8 py-5 bg-brand-black border border-brand-red/20 rounded-2xl">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="font-heading font-bold text-3xl text-white">5.0 / 5.0</p>
            <p className="text-white/40 text-sm">Calificación promedio de nuestros clientes</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
