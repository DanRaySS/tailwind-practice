/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      lg: { max: '1399.99px' },
      md: { max: '991.99px' },
      sm: { max: '767.99px' },
      xs: { max: '479.99px' },
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '24px',
      },
      colors: {
        main: '#0F0F0F',
        secondary: '#606060',
        secondarygray: '#717171',
        lightblue: '#065FD4',
        darkred: '#CC0000',
      },
      backgroundImage: {
        gradient: 'linear-gradient(to left, #FFF 20%, rgba(255, 255, 255, 0) 80%);'
      }
    },
  },
  plugins: [],
}

