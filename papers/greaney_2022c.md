---
layout: paper
title: "An antibody-escape estimator for mutations to the SARS-CoV-2 receptor-binding domain"
date: "2022-01-01"
authors: 
    - "Allison J Greaney"
    - "Tyler N Starr"
    - "Jesse D Bloom"
journal: "Virus Evolution"
doi: "10.1093/ve/veac021"
link: "https://academic.oup.com/ve/article/8/1/veac021/6549895"
image: "/assets/papers/starr_greaney_2022c.jpg"
keywords:
    - "SARS-CoV-2"
    - "Software tools"
    - "Immunity"
---

## Abstract

A key goal of severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) surveillance is to rapidly identify viral variants with mutations that reduce neutralization by polyclonal antibodies elicited by vaccination or infection. Unfortunately, direct experimental characterization of new viral variants lags their sequence-based identification. Here we help address this challenge by aggregating deep mutational scanning data into an ‘escape estimator’ that estimates the antigenic effects of arbitrary combinations of mutations to the virus’s spike receptor-binding domain. The estimator can be used to intuitively visualize how mutations impact polyclonal antibody recognition and score the expected antigenic effect of combinations of mutations. These scores correlate with neutralization assays performed on SARS-CoV-2 variants and emphasize the ominous antigenic properties of the recently described Omicron variant. An interactive version of the estimator is at https://jbloomlab.github.io/SARS2_RBD_Ab_escape_maps/escape-calc/ (last accessed 11 March 2022), and we provide a Python module for batch processing. Currently the calculator uses primarily data for antibodies elicited by Wuhan-Hu-1-like vaccination or infection and so is expected to work best for calculating escape from such immunity for mutations relative to early SARS-CoV-2 strains.
