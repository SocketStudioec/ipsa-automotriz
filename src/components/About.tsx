import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, MapPin, Calendar, Users } from 'lucide-react'

const MECHANIC_IMG  = 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=900&q=80&auto=format&fit=crop'
const WORKSHOP_IMG  = 'https://images.unsplash.com/photo-1632823471565-1ecdf5c6da2f?w=600&q=75&auto=format&fit=crop'

const values = [
  'Diagnóstico computarizado OBD de última generación',
  'Técnicos certificados con más de 15 años de experiencia',
  'Repuestos originales e importados con garantía',
  'Presupuesto sin costo y sin compromiso',
  'Garantía real en todos nuestros trabajos',
  'Precios transparentes sin sorpresas',
]

const pillars = [
  { icon: Calendar, num: '2009',  label: 'Año de fundación' },
  { icon: Users,    num: '500+',  label: 'Clientes atendidos' },
  { icon: MapPin,   num: 'Sto. Domingo', label: 'Ecuador' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="nosotros" className="py-24 md:py-32 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left — Stacked photos ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            {/* Main large photo */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] w-full max-w-md mx-auto lg:mx-0">
              <img
                src={MECHANIC_IMG}
                alt="Técnico IPSA Automotriz trabajando"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />

              {/* Red bar on left edge */}
              <div className="absolute top-8 bottom-8 left-0 w-1 bg-brand-red rounded-r" />

              {/* Bottom caption bar */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-4 backdrop-blur-sm bg-brand-black/60 border-t border-white/10">
                <p className="font-heading font-bold text-white text-lg">IPSA Automotriz</p>
                <p className="text-white/50 text-xs tracking-wide">Santo Domingo, Ecuador · Desde 2009</p>
              </div>
            </div>

            {/* Floating small photo — top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.55 }}
              className="absolute -right-4 top-8 w-40 h-28 rounded-xl overflow-hidden border-2 border-brand-dark shadow-2xl hidden md:block"
            >
              <img
                src={WORKSHOP_IMG}
                alt="Taller IPSA"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-black/20" />
            </motion.div>

            {/* Stat badge — bottom right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -right-4 -bottom-6 bg-brand-red rounded-2xl px-6 py-5 shadow-2xl shadow-brand-red/30"
            >
              <p className="font-heading font-black text-5xl text-white leading-none">15+</p>
              <p className="text-white/75 text-xs mt-1 font-medium">años de<br/>experiencia</p>
            </motion.div>
          </motion.div>

          {/* ── Right — Copy ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase mb-4">Quiénes somos</p>
            <h2
              className="font-heading font-black uppercase text-white leading-none mb-7"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              MECÁNICA<br />DE<br /><span className="text-brand-red">CONFIANZA</span>
            </h2>

            <p className="text-white/60 text-base leading-relaxed mb-4">
              IPSA Automotriz nació en Santo Domingo con una misión clara: brindar
              servicios de mecánica y repuestos de altísima calidad. Desde 2009 somos
              el taller de confianza de cientos de familias y empresas en la región.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Nuestros técnicos trabajan con tecnología de diagnóstico computarizado
              para identificar cualquier falla con precisión, brindando soluciones
              rápidas, honestas y con garantía real.
            </p>

            {/* Values checklist */}
            <ul className="flex flex-col gap-2.5 mb-10">
              {values.map((v, i) => (
                <motion.li
                  key={v}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                  className="flex items-start gap-3 text-sm text-white/65"
                >
                  <CheckCircle size={15} className="text-brand-red flex-shrink-0 mt-0.5" />
                  {v}
                </motion.li>
              ))}
            </ul>

            {/* Mini pillars */}
            <div className="grid grid-cols-3 gap-3 mb-10">
              {pillars.map(({ icon: Icon, num, label }) => (
                <div key={label} className="bg-brand-black border border-white/5 rounded-xl p-4 text-center">
                  <Icon size={16} className="text-brand-red mx-auto mb-2" />
                  <p className="font-heading font-black text-white text-lg leading-none">{num}</p>
                  <p className="text-white/35 text-[10px] mt-1 leading-tight">{label}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 bg-brand-red hover:bg-brand-darkred text-white font-bold rounded tracking-wide transition-all duration-200 hover:shadow-xl hover:shadow-brand-red/30 cursor-pointer"
            >
              Contáctanos Hoy
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
