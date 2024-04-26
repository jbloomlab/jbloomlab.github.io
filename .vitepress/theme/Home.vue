<script>
export default {
    data() {
        return {
            viruses: ["Influenza", "SARS-CoV-2", "Lassa", "Nipah", "Rabies", "HIV", "Chikungunya", "229E", "Measles", "Zika", "Dengue", "Proteins"],
            currentVirus: 'Viruses',
            virusIndex: -1,
            intervalId: null,
            colors: ["#7F3C8D", "#11A579", "#3969AC", "#F2B701", "#E73F74", "#80BA5A", "#E68310", "#008695", "#CF1C90", "#f97b72", "#4b4b8f", "#A5AA99"],
            useOpacity: true, // Toggle to apply opacity to background color
            opacityLevel: 0.1, // Background color opacity level
            currentColor: '#000000', // default color
        }
    },
    mounted() {
        this.intervalId = setInterval(this.updateVirus, 2500); // Update virus every 5 seconds
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
        <h1 class="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-gray-800 select-none">
            Welcome to the <span class="block font-bold">Bloom Lab</span>
        </h1>
        <p class="text-xl md:text-2xl lg:text-3xl text-gray-600 mt-2 lg:mt-4 select-none">
            where we study the evolution of
            <transition name="fade" mode="out-in">
                <span :key="currentVirus" class="italic"
                    :style="{ color: currentColor, backgroundColor: getBackgroundWithOpacity(currentColor) }">{{
                    currentVirus }}</span>
            </transition>
        </p>
        <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-4 md:mt-6 lg:mt-12">
            In the <strong>Bloom lab</strong>, we focus on the evolution of proteins and viruses. Using a blend of
            experimental and
            computational techniques, we explore how viruses adapt to various selective pressures. Our research aims to
            unravel the complexities of viral genetic variation and its implications for public health.
            <br><br>
            Our lab is part of the <a
                href="https://www.fredhutch.org/en/research/divisions/basic-sciences-division.html">Basic Sciences
                Division</a> and <a
                href="https://www.fredhutch.org/en/labs/phs/projects/herbold-computational-biology-program.html">Computational
                Biology Program</a> at the Fred Hutch. We are
            also affiliated with the <a
                href="https://research.fredhutch.org/bloom/en.html#:~:text=Genome%20Sciences%20department%20at%20the%20University%20of%20Washington">Genome
                Sciences Department</a> at the University of Washington, and Jesse Bloom is an
            Investigator of the <a
                href="https://research.fredhutch.org/bloom/en.html#:~:text=Howard%20Hughes%20Medical%20Institute">Howard
                Hughes Medical Institute</a>.
        </p>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

a {
    text-decoration: underline;
}
</style>
