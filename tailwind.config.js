const colors = require("tailwindcss/colors");

module.exports = {
  // Uncomment the line below to enable the experimental Just-in-Time ("JIT") mode.
  // https://tailwindcss.com/docs/just-in-time-mode
  // mode: "jit",
  theme: {
    extend: {
      backgroundColor: {
        // 'navy': '#081937',
        'navy': '#f0eee5',
        // 'navy-secondary': '#0C2041',
        'navy-secondary': '#e5d5c2',
        'navy-ascent': '#e5d5c2',
        'color-none': 'transparent',
        'pink': '#f17674',
        'purple': '#846ff4',
        'grey': '#424242'
      },
      textColor: {
        'pink': '#f17674',
        // 'purple': '#846ff4',
        // 'muted': '#E3DFD7'
        'muted': '#29261b',
        'white': '#29261b',
        'blanc': '#000000',
      },
      borderColor: {
        'pink': '#f17674',
        'purple': '#846ff4'
      },
      colors: {
        grey: colors.grey,
        white: colors.white,
        pink: colors.pink
      },
    },
    container: {
      center: true,
    },
  },
  variants: {},
  plugins: [
  ],
  purge: {
    // Filenames to scan for classes
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html",
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // safelist: [],
    },
  },
};
