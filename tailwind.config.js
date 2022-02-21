const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // 'false' or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      // gray: colors.coolGray,
      // red: colors.red,
      // yellow: colors.amber,
      // blue: colors.blue,
      primary: '#6342FF',
      brand: {
        100: '#DBD3FF',
        200: '#C9BEFF',
        300: '#A18EFF',
        400: '#7A5EFF',
        500: '#6342FF',
        600: '#5337D7',
        700: '#3E28A3',
        800: '#2B1C70',
        900: '#1F1258',
      },
      gray: {
        50: '#F3F3F7',
        100: '#E8E8F0',
        200: '#D9D9E1',
        300: '#CACAD2',
        400: '#ACACB4',
        450: '#8E8E96',
        500: '#72727A',
        550: '#52525E',
        600: '#343444',
        700: '#272733',
        800: '#1A1A22',
        900: '#101016',
      },
    },
    extend: {
      spacing: {
        128: '32rem',
        136: '34rem',
        144: '36rem',
      },
      strokeWidth: {
        4: '4',
        6: '6',
        8: '8',
        10: '10',
        12: '12',
        16: '16',
        20: '20',
      },
      fontFamily: {
        sans: ['Roboto'],
        serif: ['Montserrat'],
      },
      letterSpacing: {
        'wide-xl': '0.2em',
        'wide-2xl': '0.4em',
      },
      rotate: {
        '-135': '-135deg',
        '-60': '-60deg',
        60: '60deg',
        135: '135deg',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
