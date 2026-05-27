import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Wrench, Shield, Clock } from 'lucide-react'

const badges = [
  { icon: Wrench,  label: 'Expertos Certificados' },
  { icon: Shield,  label: 'Garantía de Trabajo' },
  { icon: Clock,   label: 'Atención Rápida' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function Hero() {
  const scrollToServices = () => {
    document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-black"
    >
      {/* Background — industrial red diagonal stripe */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Diagonal red band */}
        <div className="absolute top-0 right-0 w-2/5 h-full bg-brand-red clip-diagonal opacity-10" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Red glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-brand-red/20 rounded-full blur-[120px]" />
        {/* Diagonal line accents */}
        <svg className="absolute bottom-0 left-0 w-full h-32 text-brand-red/10" viewBox="0 0 1440 128" preserveAspectRatio="none">
          <path d="M0,128 L1440,0 L1440,128 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-36 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — Copy */}
          <div>
            {/* Tag */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={0}
              className="inline-flex items-center gap-2 px-3 py-1.5 border border-brand-red/40 text-brand-red text-xs font-semibold tracking-widest uppercase rounded-sm mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
              Santo Domingo · Ecuador
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp} initial="hidden" animate="show" custom={1}
              className="font-heading font-black uppercase leading-none text-6xl sm:text-7xl md:text-8xl mb-6"
            >
              <span className="text-white block">MECÁNICA</span>
              <span className="text-stroke block">DE</span>
              <span className="text-brand-red block">PRECISIÓN</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={2}
              className="text-white/60 text-lg leading-relaxed max-w-md mb-10"
            >
              Expertos en reparación de motores, frenos, suspensión y venta de repuestos
              originales para todas las marcas. Tu vehículo en manos de profesionales.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={3}
              className="flex flex-wrap gap-4 mb-14"
            >
              <button
                onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2 px-7 py-3.5 bg-brand-red hover:bg-brand-darkred text-white font-semibold rounded transition-all duration-200 hover:shadow-xl hover:shadow-brand-red/30 cursor-pointer"
              >
                Agenda tu Cita
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToServices}
                className="flex items-center gap-2 px-7 py-3.5 border border-white/20 hover:border-brand-red/60 text-white/70 hover:text-white font-semibold rounded transition-all duration-200 cursor-pointer"
              >
                Ver Servicios
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={4}
              className="flex flex-wrap gap-6"
            >
              {badges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-white/50">
                  <Icon size={14} className="text-brand-red flex-shrink-0" />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="relative hidden lg:flex justify-center items-center"
          >
            {/* Large decorative IPSA text */}
            <div className="relative">
              <span
                className="font-heading font-black text-[200px] leading-none select-none"
                style={{ WebkitTextStroke: '2px rgba(204,17,17,0.15)', color: 'transparent' }}
              >
                IPSA
              </span>

              {/* Center emblem card */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-brand-dark border border-brand-red/20 rounded-2xl flex flex-col items-center justify-center gap-4 shadow-2xl shadow-brand-red/10">
                  {/* Triangle logo large */}
                  <svg width="120" height="110" viewBox="0 0 100 100" fill="none">
                    <polygon points="50,4 96,94 4,94" fill="#CC1111" />
                    <polygon points="50,4 96,94 4,94" fill="url(#tri-grad)" />
                    <defs>
                      <linearGradient id="tri-grad" x1="50" y1="4" x2="50" y2="94" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#EE1111" />
                        <stop offset="1" stopColor="#8B0000" />
                      </linearGradient>
                    </defs>
                    {/* T bar */}
                    <rect x="28" y="34" width="44" height="9" fill="white" />
                    <rect x="42" y="34" width="16" height="38" fill="white" />
                    {/* S stroke */}
                    <path d="M55 46 Q68 46 68 56 Q68 66 55 66 Q42 66 42 76 Q42 86 55 86"
                      stroke="#CC1111" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </svg>
                  <div className="text-center">
                    <p className="font-heading font-black text-4xl tracking-widest text-white">IPSA</p>
                    <p className="font-heading text-xs tracking-[0.4em] text-brand-chrome uppercase mt-1">Automotriz</p>
                  </div>
                </div>
              </div>

              {/* Floating stats */}
              {[
                { label: '+15 Años', sub: 'de experiencia', pos: 'top-4 -left-8' },
                { label: '+500',     sub: 'clientes satisfechos', pos: 'bottom-4 -right-8' },
              ].map(({ label, sub, pos }) => (
                <motion.div
                  key={label}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: Math.random() * 2 }}
                  className={`absolute ${pos} bg-brand-dark border border-brand-red/25 rounded-xl px-4 py-3 shadow-xl`}
                >
                  <p className="font-heading font-bold text-brand-red text-xl">{label}</p>
                  <p className="text-white/50 text-xs">{sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          onClick={scrollToServices}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 hover:text-white/60 transition-colors cursor-pointer"
          aria-label="Desplazar hacia abajo"
        >
          <span className="text-xs tracking-widest uppercase">Explorar</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown size={18} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
