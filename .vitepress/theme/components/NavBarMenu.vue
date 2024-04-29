<script>
import { ref, computed, watch } from 'vue';
import { useData } from 'vitepress';
import NavBarMenuItem from './NavBarMenuItem.vue';

export default {
    components: {
        NavBarMenuItem
    },
    setup() {
        const { page } = useData();
        const currentPath = ref(page.value.relativePath);

        watch(() => page.value.relativePath, (newPath) => {
            console.log('newPath', newPath)
            currentPath.value = newPath;
        });

        const menuItems = computed(() => [
            { text: 'Blog', href: '/posts/', active: currentPath.value.startsWith('posts/') },
            { text: 'Papers', href: '/papers/', active: currentPath.value.startsWith('papers/') },
            { text: 'Team', href: '/people/', active: currentPath.value.startsWith('people/') },
            { text: 'Software', href: '/projects/', active: currentPath.value.startsWith('projects/') },
        ]);

        return { menuItems };
    }
}
</script>

<template>
    <div class="flex">
        <NavBarMenuItem v-for="item in menuItems" :key="item.text" :item="item" :isActive="item.active" />
    </div>
</template>