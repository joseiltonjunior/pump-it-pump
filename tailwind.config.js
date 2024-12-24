/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'nunito-bold': ['NunitoBold'],
        'nunito-medium': ['NunitoMedium'],
        'nunito-regular': ['NunitoRegular'],
        'nunito-light': ['NunitoLight'],
        'nunito-semibold': ['NunitoSemiBold'],
      },
    },
  },
  plugins: [],
};
