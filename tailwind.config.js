/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#F40404",
        yellow: "#FFB800",
        para: "#6C6C6C",
        overlay: "#00000099",
        gray: "#F0F0F0",
        lightdark: "#282828",
      },
      maxWidth: {
        mdcontainer: "768px",
        container: "1140px",
      },
      screens: {
        sm: "320px",
        sml: "667px",
      },
    },
  },
};
