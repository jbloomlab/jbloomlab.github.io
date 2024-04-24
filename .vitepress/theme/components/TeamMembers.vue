<script>
import { computed } from 'vue'
import TeamMembersItem from './TeamMembersItem.vue'

export default {
    components: {
        TeamMembersItem
    },
    props: {
        members: {
            type: Array,
            required: true
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
        <div class="mx-auto grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-6" :class="{
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
