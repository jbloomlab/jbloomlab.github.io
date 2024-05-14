---
layout: paper
title: "Jointly modeling deep mutational scans identifies shifted mutational effects among SARS-CoV-2 spike homologs"
date: "2023-08-02"
authors: 
    - "Hugh K Haddox*"
    - "Jared G Galloway*"
    - "Bernadeta Dadonaite"
    - "Jesse D Bloom"
    - "Frederick A Matsen IV"
    - "William S DeWitt"
journal: "bioRxiv"
doi: "10.1101/2023.07.31.551037"
link: "https://www.biorxiv.org/content/10.1101/2023.07.31.551037v1"
image: "/assets/papers/starr_greany_2020.png"
---

## Abstract

Deep mutational scanning (DMS) is a high-throughput experimental technique that measures the effects of thousands of mutations to a protein. These experiments can be performed on multiple homologs of a protein or on the same protein selected under multiple conditions. It is often of biological interest to identify mutations with shifted effects across homologs or conditions. However, it is challenging to determine if observed shifts arise from biological signal or experimental noise. Here, we describe a method for jointly inferring mutational effects across multiple DMS experiments while also identifying mutations that have shifted in their effects among experiments. A key aspect of our method is to regularize the inferred shifts, so that they are nonzero only when strongly supported by the data. We apply this method to DMS experiments that measure how mutations to spike proteins from SARS-CoV-2 variants (Delta, Omicron BA.1, and Omicron BA.2) affect cell entry. Most mutational effects are conserved between these spike homologs, but a fraction have markedly shifted. We experimentally validate a subset of the mutations inferred to have shifted effects, and confirm differences of >1,000-fold in the impact of the same mutation on spike-mediated viral infection across spikes from different SARS-CoV-2 variants. Overall, our work establishes a general approach for comparing sets of DMS experiments to identify biologically important shifts in mutational effects.
