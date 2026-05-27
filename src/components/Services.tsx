import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title:  'Mecánica General',
    desc:   'Mantenimiento preventivo y correctivo. Revisión de aceite, filtros, correas y todos los sistemas del vehículo.',
    img:    'https://images.unsplash.com/photo-1504222490345-c075b626ef5a?w=600&q=75&auto=format&fit=crop',
    tags:   ['Aceite', 'Filtros', 'Correas'],
    accent: 'from-brand-red/80',
  },
  {
    title:  'Sistema de Frenos',
    desc:   'Cambio de pastillas, discos y líquido de frenos. Seguridad garantizada en cada kilómetro.',
    img:    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75&auto=format&fit=crop',
    tags:   ['Pastillas', 'Discos', 'Líquido'],
    accent: 'from-slate-900/90',
  },
  {
    title:  'Suspensión y Dirección',
    desc:   'Amortiguadores, resortes, rotulas y terminales. Dirección precisa y cómoda en todo terreno.',
    img:    'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=600&q=75&auto=format&fit=crop',
    tags:   ['Amortiguadores', 'Rótulas', 'Alineación'],
    accent: 'from-brand-red/70',
  },
  {
    title:  'Motor y Transmisión',
    desc:   'Reparación de motores, caja de cambios y diferencial con repuestos de primera calidad.',
    img:    'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=75&auto=format&fit=crop',
    tags:   ['Motor', 'Caja', 'Embrague'],
    accent: 'from-slate-900/90',
  },
  {
    title:  'Sistema Eléctrico',
    desc:   'Diagnóstico eléctrico computarizado. Reparación de fallas, batería, alternador y ECU.',
    img:    'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=600&q=75&auto=format&fit=crop',
    tags:   ['Diagnóstico OBD', 'Batería', 'ECU'],
    accent: 'from-brand-red/70',
  },
  {
    title:  'Venta de Repuestos',
    desc:   'Amplio stock de repuestos originales e importados para todas las marcas del mercado ecuatoriano.',
    img:    'https://images.unsplash.com/photo-1596638787647-904d822d751e?w=600&q=75&auto=format&fit=crop',
    tags:   ['Originales', 'Importados', 'Todas las marcas'],
    accent: 'from-slate-900/90',
  },
]

function ServiceCard({ s, index }: { s: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.55, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-2xl bg-brand-dark border border-white/5 hover:border-brand-red/30 transition-all duration-400 hover:shadow-2xl hover:shadow-brand-red/10 cursor-default"
      style={{ minHeight: 320 }}
    >
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src={s.img}
          alt={s.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Dark gradient over photo */}
        <div className={`absolute inset-0 bg-gradient-to-t ${s.accent} via-brand-black/70 to-transparent`} />
        <div className="absolute inset-0 bg-brand-black/50 group-hover:bg-brand-black/30 transition-colors duration-400" />
      </div>

      {/* Red top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-7" style={{ minHeight: 320 }}>
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {s.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-white/10 backdrop-blur-sm text-white/70 text-[10px] font-medium rounded-full border border-white/10 tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-heading font-black text-2xl text-white uppercase tracking-wide mb-2 leading-tight">
          {s.title}
        </h3>
        <p className="text-white/55 text-sm leading-relaxed mb-5">{s.desc}</p>

        <div className="flex items-center gap-1.5 text-brand-red text-sm font-semibold translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          Solicitar servicio <ArrowRight size={14} />
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="servicios" className="py-24 md:py-32 bg-brand-black relative">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase mb-3">Lo que hacemos</p>
            <h2
              className="font-heading font-black uppercase text-white leading-none"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
            >
              NUESTROS<br /><span className="text-brand-red">SERVICIOS</span>
            </h2>
          </div>
          <p className="text-white/45 text-sm leading-relaxed max-w-sm md:text-right">
            Equipos de diagnóstico de última generación y técnicos certificados para cada área del servicio automotriz.
          </p>
        </motion.div>

        {/* 3-col grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((s, i) => <ServiceCard key={s.title} s={s} index={i} />)}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <button
            onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-9 py-4 bg-brand-red hover:bg-brand-darkred text-white font-bold rounded transition-all duration-200 hover:shadow-2xl hover:shadow-brand-red/30 cursor-pointer tracking-wide"
          >
            Solicitar un Servicio <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
