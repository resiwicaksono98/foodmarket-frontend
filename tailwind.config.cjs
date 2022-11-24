/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        biryani: ["Biryani", "sans-serif"],
        yantramanav: ["Yantramanav", "sans-serif"],
        merriweatherSans: ["Merriweather Sans", "sans-serif"],
      },
      colors: {
        primary: "#003459",
        secondary: "#007EA7",
        lightBlue: "#00A8E8",
        black: "#00171F",
        white: "#FFFFFF",
      },
      container: {
        padding: "2rem",
      },
    },
  },
  plugins: [],
};
