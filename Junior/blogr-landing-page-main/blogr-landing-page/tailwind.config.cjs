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
    },
    colors: {
      'lightRed': 'hsl(356, 100%, 66%)',
      'veryLightRed': 'hsl(355, 100%, 74%)',
      'veryDarkBlue': 'hsl(208, 49%, 24%)',
      'white': ' hsl(0, 0%, 100%)',
      'Grayish-blue': 'hsl(240, 2%, 79%)',
      'veryDarkGrayishBlue': 'hsl(207, 13%, 34%)',
      'veryDarkBlackBlue': 'hsl(240, 10%, 16%)',
      'bg-gradient-dark-gray-blue': 'hsl(237, 17%, 21%)',
      'bg-gradient-very-desaturated-blue': 'hsl(237, 23%, 32%)'
    }
  },
  plugins: [],
}

// ### Primary

// - Light red (CTA text): hsl(356, 100%, 66%)
// - Very light red (CTA hover background): hsl(355, 100%, 74%)
// - Very dark blue (headings): hsl(208, 49%, 24%)

// ### Neutral

// - White (text): hsl(0, 0%, 100%)
// - Grayish blue (footer text): hsl(240, 2%, 79%)
// - Very dark grayish blue (body copy): hsl(207, 13%, 34%)
// - Very dark black blue (footer background): hsl(240, 10%, 16%)

// ### Gradient

// Background gradient - Intro/CTA mobile nav:

// - Very light red: hsl(13, 100%, 72%)
// - Light red: hsl(353, 100%, 62%)

// Background gradient - body:

// - Very dark gray blue: hsl(237, 17%, 21%)
// - Very dark desaturated blue: hsl(237, 23%, 32%)