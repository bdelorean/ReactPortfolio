/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#5C584E",
        bgLinks: "#5C584E",
        bgHeader: "#282723",
        bgButton:"#0D0C0A",
        accentColor:"#977955",
        smallest:"8px"
      },
      backgroundImage: {
        "custom-bg": "url('/images/portfoliobackground.jpeg')",
      },
    },
  },
  plugins: [],
};
