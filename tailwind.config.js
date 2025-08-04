/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jade: {
          DEFAULT: '#00A86B',
          dark: '#007B4C',
        },
        gold: {
          DEFAULT: '#D4AF37',
          dull: '#B8860B',
        },
      },
    },
  },
  plugins: [],
}

