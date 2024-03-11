/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "foods.html", "drinks.html", "desserts.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#eab308",
        dark: "#0f172a",
        secondary: "#64748b",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
