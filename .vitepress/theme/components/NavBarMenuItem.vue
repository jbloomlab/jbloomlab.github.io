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
    }
}
</script>

<template>
    <a :href="item.href" :class="{ 'text-custom-orange': isActive, 'text-gray-600': !isActive }"
        class="text-lg px-4 py-2">
        {{ item.text }}
    </a>
</template>

<style scoped>
a {
    text-decoration: none;
}
</style>