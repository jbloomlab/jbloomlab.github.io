import { createContentLoader } from "vitepress";

export default createContentLoader("projects/*.md", {
  excerpt: true,
  transform: (raw) => {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        name: frontmatter.name,
        github: frontmatter.github,
        documentation: frontmatter.documentation,
        logo: frontmatter.logo,
        link: frontmatter.link,
        excerpt,
        url,
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  },
});
