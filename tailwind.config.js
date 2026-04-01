/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 16px -4px rgba(15, 23, 42, 0.08), 0 8px 24px -8px rgba(15, 23, 42, 0.06)',
        'soft-lg':
          '0 12px 40px -12px rgba(15, 23, 42, 0.14), 0 4px 16px -4px rgba(15, 23, 42, 0.08)',
        'soft-xl':
          '0 24px 48px -16px rgba(15, 23, 42, 0.12), 0 12px 32px -12px rgba(15, 23, 42, 0.08)',
        'glow-mint':
          '0 0 48px -8px rgba(15, 239, 180, 0.35), 0 8px 32px -12px rgba(15, 239, 180, 0.15)',
        'glow-mint-sm':
          '0 0 32px -6px rgba(15, 239, 180, 0.28), inset 0 1px 0 0 rgba(255,255,255,0.08)',
        'inner-highlight':
          'inset 0 1px 0 0 rgba(255,255,255,0.85)',
        'inner-highlight-dark':
          'inset 0 1px 0 0 rgba(255,255,255,0.08)',
        nav: '0 4px 24px -4px rgba(15, 23, 42, 0.06), 0 1px 0 0 rgba(255,255,255,0.8) inset',
        'nav-dark':
          '0 4px 32px -4px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255,255,255,0.06)',
      },
      backgroundImage: {
        'mesh-light':
          'radial-gradient(ellipse 100% 80% at 50% -30%, rgba(15,239,180,0.14) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 100% 10%, rgba(99,102,241,0.07) 0%, transparent 50%), radial-gradient(ellipse 50% 60% at 0% 80%, rgba(15,239,180,0.1) 0%, transparent 45%)',
        'mesh-dark':
          'radial-gradient(ellipse 90% 70% at 50% -20%, rgba(15,239,180,0.18) 0%, transparent 55%), radial-gradient(ellipse 50% 45% at 100% 60%, rgba(15,239,180,0.08) 0%, transparent 50%), radial-gradient(ellipse 45% 50% at 0% 30%, rgba(56,189,248,0.07) 0%, transparent 45%)',
        'card-shine-light':
          'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.98) 50%, rgba(255,255,255,0.9) 100%)',
        'card-shine-dark':
          'linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 45%, rgba(0,0,0,0.15) 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}

