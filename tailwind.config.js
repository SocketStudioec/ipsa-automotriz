/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red:     '#CC1111',
          darkred: '#A00D0D',
          black:   '#0D0D0D',
          dark:    '#1A1A1A',
          chrome:  '#8B8FA8',
          silver:  '#C0C4D3',
          gray:    '#F4F4F4',
        },
      },
      fontFamily: {
        heading: ['Barlow Condensed', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'diagonal-pattern': "repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(204,17,17,0.06) 4px, rgba(204,17,17,0.06) 8px)",
      },
    },
  },
  plugins: [],
}
