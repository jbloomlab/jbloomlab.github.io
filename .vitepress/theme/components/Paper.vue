<script>
import { useData } from 'vitepress'

export default {
    setup() {
        const { page, frontmatter } = useData()
        return {
            page,
            frontmatter
        }
    },
    computed: {
        formattedDate() {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(this.frontmatter.date).toLocaleDateString('en-US', options);
        },
        formattedAuthors() {
            return this.frontmatter.authors.join(", ");
        }
    }
}

</script>

<template>
    <div class="prose">
        <div class="text-gray-500 text-lg font-medium flex divide-x divide-gray-300 mb-3">
            <span class="italic pr-3">{{ frontmatter.journal }}</span>
            <span class="pl-3">{{ formattedDate }}</span>
        </div>
        <h1>{{ frontmatter.title }}</h1>
        <div class="text-gray-500 text-lg font-base my-3">
            {{ formattedAuthors }}
        </div>
        <span class="text-gray-500 text-base font-medium">
            doi:<a :href="frontmatter.link" target="_blank">{{ frontmatter.doi
                }}</a>
        </span>
        <slot />
    </div>
</template>