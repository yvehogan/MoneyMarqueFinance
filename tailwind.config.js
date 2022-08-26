// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        "primary": "#444c9d",
        "secondary": "#7cb1de",
        "CardGrey": "#f8f8f8",
        "customGrey": "#b9b9b9",
        "green": "#42d579",
        "lightBlue": "#a9aacf"

      },
      width: {
        box1: "calc(100% - 32px)",
        box2: "calc(100% - 64px)"
      },
      fontFamily: {
        "body": ["\"Kumbh Sans\""],
      },
    },
  },
  plugins: [],
};
