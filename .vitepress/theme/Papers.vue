<script>
import { data as papers } from './papers.data.js';

export default {
    data() {
        return {
            papers: papers
        };
    }
}
</script>

<template>
    <div>
        <h1>Bloom Lab Papers</h1>
        <ul>
            <li v-for="paper in papers" :key="paper.url">
                <a :href="paper.url">{{ paper.title }}</a>
            </li>
        </ul>
    </div>
</template>
