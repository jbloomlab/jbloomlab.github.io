<script>
import { data as people } from './people.data.js';

export default {
    data() {
        return {
            people: people
        };
    }
}
</script>

<template>
    <div>
        <h1>Team</h1>
        <ul>
            <li v-for="person in people" :key="person.url">
                <a :href="person.url">{{ person.name }}</a>
            </li>
        </ul>
    </div>
</template>
