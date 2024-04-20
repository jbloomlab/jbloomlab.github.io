import { createContentLoader } from "vitepress";

export default createContentLoader("papers/*.md", {
  transform: (raw) => {
    return raw
      .map(({ url, frontmatter, subtext }) => ({
        title: frontmatter.title,
        date: frontmatter.date,
        authors: frontmatter.authors,
        journal: frontmatter.journal,
        doi: frontmatter.doi,
        link: frontmatter.link,
        image: frontmatter.image,
        url,
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  },
});
