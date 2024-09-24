---
layout: post
title: Sequencing-based neutralization assays for influenza
date: 2024-09-24
author: Jesse Bloom
---

In [a paper](https://doi.org/10.1128/jvi.00689-24) just published in _Journal of Virology_, we describe a new sequencing-based neutralization assay that dramatically increases the scale at which it is possible to measure how sera or antibodies neutralize different influenza virus strains.

---

## Overview

Neutralization assays are central to studying viral immunity.
These assays involve making dilutions of serum, adding virus and cells, and then quantifying how much each serum dilution inhibits viral infection.
The traditional readout is GFP fluorescence, luciferase, or plaques.
Such readouts allow one virus to be analyzed per row or column of a 96-well plate, meaning that a single plate can be used to measure titers for at most 8 to 12 different serum-virus pairs.
This limited throughput is a real problem when studying an antigenically variable virus like influenza, where we may want know neutralization titers against dozens or even hundreds of different viral strains.

[Our paper](https://doi.org/10.1128/jvi.00689-24) describes a new approach spearheaded by Andrea Loes in our group that can measure titers for hundreds (or even up to a thousand) serum-virus pairs per 96-well plate, as shown below.

![measurements per plate](/assets/research/2024-09-24_flu_seqneut/per_plate.jpg)

How do we do this?
The essence of our approach is to barcode each influenza virus strain, then combine all of the viruses and read out neutralization by all the viruses at once by deep sequencing, as schematized below.
So it's like a traditional neutralization assay, except we measure all the viruses at once, rather than one at a time.

![schematic of sequencing-based neutralization](/assets/research/2024-09-24_flu_seqneut/schematic.jpg)

Below are some representative neutralization curves from the sequencing-based assay.
They are identical to curves from traditional one-virus versus one-serum assays: the only difference is we generate replicate curves for hundreds of serum-virus pairs on each plate, rather than just a few curves per plate.

![example sequencing-based neutralization curves](/assets/research/2024-09-24_flu_seqneut/example_curves.jpg)

The neutralization titers measured using the sequencing-based assay are highly reproducible both across replicate barcodes for the same virus on the same plate, and across different plates run on different days, as shown below.

![correlations within assay](/assets/research/2024-09-24_flu_seqneut/correlations_within_assay.jpg)

The neutralization curves measured using the sequencing-based assay are also indistinguishable from those measured using a traditional fluorescence-based assay, as shown below:

![correlations with traditional](/assets/research/2024-09-24_flu_seqneut/correlations_with_traditional.jpg)

We applied the assay to examine the response to repeated influenza vaccination, an important topic as [some studies](https://www.thelancet.com/journals/lanres/article/PIIS2213-2600(22)00266-1/fulltext) suggest reduced effectiveness of repeated vaccination.
We analyzed samples from the [DRIVE study](https://academic.oup.com/cid/advance-article/doi/10.1093/cid/ciae380/7718587) led by Ben Cowling and Sarah Cobey.
For each study participant at each timepoint, we used the sequencing-based neutralization assay to measure titers against 36 H1N1 strains (five vaccine strains plus 31 recent strains).
So for each participant, we generate data like that shown below, which quantifies the pre- and post-vaccination titers against a wide range of recent viral strains.

![example neutralization landscapes](/assets/research/2024-09-24_flu_seqneut/example_landscapes.jpg)

In our sub-study (we only examined a fraction of all of the DRIVE samples), we looked at the response to the 2021-2022 vaccine in individual who had or had not been vaccinated in the prior year (2020-2021).
Individuals who had **not** been vaccinated in the prior year (2020-2021) started with much lower pre-vaccination titers (purple points), but had a substantially larger marginal increase in titers after vaccination in 2021-2022 (red and green points) than individuals who had also been vaccinated the prior year.
(This sort of makes sense: their starting titers were lower so there was more of an increase after vaccination.)
The titers for the two groups are shown below:

![vaccine response](/assets/research/2024-09-24_flu_seqneut/vaccine_response.jpg)

However, despite the larger marginal increase in titers for participants without prior-year vaccination, the final titers (especially at day 182) were similar among participants with and without a prior-year vaccination, since prior-year vaccinees started with higher titers.

![final titers](/assets/research/2024-09-24_flu_seqneut/final_titers.jpg)

Importantly, the participant-average plots above mask person- and virus-specific variation that probably has important implications for both influenza evolution and disease susceptibility (see plot below).
Indeed, one of the things we are most excited about is using this new assay to extensively probe person-to-person variation in titers to different viral strains.

![variation among viruses and individuals](/assets/research/2024-09-24_flu_seqneut/variation.jpg)

## Want to use this approach for your own studies?
We think sequencing-based neutralization assays could be useful for a wide range of studies.
To make the approach as accessible as possible for others, we have created:

 - A publicly available [computational pipeline](https://github.com/jbloomlab/seqneut-pipeline) to analyze sequencing-based neutralization assay data. Note that this pipeline leverages an early [Python package we developed to fit neutralization curves](https://jbloomlab.github.io/neutcurve/); the ability to automate the curve fitting becomes important when you are trying to analyze thousands of neutralization curves per week!

 - A publicly available detailed [experimental protocol](https://doi.org/10.17504/protocols.io.kqdg3xdmpg25/v1).

We already have scientists from several different research groups scheduled to visit our lab in the coming months to learn the assay; please reach out if you are interested in trying it yourself!

## What's next?
Our lab has already extended this assay to measure ~10,000 neutralization titers of human sera against recent H3N2 strains, and we are hopeful these data can eventually be used to understand which influenza strains are evolutionarily successful, thereby helping with vaccine-strain selection.
Stay tuned for more on this soon!

Also, feel free to reach out if you are interested in using the large sets of neutralization titers for evolutionarily or epidemiological modeling.
All the raw data from the study described above is [publicly available](https://github.com/jbloomlab/flu_seqneut_pdmH1N1_2023-2024); we're also happy to share interim data from our in-progress studies that we haven't yet pre-printed or published.
