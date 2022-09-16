/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        imageleft: "-38px 33px 0px 0px #C4C4C4",
        imageright: "53px 41px 0px 0px #C4C4C4",
        home: "0px 4px 20px 2px rgba(0, 0, 0, 0.25)",
      },
      fontSize: { xxs: "0.625rem" },
      colors: {
        "cyan-blue": "#BCE4FA",
        tabac: "#22284F",
        lightblue: "#00B4FF",
        subtext: "#616687",
        pink: "#E83962",
        lightgray: "#F5F6F8",
        boxgray: "#d9d9d9",
        shadowgray: "#C4C4C4",
        buttongray: "#949494",
        midgray: "#959595",
        darkgray: "#333333",
        softblue: "#E4E5EB",
        greyblue: "#D4D6E3",
        border: "#3D3C3C",
        toggle: "#56C568",
      },
      fontFamily: {
        inter: ["Inter"],
        robotoslab: ["Roboto Slab"],
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};
