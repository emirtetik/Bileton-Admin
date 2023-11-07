/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      fontWeight: {
        thin: 300,
        medium: 400,
        bold: 500,
        extrabold: 700,
      },
      boxShadow: {
        dark: "0 4px 6px 0 rgba(69, 69, 69, 0.7), 0 5px 15px rgba(69, 69, 69, 0.1); ",
        light:
          "0px 4px 4px rgba(196, 204, 204, 0.25), 0px 4px 4px rgba(196, 204, 204, 0.22)",
      },
      colors: {
        primary: "#FF6000", //turuncu
        secondary: "#FFA559", //açık krem
        third: "#FFE6C7", //krem
        fourth: "#454545", //gri
        fifth: "#C4CCCC", // açık gri
      },
    },
  },
  plugins: [],
};
