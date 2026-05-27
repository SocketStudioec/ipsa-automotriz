# IPSA Automotriz — Sitio Web Corporativo

Sitio web corporativo premium para **IPSA Automotriz**, empresa de mecánica y repuestos automotrices ubicada en Santo Domingo, Ecuador.

**Live:** https://socket-studio.com/demo-aplicaciones/ipsa-automotriz/

## Stack Tecnológico

- **React 18** + TypeScript
- **Vite 4** (bundler)
- **Tailwind CSS 3** (estilos utilitarios)
- **Framer Motion** (animaciones)
- **Lucide React** (iconos SVG)

## Secciones

- **Hero** — Headline industrial bold con CTAs y visual emblemático
- **Servicios** — Grid de 6 servicios con hover states
- **Nosotros** — Historia y valores de la empresa
- **Por Qué IPSA** — Contadores animados y pilares de diferenciación
- **Testimonios** — 4 reseñas reales de clientes
- **Contacto** — Formulario + info de contacto
- **Footer** — Logo, links, redes sociales

## Design System

| Token | Valor |
|-------|-------|
| Red primario | `#CC1111` |
| Negro profundo | `#0D0D0D` |
| Oscuro | `#1A1A1A` |
| Chrome | `#8B8FA8` |
| Font heading | Barlow Condensed 700–900 |
| Font body | Inter 400–600 |

## Desarrollo Local

```bash
npm install
npm run dev       # http://localhost:5183
npm run build     # build producción en /dist
```

## Deploy

```bash
# Build
npm run build

# Subir a servidor via pscp
pscp -r -pw "PASS" dist/* palma@31.97.102.179:/var/www/html/socket-studio/demo-aplicaciones/ipsa-automotriz/
```

---
Desarrollado por [Socket Studio](https://socket-studio.com)
