import{_ as s,c as i,o as a,f as e}from"./chunks/framework.B63u0Dcf.js";const E=JSON.parse('{"title":"Bloom Lab Website","description":"","frontmatter":{},"headers":[],"relativePath":"README.md","filePath":"README.md"}'),t={name:"README.md"},n=e(`<h1 id="bloom-lab-website" tabindex="-1">Bloom Lab Website <a class="header-anchor" href="#bloom-lab-website" aria-label="Permalink to &quot;Bloom Lab Website&quot;">​</a></h1><p>This repository contains the code the Bloom Lab&#39;s public website. The website is based on a custom <a href="https://vitepress.dev/guide/what-is-vitepress" target="_blank" rel="noreferrer">VitePress</a> theme. Using VitePress allows us to take advantage of the VitePress ecosystem for routing and markdown processing.</p><p>Contributions to the website are made by writing markdown documents and editing YAML and JSON configuration files.</p><p>The content of our lab&#39;s website draws inspiration from lab websites like those of <a href="https://bedford.io/" target="_blank" rel="noreferrer">Trevor Bedford</a>, <a href="https://matsen.fhcrc.org/" target="_blank" rel="noreferrer">Erick Matsen</a>, and <a href="https://www.elowitz.caltech.edu/" target="_blank" rel="noreferrer">Michael Elowitz</a>. We also borrow styles from <a href="https://vitepress.dev/guide/what-is-vitepress" target="_blank" rel="noreferrer">VitePress</a> to maintain consistency with our other VitePress websites.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>Contributions to the lab website are made through <a href="https://github.com/jbloomlab/jbloomlab.github.io" target="_blank" rel="noreferrer">GitHub</a> using pull requests.</p><p>Clone the <code>git</code> repository locally to edit the site:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/jbloomlab/jbloomlab.github.io</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> jbloomlab.github.io</span></span></code></pre></div><p>You&#39;ll need to install Javascript and its relevant packages to preview the site as you make changes. You&#39;re going to need two pieces of software to do this: <code>Node.js</code> and <code>npm</code>.</p><p><code>Node.js</code> is an environment that allows you to run Javascript code on your computer. <code>npm</code> is a package manager that contains the Javascript libraries necessary to create the website. The instructions for installing <code>Node</code> and <code>npm</code> depend on your operating system and personal preference.</p><h3 id="without-conda" tabindex="-1">Without <code>conda</code> <a class="header-anchor" href="#without-conda" aria-label="Permalink to &quot;Without \`conda\`&quot;">​</a></h3><p>Follow the instructions <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" target="_blank" rel="noreferrer">here</a> to install <code>Node</code> without a package manager.</p><h3 id="with-conda" tabindex="-1">With <code>conda</code> <a class="header-anchor" href="#with-conda" aria-label="Permalink to &quot;With \`conda\`&quot;">​</a></h3><p>If you have <code>conda</code> on your operating system, you can use it to install <code>node</code> and <code>npm</code>.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> env</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> environment.yml</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> activate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> jbloomlab.org</span></span></code></pre></div><h3 id="install-npm-packages-and-view-page" tabindex="-1">Install <code>npm</code> packages and view page <a class="header-anchor" href="#install-npm-packages-and-view-page" aria-label="Permalink to &quot;Install \`npm\` packages and view page&quot;">​</a></h3><p>Regardless of how you installed <code>Node</code> and <code>npm</code>, verify that the installation worked by running:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre></div><p>If this is the first time you&#39;re contributing to the website, you&#39;ll need to tell <code>npm</code> to install all of the packages in the <code>package.json</code> file. To do this, run the following command from within the repository:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><h2 id="developing" tabindex="-1">Developing <a class="header-anchor" href="#developing" aria-label="Permalink to &quot;Developing&quot;">​</a></h2><p>While you&#39;re editing the content of the website, it&#39;s important to see a live preview of your changes. You can do this by booting up a local &quot;development&quot; server to open the local version of the lab website on your browser. To do this, simply run:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><p>Now, there will be a local version of the website running at <code>http://localhost:5173</code> (or some other URL printed to the console). Visit this URL in your browser to see a preview of the site.</p><h2 id="contributing" tabindex="-1">Contributing <a class="header-anchor" href="#contributing" aria-label="Permalink to &quot;Contributing&quot;">​</a></h2><p>The general file structure of this website is as follows:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> README.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> people/</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # &lt;-------------- team members</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> papers/</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # &lt;-------------- papers</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> posts/</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # &lt;-------------- blog posts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> projects/</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # &lt;-------------- projects and software</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> public/assets/</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # &lt;-------------- images (note that paths to this directory are simply /assets/)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .vitepress</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # &lt;-------------- source code</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tailwind.config.mjs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> postcss.config.mjs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package-lock.json</span></span></code></pre></div><p>Any file ending <code>*.md</code> is converted to a page on the site. The main markdown content lives in the <code>people</code>, <code>papers</code>, <code>posts</code>, and <code>projects</code> directories. A page on the website is added for each <code>.md</code> file in these directories and a &#39;landing&#39; page for each is updated accordingly. On each <code>*.md</code> page, there is <code>YAML</code> frontmatter that configures how the page is rendered and the content of that page.</p><h3 id="adding-team-members" tabindex="-1">Adding Team Members <a class="header-anchor" href="#adding-team-members" aria-label="Permalink to &quot;Adding Team Members&quot;">​</a></h3><p>To add a team member, navigate to the <code>people</code> directory. Within the <code>people</code> directory, make a new <code>.md</code> file with the name of the person you&#39;re adding. At the top of the page, add <code>YAML</code> with the following fields:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">person</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # &lt;-------------- Determines the layout</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Will Hannon&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # &lt;-------------- Your preferred name</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/assets/people/will-hannon.jpeg&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # &lt;-------------- The path to an image of you (a link also works)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Data Scientist&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # &lt;-------------- Your title. Please be as consistent as possible</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">category</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Staff&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # &lt;-------------- One of [Graduate Students, Postdocs, or Staff]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">links</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &lt;-------------- Links to your socials. Icons should be one of [github, linkedin, orcid, twitter, email, scholar, or website]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://github.com/WillHannon-MCB&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;github&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://www.linkedin.com/in/williamhannon/&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;linkedin&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;whannon@fredhutch.org&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;email&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><p>It&#39;s <strong>key</strong> that you add <code>layout: person</code> to the top of the page. This ensures that the markdown file is parsed as a team member page. The other fields are explained above.</p><p>Below this <code>YAML</code> frontmatter, add a short description of yourself using standard markdown syntax. This description appears when you click on a team member.</p><p><strong>Note</strong>: ensure that images for each team member (i.e. <code>image: &quot;/assets/people/will-hannon.jpeg&quot;</code>) have a square aspect ratio.</p><h4 id="adding-alumni" tabindex="-1">Adding Alumni <a class="header-anchor" href="#adding-alumni" aria-label="Permalink to &quot;Adding Alumni&quot;">​</a></h4><p>Add Alumni by editing <a href="/people/alumni.js"><code>/people/alumni.js</code></a>. There is a javascript object in the file (basically <code>JSON</code> if you&#39;re familiar with it). Add an entry to this object:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> alumni</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Frances Welsh&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Graduate Student&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    program: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MCB&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    start: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2019&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    end: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2024&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    currentPosition: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Research Scientist at Amazon&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Tyler Starr&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Postdoc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    start: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2018&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    end: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2023&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    currentPosition:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;&lt;a href=&#39;https://starr.biochem.utah.edu/&#39;&gt;Assistant Professor&lt;/a&gt; at the University of Utah&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p><code>currentPosition</code> is parsed as HTML so you can add hyperlinks to current positions.</p><h3 id="adding-blog-posts" tabindex="-1">Adding Blog Posts <a class="header-anchor" href="#adding-blog-posts" aria-label="Permalink to &quot;Adding Blog Posts&quot;">​</a></h3><p>To add a blog post, you create a <code>*.md</code> file in the <code>posts/</code> directory. At the top of the page, add the following <code>YAML</code>:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">post</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Example markdown styles</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2024-04-17</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">author</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Will Hannon</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><p>The fields are self-explanatory; their values are visible on the Blog section of the website. Underneath this <code>YAML</code> frontmatter, add a short description followed by a <code>---</code>. This short description will appear as an excerpt on the Blog section of the website below the post.</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">post</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Example markdown styles</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Here&#39;s a short excerpt to appear as a description of the post in the blog index.</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">---</span></span></code></pre></div><p>The content of the blog post is written using standard markdown syntax.</p><h3 id="adding-papers" tabindex="-1">Adding Papers <a class="header-anchor" href="#adding-papers" aria-label="Permalink to &quot;Adding Papers&quot;">​</a></h3><p>To add a paper to the website, add a <code>*.md</code> file to the <code>papers/</code> directory. The file should be named based on the year of the paper and author&#39;s last name (like <code>2021_starr.md</code>). This information isn&#39;t used by the website, but it&#39;s nice for consistency.</p><p>Add the following <code>YAML</code> to the top of the document:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">paper</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Within-host evolution of human influenza virus&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2018-09-01&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">authors</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Katherine S Xue&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Louise H Moncla&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Trevor Bedford&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Jesse D Bloom&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">journal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Trends in Microbiology&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">doi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;10.1016/j.tim.2018.02.007&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://www.cell.com/trends/microbiology/fulltext/S0966-842X(18)30043-X&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/assets/papers/xue_2018.jpg&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">keywords</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Influenza&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Within-host evolution&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">selected</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # &lt;------- OPTIONAL, this will add the paper to a list of selected paper</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><p>Most fields are self-explanatory. The <code>keywords</code> field is automatically parsed by the website, allowing you to quickly filter all of our papers for the ones relevant to you. Please reference this for existing keywords that pertain to your paper. Select a representative image from your paper and add it to the <code>/public/assets/papers</code> directory using the same base name as for the markdown file.</p><p>There is an optional key called <code>selected:</code> that if added and set to <code>true</code> will add the paper to a list of selected paper at the top of the page.</p><h3 id="adding-software-projects" tabindex="-1">Adding Software/Projects <a class="header-anchor" href="#adding-software-projects" aria-label="Permalink to &quot;Adding Software/Projects&quot;">​</a></h3><p>To add software to the website, add a <code>*.md</code> file in <code>projects/</code>. Add the following <code>YAML</code> to the top of the page:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">project</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dms-viz&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://dms-viz.github.io/v0/</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">github</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://github.com/dms-viz/dms-viz.github.io</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">documentation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://dms-viz.github.io/dms-viz-docs/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><p>Underneath this, add a short markdown description of the software followed by a <code>---</code>. This excerpt appears as a description in the Software section of the website.</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">project</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">...</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">An interactive web tool for visualizing site-level data on a protein structure with the capability of handling complex scenarios like multiple epitopes.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">---</span></span></code></pre></div><h3 id="editing-research" tabindex="-1">Editing Research <a class="header-anchor" href="#editing-research" aria-label="Permalink to &quot;Editing Research&quot;">​</a></h3><p>Edit the research aims that appear on the Research Page (<a href="./.vitepress/theme/Home.vue.html">.vitepress/theme/Research.vue</a>) using markdown file <a href="/research/research-aims.html">research/research-aims.md</a>. These research aims will automatically populate the Research Page.</p><h3 id="editing-the-home-page-and-section-home-pages" tabindex="-1">Editing the home page and section home pages <a class="header-anchor" href="#editing-the-home-page-and-section-home-pages" aria-label="Permalink to &quot;Editing the home page and section home pages&quot;">​</a></h3><p>While the individual posts can be edited by just editing the Markdown, to edit the homepage and the top text for each section (<em>Blog</em>, <em>Team</em>, <em>Papers</em>, <em>Software</em>) you will need to edit the corresponding <code>*.vue</code> file at <a href="./.vitepress/theme.html">.vitepress/theme</a> (eg, <a href="./.vitepress/theme/Home.vue.html">.vitepress/theme/Home.vue</a> for the home page).</p><h2 id="deployment" tabindex="-1">Deployment <a class="header-anchor" href="#deployment" aria-label="Permalink to &quot;Deployment&quot;">​</a></h2><p>The deployment is handled by GitHub Actions. A workflow script located at <a href=".github/workflows/deploy.yml"><code>.github/workflows/deploy.yml</code></a> is run on <strong>pushes</strong> or <strong>pull requests</strong> to the <code>main</code> branch. The workflow script builds the website using <code>npm run build</code> and copies the contents of the resulting <code>.dist/</code> directory to a branch called <code>gh-pages</code>. The website is automatically deployed from the root of this branch by GitHub Pages.</p>`,61),l=[n];function h(p,o,d,k,r,c){return a(),i("div",null,l)}const y=s(t,[["render",h]]);export{E as __pageData,y as default};