import { useState, useRef, FormEvent } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Clock, Mail, Send, CheckCircle } from 'lucide-react'

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const info = [
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'Santo Domingo, Ecuador',
    sub:   'Consulta ubicación exacta por teléfono',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+593 99 999 9999',
    sub:   'Atención de lunes a sábado',
    href:  'tel:+593999999999',
  },
  {
    icon: Clock,
    label: 'Horario',
    value: 'Lun–Vie: 8:00–18:00',
    sub:   'Sábado: 8:00–13:00',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@ipsaautomotriz.com',
    sub:   'Respondemos en 24h',
    href:  'mailto:info@ipsaautomotriz.com',
  },
]

type Status = 'idle' | 'sending' | 'sent'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', phone: '', vehicle: '', service: '', message: '' })

  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1600)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const inputClass = "w-full bg-brand-dark border border-white/10 focus:border-brand-red/60 text-white placeholder-white/25 text-sm rounded-xl px-4 py-3.5 outline-none transition-colors duration-200"
  const labelClass = "block text-sm font-medium text-white/60 mb-1.5"

  return (
    <section id="contacto" className="py-24 md:py-32 bg-brand-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />

      {/* Glow */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

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
            Estamos para ayudarte
          </p>
          <h2 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl uppercase text-white leading-none mb-6">
            AGENDA TU<br /><span className="text-brand-red">CITA</span>
          </h2>
          <p className="text-white/50 text-base max-w-md mx-auto">
            Cuéntanos qué necesita tu vehículo y te contactamos con un diagnóstico y presupuesto sin compromiso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Contact Info — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {info.map(({ icon: Icon, label, value, sub, href }) => (
              <div key={label} className="flex gap-4 p-5 bg-brand-dark border border-white/5 rounded-2xl">
                <div className="flex-shrink-0 w-11 h-11 bg-brand-red/10 border border-brand-red/20 rounded-xl flex items-center justify-center">
                  <Icon size={18} className="text-brand-red" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-white font-medium text-sm hover:text-brand-red transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-white font-medium text-sm">{value}</p>
                  )}
                  {sub && <p className="text-white/35 text-xs mt-0.5">{sub}</p>}
                </div>
              </div>
            ))}

            {/* Facebook CTA */}
            <a
              href="https://www.facebook.com/Ipsa.Automotriz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 bg-[#1877F2]/10 border border-[#1877F2]/20 rounded-2xl hover:border-[#1877F2]/40 transition-colors"
            >
              <FacebookIcon size={20} />
              <div>
                <p className="text-white font-medium text-sm">Síguenos en Facebook</p>
                <p className="text-white/40 text-xs">IPSA Automotriz</p>
              </div>
            </a>
          </motion.div>

          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-brand-dark border border-white/5 rounded-3xl p-8">

              {status === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16 gap-4"
                >
                  <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <h3 className="font-heading font-bold text-3xl text-white">¡Mensaje enviado!</h3>
                  <p className="text-white/50 text-sm max-w-xs">
                    Gracias por contactarnos. Te responderemos a la brevedad con toda la información.
                  </p>
                  <button
                    onClick={() => { setStatus('idle'); setForm({ name: '', phone: '', vehicle: '', service: '', message: '' }) }}
                    className="mt-4 px-6 py-2.5 border border-white/15 text-white/60 hover:text-white text-sm rounded-xl transition-colors cursor-pointer"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className={labelClass}>Nombre completo *</label>
                      <input
                        id="name" name="name" type="text" required
                        value={form.name} onChange={handleChange}
                        placeholder="Tu nombre"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>Teléfono *</label>
                      <input
                        id="phone" name="phone" type="tel" required
                        value={form.phone} onChange={handleChange}
                        placeholder="+593 99 999 9999"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="vehicle" className={labelClass}>Vehículo</label>
                      <input
                        id="vehicle" name="vehicle" type="text"
                        value={form.vehicle} onChange={handleChange}
                        placeholder="Ej: Toyota Corolla 2018"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className={labelClass}>Servicio requerido</label>
                      <select
                        id="service" name="service"
                        value={form.service} onChange={handleChange}
                        className={`${inputClass} cursor-pointer`}
                      >
                        <option value="">Selecciona un servicio</option>
                        <option value="mecanica">Mecánica General</option>
                        <option value="frenos">Sistema de Frenos</option>
                        <option value="suspension">Suspensión y Dirección</option>
                        <option value="motor">Motor y Transmisión</option>
                        <option value="electrico">Sistema Eléctrico</option>
                        <option value="repuestos">Compra de Repuestos</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>Descripción del problema</label>
                    <textarea
                      id="message" name="message" rows={4}
                      value={form.message} onChange={handleChange}
                      placeholder="Cuéntanos qué síntomas presenta tu vehículo..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="flex items-center justify-center gap-2 w-full py-4 bg-brand-red hover:bg-brand-darkred disabled:opacity-60 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-brand-red/30 cursor-pointer"
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Enviar Solicitud
                      </>
                    )}
                  </button>

                  <p className="text-center text-white/25 text-xs">
                    Al enviar, aceptas que nos comuniquemos contigo para coordinar tu servicio.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
