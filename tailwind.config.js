/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        ...require('tailwindcss/colors'),
        'darkest-blue': '#14305f',
        'darkish-blue': '#274D83',
        'cream': '#dddddc',
        'bermuda': '#78dcca',
      },
    },
  },
  plugins: [],
}

