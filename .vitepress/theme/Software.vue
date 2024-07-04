<script>
import { data as projects } from './projects.data.js'
import { useData } from 'vitepress'

export default {
    data() {
        return {
            projects: projects.filter(project => project.url.endsWith('.html'))
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
    <div class="w-full border-t border-gray-200"></div>
    <div class="container mx-auto my-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex flex-col md:flex-row items-center" v-for="project in projects" :key="project.id">
                <div class="hidden md:block md:flex-none lg:w-48 lg:h-48 md:w-32 md:h-32 md:mr-4">
                    <img :src="project.logo" :alt="'Image for ' + project.name"
                        class="w-full h-auto object-cover rounded-lg">
                </div>
                <div>
                    <h3 class="text-2xl leading-8 font-bold tracking-tight">
                        <a :href="project.link" class="no-underline">{{ project.name }}</a>
                    </h3>
                    <p class="max-w-none text-gray-700 hidden lg:block">
                        Here's a quick description of the project.
                    </p>
                    <p class="max-w-none text-gray-700 hidden lg:block">
                        Check out the <a :href="project.documentation">documentation</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>