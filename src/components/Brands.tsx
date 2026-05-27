import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// SVG brand logos (wordmark style, clean)
const brands = [
  {
    name: 'Toyota',
    svg: (
      <svg viewBox="0 0 200 60" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="48" fontSize="52" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="-2">TOYOTA</text>
      </svg>
    ),
  },
  {
    name: 'Chevrolet',
    svg: (
      <svg viewBox="0 0 240 60" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="48" fontSize="44" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="-1">CHEVROLET</text>
      </svg>
    ),
  },
  {
    name: 'Hyundai',
    svg: (
      <svg viewBox="0 0 200 60" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="48" fontSize="48" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="-1">HYUNDAI</text>
      </svg>
    ),
  },
  {
    name: 'Kia',
    svg: (
      <svg viewBox="0 0 100 60" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="50" fontSize="58" fontWeight="900" fontFamily="Arial, sans-serif" letterSpacing="2">KIA</text>
      </svg>
    ),
  },
  {
    name: 'Nissan',
    svg: (
      <svg viewBox="0 0 180 60" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="48" fontSize="50" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="-1">NISSAN</text>
      </svg>
    ),
  },
  {
    name: 'Ford',
    svg: (
      <svg viewBox="0 0 120 60" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="50" fontSize="56" fontWeight="700" fontFamily="Arial, sans-serif" fontStyle="italic">Ford</text>
      </svg>
    ),
  },
  {
    name: 'Mazda',
    svg: (
      <svg viewBox="0 0 160 60" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="48" fontSize="50" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="-1">MAZDA</text>
      </svg>
    ),
  },
  {
    name: 'Volkswagen',
    svg: (
      <svg viewBox="0 0 80 60" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="50" fontSize="52" fontWeight="900" fontFamily="Arial, sans-serif">VW</text>
      </svg>
    ),
  },
  {
    name: 'Suzuki',
    svg: (
      <svg viewBox="0 0 170 60" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="48" fontSize="50" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="-1">SUZUKI</text>
      </svg>
    ),
  },
  {
    name: 'Renault',
    svg: (
      <svg viewBox="0 0 190 60" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="48" fontSize="48" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="-1">RENAULT</text>
      </svg>
    ),
  },
]

export default function Brands() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-16 md:py-20 bg-[#0A0A0A] border-y border-white/5 relative overflow-hidden">
      {/* Red side accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center gap-8 md:gap-14"
        >
          {/* Label */}
          <div className="flex-shrink-0">
            <p className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase mb-1">Trabajamos con</p>
            <p className="text-white font-heading font-black text-2xl uppercase leading-tight">
              Todas<br />las marcas
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-16 bg-white/10 flex-shrink-0" />

          {/* Scrolling brand strip */}
          <div className="relative flex-1 overflow-hidden">
            {/* Fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
              className="flex gap-10 items-center w-max"
            >
              {/* Double the list for seamless loop */}
              {[...brands, ...brands].map((b, i) => (
                <div
                  key={`${b.name}-${i}`}
                  className="text-white/20 hover:text-white/60 transition-colors duration-300 flex-shrink-0"
                  title={b.name}
                >
                  {b.svg}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
