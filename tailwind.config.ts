import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand surfaces (deep indigo / violet-black family)
        midnight: '#0A0820',
        ink: '#0F0B25',
        navy: '#14102B',
        // Accents (violet + lavender)
        accent: '#7C3AED',
        accentHover: '#6D28D9',
        cyan: '#C084FC',
        // Surfaces
        surface: '#FAFAFB',
        cream: '#FAFAFB',
        white: '#FFFFFF',
        // Text
        dark: '#14102B',
        muted: '#6B7280',
        border: '#E5E7EB',
        gray: {
          50: '#FAFAFB',
          100: '#F3F4F8',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2440',
          900: '#14102B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tight: '-0.02em',
      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        container: '1240px',
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in-out',
        slideUp: 'slideUp 0.6s ease-out',
        slideInLeft: 'slideInLeft 0.8s ease-out',
        glow: 'glow 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        gridShift: 'gridShift 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.85' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gridShift: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(40px, 40px)' },
        },
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(20,16,43,0.05), 0 4px 16px rgba(20,16,43,0.05)',
        'soft-md': '0 4px 12px rgba(20,16,43,0.07), 0 8px 24px rgba(20,16,43,0.07)',
        'soft-lg': '0 12px 32px rgba(20,16,43,0.10), 0 24px 60px rgba(20,16,43,0.09)',
        'premium': '0 20px 50px -20px rgba(124,58,237,0.45)',
        'premium-lg': '0 30px 80px -20px rgba(124,58,237,0.5), 0 0 0 1px rgba(192,132,252,0.12)',
        'glow-violet': '0 0 0 1px rgba(192,132,252,0.18), 0 20px 60px -10px rgba(124,58,237,0.45)',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(192,132,252,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(192,132,252,0.08) 1px, transparent 1px)',
        'gradient-premium':
          'linear-gradient(135deg, #0A0820 0%, #14102B 45%, #3B1E80 100%)',
        'gradient-accent':
          'linear-gradient(135deg, #7C3AED 0%, #C084FC 100%)',
      },
    },
  },
  plugins: [],
}
export default config
