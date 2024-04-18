<script>
import Date from './components/Date.vue'
import { data as posts } from './posts.data.js'
import { useData } from 'vitepress'

export default {
    components: {
        Date
    },
    data() {
        return {
            posts: posts.filter(post => post.url.endsWith('.html')),
            frontmatter: useData().frontmatter
        };
    }
}
</script>

<template>
    <div class="divide-y divide-gray-200">
        <div class="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1
                class="text-3xl leading-9 font-bold text-gray-800 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Bloom Lab Blog
            </h1>
            <p class="text-lg leading-7 text-gray-600">
                A collection of thoughts, ideas, and projects from the Bloom Lab team.
            </p>
        </div>
        <ul class="divide-y divide-gray-200">
            <li class="py-12" v-for="post in posts" :key="post.url">
                <article class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <Date :date="post.date" />
                    <div class="space-y-5 xl:col-span-3">
                        <div class="space-y-6">
                            <h2 class="text-2xl leading-8 font-bold tracking-tight">
                                <a class="text-gray-900" :href="post.url">{{ post.title }}</a>
                            </h2>
                            <div v-if="post.excerpt" class="max-w-none text-gray-500" v-html="post.excerpt"></div>
                        </div>
                        <div class="text-base leading-6 font-medium">
                            <a class="text-custom-orange" aria-label="read more about {{ post.title }}"
                                :href="post.url">Read more
                                →</a>
                        </div>
                    </div>
                </article>
            </li>
        </ul>
    </div>
</template>