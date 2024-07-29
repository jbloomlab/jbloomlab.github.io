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
                Software
            </h1>
            <p class="text-lg leading-7 text-gray-600">
                Below are some of the main software packages maintained by our lab.
                For a complete list of projects, check out the
                <a href="https://github.com/jbloomlab">https://github.com/jbloomlab</a> (most
                lab projects) and
                <a href="https://github.com/dms-vep">https://github.com/dms-vep</a> (projects
                related to deep mutational scanning of viral entry proteins).
            </p>
        </div>
    </div>
    <div class="w-full border-t border-gray-200 hidden md:block"></div>
    <div class="container mx-auto my-0 md:my-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex flex-col md:flex-row items-center" v-for="project in projects" :key="project.id">
                <div>
                    <div class="w-full border-t border-gray-200 block md:hidden mb-5"></div>
                    <h3 class="text-2xl leading-8 font-bold tracking-tight">
                        <code class="bg-gray-200">
                            <a :href="project.link" class="no-underline">{{ project.name }}</a>
                        </code>
                    </h3>
                    <div v-if="project.excerpt" class="max-w-none text-gray-500 mt-2" v-html="project.excerpt">
                    </div>
                    <p class="max-w-none text-gray-700 mt-2 md:mt-4">
                        Check out the <a :href="project.documentation">documentation</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
