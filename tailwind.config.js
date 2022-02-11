const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        'primary-action': '#2563eb',
        backgound: '#f5f5fb'
      },
      fontFamily: {
        sans: ['Gotham', 'Nunito', 'sans-serif']
      }
    }
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        '@font-face': {
          fontFamily: 'Gotham-bold',
          fontWheight: '700',
          src: 'url(/src/assets/fonts/GothamBold.otf)'
        }
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        '@font-face': {
          fontFamily: 'Gotham-medium',
          fontWheight: '500',
          src: 'url(/src/assets/fonts/GothamMedium.otf)'
        }
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        '@font-face': {
          fontFamily: 'Gotham',
          fontWheight: '300',
          src: 'url(/src/assets/fonts/GothamBook.otf)'
        }
      });
    })
  ]
};
