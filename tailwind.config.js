const variables = require("./projects/asg-library/src/lib/tailwind-variables");
module.exports = {
  content: ["./projects/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        ...variables.colors,
      },
    },
  },
  plugins: [],
};