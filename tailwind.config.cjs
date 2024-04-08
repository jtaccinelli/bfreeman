/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      aria: {
        current: 'current="page"',
      },
      fontFamily: {
        sans: "font, helvetica, sans-serif",
      },
      colors: {
        gray: require("tailwindcss/colors").stone,
        main: require("tailwindcss/colors").violet,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
