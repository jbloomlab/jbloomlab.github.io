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
    }
}
</script>

<template>
    <article class="flex flex-col gap-px rounded-lg w-full h-full overflow-hidden">
        <div class="py-8 px-6 sm:py-12 sm:px-8 flex-grow bg-custom-soft">
            <figure class="relative shrink-0 mx-auto rounded-full shadow w-24 h-24">
                <img class="absolute inset-0 rounded-full object-cover" :src="member.image" :alt="member.name" />
            </figure>
            <div class="text-center pt-6">
                <h1 class="m-0 font-semibold tracking-wide leading-7 text-lg">
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
