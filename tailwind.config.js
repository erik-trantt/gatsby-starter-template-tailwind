const colors = require("tailwindcss/colors");

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        primary: colors.red["600"],
        secondary: colors.red["300"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
