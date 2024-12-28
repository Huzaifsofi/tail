/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        main: '#212121',
        icon: "#EADEDE",
        txtcol: "#ECEDEE",
        tag: '#3d3d3d',
      },
    },
  },
  plugins: [],
}

