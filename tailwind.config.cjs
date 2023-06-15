/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      aria: {
        current: 'current="page"',
      },
      fontFamily: {
        sans: "InterVariable, Inter, helvetica, sans-serif",
      },
      colors: {
        gray: require("tailwindcss/colors").neutral,
        main: require("tailwindcss/colors").emerald,
      },
    },
  },
  plugins: [],
  plugins: [],
};
