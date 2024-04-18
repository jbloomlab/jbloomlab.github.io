<script setup>
import { useData } from 'vitepress'
import NotFound from './NotFound.vue'
import Home from './Home.vue'
import Blog from "./Blog.vue";
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

const { page, frontmatter } = useData()
</script>

<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Nav class="mb-4" />
    <main class="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl xl:px-0">
      <Home v-if="frontmatter.home" />
      <Blog v-else-if="frontmatter.blog" />
      <NotFound v-else-if="page.isNotFound" />
    </main>
    <Footer />
  </div>
</template>