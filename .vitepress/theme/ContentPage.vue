<script>
import { useData } from 'vitepress'
import Post from './components/Post.vue'
import Person from './components/Person.vue'
import Paper from './components/Paper.vue'
import Project from './components/Project.vue'

export default {
    components: {
        Post,
        Person,
        Paper,
        Project
    },
    setup() {
        const { page, frontmatter } = useData();
        return {
            page,
            frontmatter
        };
    },
    computed: {
        layout() {
            // Returning component names as registered in `components`
            if (this.frontmatter.layout == "paper") {
                return 'Paper';
            } else if (this.frontmatter.layout == "project") {
                return 'Project';
            } else if (this.frontmatter.layout == "person") {
                return 'Person';
            } else {
                return 'Post';
            }
        }
    }
}
</script>

<template>
    <component :is="layout" class="max-w-none">
        <Content />
    </component>
</template>