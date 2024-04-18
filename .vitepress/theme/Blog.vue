<script>
import { data as posts } from './posts.data.js';

export default {
    data() {
        return {
            posts: posts
        };
    }
}
</script>

<template>
    <div>
        <h1>Bloom Lab Blog</h1>
        <ul>
            <li v-for="post in posts" :key="post.url">
                <a :href="post.url">{{ post.title }} by {{ post.author }} on {{ post.date }}</a>
            </li>
        </ul>
    </div>
</template>
