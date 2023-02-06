module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    placeSelf: false,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    gridTemplateColumns: {
      16: "repeat(16, minmax(0, 1fr))",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
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
    container: {
      DEFAULT: "1rem",
      sm: "2rem",
      lg: "4rem",
      xl: "5rem",
      "2xl": "6rem",
    },
    colors: {
      ghost: "#F4F4F9",
      charleston: "#182328",
      black: "#000000",
      charcoal: "#2F4550",
      electric: "#586F7C",
      powder: "#B8DBD9",
      deepSpace: "#445A66",
      pewter: "#88A5AB",
      cadet: "#A6B2BB",
      blueRyb: "#0D41E1",
      blueJeans: "#09A6F3",
      vividSky: "#07C8F9",
      gray: "#CED4DA",
      lightGray: "#E9ECEF",
      cultured: "#F8F9FA",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
