/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        emerald: { luxury: '#123C2F' },
        champagne: '#D4B477',
        ivory: '#F5F1E8',
        charcoal: '#26352D',
        sage: '#78917D',
        beige: '#E5E0D5',
        pale: '#A7B8AA',
        terra: '#B66B54'
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        ui: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      boxShadow: { soft: '0 16px 35px rgba(18,60,47,.08)' },
      keyframes: {
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(22px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        imageReveal: { '0%': { opacity: '0', clipPath: 'inset(0 0 15% 0)' }, '100%': { opacity: '1', clipPath: 'inset(0)' } }
      },
      animation: { 'fade-up': 'fadeUp .8s ease both', 'image-reveal': 'imageReveal 1s .15s ease both' }
    }
  },
  plugins: []
};
