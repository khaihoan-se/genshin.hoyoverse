// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}', 
    './src/pages/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
    screens: {
      'mobile': { 'max': '640px' },
      'tablet': { 'max': '768px' },
      'laptop': { 'max': '1024px' },
      'desktop': { 'max': '1280px' }
    }
  },
  variants: {},
  plugins: [],
}
