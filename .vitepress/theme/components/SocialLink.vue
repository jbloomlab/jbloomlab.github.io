<script>
export default {
    props: {
        icon: String,
        link: String,
    },
    data() {
        return {
            showNotification: false
        };
    },
    computed: {
        svg() {
            return `<span class="i-social-${this.icon}" />`;
        },
    },
    methods: {
        handleClick() {
            if (this.icon === 'email') {
                navigator.clipboard.writeText(this.link).then(() => {
                    this.showNotification = true;
                    setTimeout(() => {
                        this.showNotification = false;
                    }, 1000);
                }, (err) => {
                    console.error('Failed to copy email: ', err);
                });
            } else {
                window.open(this.link, '_blank', 'noopener');
            }
        },
    }
}
</script>

<template>
    <transition name="fade">
        <div v-if="showNotification"
            class="fixed top-2 left-1/2 transform -translate-x-1/2 border-2 border-custom-orange bg-white text-custom-orange text-center py-2 px-4 rounded-lg z-50">
            Email address copied to clipboard!
        </div>
    </transition>
    <div @click.stop="handleClick"
        class="flex justify-center items-center w-9 h-9 text-gray-600 transition-color duration-500 hover:text-custom-orange hover:duration-300"
        v-html="svg">
    </div>
</template>

<style>
/* Fade transition */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>