/* eslint-disable prettier/prettier */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */

module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './context/**/*.{js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'Open Sans', 'sans - serif'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: {
          100: '#787878',
          200: '#5E5E5E',
          300: '#454545',
          400: '#2B2B2B',
          500: '#121212',
        },
        secondary: {
          100: '#DCFEEA',
          200: '#AAFDCD',
          300: '#79FCAF',
          400: '#47FA92',
          500: '#15F974',
        },
        bodebar: {
          100: '#F5DDDC',
          200: '#E39F9E',
          300: '#D77674',
          400: '#955251',
          500: '#643736',
        },
      },
      backgroundImage: {
        'bannerlorem': "url('/banner_lorem.webp')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('flowbite/plugin'),
  ],
};
