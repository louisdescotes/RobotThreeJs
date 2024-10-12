/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(265deg, #2663EB 1.37%, #6E99F8 90.66%)',
      },
      colors: {
        normal: "#FAFAFA",
        key: "#2663EB",
        dark: "#292929",
      }
    },
  },
  plugins: [],
}