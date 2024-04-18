import { createContentLoader } from "vitepress";

export default createContentLoader("posts/*.md", {
  excerpt: true,
  transform: (raw) => {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        author: frontmatter.author,
        date: frontmatter.date,
        excerpt,
        url,
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  },
});
