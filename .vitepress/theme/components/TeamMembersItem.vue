<script>
import VPLink from './VPLink.vue'
import VPSocialLinks from './VPSocialLinks.vue'

export default {
    components: {
        VPLink,
        VPSocialLinks
    },
    props: {
        member: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <article class="container">
        <div class="profile">
            <figure class="avatar">
                <img class="avatar-img" :src="member.avatar" :alt="member.name" />
            </figure>
            <div class="data">
                <h1 class="name">
                    {{ member.name }}
                </h1>
                <p v-if="member.title" class="title">
                    <span v-if="member.title">
                        {{ member.title }}
                    </span>
                </p>
                <p v-if="member.desc" class="desc" v-html="member.desc"></p>
                <div v-if="member.links" class="links">
                    <VPSocialLinks :links="member.links" />
                </div>
            </div>
        </div>
    </article>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 2px;
    border-radius: 12px;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.profile {
    padding: 48px 32px;
    flex-grow: 1;
    background-color: var(--vp-c-bg-soft);
}

.data {
    text-align: center;
    padding-top: 24px;
    text-align: center;
}

.avatar {
    position: relative;
    flex-shrink: 0;
    margin: 0 auto;
    border-radius: 50%;
    box-shadow: var(--vp-shadow-3);
    width: 96px;
    height: 96px;
}

.avatar-img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    object-fit: cover;
}

.name {
    margin: 0;
    font-weight: 600;
    letter-spacing: 0.15px;
    line-height: 28px;
    font-size: 20px;
}

.title {
    margin: 0;
    font-weight: 500;
    color: var(--vp-c-text-2);
    padding-top: 4px;
    font-size: 16px;
}

.desc {
    margin: 0 auto;
    padding-top: 16px;
    max-width: 288px;
    font-size: 16px;
}

.desc :deep(a) {
    font-weight: 500;
    color: var(--vp-c-brand-1);
    text-decoration-style: dotted;
    transition: color 0.25s;
}

.links {
    display: flex;
    justify-content: center;
    height: 56px;
    margin: 0 -16px -12px;
    padding: 16px 12px 0;
}
</style>