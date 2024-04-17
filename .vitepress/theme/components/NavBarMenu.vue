<script>
import NavBarMenuItem from './NavBarMenuItem.vue'

export default {
    components: {
        NavBarMenuItem
    },
    data() {
        return {
            menuItems: [
                { text: 'Blog', href: '/blog' },
                { text: 'Papers', href: '/papers' },
                { text: 'Team', href: '/team' },
                { text: 'Software', href: '/software' },
            ]
        }
    }
}
</script>

<template>
    <div class="flex">
        <NavBarMenuItem v-for="item in menuItems" :key="item.text" :item="item" />
    </div>
</template>
