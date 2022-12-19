/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'fontUbuntu': ['Ubuntu'],
      'fontMontserrat': ['Montserrat']
      
    },

    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}