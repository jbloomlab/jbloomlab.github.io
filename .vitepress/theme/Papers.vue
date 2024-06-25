<script>
import { data as papers } from './papers.data.js'
import { useData } from 'vitepress'

export default {
    data() {
        // Count keyword frequencies
        const keywordCounts = papers.reduce((acc, paper) => {
            if (paper.keywords) {
                paper.keywords.forEach(keyword => {
                    if (acc[keyword]) {
                        acc[keyword]++;
                    } else {
                        acc[keyword] = 1;
                    }
                });
            }
            return acc;
        }, {});

        // Convert object to array of [key, value] pairs
        const items = Object.entries(keywordCounts).sort((a, b) => b[1] - a[1]);
        // Extract keys from the sorted array
        const sortedKeys = items.map(item => item[0]);

        return {
            papers: papers
                .filter(paper => paper.url.endsWith('.html'))
                .map(paper => ({
                    ...paper,
                    authors: paper.authors.join(", "),
                    year: new Date(paper.date).getFullYear().toString() || "",
                })),
            frontmatter: useData().frontmatter,
            keywords: sortedKeys,
            activeKeywords: []
        };
    },
    methods: {
        filteredPapers() {
            if (this.activeKeywords.length === 0) {
                return this.papers;
            }
            return this.papers.filter(paper =>
                paper.keywords.some(keyword => this.activeKeywords.includes(keyword))
            );
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
            <MultiSelect v-model="activeKeywords" :options="keywords" placeholder="Filter by Keywords"
                :maxSelectedLabels="3" class="w-full md:w-80" />
        </div>
        <div class="flex">

            <ul class="flex-1 divide-y divide-gray-200">
                <li class="py-12" v-for="paper in filteredPapers()" :key="paper.url">
                    <div class="flex flex-col md:flex-row items-start">
                        <div class="hidden md:block md:flex-none lg:w-48 lg:h-48 md:w-32 md:h-32 md:mr-4">
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
