/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "test.html",
    "src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    container: {
      center: true,
      padding: "5px",
    },
    extend: {
      colors: {
        primary: "#252525",
        secondary: "#D5FF40",
      },
      fontFamily: {
        heading: ["barlow", "sans-serif"],
        body: ["open sans", "sans-serif"],
        jakarta: ["plus jakarta sans", "sans-serif"],
      },
      animation: {
        marquee: "marquee 1s linear infinite",
        marquee2: "marquee2 1s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
