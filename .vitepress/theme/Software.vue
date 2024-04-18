<script>
import { data as projects } from './projects.data.js';

export default {
    data() {
        return {
            projects: projects
        };
    }
}
</script>

<template>
    <div>
        <h1>Bloom Lab Projects</h1>
        <ul>
            <li v-for="project in projects" :key="project.url">
                <a :href="project.url">{{ project.name }}</a>
            </li>
        </ul>
    </div>
</template>
