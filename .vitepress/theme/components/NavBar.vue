<script>
import NavBarMenu from './NavBarMenu.vue';
import NavBarTitle from './NavBarTitle.vue';

export default {
    components: {
        NavBarMenu,
        NavBarTitle
    },
    data() {
        return {
            isMenuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu() {
            this.isMenuOpen = false;
        }
    },
    watch: {
        isMenuOpen(newValue) {
            const body = document.body;
            if (newValue) {
                body.classList.add('disable-scroll');
            } else {
                body.classList.remove('disable-scroll');
            }
        }
    }
}
</script>

<template>
    <div class="flex justify-between items-center w-full px-4 select-none">
        <NavBarTitle />
        <button class="flex md:hidden text-gray-600" @click="toggleMenu">
            <span :class="isMenuOpen ? 'i-x h-6 w-6' : 'i-menu h-6 w-6'"></span>
        </button>
        <NavBarMenu @menu-item-clicked="closeMenu"
            class="bg-custom-soft backdrop-blur-md md:backdrop-blur-none flex-col md:flex-row bg-opacity-75 md:bg-transparent md:flex md:items-center md:px-0 px-3 md:pb-0 pb-10 md:static absolute md:w-auto w-full md:h-auto h-full md:pt-0 pt-10 top-14 z-50"
            :class="`md:flex ${isMenuOpen ? 'flex' : 'hidden'} ${isMenuOpen ? 'left-0' : 'left-[-100%]'}`" />
    </div>
</template>

<style>
.disable-scroll {
    overflow: hidden;
}
</style>