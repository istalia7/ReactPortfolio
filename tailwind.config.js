/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "intro-wallpaper": "url('/src/images/wallpaper_intro.jpg')",
        "HTML5": "url('/src/images/HTML5_logo.png')",
      },
      // fontFamily: {
      //   zen-dots: ["Zen Dots"],
      // },
    },
  },
  plugins: [],
};
