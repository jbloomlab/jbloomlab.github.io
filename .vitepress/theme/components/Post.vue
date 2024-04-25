<template>
    <div class="prose">
        <slot />
    </div>
</template>

<style>
/* Heading Styles */
.prose h1 {
    @apply text-3xl font-bold my-4;
}

.prose h2 {
    @apply text-2xl font-bold my-3;
}

.prose h3 {
    @apply text-xl font-semibold my-2;
}

/* Paragraph and Text Styles */
.prose p {
    @apply text-base text-gray-700 leading-relaxed my-2;
}

.prose blockquote {
    @apply border-l-4 border-gray-200 pl-4 italic text-gray-600;
}

.prose code {
    @apply bg-gray-100 rounded text-custom-orange font-mono text-sm;
}

.prose pre {
    @apply bg-gray-100 p-2 rounded text-sm;
}


/* List Styles */
.prose ul,
.prose ol {
    @apply list-disc list-inside my-2;
}

.prose ol {
    @apply list-decimal;
}

.prose li {
    @apply mb-1;
}

/* Image and Figure Styles */
.prose img {
    @apply mx-auto my-4;
}

.prose figure {
    @apply text-center;
}

.prose figcaption {
    @apply text-sm text-gray-500;
}
</style>