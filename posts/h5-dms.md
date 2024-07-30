---
layout: post
title: Deep mutational scanning of H5 influenza hemagglutinin
date: 2024-05-25
author: Jesse Bloom
---

In [a new study](https://doi.org/10.1101/2024.05.23.595634), we have measured how all mutations to the hemagglutinin (HA) of clade 2.3.4.4b H5 influenza affect molecular phenotypes relevant to pandemic risk.
The data can be interactively visualized at [https://dms-vep.org/Flu_H5_American-Wigeon_South-Carolina_2021-H5N1_DMS/](https://dms-vep.org/Flu_H5_American-Wigeon_South-Carolina_2021-H5N1_DMS/)

---

## Overview

H5 influenza from clade 2.3.4.4b [has been causing](https://wwwnc.cdc.gov/eid/article/30/7/24-0508_article) outbreaks in numerous animals, including wild birds, poultry, cats, and cattle.
There is concern that this virus could pose a potential risk to humans if it acquires additional mutations that improve its ability to infect or transmit in humans.
From prior work, several molecular phenotypes of HA are known to contribute to pandemic risk.

In [a new study led by Bernadeta Dadonaite](https://doi.org/10.1101/2024.05.23.595634), we used deep mutational scanning to measure how all HA amino-acid mutations affected key molecular phenotypes.

![molecular phenotypes measured](../assets/research/h5-dms/phenotypes.jpg)

To make these measurements safely, we used a previously described [pseudovirus deep mutational scanning system](https://www.sciencedirect.com/science/article/pii/S0092867423001034) that allows us to characterize the effects of mutations to viral entry proteins using single-cycle replicative lentiviral particles that can be safely studied at biosafety-level 2.
Using this system, we made libraries that covered all amino-acid mutations to the current candidate vaccine strain HA for clade 2.3.4.4b H5 influenza.

![pseudovirus schematic](../assets/research/h5-dms/schematic.jpg)

First we measured how all mutations affected the ability of HA to mediate cell entry.
These results can be visualized either using a heatmap or by projecting functional constraint onto the HA protein structure, as show below.
Overall, these measurements identify functionally constrained regions of HA that are unlikely to mutate, and so form good targets for antibodies and other therapeutics.

![cell entry heatmap](../assets/research/h5-dms/cell_entry_heatmap.jpg)
![cell entry structure](../assets/research/h5-dms/cell_entry_structure.jpg)

Next we measured how mutations affect HA's ability to mediate entry into 293T cells that express a2-6 versus a2-3 linked sialic acids, which is important because human transmissible viruses use a2-6.
Below are mutations that increase a2-6 usage:

![a2-6 usage](../assets/research/h5-dms/a2-6.jpg)

We also measured how mutations affect HA stability, which is important as increased HA stability is associated with increased airborne transmissibility.
Below is a map of stability enhancing mutations, which tend to be located in helices in the fusion machinery and interfaces between the head and stalk domains:

![stability](../assets/research/h5-dms/stability.jpg)

Finally, we measured how all the mutations affect neutralization by mouse and ferret sera.
The key sites of neutralization escape are on the top of the HA head mostly in classically defined antigenic regions, although sites of escape differ a bit between mouse and ferret sera:

![escape](../assets/research/h5-dms/escape.jpg)

To aid in using these data in surveillance, our collaborators (Jordan Ort and Louise Moncla) have integrated them into nextstrain (see [here](https://nextstrain.org/groups/moncla-lab/h5nx/h5-dms/clade-2344b) to color a phylogenetic tree by the measured phenotypes).

Angie Hinrichs [has also integrated the data into the UShER H5 trees](https://x.com/AngieSHinrichs/status/1804270714570313873).

## How to visualize and access the data
To make the data as accessible as possible for use by others, see

- An [interactive page](https://dms-vep.org/Flu_H5_American-Wigeon_South-Carolina_2021-H5N1_DMS/) that allows you to visually examine heatmaps showing the effects of all the mutations on each measured phenotype.

- An [interactive structure-based visualization](https://dms-viz.github.io/v0/?data=https%3A%2F%2Fraw.githubusercontent.com%2Fdms-vep%2FFlu_H5_American-Wigeon_South-Carolina_2021-H5N1_DMS%2Fmain%2Fresults%2Fdms-viz%2Fdms-viz.json)

- The [numerical values of the measurements](https://github.com/dms-vep/Flu_H5_American-Wigeon_South-Carolina_2021-H5N1_DMS/blob/main/results/summaries/phenotypes.csv) available.

- Note that there are multiple HA numbering schemes in use, so make sure [you understand how the mutations are being numbered](https://dms-vep.org/Flu_H5_American-Wigeon_South-Carolina_2021-H5N1_DMS/numbering.html).

## See also

See also [Jesse's Twitter thread](https://x.com/jbloom_lab/status/1794364494858346803) and [some slides about the study](https://slides.com/jbloom/h5-dms-short).

