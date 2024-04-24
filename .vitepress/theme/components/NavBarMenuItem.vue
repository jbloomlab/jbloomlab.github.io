<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <a :href="item.href" class="text-gray-600 text-lg px-4 py-2">
        {{ item.text }}
    </a>
</template>

<style scoped>
a {
    text-decoration: none;
}
</style>