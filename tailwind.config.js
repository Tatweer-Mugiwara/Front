/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#26344F",
        white: "#fff",
        black: "#000",
        secondaryColor: "#66738C",
        "white-gray": "#AAAAAA"
      },
    },
    fontFamily: {
      unbounded: ["Unbounded", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
}

