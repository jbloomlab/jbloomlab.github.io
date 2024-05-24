<script>
import { data as papers } from './papers.data.js'
import { useData } from 'vitepress'

export default {
    data() {
        return {
            papers: papers
                .filter(paper => paper.url.endsWith('.html'))
                .map(paper => ({
                    ...paper,
                    authors: paper.authors.join(", "),
                    year: new Date(paper.date).getFullYear().toString() || "",
                })),
            frontmatter: useData().frontmatter,
            keywords: ['Deep mutational scanning', 'SARS-CoV-2', 'Influenza', 'Epistasis', 'Software tools', 'Lassa'], // Example keywords for now
        };
    }
}
</script>

<template>
    <div class="divide-y divide-gray-200">
        <div class="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1
                class="text-3xl leading-9 font-bold text-gray-800 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Publications
            </h1>
            <p class="text-lg leading-7 text-gray-600">
                Key papers from the Bloom Lab team. Check out <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Bloom+JD"
                    target="_blank">PubMed</a> for a complete
                list of our publications.
            </p>
        </div>
        <div class="flex">
            <div class="sidebar sticky h-full top-12 w-40 lg:w-64 py-12 pr-5 bg-white">
                <div class="hidden lg:block">
                    <h2 class="font-bold text-gray-800 text-lg pb-2">Filter by keyword</h2>
                    <div class="flex flex-wrap gap-2 leading-5">
                        <span v-for="(keyword, index) in keywords" :key="index"
                            class="cursor-pointer text-gray-600 hover:text-custom-orange">
                            {{ keyword }}
                        </span>
                    </div>
                </div>
                <div class="block lg:hidden p-2 rounded-lg bg-slate-100">
                    <h2 class="font-bold text-gray-800 text-base pb-1">Keywords</h2>
                    <ul>
                        <li v-for="(keyword, index) in keywords" :key="index"
                            class="cursor-pointer text-gray-600 hover:text-custom-orange text-sm py-1">
                            {{ keyword }}
                        </li>
                    </ul>
                </div>
            </div>
            <ul class="flex-1 divide-y divide-gray-200">
                <li class="py-12" v-for="paper in papers" :key="paper.url">
                    <div class="flex flex-col md:flex-row items-start">
                        <div class="hidden lg:block lg:flex-none lg:w-48 lg:h-48 md:w-32 md:h-32 md:mr-4">
                            <img :src="paper.image" :alt="'Image for ' + paper.title"
                                class="w-full h-auto object-cover rounded-lg">
                        </div>
                        <div class="space-y-5 md:flex-grow">
                            <div class="space-y-2">
                                <h2 class="text-2xl leading-8 font-bold tracking-tight">
                                    <a class="text-gray-900 hover:text-gray-900 text-xl md:text-2xl no-underline"
                                        :href="paper.url">{{
                            paper.title }}</a>
                                </h2>
                                <div v-if="paper.authors" class="max-w-none text-gray-700 hidden lg:block">
                                    {{ paper.authors }}
                                </div>
                                <div v-if="paper.journal && paper.date" class="max-w-none text-gray-500">
                                    <span class="italic">{{ paper.journal }}</span>. {{ paper.year }}. <a
                                        :href="paper.link" target="_blank">doi:{{ paper.doi }}</a>
                                </div>
                            </div>
                            <div class="mt-4 md:mt-0 md:self-end">
                                <a class="text-base leading-6 font-medium text-custom-orange no-underline"
                                    aria-label="read more about {{ paper.title }}" :href="paper.url">Read more →</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
