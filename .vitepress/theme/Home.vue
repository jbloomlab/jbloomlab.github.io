<script>
export default {
    data() {
        return {
            viruses: ["Influenza", "SARS-CoV-2", "Lassa", "Nipah", "Rabies", "HIV", "Chikungunya", "Measles", "Zika", "Dengue"],
            currentVirus: 'Viruses',
            virusIndex: 0,
            intervalId: null,
            colors: ['#FF0000', '#0000FF', '#61ad5f', '#FF7F00', '#9400D3', '#d3d61c', '#00aaff', '#FF1493', '#FFD700', '#8B0000'],
            useOpacity: true, // Toggle to apply opacity to background color
            opacityLevel: 0.1, // Background color opacity level
            currentColor: '#000000', // default color
        }
    },
    mounted() {
        this.intervalId = setInterval(this.updateVirus, 5000); // Update virus every 5 seconds
    },
    beforeDestroy() {
        clearInterval(this.intervalId);
    },
    methods: {
        updateVirus() {
            this.virusIndex = (this.virusIndex + 1) % this.viruses.length;
            this.currentVirus = this.viruses[this.virusIndex];
            this.currentColor = this.colors[this.virusIndex];
        },
        getBackgroundWithOpacity(color) {
            if (!this.useOpacity) return color;
            let rgb = color.match(/\w\w/g).map(x => parseInt(x, 16));
            return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${this.opacityLevel})`;
        }
    }
}
</script>

<template>
    <div class="mx-auto max-w-4xl px-4 text-left">
        <h1 class="text-8xl text-gray-800">
            Welcome to the <span class="font-bold">Bloom Lab</span>
        </h1>
        <p class="text-2xl text-gray-600 mt-4">
            Where we study the evolution of
            <transition name="fade" mode="out-in">
                <span :key="currentVirus" class="italic"
                    :style="{ color: currentColor, backgroundColor: getBackgroundWithOpacity(currentColor) }">{{
                        currentVirus }}</span>
            </transition>.
        </p>
        <br>
        <p class="text-lg text-gray-500 mt-6">
            Welcome to the Bloom lab! We study the evolution of proteins and viruses.
            We use a mix of experimental and computational approaches to study how viruses evolve in the face of
            different selection pressures, and to understand the public-health consequences of viral genetic variation.
            <br><br>
            Our lab is part of the <a
                href="https://www.fredhutch.org/en/research/divisions/basic-sciences-division.html">Basic Sciences
                Division</a> and <a
                href="https://www.fredhutch.org/en/labs/phs/projects/herbold-computational-biology-program.html">Computational
                Biology Program</a> at the Fred Hutch. We are
            also affiliated with the <a
                href="https://research.fredhutch.org/bloom/en.html#:~:text=Genome%20Sciences%20department%20at%20the%20University%20of%20Washington">Genome
                Sciences department at the University of Washington</a>, and Jesse Bloom is an
            Investigator of the <a
                href="https://research.fredhutch.org/bloom/en.html#:~:text=Howard%20Hughes%20Medical%20Institute">Howard
                Hughes Medical Institute</a>.
        </p>
    </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

a {
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
    color: rgb(0, 136, 255);
}
</style>
