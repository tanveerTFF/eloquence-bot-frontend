// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        theatrical: ["TheatricalElegantDemo", "cursive"],
        paper: ['PaperScratch', 'sans-serif'],
        sispectly: ['SispectlyHarmonies', 'sans-serif'],
        secondquotes: ['SecondQuotes', 'sans-serif'],
        alein: ['Alein', 'sans-serif'],
        wasted: ["WastedVindey", "serif"]
      },
      colors: {
        pinkglass: 'rgba(255, 192, 203, 0.2)',
      }
    },
  },
  plugins: [],
};
