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