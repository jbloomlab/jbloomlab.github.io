<script>
import SocialLink from './SocialLink.vue'

export default {
    components: {
        SocialLink
    },
    props: {
        member: {
            type: Object,
            required: true
        }
    },
    methods: {
        navigate(url) {
            if (url) {
                window.location.href = url;
            }
        }
    }
}
</script>

<template>
    <article
        class="hover:shadow-lg hover:shadow-custom-orange flex flex-col gap-px rounded-lg w-full h-full overflow-hidden transition-shadow duration-300 ease-in-out">
        <div :href="member.url" class="py-6 px-4 sm:py-8 sm:px-6 flex-grow bg-custom-soft cursor-pointer"
            @click="navigate(member.url)">
            <figure class="relative shrink-0 mx-auto w-36 h-36 rounded-full overflow-hidden shadow">
                <img class="absolute inset-0 w-full h-full object-cover" :src="member.image" :alt="member.name" />
            </figure>
            <div class="text-center pt-6">
                <h1 class="m-0 text-gray-800 font-semibold tracking-wide leading-7 text-lg ease-in-out">
                    {{ member.name }}
                </h1>
                <p v-if="member.title" class="m-0 font-medium text-gray-600 pt-1 text-base">
                    <span v-if="member.title">
                        {{ member.title }}
                    </span>
                </p>
                <p v-if="member.desc" class="m-0 mx-auto pt-4 max-w-[18rem] text-base" v-html="member.desc"></p>
                <div v-if="member.links" class="flex justify-center h-14 m-[-1rem -4rem -3rem] pt-4 px-3">
                    <SocialLink v-for="{ link, icon } in member.links" :key="link" :icon="icon" :link="link" />
                </div>
            </div>
        </div>
    </article>
</template>
