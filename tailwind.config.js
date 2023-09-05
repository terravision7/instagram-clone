/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'hero-pattern': "url(https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk)",
        'ss-pattern': "url(https://www.instagram.com/images/instagram/xig/homepage/screenshots/screenshot2.png?__d=www)",
    },
  },
},
  plugins: [],

}
