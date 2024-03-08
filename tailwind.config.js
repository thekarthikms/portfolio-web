/** @type {import('tailwindcss').Config} */
import extendTheme from "./src/styles/theme"
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { ...extendTheme },
  },
  plugins: [],
}
