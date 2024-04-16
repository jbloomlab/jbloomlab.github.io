<script setup>
import { useData } from 'vitepress'
import NotFound from './NotFound.vue'
import Home from './Home.vue'

const { page, frontmatter } = useData()
</script>

<template>
  <main class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <Home v-if="frontmatter.home" />
    <NotFound v-else-if="page.isNotFound" />
  </main>
</template>
