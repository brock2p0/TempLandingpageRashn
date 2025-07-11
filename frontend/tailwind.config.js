/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'dark-teal': '#06484F',
        'slate-blue': '#5A6B89',
        'aqua': '#4C9A8D',
        'lime': '#DBE994',
        'mist': '#CED6D4',
      },
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Helvetica Neue', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-top': 'slideInFromTop 0.5s ease-out forwards',
        'spin': 'spin 1s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        slideInFromTop: {
          from: {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
      },
      backdropBlur: {
        '20': '20px',
        '24': '24px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'glass-dark': '0 8px 32px rgba(6, 72, 79, 0.1)',
        'xl-teal': '0 25px 50px rgba(6, 72, 79, 0.15)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
};