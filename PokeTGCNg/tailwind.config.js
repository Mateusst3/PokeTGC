/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        pokemonRed: {
          light: "#ff0000",
          dark: "#cc0000"
        },
        pokemonBlue: {
          main: "#3b4cca"
        },
        pokemonYellow: {
          light: "#ffde00",
          dark: "#b3a125"
        }
      },
      boxShadow: {
        shadowCard: "rgba(0, 0, 0, 0.35) 0px 5px 15px;"
      }
    },
  },
  plugins: [],
}