/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/assets/herobackground.jpg')",
        "hero-work": "url('./src/assets/third.jpeg')",
        "hero-laugh": "url('./src/assets/third_laugh.jpeg')",
      },
      animation: {
        "back-motion": "change 10s ease-in-out infinite",
      },
      keyframes: {
        change: {
          "0%": { backgroundImage: "url('./src/assets/first.jpeg')" },
          "35%": { backgroundImage: "url('./src/assets/second.jpeg')" },
          "65%": { backgroundImage: "url('./src/assets/third.jpeg')" },
          "100%": { backgroundImage: "url('./src/assets/first.jpeg')" },
        },
      },
    },
    screens: {
      mobile: "0px",
      medium: "575px",
      tablet: "768px",
      desktop: "1024px",
      desktopLg: "1624px",
    },
  },
  plugins: [],
};
