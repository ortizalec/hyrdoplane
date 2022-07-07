/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      "coffee"
    ],
  },
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
