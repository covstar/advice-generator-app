/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
  theme: {

      backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '6rem',
    },
    extend: {
       // font family
    fontFamily:{
      'Manrope': ['Manrope'],
    },
    
    // padding 
    padding: {
        '3%': '3%',
        '5%': '5%',
        '10%': '10%',
        '15%': '15%',
        '17%': '17%',
        '20%': '20%',
        '22%': '22%',
        '27%': '27%',
        '25%': '25%',
        '24%': '24%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
      },
       margin: {
        '3%': '3%',
        '5%': '5%',
        '10%': '10%',
        '15%': '15%',
        '17%': '17%',
        '20%': '20%',
        '22%': '22%',
        '27%': '27%',
        '25%': '25%',
        '24%': '24%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
      },
      width: {
         '3%': '3%',
        '5%': '5%',
        '10%': '10%',
        '15%': '15%',
        '17%': '17%',
        '20%': '20%',
        '22%': '22%',
        '27%': '27%',
        '25%': '25%',
        '24%': '24%',
        '30%': '30%',
        '40%': '40%',
        '45%': '45%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
      },
    // colors 
     colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'Light-Cyan': 'hsl(193, 38%, 86%)',
       'Neon-Green': 'hsl(150, 100%, 66%)',
       'Grayish-Blue': 'hsl(217, 19%, 38%)',
       'Dark-Grayish-Blue': 'hsl(217, 19%, 24%)',
       'Dark-Blue': 'hsl(218, 23%, 16%)'
    },

     letterSpacing: {
      widest: '.25em',
    },
     // media quries
       screens: {
      'sm': {'max': '720px'},
      // => @media (max-width: 639px) { ... }
      'tb': {'min': '721px', 'max': '1290px'},
      // => @media (min-width: 768px and max-width: 1023px)
      'md': {'min': '722px'},
      // => @media (min-width: 768px) { ... }
    },
  },
},
  plugins: [],
}
