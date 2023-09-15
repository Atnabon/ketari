module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: "#2a4365",
          bulgary: "#FDB82C",
          secondary: "#F9FCFF",
          accent: "#1A1A1A",
          neutral: "#90949F",
          "base-100": "#ffffff",
          info: "#98A8DD",
          success: "#1BBB70",
          warning: "#DF7E07",
          error: "#FA5C5C",
          gradient: "linear-gradient(to right, #2a4365, #90949F)",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
