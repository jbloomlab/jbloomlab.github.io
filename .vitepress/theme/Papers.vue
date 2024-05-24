<script>
import { data as papers } from './papers.data.js'
import { useData } from 'vitepress'

export default {
    data() {
        // Get the keywords from the papers
        const uniqueKeywords = Array.from(new Set(papers.flatMap(paper => paper.keywords)));

        return {
            papers: papers
                .filter(paper => paper.url.endsWith('.html'))
                .map(paper => ({
                    ...paper,
                    authors: paper.authors.join(", "),
                    year: new Date(paper.date).getFullYear().toString() || "",
                })),
            frontmatter: useData().frontmatter,
            keywords: uniqueKeywords,
            activeKeyword: null,
        };
    },
    methods: {
        setActiveKeyword(keyword) {
            this.activeKeyword = keyword;
        },
        filteredPapers() {
            if (!this.activeKeyword) {
                return this.papers;
            }
            return this.papers.filter(paper => paper.keywords.includes(this.activeKeyword));
        }
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
            <div class="collapse lg:visible sidebar sticky h-full top-12 w-64 py-12 pr-5 bg-white">
                <div class="p-2 rounded-lg bg-slate-50">
                    <h2 class="font-bold text-gray-800 text-center text-lg pb-2">Filter by keyword</h2>
                    <div class="flex flex-wrap">
                        <span v-for="(keyword, index) in keywords" :key="index"
                            :class="[keyword === activeKeyword ? 'text-custom-orange bg-custom-orange/10' : 'text-gray-600', 'cursor-pointer hover:text-custom-orange rounded-md px-1 py-1 text-sm']"
                            @click="setActiveKeyword(keyword)">
                            {{ keyword }}
                        </span>
                    </div>
                </div>
            </div>
            <ul class="flex-1 divide-y divide-gray-200">
                <li class="py-12" v-for="paper in filteredPapers()" :key="paper.url">
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
