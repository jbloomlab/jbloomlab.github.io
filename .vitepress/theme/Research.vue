<script>
import { data as aimsData } from './research.data.js'

export default {
    data() {
        return {
            aims: aimsData,
        };
    },
    computed: {
        researchAim() {
            // Get the aim where aim.research is true
            return this.aims.find((aim) => aim.isAim);
        }
    }
}
</script>

<template>
    <div class="mx-auto max-w-4xl divide-y divide-gray-200">
        <div class="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1
                class="text-3xl leading-9 font-bold text-gray-800 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                {{ researchAim.title }}
            </h1>
        </div>
        <div class="research-aims pb-8" v-html="researchAim.html"></div>
    </div>
</template>

<style>
.research-aims p {
    @apply text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-6;
}

.research-aims img {
    @apply mx-auto md:float-left md:mr-4 my-4 max-w-sm md:max-w-md;
}

.research-aims h2 {
    @apply text-2xl md:text-3xl lg:text-4xl text-gray-600 mt-4 md:mt-6 lg:mt-12 mb-2 select-none underline font-semibold !important;
}
</style>