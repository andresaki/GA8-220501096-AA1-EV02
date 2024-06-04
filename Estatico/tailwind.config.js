/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [keepPreset],
  theme: {

    extend: {

      colors: {
        primario: '#0256A4',
        secundario: '#767676',
        bordeInput: '#E3E3E3',
        terceario: '#0079E9'
      },

      fontFamily: {
        montserrat:['Montserrat'],
      }


    },
  },
  plugins: [],
}

