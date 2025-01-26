/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['Bebas Neue', 'cursive'],
        lato: ['Lato', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        oswald: ['Oswald', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        playwrite: ['Playwrite VN', 'sans-serif'],
      },
      colors: {
        'custom-purple': '#bc29c9', 
        'custom-gray'   :'#32323C'
      },
      margin: {
        'custom-550': '550px',
        'custom-630': '630px',
      },
      screens: {
        'custom': { 'min': '769px', 'max': '789px' }, // Custom range
        'xs': '388px', // Custom breakpoint (min-width: 388px)
        'new-custom': { 'min': '1024px', 'max': '1100px' }, // Additional range
        'error':'768px',
      },
      
      
     borderColor: {
        // Allow gradients to be used as border colors
        'beautiful-gradient': 'linear-gradient(45deg, #5a0038, #8a4b2e, #cf875f)',
      },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(90deg, #BC29C9, #C94D70, #D57033)',
      'new-gradient': 'linear-gradient(270deg, #DF8908 10%, #B415FF 100%)',
      'beautiful-gradient': 'linear-gradient(45deg, #5a0038, #8a4b2e, #cf875f)',
      'contact-gradient':'linear-gradient(270deg, #DF8908 80%, #B415FF 100%)',
    },
    
    },
  },
  plugins: [],
}

