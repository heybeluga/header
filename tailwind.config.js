/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.ts', './src/**/*.tsx'],
  theme: {
    screens: {
      mobile: '390px',
      tablet: '768px',
      desktop: '1024px',
      full: '1440px'
    }
  },
  plugins: [],
}
