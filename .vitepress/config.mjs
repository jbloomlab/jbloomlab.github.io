import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Bloom Lab",
  description: "We study the evolution of viruses.",
  appearance: false,
  ignoreDeadLinks: true,
  head: [
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
});
