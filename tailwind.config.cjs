/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // Slate 900
        secondary: "#94a3b8", // Slate 400
        tertiary: "#1e293b", // Slate 800
        "black-100": "#020617", // Slate 950
        "black-200": "#000000",
        "white-100": "#f8fafc",
        "accent-1": "#0ea5e9", // Sky 500
        "accent-2": "#8b5cf6", // Violet 500
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};