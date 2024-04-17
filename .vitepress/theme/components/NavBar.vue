<script>
import NavBarMenu from './NavBarMenu.vue';
import NavBarTitle from './NavBarTitle.vue';

export default {
    components: {
        NavBarMenu,
        NavBarTitle
    }
}
</script>

<template>
    <div class="flex justify-between items-center w-full px-4 select-none">
        <NavBarTitle />
        <NavBarMenu />
    </div>
</template>
