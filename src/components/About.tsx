import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, MapPin } from 'lucide-react'

const values = [
  'Diagnóstico computarizado de última generación',
  'Técnicos certificados con más de 15 años de experiencia',
  'Repuestos originales e importados con garantía',
  'Atención personalizada y presupuesto sin compromiso',
  'Garantía en todos nuestros servicios',
  'Precios competitivos y transparentes',
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="nosotros" className="py-24 md:py-32 bg-brand-dark relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />

      {/* Background element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center" ref={ref}>

          {/* Left — Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative bg-brand-black border border-white/5 rounded-3xl overflow-hidden aspect-[4/3] flex items-center justify-center">
              {/* Industrial geometric design */}
              <div className="absolute inset-0">
                {/* Grid lines */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
                {/* Red diagonal stripe */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-red/15 rotate-45" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-red/10 rotate-45" />
              </div>

              {/* Center content */}
              <div className="relative text-center p-10">
                {/* Big logo mark */}
                <svg width="140" height="130" viewBox="0 0 100 100" fill="none" className="mx-auto mb-6">
                  <polygon points="50,4 96,94 4,94" fill="#CC1111" opacity="0.15" />
                  <polygon points="50,4 96,94 4,94" fill="none" stroke="#CC1111" strokeWidth="2" />
                  <rect x="28" y="34" width="44" height="8" fill="#CC1111" opacity="0.8" />
                  <rect x="42" y="34" width="16" height="38" fill="#CC1111" opacity="0.8" />
                  <path d="M55 46 Q68 46 68 56 Q68 66 55 66 Q42 66 42 76 Q42 86 55 86"
                    stroke="#CC1111" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.8" />
                </svg>

                <p className="font-heading font-black text-5xl tracking-widest text-white">IPSA</p>
                <p className="font-heading font-semibold text-sm tracking-[0.5em] text-brand-chrome uppercase mt-1">Automotriz</p>
                <p className="text-white/30 text-sm mt-4 tracking-wide">Santo Domingo · Ecuador</p>
              </div>

              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                <div className="flex items-center gap-2 bg-brand-dark/80 backdrop-blur-sm border border-brand-red/20 rounded-lg px-3 py-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white/70 text-xs">Abiertos hoy</span>
                </div>
                <div className="flex items-center gap-1.5 bg-brand-dark/80 backdrop-blur-sm border border-white/5 rounded-lg px-3 py-2">
                  <MapPin size={12} className="text-brand-red" />
                  <span className="text-white/70 text-xs">Santo Domingo</span>
                </div>
              </div>
            </div>

            {/* Side stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="absolute -right-4 -bottom-6 bg-brand-red rounded-2xl p-6 shadow-2xl shadow-brand-red/30"
            >
              <p className="font-heading font-black text-5xl text-white leading-none">15+</p>
              <p className="text-white/70 text-sm mt-1 leading-tight">Años<br/>sirviendo</p>
            </motion.div>
          </motion.div>

          {/* Right — Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
              Quiénes somos
            </p>
            <h2 className="font-heading font-black text-5xl md:text-6xl uppercase text-white leading-none mb-6">
              EXPERTOS EN<br /><span className="text-brand-red">TU VEHÍCULO</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              IPSA Automotriz nació con una misión clara: brindar servicios de mecánica y venta de
              repuestos de altísima calidad en Santo Domingo, Ecuador. Más de 15 años de trayectoria
              nos respaldan.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-10">
              Nuestro equipo de técnicos certificados trabaja con tecnología de diagnóstico de última
              generación para ofrecerte soluciones rápidas, transparentes y con garantía real.
            </p>

            <ul className="grid grid-cols-1 gap-3 mb-10">
              {values.map((v, i) => (
                <motion.li
                  key={v}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.45 }}
                  className="flex items-start gap-3 text-sm text-white/65"
                >
                  <CheckCircle size={16} className="text-brand-red flex-shrink-0 mt-0.5" />
                  {v}
                </motion.li>
              ))}
            </ul>

            <button
              onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3.5 bg-brand-red hover:bg-brand-darkred text-white font-semibold rounded transition-all duration-200 hover:shadow-xl hover:shadow-brand-red/30 cursor-pointer"
            >
              Contáctanos
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
