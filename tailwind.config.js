/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'], // Purge configuration for unused CSS
  theme: {
    extend: {
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'], // Ensure the 'Inter' font name is capitalized
      },
      keyframes: {
        moveAndGrow: {
          '0%': { transform: 'translateX(0) scale(1)' },
          '50%': { transform: 'translateX(50px) scale(1.5)' },
          '100%': { transform: 'translateX(100px) scale(2)' },
        },
      },
      animation: {
        moveAndGrow: 'moveAndGrow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
