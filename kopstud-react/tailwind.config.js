/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkbrown': '#2d2424',
        'lightbrown': '#9b8f74',
        'softbrown': ' #797160',
      },
    },
  },
  plugins: [],
}

