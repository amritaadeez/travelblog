/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontSize: {
        // Reduced heading sizes with responsive variants
        h1: ['3rem', { lineHeight: '1.2' }],        // 48px (reduced from 60px)
        h2: ['2.5rem', { lineHeight: '1.2' }],      // 40px (reduced from 48px)
        h3: ['2rem', { lineHeight: '1.3' }],        // 32px (reduced from 36px)
        h4: ['1.5rem', { lineHeight: '1.3' }],      // 24px (reduced from 30px)
        h5: ['1.25rem', { lineHeight: '1.4' }],     // 20px (reduced from 24px)
        h6: ['1.125rem', { lineHeight: '1.4' }],    // 18px (reduced from 20px)
      },
      spacing: {
        container: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-up': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-in-out',
        'scale-up': 'scale-up 0.3s ease-out',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        montserrat: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
}
