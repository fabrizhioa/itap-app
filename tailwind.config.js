/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/img/louck8.jpg')",
        'hero-max': "url('./assets/img/louck2.jpg')",
        'Hero-new': "url('./assets/img/louck7.jpg')",
        'hero-pepper': "url('./assets/img/louck9.jpg')",
        
      }
    },
  },
  plugins: [],
}