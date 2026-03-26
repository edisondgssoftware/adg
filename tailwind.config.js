/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
          sans: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
      'hero-pattern': "url('./images/Fondo inicio.webp')",
      'card-1':"url('./images/Seccion1- 1.webp')",
      'card-2':"url('./images/Seccion1 - 2.webp')",
      'card-3':"url('./images/Seccion 1 -3.webp')",
      'card-4':"url('./images/Seccion 1 -4.webp')"
  },
      colors: {
          brand: {
              main: '#6BA30C',  
              dark: '#2E7D32',  
              black: '#1A1A1A', 
              gray: '#666666',  
              bg: '#F5F5F5',    
              section:'#FAFAFA',
              darkText:'#1C2D05',
              logoColor:'#C9AA8F',
              aColorBlack:'#494949',
              mainOscuro:'#385213',
              mainOscuro2:'#527c0f',
          }
      }
    }
  }
}
