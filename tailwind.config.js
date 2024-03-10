/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "my": "#c23c3c",
      },
      dropShadow: {
        "header-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }
    },
  },
  plugins: [],
}