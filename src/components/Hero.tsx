import { motion } from 'framer-motion'
import { ArrowRight, Phone, CalendarCheck } from 'lucide-react'

// Real Unsplash automotive photos
const HERO_IMG   = 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=1920&q=85&auto=format&fit=crop'
const GARAGE_IMG = 'https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?w=900&q=80&auto=format&fit=crop'
const CAR_IMG    = 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900&q=80&auto=format&fit=crop'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col overflow-hidden bg-brand-black">

      {/* ── Full-bleed background photograph ── */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Taller automotriz IPSA"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Multi-layer dark gradient — keeps text legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/85 to-brand-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/60" />
        {/* Red accent overlay bottom-left */}
        <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-brand-red" />
      </div>

      {/* ── Main content ── */}
      <div className="relative flex-1 flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-40 md:pb-28 w-full">
        <div className="max-w-3xl">

          {/* Location pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-red/20 border border-brand-red/40 text-brand-red text-xs font-bold tracking-[0.2em] uppercase rounded mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
            Santo Domingo · Ecuador
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.65 }}
            className="font-heading font-black uppercase leading-[0.92] text-white mb-6"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 7.5rem)' }}
          >
            EXPERTOS<br />
            <span className="text-brand-red">EN TU</span><br />
            VEHÍCULO
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.6 }}
            className="text-white/65 text-base md:text-lg leading-relaxed max-w-lg mb-10 font-light"
          >
            Mecánica profesional, diagnóstico computarizado y venta de repuestos originales.
            Más de 15 años cuidando los vehículos de Santo Domingo.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.6 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <button
              onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2.5 px-7 py-3.5 bg-brand-red hover:bg-brand-darkred text-white font-bold tracking-wide rounded transition-all duration-200 hover:shadow-2xl hover:shadow-brand-red/40 cursor-pointer"
            >
              <CalendarCheck size={17} />
              Agendar Cita
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:+593999999999"
              className="flex items-center gap-2.5 px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-semibold rounded transition-all duration-200"
            >
              <Phone size={16} />
              Llamar Ahora
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="flex flex-wrap gap-8"
          >
            {[
              { num: '15+', label: 'Años de\nexperiencia' },
              { num: '500+', label: 'Clientes\nsatisfechos' },
              { num: '6', label: 'Áreas de\nservicio' },
              { num: '100%', label: 'Garantía en\ntrabajos' },
            ].map(({ num, label }) => (
              <div key={num} className="flex flex-col">
                <span className="font-heading font-black text-3xl text-brand-red leading-none">{num}</span>
                <span className="text-white/40 text-xs mt-1 whitespace-pre-line leading-tight">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Bottom photo strip (2 vehicle photos) ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="relative z-10 hidden lg:flex gap-3 px-8 pb-8 justify-end"
      >
        {[
          { src: GARAGE_IMG, label: 'Nuestro taller' },
          { src: CAR_IMG,    label: 'Tu vehículo, nuestra misión' },
        ].map(({ src, label }) => (
          <div key={label} className="relative w-56 h-36 rounded-xl overflow-hidden border border-white/10 flex-shrink-0">
            <img src={src} alt={label} className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span className="absolute bottom-2 left-3 text-white/80 text-xs font-medium">{label}</span>
          </div>
        ))}
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-brand-red/60" />
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-1 h-1 rounded-full bg-brand-red"
        />
      </motion.div>
    </section>
  )
}
