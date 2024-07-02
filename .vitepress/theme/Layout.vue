<script setup>
import { Content, useData } from 'vitepress'
import NotFound from './NotFound.vue'
import Home from './Home.vue'
import Blog from "./Blog.vue";
import Team from "./Team.vue";
import Papers from "./Papers.vue";
import Software from "./Software.vue";
import ContentPage from './ContentPage.vue'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

const { page, frontmatter } = useData()
</script>

<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Nav class="mb-4"></Nav>
    <main class="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl xl:px-0">
      <!-- Render the Landing page -->
      <Home v-if="frontmatter.home" />
      <!-- Render an index page -->
      <Blog v-else-if="frontmatter.blog" />
      <Papers v-else-if="frontmatter.papers" />
      <Team v-else-if="frontmatter.team" />
      <Software v-else-if="frontmatter.software" />
      <NotFound v-else-if="page.isNotFound" />
      <!-- Render an content page -->
      <ContentPage v-else />
    </main>
    <Footer></Footer>
  </div>
</template>
