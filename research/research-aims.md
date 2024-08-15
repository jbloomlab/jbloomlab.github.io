---
title: Our Research
isAim: true
---

## Deep Mutational Scanning

Our lab uses deep mutational scanning to experimentally measure how tens-of-thousands of mutations to viral proteins affect key properties including function, immune escape, and receptor binding.

!["Pseudovirus neutralization system"](/assets/research/dms.png)

We primarily perform these experiments using a [pseudovirus system](https://www.sciencedirect.com/science/article/pii/S0092867423001034) that allows us to safely characterize mutants of entry proteins from a wide range of viruses, including [SARS-CoV-2 spike](https://www.nature.com/articles/s41586-024-07636-1), [influenza hemagglutinin](https://doi.org/10.1101/2024.05.23.595634), [Lassa virus GPC](https://www.sciencedirect.com/science/article/pii/S1074761324003194), [HIV envelope](https://www.sciencedirect.com/science/article/pii/S1931312823002184), and [Nipah virus RBP](https://doi.org/10.1101/2024.04.17.589977).

Deep mutational scanning can inform efforts to [forecast the evolution of human seasonal viruses](https://www.nature.com/articles/s41586-024-07636-1) and [surveil the evolution of potential pandemic viruses](https://doi.org/10.1101/2024.05.23.595634). To facilitate the use of deep mutational scanning for these important goals, we develop [interactive visualization tools](https://dms-viz.github.io/) and [data analysis pipelines](https://github.com/dms-vep/dms-vep-pipeline-3). See [here](https://dms-vep.org/Flu_H5_American-Wigeon_South-Carolina_2021-H5N1_DMS/) for an example of how we analyze and visualize large datasets to inform the study of viral evolution.

## Interplay of Immunity and Viral Evolution

We study immunity and viral evolution at both the population and single-cell levels.

!["Sequencing-based neutralization assay"](/assets/research/seqneut.jpg)

At the population level, differences in exposure history and immune imprinting lead human individuals to make antibody responses that target different regions of rapidly evolving viruses like influenza and SARS-CoV-2. This population heterogeneity has profound implications for viral evolution and disease susceptibility, as it causes viral mutations to impact the immunity of different individuals differently. We are characterizing this population heterogeneity using both [deep mutational scanning](https://www.sciencedirect.com/science/article/pii/S1931312824002336) and a [sequencing based-neutralization assay](https://doi.org/10.1101/2024.03.08.584176) we developed that increases the throughput of traditional neutralization assays by several orders of magnitude (see schematic at left).

At the single-cell level, we developed approaches to [sequence viruses in single cells](https://journals.asm.org/doi/10.1128/jvi.00500-19) and [quantify how many progeny each infected cell produces](https://elifesciences.org/articles/86852). We use these approaches to understand how viral variation impacts the outcome of infection in individual cells.

## Big Datasets and Viral Evolution

We also develop new ways to leverage large datasets to better understand viral evolution.

We have come up with a way to leverage the millions of publicly available SARS-CoV-2 sequences to estimate the effect of individual mutations on viral fitness (see [this paper](https://academic.oup.com/ve/article/9/2/vead055/7265011) and [these slides](https://slides.com/jbloom/sars2-mut-fitness/)). We've also created a platform to [visualize the mutational effects](https://jbloomlab.github.io/SARS2-mut-fitness/) to aid in interpretation of viral evolution.

We have also integrated thousands of deep mutational scanning measurements into an [antibody-escape calculator](https://jbloomlab.github.io/SARS2-RBD-escape-calc/) that was [widely used](https://slides.com/jbloom/sars2-rbd-escape-calc#/12) during the SARS-CoV-2 pandemic to understand the antigenic effects of viral mutations.

We also have projects that involve analyzing the evolution of viruses [within individual infected humans](https://elifesciences.org/articles/26875), and developing models to [understand epistasis among viral mutations](https://academic.oup.com/ve/article/8/2/veac110/6889254).
