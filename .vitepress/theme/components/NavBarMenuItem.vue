<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        },
        isActive: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClick() {
            this.$emit('item-clicked');
        }
    }
}
</script>

<template>
    <a :href="item.href" :class="{ 'text-custom-orange': isActive, 'text-gray-600': !isActive }" @click="handleClick"
        class="text-xl md:text-lg px-4 py-4 md:py-2 flex items-center justify-center md:flex-none md:items-stretch md:justify-start">
        {{ item.text }}
    </a>
</template>

<style scoped>
a {
    text-decoration: none;
}
</style>