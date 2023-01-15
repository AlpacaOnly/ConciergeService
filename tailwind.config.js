/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'FirstForm_bg': "url('/src/assets/FirstForm_bg.png')",
      },
      colors: {
        'lightwhiteblue': '#E8ECF5',
      }
    },
  },
  plugins: [],
}
