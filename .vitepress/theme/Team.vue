<script>
// import { data as people } from './people.data.js';
import TeamMembers from './components/TeamMembers.vue';

export default {
    components: {
        TeamMembers
    },
}
</script>

<template>
    <div class="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1
            class="text-3xl leading-9 font-bold text-gray-800 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Our Team
        </h1>
    </div>
    <div>
        <TeamMembers></TeamMembers>
    </div>
</template>
