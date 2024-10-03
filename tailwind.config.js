/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'], // Purge configuration for unused CSS
  theme: {
    extend: {
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'], // Ensure the 'Inter' font name is capitalized
      },
    },
  },
  plugins: [],
}
