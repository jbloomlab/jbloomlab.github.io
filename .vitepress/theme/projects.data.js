import { createContentLoader } from "vitepress";

export default createContentLoader("projects/*.md", {
  transform: (raw) => {
    return raw
      .map(({ url, frontmatter, subtext }) => ({
        name: frontmatter.name,
        github: frontmatter.github,
        documentation: frontmatter.documentation,
        logo: frontmatter.logo,
        link: frontmatter.link,
        url,
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  },
});
