/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      h1: ["Poppins"],
      body: ["Poppins"],
    },
    extend: {
      colors: {
        primary: "#303846",
        gray: "#979ba2",
      },
    },
  },
  plugins: [],
};
