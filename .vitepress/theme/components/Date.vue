<script>
export default {
    props: {
        date: String
    },
    methods: {
        getFormattedDate() {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(this.date).toLocaleDateString('en-US', options);
        }
    }
}
</script>

<template>
    <dl>
        <dt class="sr-only">Published on</dt>
        <dd class="text-base leading-6 font-medium text-gray-500">
            <time :datetime="getFormattedDate()">{{ getFormattedDate() }}</time>
        </dd>
    </dl>
</template>
