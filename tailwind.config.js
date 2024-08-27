/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xl2': '1500px',
      },
    },
    fontFamily: {
      'sans': ['Archivo', 'sans-serif'],
    },
  },
}

