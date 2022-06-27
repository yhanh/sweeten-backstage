/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FCFBFB",
        primary: "#F8CDCE",
        secondary: "#F39898",
        warning: "#F27A68",
        sub: "#FAD2BC",
        light: "#FCE0CC",
        dark: "#765544",
        test: "#A9A9A9",
        aside: "#FFCB9B",
        black: "#000000",
        line: "#DDD0B7",
      },
    },
  },
  plugins: [],
};
