/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color1':' rgba(252,225,208,1)',
        'color2':'rgba(255,173,214,1)', 
        'color3':'rgba(162,186,245,1)' 
      }
    },
  },
  plugins: [],
}