interface IpsaLogoProps {
  size?: number
  variant?: 'full' | 'mark'
}

export default function IpsaLogo({ size = 48, variant = 'full' }: IpsaLogoProps) {
  if (variant === 'mark') {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="IPSA Automotriz logo mark">
        {/* Red triangle */}
        <polygon points="50,2 98,95 2,95" fill="#CC1111" />
        {/* White T bar */}
        <rect x="30" y="38" width="40" height="8" fill="white" />
        {/* White T stem */}
        <rect x="44" y="38" width="12" height="32" fill="white" />
        {/* S shape overlay in red */}
        <path d="M52 50 Q62 50 62 58 Q62 66 52 66 Q42 66 42 74 Q42 82 52 82" stroke="#CC1111" strokeWidth="4" fill="none" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <div className="flex items-center gap-3" aria-label="IPSA Automotriz">
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shadow triangle */}
        <polygon points="50,6 96,96 4,96" fill="#8B0000" opacity="0.4" transform="translate(2,2)" />
        {/* Main red triangle */}
        <polygon points="50,4 96,94 4,94" fill="#CC1111" />
        {/* White T bar */}
        <rect x="29" y="36" width="42" height="8" fill="white" />
        {/* White T stem */}
        <rect x="43" y="36" width="14" height="34" fill="white" />
        {/* Dark S overlay */}
        <path d="M54 48 Q65 48 65 57 Q65 66 54 66 Q43 66 43 75 Q43 84 54 84" stroke="#CC1111" strokeWidth="5" fill="none" strokeLinecap="round" />
        {/* Wrench silhouette hint */}
        <ellipse cx="50" cy="30" rx="4" ry="6" fill="rgba(0,0,0,0.25)" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-heading font-black text-white tracking-widest" style={{ fontSize: size * 0.58 }}>IPSA</span>
        <span className="font-heading font-semibold text-brand-chrome tracking-[0.3em]" style={{ fontSize: size * 0.22 }}>AUTOMOTRIZ</span>
      </div>
    </div>
  )
}
