/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      headerText: ['Montserrat', 'sans-serif'],
      bodyText: ['Noto', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#F5F5F5',
        'secondary': '#06202B',
        'tertiary': '#014E7E',
        'accent': '#01BF9B'
      }
    },
  },
  plugins: [],
}

