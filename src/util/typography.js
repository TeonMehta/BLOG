import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    { name: "Anton", styles: [700] },
    { name: "Oswald", styles: [400, 700, 800] },
  ],
  headerFontFamily: ["Anton", "sans-serif"],
  bodyFontFamily: ["Oswald", "serif"],
})

export default typography