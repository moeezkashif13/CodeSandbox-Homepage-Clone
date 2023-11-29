/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme:{
    extend:{
      padding:{
        mobile:'16px',
        largerMobile : '32px'
      },
      screens:{
        desktop1 : '1200px',
        mobile:'360px',
        
      },
      
      maxWidth:{
        common : '1200px'
      },

      lineHeight:{
        11 : '52px',
      },

      colors:{
        'neutral-700': '#161616',
        text1 : '#f0f0f0',
        'neutral-600' : '#1D1D1D',
        'lime-400' : '#F1FFB9',
        'lime-600' : '#E3FF73',
        'lime-800' : '#D6FB41',
        secondary : '#c2c2c2',
        third : '#a3a3a3',
        fourth : '#292929'
      },
    },
  },
  
  plugins: [],
}
