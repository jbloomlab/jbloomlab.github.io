<script>
import { data as projects } from './projects.data.js'
import { useData } from 'vitepress'

export default {
    data() {
        return {
            projects: projects
        };
    }
}
</script>

<template>
    <div class="divide-y divide-gray-200">
        <div class="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1
                class="text-3xl leading-9 font-bold text-gray-800 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Projects and Software
            </h1>
            <p class="text-lg leading-7 text-gray-600">
                Check out all of our projects and software on <a href="https://github.com/jbloomlab">GitHub</a>.
            </p>
        </div>
    </div>
</template>