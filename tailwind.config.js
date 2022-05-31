const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: colors.gray[500],
      },
      container: {
        center: true,
        screens: {
          lg: '1124px',
          xl: '1124px',
          '2xl': '1124px',
        },
      },
    },
  },
  corePlugins: {
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    ringOpacity: false,
  },
  plugins: [],
};
