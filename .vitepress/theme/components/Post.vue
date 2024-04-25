<script>
import { useData } from 'vitepress'

export default {
    setup() {
        const { page, frontmatter } = useData()
        return {
            page,
            frontmatter
        }
    }
}

</script>

<template>
    <div class="prose">
        <h1>{{ frontmatter.title }}</h1>
        <slot />
    </div>
</template>

<style>
/* Heading Styles */
.prose h1 {
    @apply text-4xl tracking-tight leading-10 font-bold;
}

.prose h2 {
    @apply text-2xl tracking-tight leading-8 font-semibold border-t mt-10 mb-4 pt-6;
}

.prose h3 {
    @apply text-xl tracking-tight leading-7 font-semibold mt-8 mb-0 ml-0 mr-0;
}

/* Paragraph and Text Styles */
.prose p {
    @apply text-base text-gray-700 leading-7 my-4;
}

.prose code {
    @apply bg-gray-100 rounded text-sm text-custom-orange;
}

.prose pre {
    @apply bg-gray-100 p-4 rounded text-sm;
}

.prose blockquote {
    @apply border-l-4 border-gray-200 pl-4 italic text-gray-600;
}

/* List Styles */
.prose ul,
.prose ol {
    @apply list-inside list-disc pl-5 my-4;
}

.prose ol {
    @apply list-decimal;
}

.prose li {
    @apply text-gray-700 mb-1;
}

/* Image and Figure Styles */
.prose figure {
    @apply text-center;
}

.prose figcaption {
    @apply text-sm text-gray-500;
}
</style>