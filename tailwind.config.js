/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",

  ],

  theme: {
    extend: {
      animation: {
        'text': 'text 4s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '100% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
      }
    },
  },

  plugins: [
    require("flowbite/plugin"),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/line-clamp'),
    require("@tailwindcss/forms"),

  ],
}