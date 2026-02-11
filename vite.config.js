import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss({
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            'caucasus-brown': '#8B4513',
            'caucasus-green': '#556B2F',
            'caucasus-terracotta': '#B35436',
            'caucasus-gold': '#D4AF37',
            'caucasus-beige': '#F5F5DC',
          },
          fontFamily: {
            'playfair': ['Playfair Display', 'serif'],
            'inter': ['Inter', 'sans-serif'],
          },
          animation: {
            'float': 'float 6s ease-in-out infinite',
            'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
          },
          keyframes: {
            float: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-20px)' },
            },
            'pulse-glow': {
              '0%, 100%': { opacity: 1 },
              '50%': { opacity: 0.5 },
            }
          }
        },
      },
      plugins: [],
    }),
    
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  server: {
    allowedHosts: [
      'regularly-supporting-malamute.cloudpub.ru',
      // You can add other hosts here if needed
      // 'localhost', // example
    ],
  },
})