/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"], // Include all necessary paths
  theme: {
    extend: {
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'], // Ensure the 'Inter' font name is capitalized.
      },
    },
  },
  plugins: [],
}
