import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Wrench, Disc, Activity, Zap, Settings, ShoppingBag, ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Settings,
    title: 'Mecánica General',
    desc:  'Diagnóstico completo y mantenimiento preventivo para mantener tu vehículo en óptimas condiciones.',
    tags:  ['Revisión', 'Aceite', 'Filtros'],
  },
  {
    icon: Disc,
    title: 'Sistema de Frenos',
    desc:  'Reparación y cambio de pastillas, discos y líquido de frenos. Seguridad garantizada en cada frenada.',
    tags:  ['Pastillas', 'Discos', 'Líquido'],
  },
  {
    icon: Activity,
    title: 'Suspensión y Dirección',
    desc:  'Revisión y cambio de amortiguadores, resortes, rotulas y terminales para un manejo preciso.',
    tags:  ['Amortiguadores', 'Rotulas', 'Alineación'],
  },
  {
    icon: Wrench,
    title: 'Motor y Transmisión',
    desc:  'Reparación de motores, caja de cambios, diferencial y embrague con piezas de primera calidad.',
    tags:  ['Motor', 'Caja', 'Embrague'],
  },
  {
    icon: Zap,
    title: 'Sistema Eléctrico',
    desc:  'Diagnóstico eléctrico computarizado, reparación de fallas eléctricas y instalaciones automotrices.',
    tags:  ['Diagnóstico', 'Batería', 'ECU'],
  },
  {
    icon: ShoppingBag,
    title: 'Venta de Repuestos',
    desc:  'Amplio stock de repuestos originales y alternos para todas las marcas y modelos del mercado.',
    tags:  ['Originales', 'Importados', 'Todas las marcas'],
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.55, ease: 'easeOut' }}
      className="group relative bg-brand-dark border border-white/5 hover:border-brand-red/40 rounded-2xl p-8 flex flex-col gap-5 transition-all duration-300 hover:shadow-xl hover:shadow-brand-red/10 overflow-hidden cursor-default"
    >
      {/* Hover fill */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 right-0 w-full h-full bg-brand-red/10" />
      </div>

      <div className="relative">
        <div className="inline-flex p-3 bg-brand-red/10 border border-brand-red/20 rounded-xl mb-1 group-hover:bg-brand-red/20 transition-colors duration-300">
          <service.icon size={24} className="text-brand-red" />
        </div>
      </div>

      <div className="relative flex flex-col gap-3 flex-1">
        <h3 className="font-heading font-bold text-2xl text-white tracking-wide">{service.title}</h3>
        <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
      </div>

      <div className="relative flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span key={tag} className="px-2.5 py-1 bg-white/5 text-white/40 text-xs rounded-full border border-white/5">
            {tag}
          </span>
        ))}
      </div>

      <div className="relative flex items-center gap-1 text-brand-red text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>Ver más</span>
        <ArrowRight size={14} />
      </div>
    </motion.article>
  )
}

export default function Services() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section id="servicios" className="py-24 md:py-32 bg-brand-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-diagonal-pattern pointer-events-none opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
            Lo que hacemos
          </p>
          <h2 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl uppercase text-white leading-none mb-6">
            Nuestros <span className="text-brand-red">Servicios</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            Contamos con equipos de diagnóstico de última generación y técnicos certificados
            para cada área del servicio automotriz.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-14"
        >
          <button
            onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-red hover:bg-brand-darkred text-white font-semibold rounded transition-all duration-200 hover:shadow-xl hover:shadow-brand-red/30 cursor-pointer"
          >
            Solicitar un Servicio
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
