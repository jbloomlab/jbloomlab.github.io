<script>
export default {
    data() {
        return {
            viruses: ["Influenza", "SARS-CoV-2", "Lassa", "Nipah", "Rabies", "HIV", "Chikungunya", "CoV-229E", "Proteins"],
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
                    In the <strong>Bloom lab</strong>, we study the evolution of viruses and proteins.
                    We use experimental and computational techniques to understand
                    the molecular constraints on viral proteins, and how these constraints shape
                    the capacity of viruses to evolve to escape antibodies, erode pre-existing immunity,
                    and adapt to new hosts.

                    <br><br>
                    Our lab is part of the
                    <a href="https://www.fredhutch.org/en/research/divisions/basic-sciences-division.html">Basic Sciences Divison</a>
                    and the
                    <a href="https://www.fredhutch.org/en/research/divisions/public-health-sciences-division/research/computational-biology.html">Computational Biology Program</a>
                    at the Fred Hutch. We are also affiliated with the
                    <a href="https://www.gs.washington.edu/">Genome Sciences</a>
                    and <a href="https://microbiology.washington.edu/uw-microbiology-home">Microbiology</a>
                    Departments at the University of Washington, and graduate students often join our
                    lab through the <a href="https://mcb-seattle.edu">MCB program</a>.
                    Jesse Bloom is an Investigator of the
                    <a href="https://www.hhmi.org/research">Howard Hughes Medical Institute</a>.
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
                    <span class="underline decoration-sky-500 font-semibold">Deep Mutational Scanning</span>
                </h2>
                <div class="description">
                    <div class="">
                        <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-12"> 
                            Our lab uses deep mutational scanning to
                            experimentally measure how tens-of-thousands of mutations to viral proteins
                            affect key properties including function, immune escape, and receptor binding.
                        </p>
                        <img src="../../assets/research/dms.png" alt="Example of deep mutational scanning"
                            class="float-left mr-4 my-4 w-107 h-64">
                        <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-8">
                            We primarily perform these experiments using a
                            <a href="https://www.sciencedirect.com/science/article/pii/S0092867423001034">pseudovirus system</a>
                            that allows us to safely characterize mutants of entry proteins from a wide range
                            of viruses, including
                            <a href="https://www.nature.com/articles/s41586-024-07636-1">SARS-CoV-2 spike</a>,
                            <a href="https://doi.org/10.1101/2024.05.23.595634">influenza hemagglutinin</a>,
                            <a href="https://www.sciencedirect.com/science/article/pii/S1074761324003194">Lassa virus GPC</a>,
                            <a href="https://www.sciencedirect.com/science/article/pii/S1931312823002184">HIV envelope</a>, and
                            <a href="https://doi.org/10.1101/2024.04.17.589977">Nipah virus RBP</a>.
                        </p>
                        <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-8">
                            Deep mutational scanning can inform efforts to
                            <a href="https://www.nature.com/articles/s41586-024-07636-1">forecast the evolution of human seasonal viruses</a>
                            and
                            <a href="https://doi.org/10.1101/2024.05.23.595634">surveil the evolution of potential pandemic viruses</a>.
                            To facilitate the use of deep mutational scanning for these important goals,
                            we develop <a href="https://dms-viz.github.io/">interactive visualization tools</a>
                            and <a href="https://github.com/dms-vep/dms-vep-pipeline-3">data analysis pipelines</a>.
                            See <a href="https://dms-vep.org/Flu_H5_American-Wigeon_South-Carolina_2021-H5N1_DMS/">here</a>
                            for an example of how we analyze and visualize large datasets to
                            inform the study of viral evolution.
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
                    <span class="underline decoration-indigo-500 font-semibold">Interplay of Immunity and Viral Evolution</span>
                </h2>
                <div class="description">
                    <div class="">
                        <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-12">
                            We study immunity and viral evolution at both the population and single-cell
                            levels.
                        </p>
                        <img src="../../assets/research/seqneut.jpg" alt="Description"
                            class="float-left mr-4 my-4 w-80 h-134">
                        <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-8">
                            At the population level, differences in exposure history and immune imprinting lead 
                            human individuals to make antibody responses that target different regions
                            of rapidly evolving viruses like influenza and SARS-CoV-2.
                            This population heterogeneity has profound implications for viral evolution and disease susceptibility, as
                            it causes viral mutations to impact the immunity of different individuals
                            differently. We are characterizing this population heterogeneity using both
                            <a href="https://www.sciencedirect.com/science/article/pii/S1931312824002336">deep mutational scanning</a>
                            and a <a href="https://doi.org/10.1101/2024.03.08.584176">sequencing based-neutralization assay</a>
                            we developed that increases the throughput of traditional neutralization assays by several orders of magnitude (see schematic at left).

                        </p>
                        <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-8">
                            At the single-cell level, we developed approaches to
                            <a href="https://journals.asm.org/doi/10.1128/jvi.00500-19">sequence viruses in single cells</a>
                            and <a href="https://elifesciences.org/articles/86852">quantify how many progeny each infected cell produces</a>.
                            We use these approaches to understand how viral variation impacts the
                            outcome of infection in individual cells.
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
                    <span class="underline decoration-pink-500 font-semibold">Big Datasets and Viral Evolution</span>
                </h2>
                <div class="description">
                    <div class="">
                        <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-12">
                            We also develop new ways to leverage large datasets to better understand viral evolution.
                        </p>
                        <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-8">
                            We have come up with a way to leverage the millions of publicly available
                            SARS-CoV-2 sequences to estimate the effect of individual mutations on viral fitness
                            (see <a href="https://academic.oup.com/ve/article/9/2/vead055/7265011">this paper</a>
                            and <a href="https://slides.com/jbloom/sars2-mut-fitness/">these slides</a>).
                            We've also created a platform to
                            <a href="https://jbloomlab.github.io/SARS2-mut-fitness/">visualize the mutational effects</a>
                            to aid in interpretation of viral evolution.
                        </p>
                        <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-8">
                            We have also integrated thousands of deep mutational scanning measurements
                            into an <a href="https://jbloomlab.github.io/SARS2-RBD-escape-calc/">antibody-escape calculator</a>
                            that was <a href="https://slides.com/jbloom/sars2-rbd-escape-calc#/12">widely used</a> during the SARS-CoV-2 pandemic to understand
                            the antigenic effects of viral mutations.
                        </p>
                        <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-8">
                            We also have projects that involve analyzing the evolution of viruses
                            <a href="https://elifesciences.org/articles/26875">within individual infected humans</a>, and developing models
                            to <a href="https://academic.oup.com/ve/article/8/2/veac110/6889254">understand epistasis among viral mutations</a>.
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
