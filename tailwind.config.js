/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/img/louck8.jpg')",
        
        'hero-pepper': "url('./assets/img/louck9.jpg')",
        
      }
    },
  },
  plugins: [],
}