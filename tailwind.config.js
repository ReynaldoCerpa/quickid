module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "raleway": ["Raleway", "sans serif"],
        "montserrat":["Montserrat", "sans serif"],
        "source-sans":["Source sans Pro", "sans serif"]
      },
    },

  },
  plugins: [],
}
