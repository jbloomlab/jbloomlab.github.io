<script setup>
import { useData } from 'vitepress'

const { site, frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.home">
    <h1>{{ site.title }}</h1>
    <p>{{ site.description }}</p>
  </div>
  <div v-else>
    <a href="/">Home</a>
    <Content />
  </div>
</template>
