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
            show: false
        }
    },
    mounted() {
        this.intervalId = setInterval(this.updateVirus, 4000); // Update virus every 5 seconds
        this.disableScroll();
        setTimeout(() => {
            this.show = true;
        }, 2000);
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
    }
}
</script>

<template>
    <div
        class="carousel hide-scrollbar snap-y snap-mandatory overflow-y-scroll overscroll-contain h-screen flex-grow z-0">
        <div
            class="carousel-item w-full h-full snap-always snap-start mx-auto max-w-4xl px-4 text-left flex flex-col justify-between">
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
                    In the <strong>Bloom lab</strong>, we focus on the evolution of proteins and viruses. Using a blend
                    of
                    experimental and
                    computational techniques, we explore how viruses adapt to various selective pressures. Our research
                    aims
                    to
                    unravel the complexities of viral genetic variation and its implications for public health.
                    <br><br>
                    Our lab is part of the <a
                        href="https://www.fredhutch.org/en/research/divisions/basic-sciences-division.html">Basic
                        Sciences
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
            <div class="scroll-button pb-60 sm:pb-72 md:pb-72 lg:pb-60">
                <Transition>
                    <div v-if="show">
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
        <!-- Research Aims -->
        <div
            class="carousel-item w-full h-full snap-always snap-start mx-auto max-w-4xl px-4 text-left flex flex-col justify-between">
            <div class="flex-grow">
                <h2 class="text-2xl md:text-3xl lg:text-4xl text-gray-600 mt-2 lg:mt-4 font-normal select-none">
                    We develop <span class="underline decoration-sky-500 font-semibold">Multiplexed Genomic
                        Assays</span>
                </h2>
                <div class="description">
                    <div class="">
                        <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-12">
                            We’re developing multiplexed genomic assays that enable us to take a prospective view of
                            viral evolution. Using these high-throughput approaches, we can measure the effect of
                            thousands of viral
                            mutations, map antibody footprints, and assess population-level immunity. Crucially, we do
                            this with a
                            focus on bio-safety.
                        </p>
                        <img src="../../assets/research/research-description.jpg" alt="Description"
                            class="float-left mr-4 my-4 w-64 h-64">
                        <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-8">
                            We recently pioneered a pseudovirus-based deep mutational scanning approach that is
                            extensible to nearly any viral entry protein. The approach uses on a
                            phenotype-genotype-linked library of non-replicative lentivirus psuedotyped with an viral
                            entry protein of
                            interest. We've used this system to measure the effect of mutations in viral proteins as
                            diverse as
                            SARS-CoV-2 Spike, HIV Env, and Lassa GPC.
                        </p>
                        <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-8">
                            We've also developed a high-throughput sequencing-based neutralization assay for influenza
                            that massively increases the number of neuts that a single person can perform. By increasing
                            the throughput of neutralization assays, we can get a clearer picture of viral immunity on
                            the population level and help inform vaccine
                            choice.
                        </p>
                    </div>
                </div>
            </div>
            <div class="scroll-button pb-60 sm:pb-72 md:pb-72 lg:pb-60">
                <Transition>
                    <div v-if="show">
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
        <!-- Research Aims -->
        <div
            class="carousel-item w-full h-full snap-always snap-start mx-auto max-w-4xl px-4 text-left flex flex-col justify-between">
            <div class="flex-grow">
                <h2 class="text-2xl md:text-3xl lg:text-4xl text-gray-600 mt-2 lg:mt-4 font-normal select-none">
                    We Untangle <span class="underline decoration-indigo-500 font-semibold">Host-Pathogen
                        Interactions</span>
                </h2>
                <div class="description">
                    <div class="">
                        <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-12">
                            I added this section to mention the work from Andrew, David, Alistair, and Lissie.
                        </p>
                        <img src="../../assets/research/research-description.jpg" alt="Description"
                            class="float-left mr-4 my-4 w-64 h-64">
                        <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-8">
                            Maybe we don't need this section, but I think it's a good place to highlight our work on
                            single-cell RNA sequencing.
                        </p>
                        <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-8">
                            Let me know what you think!
                        </p>
                    </div>
                </div>
            </div>
            <div class="scroll-button pb-60 sm:pb-72 md:pb-72 lg:pb-60">
                <Transition>
                    <div v-if="show">
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
        <!-- Research Aim -->
        <div
            class="carousel-item w-full h-full snap-always snap-start mx-auto max-w-4xl px-4 text-left flex flex-col justify-between">
            <div class="flex-grow">
                <h2 class="text-2xl md:text-3xl lg:text-4xl text-gray-600 mt-2 lg:mt-4 font-normal select-none">
                    We Study <span class="underline decoration-pink-500 font-semibold">Viral Evolution</span>
                </h2>
                <div class="description">
                    <div class="">
                        <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-12">
                            Finally, I added this section on viral evolution. I think it's a good place to highlight the
                            intrahost evolution work that we do.
                        </p>
                        <img src="../../assets/research/research-description.jpg" alt="Description"
                            class="float-left mr-4 my-4 w-64 h-64">
                        <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-8">
                            I also think this is a good place to talk about our work on epistasis.
                        </p>
                        <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-8">
                            Again, I'm not sure we need this section, but I figured I'd put the infrastructure in place
                            to add it. Let me know what you're thinking!
                        </p>
                    </div>
                </div>
            </div>
            <div class="scroll-button pb-60 sm:pb-72 md:pb-72 lg:pb-60">
                <Transition>
                    <div v-if="show">
                        <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-10 md:mt-6 lg:mt-12 text-center">
                            Scroll up to learn more
                        </p>
                        <div class="flex justify-center">
                            <i
                                class="bi bi-chevron-up text-gray-500 mt-1 animate-bounce text-lg md:text-xl lg:text-2xl"></i>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
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

.v-enter-active,
.v-leave-active {
    transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

a {
    text-decoration: underline;
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
