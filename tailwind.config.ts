import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        azure: {
          50:  '#e6f3fb',
          100: '#cce7f7',
          200: '#99cfef',
          300: '#66b7e7',
          400: '#339fdf',
          500: '#0078d4',
          600: '#006bbf',
          700: '#0056a0',
          800: '#004280',
          900: '#002d60',
        },
        cyan: {
          azure: '#50e6ff',
        },
      },
      backgroundImage: {
        'gradient-azure': 'linear-gradient(135deg, #0078d4 0%, #50e6ff 100%)',
        'gradient-hero': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,120,212,0.15), transparent)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        glass: '0 4px 16px 0 rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.05)',
        'glass-hover': '0 8px 32px 0 rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.08)',
        azure: '0 0 20px rgba(0, 120, 212, 0.25)',
        'azure-lg': '0 0 40px rgba(0, 120, 212, 0.35)',
      },
    },
  },
  plugins: [],
}

export default config
