/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          bg: '#050816',
          surface: 'rgba(15, 23, 42, 0.55)',
          border: 'rgba(139, 92, 246, 0.15)',
        },
        neon: {
          purple: '#8B5CF6',
          blue: '#00D4FF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon-purple':
          '0 0 0 1px rgba(139, 92, 246, 0.35), 0 0 40px rgba(139, 92, 246, 0.25), 0 0 80px rgba(139, 92, 246, 0.12)',
        'neon-blue':
          '0 0 0 1px rgba(0, 212, 255, 0.25), 0 0 50px rgba(0, 212, 255, 0.15)',
        'card-glow':
          '0 25px 80px -20px rgba(0, 0, 0, 0.7), 0 0 60px rgba(139, 92, 246, 0.2)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, transparent 0%, #050816 100%), linear-gradient(to right, rgba(139,92,246,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,92,246,0.07) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse-slow 5s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
        'glow-line': 'glow-line 3s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'glow-line': {
          '0%, 100%': { opacity: '0.6', filter: 'brightness(1)' },
          '50%': { opacity: '1', filter: 'brightness(1.25)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
};
