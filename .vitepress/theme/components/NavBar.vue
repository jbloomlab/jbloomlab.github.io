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
    }
}
</script>

<template>
    <div class="flex justify-between items-center w-full px-4 select-none">
        <NavBarTitle />
        <button class="flex md:hidden text-gray-600" @click="isMenuOpen = !isMenuOpen">
            <span class="i-menu h-6 w-6" />
        </button>
        <NavBarMenu class="hidden md:flex" />
    </div>
</template>
