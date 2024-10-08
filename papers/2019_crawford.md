---
layout: paper
title: "alignparse: A Python package for parsing complex features from high-throughput long-read sequencing"
date: "2019-01-23"
authors: 
    - "Katharine HD Crawford"
    - "Jesse D Bloom"
journal: "JOSS"
doi: "10.21105/joss.01915"
link: "https://doi.org/10.21105%2Fjoss.01915"
image: "/assets/papers/2019_crawford.png"
keywords:
    - "Software tools"
---

## Abstract

Advances in sequencing technology have made it possible to generate large numbers of long, high-accuracy sequencing reads. For instance, the new PacBio Sequel platform can generate hundreds of thousands of high-quality circular consensus sequences in a single run (Hebert et al., 2018; Rhoads & Au, 2015). Good programs exist for aligning these reads for genome assembly (Chaisson & Tesler, 2012; Li, 2018). However, these long reads can also be used for other purposes, such as sequencing PCR amplicons that contain various features of interest. For instance, PacBio circular consensus sequences have been used to identify the mutations in influenza viruses in single cells (Russell et al, 2019), or to link barcodes to gene mutants in deep mutational scanning (Matreyek et al., 2018). For such applications, the alignment of the sequences to the targets may be fairly trivial, but it is not trivial to then parse specific features of interest (such as mutations, unique molecular identifiers, cell barcodes, and flanking sequences) from these alignments.
