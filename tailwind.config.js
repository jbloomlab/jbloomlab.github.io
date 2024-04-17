/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".vitepress/theme/**/*.vue", "./**/*.md"],
  theme: {
    extend: {
      colors: {
        "custom-orange": "#F26522",
      },
    },
  },
  plugins: [],
};
