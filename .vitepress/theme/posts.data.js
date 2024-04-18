import { createContentLoader } from "vitepress";

export default createContentLoader("posts/*.md", {
  transform: (raw) => {
    return raw
      .map(({ url, frontmatter, subtext }) => ({
        title: frontmatter.title,
        author: frontmatter.author,
        date: frontmatter.date,
        url,
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  },
});
