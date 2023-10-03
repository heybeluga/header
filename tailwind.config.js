/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        heading: ['Mona Sans', 'Inter var', ...defaultTheme.fontFamily.sans],
      }
    },
    screens: {
      mobile: '390px',
      tablet: '768px',
      desktop: '1024px',
      full: '1440px'
    }
  },
  plugins: []
}
