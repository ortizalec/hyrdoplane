/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["cupcake", "dark", "cmyk", "forest", "lofi", "garden"],
  },
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
