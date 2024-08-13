<script>
import { data as aimsData } from './research.data.js'

export default {
    data() {
        return {
            aims: aimsData,
            viruses: ["Influenza", "SARS-CoV-2", "Lassa", "Nipah", "Rabies", "HIV", "Chikungunya", "CoV-229E", "Proteins"],
            currentVirus: 'Viruses',
            virusIndex: -1,
            intervalId: null,
            colors: ["#7F3C8D", "#11A579", "#3969AC", "#F2B701", "#E73F74", "#80BA5A", "#E68310", "#008695", "#CF1C90", "#f97b72", "#4b4b8f", "#A5AA99"],
            useOpacity: true, // Toggle to apply opacity to background color
            opacityLevel: 0.1, // Background color opacity level
            currentColor: '#000000', // default color
        };
    },
    mounted() {
        this.intervalId = setInterval(this.updateVirus, 4000); // Update virus every 5 seconds
        this.disableScroll();
    },
    beforeUnmount() {
        this.enableScroll();
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
        },
        enableScroll() {
            document.body.style.overflow = 'auto';
        },
        disableScroll() {
            document.body.style.overflow = 'hidden';
        },
    },
    computed: {
        sortedAims() {
            return this.aims.sort((a, b) => a.order - b.order);
        }
    }
}
</script>

<template>
    <div class="hide-scrollbar snap-y snap-mandatory overflow-y-scroll overscroll-contain h-screen">
        <!-- Welcome to the Bloom Lab content -->
        <div
            class="hide-scrollbar snap-always snap-start mx-auto max-w-4xl px-4 text-left flex flex-col justify-between h-screen overflow-scroll ">
            <div class="flex-grow">
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
                    In the <strong>Bloom lab</strong>, we study the evolution of viruses and proteins.
                    We use experimental and computational techniques to understand
                    the molecular constraints on viral proteins, and how these constraints shape
                    the capacity of viruses to evolve to escape antibodies, erode pre-existing immunity,
                    and adapt to new hosts.
                </p>
                <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-6">
                    Our lab is part of the
                    <a href="https://www.fredhutch.org/en/research/divisions/basic-sciences-division.html">Basic
                        Sciences Divison</a>
                    and the
                    <a
                        href="https://www.fredhutch.org/en/research/divisions/public-health-sciences-division/research/computational-biology.html">Computational
                        Biology Program</a>
                    at the Fred Hutch. We are also affiliated with the
                    <a href="https://www.gs.washington.edu/">Genome Sciences</a>
                    and <a href="https://microbiology.washington.edu/uw-microbiology-home">Microbiology</a>
                    Departments at the University of Washington, and graduate students often join our
                    lab through the <a href="https://mcb-seattle.edu">MCB program</a>.
                    Jesse Bloom is an Investigator of the
                    <a href="https://www.hhmi.org/research">Howard Hughes Medical Institute</a>.
                </p>
                <!-- Scroll arrow -->
                <div class="scroll-button pt-2">
                    <Transition>
                        <div>
                            <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-10 md:mt-6 lg:mt-12 text-center">
                                Scroll down to learn more
                            </p>
                            <div class="flex justify-center">
                                <i
                                    class="bi bi-chevron-down text-gray-500 mt-1 animate-bounce text-lg md:text-xl lg:text-2xl"></i>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
        <!-- Research Aims -->
        <div class="research-aims pb-40">
            <div class="mx-auto max-w-4xl px-4 text-left flex flex-col justify-between"
                v-for="(aim, index) in sortedAims" :key="index">
                <h2 class="snap-always snap-start text-2xl md:text-3xl lg:text-4xl text-gray-600 mt-4 md:mt-6 lg:mt-12 mb-2 marker:select-none underline font-semibold"
                    :class="`decoration-${aim.color}-500`">
                    {{ aim.title }}
                </h2>
                <div class="aim-content" v-html="aim.html"></div>
            </div>
        </div>
    </div>
</template>

<style>
.aim-content p {
    @apply text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-6;
}

.aim-content img {
    @apply mx-auto md:float-left md:mr-4 my-4 max-w-sm md:max-w-md;
}

.hide-scrollbar {
    -ms-overflow-style: none;
    /* Internet Explorer 10+ */
    scrollbar-width: none;
    /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari, Opera */
}
</style>