/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f1e2d1;",
        "primary-active": "#f2d3af",
        secondary: "#f2d3af",
        tertiary: "#878787",
      },
      transitionProperty: {
        width: "width",
      },
      screens: {
        xs: "360px",
      },
      aspectRatio: {
        "3/2": "3 / 2",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        110: "110%",
      },
    },
  },
  plugins: [],
};
