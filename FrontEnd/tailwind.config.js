/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit-300': 'repeat(auto-fit, minmax(300px, 1fr))',
        'auto-fit-240': 'repeat(auto-fit, minmax(240px, 1fr))',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

