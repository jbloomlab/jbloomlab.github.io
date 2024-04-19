export default {
  content: [".vitepress/theme/**/*.vue", "./**/*.md"],
  theme: {
    extend: {
      colors: {
        "custom-orange": "#F26522",
        "custom-soft": "#f6f6f7",
      },
      fontWeight: {
        "extra-light": 200,
        light: 300,
      },
    },
  },
  plugins: [],
};
