import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#eded50',
          50: '#fefef5',
          100: '#fdfde6',
          200: '#fbfbc2',
          300: '#f7f789',
          400: '#eded50',
          500: '#d4d418',
          600: '#b8b800',
          700: '#8a8a00',
          800: '#6a6a10',
          900: '#4a4a10',
          foreground: '#4a4a10', /* Dark version for text */
        },
        secondary: {
          DEFAULT: '#10da1e',
          50: '#f0fdf1',
          100: '#dcfce0',
          200: '#bbf7c2',
          300: '#86ef93',
          400: '#4ade5d',
          500: '#10da1e',
          600: '#0ea818',
          700: '#0c8a14',
          800: '#0a6c10',
          900: '#084e0c',
          foreground: '#0c8a14', /* Dark version for text */
        },
        dark: {
          DEFAULT: '#0a1f0b',
          50: '#f2f7f2',
          100: '#e0ebe1',
          200: '#c3d7c5',
          300: '#9abc9d',
          400: '#6d9b71',
          500: '#4c7e51',
          600: '#39653e',
          700: '#2f5133',
          800: '#28422b',
          900: '#0a1f0b',
        }
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-outfit)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 6s ease-in-out infinite',
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
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config

