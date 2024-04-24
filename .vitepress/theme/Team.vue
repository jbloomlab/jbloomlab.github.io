<script>
import { data as people } from './people.data.js';
import TeamMembers from './components/TeamMembers.vue';

export default {
    components: {
        TeamMembers
    },
    data() {
        const categorizedData = this.categorizeMembers(people);
        return {
            categories: (Object.keys(categorizedData)).sort(),
            membersByCategory: categorizedData,
        };
    },
    methods: {
        categorizeMembers(people) {
            return people
                .filter(person => person.url.endsWith('.html'))
                .reduce((acc, person) => {
                    if (!acc[person.category]) {
                        acc[person.category] = [];
                    }
                    acc[person.category].push(person);
                    return acc;
                }, {});
        }
    }
}
</script>

<template>
    <div>
        <div class="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1
                class="text-3xl leading-9 font-bold text-gray-800 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Meet the Team
            </h1>
            <p class="text-lg leading-7 text-gray-600">
                Get <a href="/about">in touch</a> if you're interested in joining us!
            </p>
        </div>
        <div class="w-full border-t border-gray-200"></div>
        <div v-for="category in categories" :key="category" class="category-section my-6">
            <div class="pt-6 pb-8 space-y-2 md:space-y-5">
                <h1
                    class="text-xl leading-9 font-bold text-gray-800 tracking-tight sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                    {{ category }}
                </h1>
            </div>
            <TeamMembers :members="membersByCategory[category]"
                v-if="membersByCategory[category] && membersByCategory[category].length"></TeamMembers>
        </div>
    </div>

</template>
