/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'top-left': '4rem', // Adjust the value as needed
      },
    },
  },
  plugins: [],
}