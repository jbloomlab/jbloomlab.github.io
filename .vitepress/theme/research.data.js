import { createContentLoader } from "vitepress";

export default createContentLoader("research/*.md", {
  render: true,
  transform: (raw) => {
    return raw.map((page) => ({
      title: page.frontmatter.title,
      isAim: page.frontmatter.isAim,
      html: page.html,
    }));
  },
});
