/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/theme");
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js'
  ],
  theme: {
    extend: {
      boxShadow: {
        box: "0px 24px 64px 0px"
      },
      screens: {
        xs: "400px"
      }
    },
  },
  plugins: [
    nextui()
  ],
}

