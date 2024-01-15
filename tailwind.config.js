/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {colors: {
      'border-bg':'#b4ad95',
      'home-btn': '#295f48',
      'navbar-green': '#204c39',
      'custom-nav-button':'#eeeeee',
      'hover-nav-button': '#F8DFD4',
      'cutom-brown':'#C69774',
      'bg-product' :'#CEDEBD'
    },},
    backgroundImage: {
      'bg-img': "url('/public/parallax/light-min.jpg')",
      'about-us-bg-img': "url('/public/parallax/light-min-2.jpg')",
      'product-bg-img': "url('/public/products-1.webp')",
    },
    fontFamily: {
      'catamaran': ['Catamaran', 'sans-serif'],
      'lato': ['Lato', 'sans-serif'],
      'whisper': ['Whisper', 'cursive'],
      'Kanit' : ['Kanit', 'sans-serif'],
    },
  },

  plugins: [],
}