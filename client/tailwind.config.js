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
        'accent': '#01BF9B',
        'cuaternary':'#06B9D3'
      },
      backgroundImage: {
        'bridge-image': 'url(./assets/building-with-water.png)'
      }
    },
  },
  plugins: [],
}

