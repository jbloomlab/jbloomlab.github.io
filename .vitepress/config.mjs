import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Bloom Lab",
  description: "We study the evolution of viruses.",
  appearance: false,
  ignoreDeadLinks: true,
  head: [
    [
      "meta",
      {
        name: "google-site-verification",
        content: "ZIQn6aYwzgvrO-eWI5MYIU5R21R5LnUk95UPij-RXWQ",
      },
    ],
    [
      "meta",
      {
        name: "keywords",
        content:
          "Jesse Bloom, Bloom Lab, Fred Hutch Cancer Center, Deep Mutational Scanning, Virus Evolution, Lentiviral Psuedotyping",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/images/icon.png",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css",
      },
    ],
  ],
  // Add canonical link to each page (https://vitepress.dev/reference/site-config#example-adding-a-canonical-url-link)
  // It's necessary to do this because we need to tell google that we're hosting from jbloomlab.org and not from github.io
  transformPageData(pageData) {
    const canonicalUrl = `https://jbloomlab.org/${pageData.relativePath}`
      .replace(/index\.md$/, "")
      .replace(/\.md$/, ".html");

    pageData.frontmatter.head ??= [];
    pageData.frontmatter.head.push([
      "link",
      { rel: "canonical", href: canonicalUrl },
    ]);
  },
});
