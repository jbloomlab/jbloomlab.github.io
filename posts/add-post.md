---
layout: post
title: Adding a blog post
date: 2024-04-17
author: Will Hannon
---

Basic instructions for adding a blog post to the lab website.

---

## Clone the website

You'll need the website on your local machine. Clone the most recent version of the website from [GitHub](https://github.com/jbloomlab/bloom-lab-website).

```bash
git clone git@github.com:jbloomlab/bloom-lab-website.git
```

Then, make a new branch for your post.

```bash
git checkout -b add-my-post
```

## Add a post

The basic structure of the lab website is as follows.

```md
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

You'll be adding your blog post as a markdown document to `posts/`.

## Write your post

A blog post consists of a normal markdown document configured with `yaml` "frontmatter" at the top of the page. This "frontmatter" tells the website that your file is a blog post allowing it to be parsed accordingly.

```yaml
layout: post
title: Adding a blog post
date: 2024-04-17
author: Will Hannon
```

The `layout` tells the website to render your markdown as a post, the `title` is what shows up at the top of your blog, the `date` sorts the posts.

In addition, you should write a basic description of the post directly below the frontmatter and above three dashes (`---`). This description will appear in the index of all blog posts.

```md
Basic instructions for adding a blog post to the lab website.

---

Main content goes here...
```

## Push your post

Finally, push your branch GitHub and make a Pull Request to add your post!
