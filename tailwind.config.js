/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        Fblue: "#0077b6",
        Fgray: "#333",
        Fblack: "#0b0b0b",
      },
    },
  },
  screens: {
    xs: "575px",
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
