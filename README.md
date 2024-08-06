# Bloom Lab Website

This repository contains the code the Bloom Lab's public website. The website is based on a custom [VitePress](https://vitepress.dev/guide/what-is-vitepress) theme. Using VitePress allows us to take advantage of the
VitePress ecosystem for routing and markdown processing.

Contributions to the website are made by writing markdown documents and editing YAML and JSON configuration files.

The content of our lab's website draws inspiration from lab websites like those of [Trevor Bedford](https://bedford.io/), [Erick Matsen](https://matsen.fhcrc.org/), and [Michael Elowitz](https://www.elowitz.caltech.edu/). We also borrow styles from [VitePress](https://vitepress.dev/guide/what-is-vitepress) to maintain consistency with our other VitePress websites.

## Installation

Contributions to the lab website are made through [GitHub](https://github.com/jbloomlab/jbloomlab.github.io) using pull requests.

Clone the `git` repository locally to edit the site:

```bash
git clone https://github.com/jbloomlab/jbloomlab.github.io
cd jbloomlab.github.io
```

You'll need to install Javascript and its relevant packages to preview the site as you make changes. You're going to need two pieces of software to do this: `Node.js` and `npm`. 

`Node.js` is an environment that allows you to run Javascript code on your computer. `npm` is a package manager that contains the Javascript libraries necessary to create the website. The instructions for installing `Node` and `npm` depend on your operating system and personal preference.

### Without `conda`

Follow the instructions [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install `Node` without a package manager.

### With `conda`

If you have `conda` on your operating system, you can use it to install `node` and `npm`.

```bash
conda env create -f environment.yml
conda activate jbloomlab.org
```

### Install `npm` packages and view page

Regardless of how you installed `Node` and `npm`, verify that the installation worked by running:

```bash
node -v
npm -v
```

If this is the first time you're contributing to the website, you'll need to tell `npm` to install all of the packages in the `package.json` file. To do this, run the following command from within the repository:

```bash
npm install
```

## Developing

While you're editing the content of the website, it's important to see a live preview of your changes. You can do this by booting up a local "development" server to open the local version of the lab website on your browser. To do this, simply run:

```bash
npm run dev
```

Now, there will be a local version of the website running at `http://localhost:5173` (or some other URL printed to the console). Visit this URL in your browser to see a preview of the site.

## Contributing

The general file structure of this website is as follows:

```bash
.
├── README.md
├── people/ # <-------------- team members
├── papers/ # <-------------- papers
├── posts/ # <-------------- blog posts
├── projects/ # <-------------- projects and software
├── index.md
├── assets/ # <-------------- images
├── public
├── .vitepress # <-------------- source code
├── tailwind.config.mjs
├── postcss.config.mjs
├── package.json
└── package-lock.json
```

Any file ending `*.md` is converted to a page on the site. The main markdown content lives in the `people`, `papers`, `posts`, and `projects` directories. A page on the website is added for each `.md` file in these directories and a 'landing' page for each is updated accordingly. On each `*.md` page, there is `YAML` frontmatter that configures how the page is rendered and the content of that page.

### Adding Team Members

To add a team member, navigate to the `people` directory. Within the `people` directory, make a new `.md` file with the name of the person you're adding. At the top of the page, add `YAML` with the following fields:

```yaml
---
layout: person # <-------------- Determines the layout
name: "Will Hannon" # <-------------- Your preferred name
image: "/assets/people/will-hannon.jpeg" # <-------------- The path to an image of you (a link also works)
title: "Data Scientist" # <-------------- Your title. Please be as consistent as possible
category: "Staff" # <-------------- One of [Graduate Students, Postdocs, or Staff]
links: # <-------------- Links to your socials. Icons should be one of [github, linkedin, orcid, twitter, email, scholar, or website]
  - link: "https://github.com/WillHannon-MCB"
    icon: "github"
  - link: "https://www.linkedin.com/in/williamhannon/"
    icon: "linkedin"
  - link: "whannon@fredhutch.org"
    icon: "email"
---
```

It's **key** that you add `layout: person` to the top of the page. This ensures that the markdown file is parsed as a team member page. The other fields are explained above.

Below this `YAML` frontmatter, add a short description of yourself using standard markdown syntax. This description appears when you click on a team member.

#### Adding Alumni

Add Alumni by editing [`/people/alumni.js`](/people/alumni.js). There is a javascript object in the file (basically `JSON` if you're familiar with it). Add an entry to this object:

```js
export const alumni = [
  {
    name: "Frances Welsh",
    title: "Graduate Student",
    program: "MCB",
    start: "2019",
    end: "2024",
    currentPosition: "Research Scientist at Amazon",
  },
  {
    name: "...",
    title: "...",
    program: "...",
    start: "...",
    end: "...",
    currentPosition: "...",
  },
]
```

### Adding Blog Posts

To add a blog post, you create a `*.md` file in the `posts/` directory. At the top of the page, add the following `YAML`:

```yaml
---
layout: post
title: Example markdown styles
date: 2024-04-17
author: Will Hannon
---
```

The fields are self-explanatory; their values are visible on the Blog section of the website. Underneath this `YAML` frontmatter, add a short description followed by a `---`. This short description will appear as an excerpt on the Blog section of the website below the post.

```md
---
layout: post
title: Example markdown styles
---

Here's a short excerpt to appear as a description of the post in the blog index.
---
```

The content of the blog post is written using standard markdown syntax.

### Adding Papers

To add a paper to the website, add a `*.md` file to the `papers/` directory. The file should be named based on the year of the paper and author's last name (like `2021_starr.md`).
This information isn't used by the website, but it's nice for consistency.

Add the following `YAML` to the top of the document:

```yaml
---
layout: paper
title: "Within-host evolution of human influenza virus"
date: "2018-09-01"
authors: 
    - "Katherine S Xue"
    - "Louise H Moncla"
    - "Trevor Bedford"
    - "Jesse D Bloom"
journal: "Trends in Microbiology"
doi: "10.1016/j.tim.2018.02.007"
link: "https://www.cell.com/trends/microbiology/fulltext/S0966-842X(18)30043-X"
image: "/assets/papers/xue_2018.jpg"
keywords:
    - "Influenza"
    - "Within-host evolution"
selected: true # <------- OPTIONAL, this will add the paper to a list of selected paper
---
```

Most fields are self-explanatory. The `keywords` field is automatically parsed by the website, allowing you to quickly filter all of our papers for the ones relevant to you. Please reference this for existing keywords that pertain to your paper. Select a representative image from your paper and add it to the `assets/papers` directory using the same base name as for the markdown file.

There is an optional key called `selected:` that if added and set to `true` will add the paper to a list of selected paper at the top of the page.

### Adding Software/Projects

To add software to the website, add a `*.md` file in `projects/`. Add the following `YAML` to the top of the page:

```yaml
---
layout: project
name: "dms-viz"
link: https://dms-viz.github.io/v0/
github: https://github.com/dms-viz/dms-viz.github.io
documentation: https://dms-viz.github.io/dms-viz-docs/
---
```

Underneath this, add a short markdown description of the software followed by a `---`. This excerpt appears as a description in the Software section of the website.

```md
---
layout: project
...
---

An interactive web tool for visualizing site-level data on a protein structure with the capability of handling complex scenarios like multiple epitopes.

---
```

### Editing the home page and section home pages
While the individual posts can be edited by just editing the Markdown, to edit the homepage and the top text for each section (*Blog*, *Team*, *Papers*, *Software*) you will need to edit the corresponding `*.vue` file at [.vitepress/theme](.vitepress/theme) (eg, [.vitepress/theme/Home.vue](.vitepress/theme/Home.vue) for the home page).
