/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/img/louck8.jpg')",
        'hero-max': "url('./assets/img/louck2.jpg')",
        'hero-next': "url('./assets/img/louck6.jpg')",
        'hero-pepper': "url('./assets/img/louck9.jpg')",
        'hero-final': "url('./assets/img/louck10.jpg')",
      }
    },
  },
  plugins: [],
}