/** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   daisyui: {
//     themes: ["light"],
//   },
//   plugins: [require("daisyui")],
// };

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        skillnaotheme: {
          primary: "#1A6241",
          secondary: "#FFB357",
        },
      },
      "light",
      "cupcake",
    ],
  },

  plugins: [require("daisyui")]
}