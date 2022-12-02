/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      '2xl': '325px',
      'xs': '375px',
      'sm': '425px',
      'md': '640px',
      'lg': '1024px',
      'xl': '1440px'
    }
  },
  plugins: [],
}