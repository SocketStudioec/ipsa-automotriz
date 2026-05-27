import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react'

const FacebookIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
import IpsaLogo from './IpsaLogo'

const navGroups = [
  {
    title: 'Servicios',
    links: [
      'Mecánica General',
      'Sistema de Frenos',
      'Suspensión y Dirección',
      'Motor y Transmisión',
      'Sistema Eléctrico',
      'Venta de Repuestos',
    ],
  },
  {
    title: 'Empresa',
    links: ['Inicio', 'Nosotros', 'Por qué elegirnos', 'Testimonios', 'Contacto'],
  },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-brand-dark border-t border-white/5 relative overflow-hidden">
      {/* Top divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/40 to-transparent" />

      {/* Red glow corner */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* Main grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <IpsaLogo size={44} />
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-6 max-w-xs">
              Mecánica y repuestos automotrices de alta calidad en Santo Domingo, Ecuador.
              Más de 15 años al servicio de tu vehículo.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/Ipsa.Automotriz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 bg-brand-black border border-white/10 hover:border-brand-red/40 rounded-lg flex items-center justify-center text-white/50 hover:text-brand-red transition-all"
              >
                <FacebookIcon size={16} />
              </a>
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map(({ title, links }) => (
            <div key={title}>
              <h4 className="font-heading font-bold text-sm tracking-widest uppercase text-white/50 mb-5">{title}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-sm text-white/40 hover:text-white transition-colors cursor-pointer"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-widest uppercase text-white/50 mb-5">Contacto</h4>
            <ul className="flex flex-col gap-4">
              {[
                { icon: MapPin, text: 'Santo Domingo, Ecuador' },
                { icon: Phone, text: '+593 99 999 9999', href: 'tel:+593999999999' },
                { icon: Mail,  text: 'info@ipsaautomotriz.com', href: 'mailto:info@ipsaautomotriz.com' },
              ].map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Icon size={14} className="text-brand-red flex-shrink-0 mt-0.5" />
                  {href ? (
                    <a href={href} className="text-sm text-white/40 hover:text-white transition-colors">{text}</a>
                  ) : (
                    <span className="text-sm text-white/40">{text}</span>
                  )}
                </li>
              ))}
              <li>
                <div className="mt-2 px-3 py-2 bg-brand-black border border-brand-red/15 rounded-lg inline-block">
                  <p className="text-brand-red text-xs font-medium">Lun–Vie: 8:00–18:00</p>
                  <p className="text-white/30 text-xs">Sábado: 8:00–13:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-white/25 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} IPSA Automotriz. Todos los derechos reservados. Santo Domingo, Ecuador.
          </p>
          <p className="text-white/20 text-xs">
            Desarrollado por{' '}
            <a href="https://socket-studio.com" target="_blank" rel="noopener noreferrer" className="text-brand-red/50 hover:text-brand-red transition-colors">
              Socket Studio
            </a>
          </p>
          <button
            onClick={scrollTop}
            aria-label="Volver arriba"
            className="flex items-center gap-1.5 text-white/30 hover:text-white text-xs transition-colors cursor-pointer"
          >
            <ArrowUp size={12} />
            Volver arriba
          </button>
        </div>
      </div>
    </footer>
  )
}
