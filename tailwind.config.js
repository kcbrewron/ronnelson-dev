module.exports = {
  content: [
    'app/**/*.{js,ts,jsx,tsx}',
    'pages/**/*.{js,ts,jsx,tsx}',
    'components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container:{
      center: true,
    },
    gridTemplateColumns: {
      16: "repeat(16, minmax(0, 1fr))",
    },
    screens: {
      xs: "0px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
    fontFamily: {
      sans: ["Proza Libre", "sans-serif"],
      serif: ["Rubik", "serif"],
      body: ["Open Sans"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    colors: {
      black: "#020100",
      bus: "#F1D302",
      fireEngine: "#C1292E",
      lapisBlue: "#235789", //use for button hover
      indigoBlue: "#1D4972", //use for buttons
      white: "#FDFFFC"
    },
  },
};
