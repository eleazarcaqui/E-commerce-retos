/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    height: {
      '500': '500px',
    },
    extend: {
      colors: {
        primary: "#ffa590",
        secondary: "#ffa590",
        footer: "#2E3E5C",
      },
    },
  },
  plugins: [],
};
