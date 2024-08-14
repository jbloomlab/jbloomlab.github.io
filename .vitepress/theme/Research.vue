<script>
import { data as aimsData } from './research.data.js'

export default {
    data() {
        return {
            aims: aimsData,
        };
    },
    computed: {
        sortedAims() {
            return this.aims.sort((a, b) => a.order - b.order);
        }
    }
}
</script>

<template>
    <div class="divide-y divide-gray-200">
        <div class="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1
                class="text-3xl leading-9 font-bold text-gray-800 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Our Research
            </h1>
        </div>
        <div class="research-aims pb-10">
            <div class="mx-auto max-w-4xl text-left flex flex-col justify-between" v-for="(aim, index) in sortedAims"
                :key="index">
                <h2 class="text-2xl md:text-3xl lg:text-4xl text-gray-600 mt-4 md:mt-6 lg:mt-12 mb-2 select-none underline font-semibold"
                    :class="`${aim.color}`">
                    {{ aim.title }}
                </h2>
                <div class="aim-content" v-html="aim.html"></div>
            </div>
        </div>
    </div>
</template>

<style>
.aim-content p {
    @apply text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-6;
}

.aim-content img {
    @apply mx-auto md:float-left md:mr-4 my-4 max-w-sm md:max-w-md;
}

.sky {
    @apply decoration-sky-500;
}

.pink {
    @apply decoration-pink-500;
}

.indigo {
    @apply decoration-indigo-500;
}
</style>