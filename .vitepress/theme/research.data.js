import { createContentLoader } from "vitepress";

export default createContentLoader("research/*.md", {
  render: true,
  transform: (raw) => {
    return raw.map((page) => ({
      title: page.frontmatter.title,
      color: page.frontmatter.color,
      order: page.frontmatter.order,
      html: page.html,
    }));
  },
});
