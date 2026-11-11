/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 950: '#03142F', 900: '#061D42', 800: '#0A3670', 700: '#124F92' },
        brand: { DEFAULT: '#0066C5', light: '#168BE8', soft: '#EAF4FF', pale: '#F5F9FF' },
        leaf: { DEFAULT: '#FF6500', dark: '#C94700', lime: '#FFAD66', soft: '#FFF1E8' },
        sun: { DEFAULT: '#FF8A00', deep: '#C94700', soft: '#FFF1E8' },
      },
      fontFamily: {
        display: ['Jost', 'system-ui', 'sans-serif'],
        sans: ['Heebo', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fade: { from: { opacity: '0' }, to: { opacity: '1' } },
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        rise: { from: { opacity: '0', transform: 'translateY(26px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        spin360: { to: { transform: 'rotate(360deg)' } },
        draw: { from: { strokeDashoffset: '260' }, to: { strokeDashoffset: '0' } },
        dash: { to: { strokeDashoffset: '-48' } },
        pulseRing: { '0%': { transform: 'scale(1)', opacity: '.5' }, '100%': { transform: 'scale(1.6)', opacity: '0' } },
      },
      animation: {
        fade: 'fade .5s ease-out both',
        floaty: 'floaty 5s ease-in-out infinite',
        rise: 'rise .9s cubic-bezier(.2,.7,.2,1) both',
        'spin-slow': 'spin360 40s linear infinite',
        draw: 'draw 1.2s .8s ease-out both',
        dash: 'dash 3s linear infinite',
        ring: 'pulseRing 2.2s ease-out infinite',
      },
    },
  },
  plugins: [],
};
