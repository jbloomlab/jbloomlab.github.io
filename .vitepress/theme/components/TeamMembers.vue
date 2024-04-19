<script>
import { computed } from 'vue'
import TeamMembersItem from './TeamMembersItem.vue'

export default {
    components: {
        TeamMembersItem
    },
    data() {
        return {
            members: [
                {
                    name: "Jesse Bloom",
                    image: "https://research.fredhutch.org/content/stripe/bloom/en/members/_jcr_content/par/labmember/image.img.jpg/1540125095310.jpg",
                    title: "Principal Investigator",
                    links: [
                        { link: "https://www.linkedin.com/in/williamhannon/", icon: "linkedin" },
                        { link: "https://github.com/WillHannon-MCB", icon: "twitter" },
                        { link: "https://github.com/WillHannon-MCB", icon: "github" }
                    ]
                },
                {
                    name: "Andrea Loes",
                    image: "https://research.fredhutch.org/content/stripe/bloom/en/members/_jcr_content/par/labmember_1919102050/image.img.jpg/1621376508623.jpg",
                    title: "Lab Manager",
                    links: [
                        { link: "https://github.com/WillHannon-MCB", icon: "github" },
                        { link: "https://github.com/WillHannon-MCB", icon: "orcid" },
                    ]
                },
                {
                    name: "Bernadeta Dadonaite",
                    image: "https://research.fredhutch.org/content/stripe/bloom/en/members/_jcr_content/par/labmember_1939500834/image.img.jpg/1657559048742.jpg",
                    title: "Staff Scientist",
                    links: [
                        { link: "https://www.linkedin.com/in/williamhannon/", icon: "linkedin" },
                        { link: "https://github.com/WillHannon-MCB", icon: "twitter" },
                        { link: "https://github.com/WillHannon-MCB", icon: "github" },
                        { link: "https://github.com/WillHannon-MCB", icon: "orcid" }
                    ]
                },

                {
                    name: "Will Hannon",
                    image: "https://research.fredhutch.org/content/stripe/bloom/en/members/_jcr_content/par/labmember_13944287/image.img.png/1709610002260.png",
                    title: "Data Scientist",
                    links: [
                        { link: "https://www.linkedin.com/in/williamhannon/", icon: "linkedin" },
                        { link: "https://github.com/WillHannon-MCB", icon: "github" },
                        { link: "https://github.com/WillHannon-MCB", icon: "website" },
                        { link: "https://github.com/WillHannon-MCB", icon: "orcid" },

                    ]
                },
            ]
        }
    },
    computed: {
        classes() {
            return [`count-${this.members.length}`]
        }
    }
}
</script>

<template>
    <div :class="classes">
        <div class="mx-auto grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-6"
            :class="{
        'max-w-7xl': members.length >= 3,
        'max-w-[368px]': members.length === 1,
        'max-w-[760px]': members.length === 2
    }">
            <div v-for="member in members" :key="member.name" class="item">
                <TeamMembersItem :member="member" />
            </div>
        </div>
    </div>
</template>
