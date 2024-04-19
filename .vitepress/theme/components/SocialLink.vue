<script>
import { computed } from 'vue';

export default {
    props: {
        icon: String,
        link: String,
    },
    computed: {
        svg() {
            return `<span class="i-social-${this.icon}" />`;
        },
    }
}
</script>

<template>
    <a class="flex justify-center items-center w-9 h-9 text-gray-600 transition-color duration-500 hover:text-custom-orange hover:duration-300"
        :href="link" target="_blank" rel="noopener" v-html="svg"></a>
</template>
