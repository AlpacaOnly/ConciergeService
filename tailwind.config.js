/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'contact-form': "url('/src/assets/ContactForm_bg.png')",
      },
      colors: {
        'lightwhiteblue': '#E8ECF5',
        'theme-color': '#007282',
        'input_bg': '#EFF0EE',
        'input_border': '#C4C6CB',
        'button_jeal': '#007282',
        'dark_blue': '#1C274C'
      },
      borderRadius: {
        'm': '36px'
      }
    },
  },
  plugins: [],
}
