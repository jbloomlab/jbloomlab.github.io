<script>
import { useData } from 'vitepress'
import SocialLink from './SocialLink.vue'

export default {
    components: {
        SocialLink: SocialLink
    },
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
    <div class="header max-w-3xl py-8">
        <div class="flex flex-col lg:flex-row items-center text-center lg:text-left">
            <div class="flex-shrink-0 aspect-square w-32 h-32 bg-gray-200 rounded-full overflow-hidden">
                <img :src="frontmatter.image" :alt="frontmatter.name" class="object-cover w-full h-full">
            </div>
            <div class="mt-4 lg:mt-0 lg:ml-4">
                <h1 class="text-3xl lg:text-4xl leading-tight font-bold tracking-tight">
                    {{ frontmatter.name }}
                </h1>
                <div class="mt-1">
                    <h2 class="text-gray-600 font-light text-xl">
                        {{ frontmatter.title }}
                    </h2>
                </div>
                <div v-if="frontmatter.links" class="inline-flex space-x-2 mt-1">
                    <SocialLink class="inline" v-for="{ link, icon } in frontmatter.links" :key="link" :icon="icon"
                        :link="link" />
                </div>
            </div>
        </div>
    </div>

    <div class="prose">
        <slot />
    </div>
</template>
