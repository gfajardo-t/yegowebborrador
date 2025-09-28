/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#dc2626',
          dark: '#b91c1c',
          light: '#ef4444',
        },
        secondary: '#64748b',
        accent: '#f59e0b',
        'text-dark': '#000000',
        'text-light': '#374151',
        'text-muted': '#6b7280',
        'bg-white': '#ffffff',
        'bg-gray': '#f3f4f6',
        'bg-gray-light': '#f9fafb',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'custom-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'custom': '8px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-custom': 'pulse-custom 2s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        'pulse-custom': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'fade-in-up': {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}

