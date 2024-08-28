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
});
