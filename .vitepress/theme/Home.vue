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
        },
    }
}
</script>

<template>

    <div class="hide-scrollbar snap-y snap-mandatory overflow-y-scroll overscroll-contain h-screen flex-grow z-0">
        <div class="w-full h-full snap-always snap-start mx-auto max-w-4xl px-4 text-left">
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
                computational techniques, we explore how viruses adapt to various selective pressures. Our research aims
                to
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
        <!-- Research Aims... -->
        <div class="w-full h-full snap-always snap-start mx-auto max-w-4xl px-4">
            <h2 class="text-2xl md:text-3xl lg:text-4xl text-gray-600 mt-2 lg:mt-4 font-normal select-none">
                We're Developing <span class="underline decoration-sky-500 font-semibold">Multiplexed Genomic
                    Assays</span>
            </h2>
            <div class="description">
                <div class="">
                    <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-12">
                        We work on developing multiplexed genomic assays to study viral evolution. These assays allow us
                        to
                        measure the effects of all possible single mutations in a viral protein on viral replication and
                        antigenicity. We use these assays to study how viruses evolve in response to selective pressures
                        such as immune responses or antiviral drugs.
                    </p>
                    <img src="../../assets/research/research-description.jpg" alt="Description"
                        class="float-left mr-4 my-4 w-64 h-64">
                    <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-8">
                        We've developed a pseudotyped lentivirus system that allows us to measure the effects of all
                        possible single mutations in a viral protein on viral replication. We use this system to study
                        how
                        viruses evolve in response to selective pressures such as immune responses or antiviral drugs.
                    </p>
                    <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-8">
                        We've also developed a high-throughput sequencing-based approach neutralization assays that can
                        be used to increase the number of viral strains that can be tested in a single experiment. This
                        approach allows us to study how viruses evolve in response to selective pressures such as immune
                        responses or antiviral drugs.
                    </p>
                </div>
            </div>
        </div>
        <!-- Research Aims... -->
        <div class="w-full h-full snap-always snap-start mx-auto max-w-4xl px-4">
            <h2 class="text-2xl md:text-3xl lg:text-4xl text-gray-600 mt-2 lg:mt-4 font-normal select-none">
                We're Untangling <span class="underline decoration-indigo-500 font-semibold">Pathogen Host
                    Interactions</span>
            </h2>
            <div class="description">
                <div class="">
                    <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-12">
                        We study how viruses interact with their hosts. We are particularly interested in how viruses
                        evolve to evade host immune responses. We use a combination of experimental and computational
                        approaches to study how viruses evolve to evade host immune responses.
                    </p>
                    <img src="../../assets/research/research-description.jpg" alt="Description"
                        class="float-left mr-4 my-4 w-64 h-64">
                    <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-8">
                        Using techniques ranging from deep mutational scanning to single cell RNA sequencing, we study
                        how viruses
                        evade immunity, determine host range, and cause disease.
                    </p>
                    <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-8">
                        We study virus like Influenza, SARS-CoV-2, Lassa, Nipah, Rabies, HIV, Chikungunya, 229E,
                        Measles, Zika, Dengue, and their viral entry proteins.

                    </p>
                </div>
            </div>
        </div>
        <!-- Research Aims... -->
        <div class="w-full h-full snap-always snap-start mx-auto max-w-4xl px-4">
            <h2 class="text-2xl md:text-3xl lg:text-4xl text-gray-600 mt-2 lg:mt-4 font-normal select-none">
                We're Studying <span class="underline decoration-pink-500 font-semibold">Viral Evolution</span>
            </h2>
            <div class="description">
                <div class="">
                    <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-12">
                        We develop and apply experimental and computational methods to study the evolution of viruses.
                        We've use combination of phylodynamic and deep mutational scanning approaches to study how
                        viruses evolve in response to selective pressures such as immune responses or antiviral drugs.
                    </p>
                    <img src="../../assets/research/research-description.jpg" alt="Description"
                        class="float-left mr-4 my-4 w-64 h-64">
                    <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-8">
                        For example, see this study on the evolution of SARS-CoV-2 in the context of the COVID-19
                        pandemic.
                        We use deep sequencing to track the evolution of the virus in real time within and between
                        hosts.
                    </p>
                    <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-8">
                        We study virus like Influenza, SARS-CoV-2, Lassa, Nipah, Rabies, HIV, Chikungunya, 229E,
                        Measles, Zika, Dengue, and their viral entry proteins.

                    </p>
                </div>
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
