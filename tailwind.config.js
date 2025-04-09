/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#3B3B3B', // Define your custom color
      },
    },
  },
  plugins: [],
}