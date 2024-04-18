import { createContentLoader } from "vitepress";

export default createContentLoader("posts/*.md", {
  transform: (raw) => {
    return raw
      .map(({ url, frontmatter, subtext }) => ({
        name: frontmatter.name,
        github: frontmatter.github,
        documentation: frontmatter.documentation,
        url,
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  },
});
