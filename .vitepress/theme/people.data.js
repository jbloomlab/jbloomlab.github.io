import { createContentLoader } from "vitepress";

export default createContentLoader("people/*.md", {
  transform: (raw) => {
    return raw
      .map(({ url, frontmatter, subtext }) => ({
        name: frontmatter.name,
        image: frontmatter.image,
        socials: frontmatter.socials,
        url,
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  },
});
