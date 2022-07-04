module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nun: ["Nunito Sans", "sans-serif"],
        ablk: ["Air-black", "sans-serif"],
        abld: ["Air-bold", "sans-serif"],
        abk: ["Air-book", "sans-serif"],
        aexb: ["Air-exbold", "sans-serif"],
        al: ["Air-light", "sans-serif"],
        am: ["Air-medium", "sans-serif"],
        cstd: ["Circular Std Book", "sans-serif"],
        mp: ["Mark Pro", "sans-serif"],
        dd: ["D-DIN Condensed", "sans-serif"],
        joe: ["Josefin Sans", "sans-serif"],
        "fira-mono": ["Fira Mono", "monospace"],
        "fira-code": ['Fira Code', 'monospace'],
        "pac": ['Pacifico', 'cursive'],
      },
      
      // 'Pacifico', cursive;

      colors: {
        pri: {
          main: "#b263fe",
          1: "#f0f0f0",
          3: "#716f8a",
          4: "#111016",
          5: "#f0f0f04a",
        },
        sec: {
          main: "#0073ec",
        },
      },
    },
  },
  plugins: [],
};
