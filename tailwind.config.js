/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        brand:'#0095f6',
        facebook: '#385185',
        link: '#37628B', 
        loadinginsta: '#EF0991', 
        loadingtext:'#FD661C',
      },
      backgroundImage: {
        'hero-pattern': "url(https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk)",
       
    },
    
  },
},
  plugins: [],

}
