# Bloom Lab Website

This repository contains the code the Bloom Lab's public website. The website is based on a custom [VitePress](https://vitepress.dev/guide/what-is-vitepress) theme. Using VitePress allows us to take advantage of the
VitePress ecosystem for routing and markdown processing.

Contributions to the website are made by writing markdown documents and editing YAML and JSON configuration files.

The content of our lab's website draws inspiration from lab websites like those of [Trevor Bedford](https://bedford.io/), [Erick Matsen](https://matsen.fhcrc.org/), and [Michael Elowitz](https://www.elowitz.caltech.edu/). We also borrow styles from [VitePress](https://vitepress.dev/guide/what-is-vitepress) to maintain consistency with our other VitePress websites.

## Installation

Contributions to the lab website are made through [GitHub](https://github.com/jbloomlab/bloom-lab-website) using pull requests.

Clone the `git` repository locally to edit the site:

```bash
git git@github.com:jbloomlab/bloom-lab-website.git
cd bloom-lab-website
```

You'll need to install Javascript and its relevant packages to preview the site as you make changes. You're going to need two pieces of software to do this: `Node.js` and `npm`. 

`Node.js` is an environment that allows you to run Javascript code on your computer. `npm` is a package manager that contains the Javascript libraries necessary to create the website. The instructions for installing `Node` and `npm` depend on your operating system and personal preference.

### Without `conda`

Follow the instructions [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install `Node` without a package manager.

### With `conda`

If you have `conda` on your operating system, you can use it to install `node` and `npm`.

```bash
conda env create -f environment.yml
conda activate dms-vep.org
```

Regardless of how you installed `Node` and `npm`, verify that the installation worked by running:

```bash
node -v
npm -v
```

If this is the first time you're contributing to the website, you'll need to tell `npm` to install all of the packages in the `packages.json` file. To do this, run the following command from within the repository:

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
├── people/ # <-------------- team member pages
├── papers/ # <-------------- publication pages
├── posts/ # <-------------- blog posts
├── projects/ # <-------------- projects and software write-ups
├── index.md
├── assets
├── public
├── .vitepress # <-------------- source code
├── tailwind.config.mjs
├── postcss.config.mjs
├── package.json
└── package-lock.json
```

Any file ending `*.md` is converted to a page on the site. The main markdown content lives in the `people`, `papers`, `posts`, and `projects` directories. A page on the website is added for each `.md` file in these directories and a 'landing' page for each is updated accordingly.

### Adding Team Members

*More details to come*

### Adding Blog Posts

*More details to come*

### Adding Key Publications

*More details to come*

### Adding Software/Projects

*More details to come*

## TODO: 

Some features haven't been added yet. Here are the most pressing feature requests:

- Add filters based on keys for the papers
- Add research description to the homepage
- Add social media links (Twitter + GitHub) to the navigation bar
- Add alumni to the team page
