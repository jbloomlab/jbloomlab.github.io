<script>
import { data as people } from './people.data.js';
import { alumni } from './alumni.js';
import TeamMembers from './components/TeamMembers.vue';

export default {
    components: {
        TeamMembers
    },
    data() {
        const categorizedData = this.categorizeMembers(people);
        const alumniByCategory = this.categorizeAlumni(alumni);
        return {
            categories: (Object.keys(categorizedData)).sort(),
            membersByCategory: categorizedData,
            alumniCategories: alumniByCategory
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
        },
        categorizeAlumni(alumni) {
            const titles = ["Postdoc", "Graduate Student", "Research Technician", "Research Administrator", "Lab Manager", "Undergraduate Researcher", "High School Intern"];
            const alumniCategories = {};
            titles.forEach(title => {
                alumniCategories[title] = alumni.filter(a => a.title === title);
            });
            return alumniCategories;
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
                Get <a href="/about">in touch with us</a> if you're interested in joining the team!
            </p>
        </div>
        <div class="w-full border-t border-gray-200"></div>
        <div v-for="category in categories" :key="category" class="category-section my-6">
            <div class="pt-6 pb-8 space-y-2 md:space-y-5">
                <h1
                    class="text-xl leading-9 font-bold text-gray-800 tracking-tight text-center md:text-left sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                    {{ category }}
                </h1>
            </div>
            <TeamMembers :members="membersByCategory[category]"
                v-if="membersByCategory[category] && membersByCategory[category].length"></TeamMembers>
        </div>
    </div>
    <h1
        class="text-3xl leading-9 font-bold text-gray-800 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 border-t border-gray-200 pt-10">
        Alumni
    </h1>
    <div v-for=" title in ['Postdoc', 'Graduate Student', 'Lab Manager', 'Research Technician', 'Research Administrator', 'Undergraduate Researcher', 'High School Intern']"
        :key="title">
        <div class="alumni-section my-6">
            <div class="pt-6 pb-8 space-y-2 md:space-y-5">
                <h1
                    class="text-lg leading-9 font-bold text-gray-800 tracking-tight text-center md:text-left sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                    {{ title }}s
                </h1>
            </div>
            <div v-for="alum in alumniCategories[title]" :key="alum.name" class="ml-4">
                <div class="font-bold">{{ alum.name }}</div>
                <div>{{ alum.start }} - {{ alum.end }}</div>
                <div>{{ alum.currentPosition }}</div>
            </div>
        </div>
    </div>
</template>
