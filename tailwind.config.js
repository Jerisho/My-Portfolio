/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow : "FFA21F",
        amber : "#FFA21F",
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "grey": "#363946",
        "icon-blue": "#101945",
        "title": "#101948",
        "opaque-black": "rgba(0,0,0,0.35)",
        "aqua": "#7BDD99",
        "azure": "84D8FF",
        "blue": "#2F44A5"
      },
      backgroundImage: (theme) => ({
        "gradient-aquablue":
          "linear-gradient(360deg, rgba(113,255,179,1) 0%, rgba(32,115,255,1) 100%)",
        'svg': "url('./assets/svg.png')",
        "imgContact": "url('./assets/contact.jpg')"
      }),
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px"
      },
      boxShadow: {
        "custom" : "0px 0px 34px -2px rgba(0,0,0,0.75)"
      },
      blur: {
        "xs" : "0.7px"
      },
      fontFamily: {
        opensans: ['Open Sans', 'sans-serif'],
        yellowtail: ['Yellowtail', 'cursive']
      }
  }
  },
  plugins: [],
}