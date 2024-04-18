<script>
import NavBarMenuItem from './NavBarMenuItem.vue'

export default {
    components: {
        NavBarMenuItem
    },
    data() {
        return {
            menuItems: [
                { text: 'Blog', href: '/posts/' },
                { text: 'Papers', href: '/papers/' },
                { text: 'Team', href: '/people/' },
                { text: 'Software', href: '/projects/' },
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
