<template>
    <div class="flex flex-col items-center justify-center mt-4 message">
        <h1 class="text-8xl mb-4">Whoops, 404</h1>
        <iframe src="https://giphy.com/embed/fnLwSQ4U5oahz5A7Ju" width="480" height="270" frameBorder="0"
            class="rounded-lg shadow-lg giphy-embed" allowFullScreen></iframe>
        <p class="text-lg">We <em>all</em> make mistakes...</p>

    </div>
</template>

<style scoped>
.message {
    font-family: 'Chakra Petch', sans-serif;
}

.flex {
    display: flex;
}

.flex-col {
    flex-direction: column;
}

.items-center {
    align-items: center;
}

.justify-center {
    justify-content: center;
}

.text-3xl {
    font-size: 1.875rem;
}

.font-bold {
    font-weight: bold;
}

.mb-4 {
    margin-bottom: 1rem;
}

.text-lg {
    font-size: 1.125rem;
}
</style>