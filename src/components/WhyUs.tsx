import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Award, Clock, ThumbsUp, Cpu, Users, Truck } from 'lucide-react'

const stats = [
  { value: 15,   suffix: '+', label: 'Años de Experiencia' },
  { value: 500,  suffix: '+', label: 'Clientes Atendidos' },
  { value: 1000, suffix: '+', label: 'Vehículos Reparados' },
  { value: 98,   suffix: '%', label: 'Satisfacción del Cliente' },
]

const pillars = [
  {
    icon: Cpu,
    title: 'Diagnóstico Avanzado',
    desc:  'Escáneres computarizados de última generación para identificar cualquier falla de manera precisa y rápida.',
  },
  {
    icon: Award,
    title: 'Técnicos Certificados',
    desc:  'Personal capacitado y actualizado en las últimas tecnologías automotrices del mercado ecuatoriano.',
  },
  {
    icon: ThumbsUp,
    title: 'Garantía en Trabajos',
    desc:  'Respaldamos cada servicio y repuesto con garantía real. Tu tranquilidad es nuestra prioridad.',
  },
  {
    icon: Clock,
    title: 'Entrega Puntual',
    desc:  'Respetamos los tiempos acordados. Tu tiempo es valioso y nos comprometemos a cumplirlo.',
  },
  {
    icon: Truck,
    title: 'Repuestos en Stock',
    desc:  'Amplio inventario de piezas originales e importadas. Sin esperas por piezas fuera de stock.',
  },
  {
    icon: Users,
    title: 'Atención Personalizada',
    desc:  'Te explicamos qué le pasa a tu vehículo en términos simples. Transparencia total en el proceso.',
  },
]

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const steps = 60
    const step = target / steps
    let current = 0
    const timer = setInterval(() => {
      current = Math.min(current + step, target)
      setCount(Math.round(current))
      if (current >= target) clearInterval(timer)
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="font-heading font-black text-5xl md:text-6xl text-brand-red leading-none">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function WhyUs() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section id="porque" className="py-24 md:py-32 bg-brand-black relative overflow-hidden">
      {/* Top red band */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent" />

      {/* Large text watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span
          className="font-heading font-black text-[20vw] leading-none select-none"
          style={{ color: 'rgba(204,17,17,0.02)' }}
        >
          IPSA
        </span>
      </div>

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
            Por qué elegirnos
          </p>
          <h2 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl uppercase text-white leading-none mb-6">
            LA DIFERENCIA<br /><span className="text-brand-red">IPSA</span>
          </h2>
        </motion.div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden mb-20">
          {stats.map(({ value, suffix, label }) => (
            <div key={label} className="bg-brand-dark flex flex-col items-center justify-center py-10 px-6 text-center">
              <AnimatedNumber target={value} suffix={suffix} />
              <p className="text-white/40 text-sm mt-2 leading-tight">{label}</p>
            </div>
          ))}
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: 'easeOut' }}
              className="group flex gap-5 p-6 bg-brand-dark border border-white/5 hover:border-brand-red/30 rounded-2xl transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-brand-red/10 border border-brand-red/20 rounded-xl flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                <Icon size={20} className="text-brand-red" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
