/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px'
    },
    extend: {
      colors: {
        primary: "#2A2141",
        secondary: "#0F0D13",
        white: "#E1E1E6",
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      opacity: {
        67: ".67",
      },
    },
  },
  plugins: [],
};
