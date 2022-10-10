/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Saira",
    },
    container: {
      padding: {
        DEFAULT: "1.5rem",
      },
    },
    extend: {
      colors: {
        primary: "#23262F",
        main: "#a8b89e",
        accent: "#286F6C",
        grey: {
          DEFAULT: "#919297",
          1: "#D9D9D9",
          2: "#E7E9EB",
          3: "#F5F5F5",
        },
        white: "#fff",
        pink: "pink",
        red: "red",
      },
      backgroundImage: {
        hero: 'url("/src/assets/img/main.jpg")',
        women: 'url("/src/assets/img/catagories/women.jpg")',
        men: 'url("/src/assets/img/catagories/men.jpg")',
        new: 'url("/src/assets/img/new-item.jpg")',
      },
      dropShadow: {
        primary: "0px 4px 10px rgba(15, 27, 51, 0.05);",
      },
    },
  },
  plugins: [],
};
