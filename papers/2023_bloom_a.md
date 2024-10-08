---
layout: paper
title: "Association between SARS-CoV-2 and metagenomic content of samples from the Huanan Seafood Market"
date: "2023-07-01"
authors: 
    - "Jesse D Bloom"
journal: "Virus Evolution"
doi: "10.1093/ve/vead050"
link: "https://academic.oup.com/ve/article/9/2/vead050/7249794"
image: "/assets/papers/2023_bloom_a.jpg"
keywords:
    - "SARS-CoV-2"
---

## Abstract

The role of the Huanan Seafood Market in the early severe acute respiratory syndrome virus 2 (SARS-CoV-2) outbreak remains unclear. Recently, the Chinese Centers for Disease Control (CDC) released data from deep sequencing of environmental samples collected from the market after it was closed on 1 January 2020. Prior to this release, Crits-Christoph et al. analyzed data from a subset of the samples. Both that study and the Chinese CDC study concurred that the samples contained genetic material from a variety of species, including some like raccoon dogs that are susceptible to SARS-CoV-2. However, neither study systematically analyzed the relationship between the amount of genetic material from SARS-CoV-2 and different animal species. Here I implement a fully reproducible computational pipeline that jointly analyzes the number of reads mapping to SARS-CoV-2 and the mitochondrial genomes of chordate species across the full set of samples. I validate the presence of genetic material from numerous species and calculate mammalian mitochondrial compositions similar to those reported by Crits-Christoph et al. However, the SARS-CoV-2 content of the environmental samples is generally very low: only 21 of 176 samples contain more than ten SARS-CoV-2 reads, despite most samples being sequenced to depths exceeding 10**8 total reads. None of the samples with double-digit numbers of SARS-CoV-2 reads have a substantial fraction of their mitochondrial material from any non-human susceptible species. Only one of the fourteen samples with at least a fifth of the chordate mitochondrial material from raccoon dogs contains any SARS-CoV-2 reads, and that sample only has 1 of ~200,000,000 reads mapping to SARS-CoV-2. Instead, SARS-CoV-2 reads are most correlated with reads mapping to various fish, such as catfish and largemouth bass. These results suggest that while metagenomic analysis of the environmental samples is useful for identifying animals or animal products sold at the market, co-mingling of animal and viral genetic material is unlikely to reliably indicate whether any animals were infected by SARS-CoV-2.
