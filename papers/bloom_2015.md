---
layout: paper
title: "Software for the analysis and visualization of deep mutational scanning data"
date: "2015-12-01"
authors: 
    - "Jesse D Bloom"
journal: "BMC bioinformatics"
doi: "10.1186/s12859-015-0590-4"
link: "https://link.springer.com/article/10.1186/s12859-015-0590-4"
image: "/assets/papers/starr_greany_2020.png"
keywords:
    - "Software tools"
---

## Abstract

Deep mutational scanning is a technique to estimate the impacts of mutations on a gene by using deep sequencing to count mutations in a library of variants before and after imposing a functional selection. The impacts of mutations must be inferred from changes in their counts after selection.

I describe a software package, dms_tools, to infer the impacts of mutations from deep mutational scanning data using a likelihood-based treatment of the mutation counts. I show that dms_tools yields more accurate inferences on simulated data than simply calculating ratios of counts pre- and post-selection. Using dms_tools, one can infer the preference of each site for each amino acid given a single selection pressure, or assess the extent to which these preferences change under different selection pressures.
