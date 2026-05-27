import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Award, Clock, ThumbsUp, Cpu, Users, Truck } from 'lucide-react'

const BG_IMG = 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&q=75&auto=format&fit=crop'

const stats = [
  { value: 15,   suffix: '+', label: 'Años de experiencia' },
  { value: 500,  suffix: '+', label: 'Clientes satisfechos' },
  { value: 1000, suffix: '+', label: 'Vehículos reparados' },
  { value: 98,   suffix: '%', label: 'Clientes regresan' },
]

const pillars = [
  { icon: Cpu,      title: 'Diagnóstico Avanzado',    desc: 'Escáneres OBD de última generación para identificar cualquier falla de manera precisa.' },
  { icon: Award,    title: 'Técnicos Certificados',   desc: 'Personal capacitado y actualizado en las últimas tecnologías automotrices del mercado.' },
  { icon: ThumbsUp, title: 'Garantía en Trabajos',    desc: 'Respaldamos cada servicio y repuesto con garantía real. Tu tranquilidad es nuestra prioridad.' },
  { icon: Clock,    title: 'Entrega Puntual',          desc: 'Respetamos los tiempos acordados. Tu tiempo es valioso y nos comprometemos a cumplirlo.' },
  { icon: Truck,    title: 'Repuestos en Stock',       desc: 'Amplio inventario de piezas originales e importadas. Sin esperas por piezas fuera de stock.' },
  { icon: Users,    title: 'Atención Personalizada',  desc: 'Te explicamos qué le pasa a tu vehículo en términos simples. Transparencia total.' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const steps = 50
    const step = target / steps
    let current = 0
    const timer = setInterval(() => {
      current = Math.min(current + step, target)
      setCount(Math.round(current))
      if (current >= target) clearInterval(timer)
    }, 1800 / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref} className="font-heading font-black text-4xl md:text-5xl text-white leading-none">{count.toLocaleString()}{suffix}</span>
}

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="porque" className="relative overflow-hidden">

      {/* ── Stats band — dark photo background ── */}
      <div className="relative py-20 md:py-24">
        <div className="absolute inset-0">
          <img src={BG_IMG} alt="" className="w-full h-full object-cover object-center" loading="lazy" />
          <div className="absolute inset-0 bg-brand-black/88" />
          {/* Red bottom border */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-red/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase mb-3">Por qué elegirnos</p>
            <h2
              className="font-heading font-black uppercase text-white leading-none"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
            >
              LA DIFERENCIA <span className="text-brand-red">IPSA</span>
            </h2>
          </motion.div>

          {/* Stats 4-col */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {stats.map(({ value, suffix, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-black/70 backdrop-blur-sm flex flex-col items-center justify-center py-10 px-6 text-center"
              >
                <Counter target={value} suffix={suffix} />
                <p className="text-white/40 text-xs mt-2">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Pillars section ── */}
      <div className="bg-brand-dark py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: 'easeOut' }}
                className="group flex gap-5 p-6 bg-brand-black border border-white/5 hover:border-brand-red/25 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-brand-red/5"
              >
                <div className="flex-shrink-0 w-11 h-11 bg-brand-red/10 border border-brand-red/20 rounded-xl flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                  <Icon size={19} className="text-brand-red" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white mb-1.5 tracking-wide">{title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
