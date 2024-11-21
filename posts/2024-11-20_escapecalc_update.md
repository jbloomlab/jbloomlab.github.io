---
layout: post
title: Escape calculator update illustrates pleiotropic constraints on SARS-CoV-2 RBD evolution
date: 2024-11-20
author: Jesse Bloom
---

I've updated the [SARS-CoV-2 RBD antibody escape calculator](https://jbloomlab.github.io/SARS2-RBD-escape-calc/) with [new yeast-display deep mutational scanning data from Yunlong Cao's group](https://www.nature.com/articles/s41586-024-08315-x).
My interpretation: the antigenic evolution of the RBD is currently constrained by the pleiotropic effects of mutations on 1:1 RBD-ACE2 affinity, up-down RBD positioning in the context of full spike, and antibody neutralization.

---

## Escape calculator update

The SARS-CoV-2 RBD escape calculator is an [interactive tool](https://jbloomlab.github.io/SARS2-RBD-escape-calc/) that our lab developed several years ago to aggregate yeast-display deep mutational scanning data on how mutations affect binding of antibodies to the RBD.
See the [original paper](https://academic.oup.com/ve/article/8/1/veac021/6549895) for an overview of how it works.
The current calculator shows data from a wonderful set of deep mutational scanning studies by the lab of Yunlong Cao (eg, [Cao et al (2023)](https://www.nature.com/articles/s41586-022-05644-7), [Yisimaya et al (2024)](https://www.nature.com/articles/s41586-023-06753-7), and [Jian et al (2024)](https://www.nature.com/articles/s41586-024-08315-x)).
The current update adds the deep mutational scanning data from the last of these papers ([Jian et al (2024)](https://www.nature.com/articles/s41586-024-08315-x)), which incorporates antibodies from people with XBB or JN.1 lineage infections.

If you use the calculator to compare the sites of escape in the KP.3 variant from the current set of antibodies versus the original RBD from antibodies elicited by the ancestral vaccine, it is remarkable how much the antigenicity (key sites of escape) in the RBD have changed over the last four years:

![change_in_key_sites](/assets/research/2024-11-10_escapecalc_update/change_in_key_sites.jpg)

Note that unlike the logo plots in the [Cao lab papers](https://www.nature.com/articles/s41586-024-08315-x), the escape calculator is **not** weighted by how mutations affect ACE2 binding or their amino-acid accessibility given the genetic code.
So the calculator is designed to quantify the antigenic effect if a site is mutated, not predict how likely it is to mutate.

The strongest sites of escape from binding by neutralizing antibodies targeting the RBD are shown in the plot below, and fall in three different epitopes in the Cao lab nomenclature:

![key_sites](/assets/research/2024-11-10_escapecalc_update/key_sites.jpg)

Note that while the [escape calculator](https://jbloomlab.github.io/SARS2-RBD-escape-calc/) initially just looks like a line plot, its interactivity allows you to explore epitope relationships among sites. For instance, clicking site 505 to simulate mutating it also escapes most antibodies targeting sites 403, 405, and 504, since these sites are in the same epitope.

![epitope_interactivity](/assets/research/2024-11-10_escapecalc_update/epitope_interactivity.jpg)

## Why aren't we seeing more substitutions at sites 403, 405, 504, and 505 right now?

The updated escape calculator described above clearly shows that mutations in the epitope consisting of sites 403, 405, 504, and 505 cause a lot of escape from binding by neutralizing antibodies targeting the RBD.
And mutations at sites 403, 405, and 504 (less so site 505) are often tolerable for the 1:1 RBD ACE2 affinity (see [RBD yeast display data for ACE2 affinity](https://tstarrlab.github.io/SARS-CoV-2-RBD_DMS_Omicron-EG5-FLip-BA286/RBD-heatmaps/) recently published by [Taylor and Starr (2024)](https://academic.oup.com/ve/article/10/1/veae067/7747405)).
So why aren't these sites substituting more right now?

Answering this question requires thinking about the full spike, not just the RBD.
Sites 403, 405, 504, and 505 are clustered near an inter-protomer interface in the down RBD structure.
And most mutations at those sites actually **increase** neutralization by polyclonal sera in our lab's recent [XBB.1.5 full-spike deep mutational scanning](https://www.nature.com/articles/s41586-024-07636-1):

![F3_epitope](/assets/research/2024-11-10_escapecalc_update/F3_epitope.jpg)

The data in our [recent paper](https://www.nature.com/articles/s41586-024-07636-1) indicates that sites that modulate RBD up-down positioning are characterized by opposing effects on full-spike ACE2 binding and polyclonal serum neutralization.
In particular, mutations that move the RBD more to an up conformation increase binding to ACE2 by the full spike (since the RBD is better poised to bind ACE2), but also increase serum neutralization since the RBD in the up conformation exposes more neutralizing epitopes.
Importantly, these effects are not apparent in deep mutational scanning of just yeast-displayed RBD, since the RBD is outside the context of the full spike.
If you look at our pseudovirus deep mutational scanning data (the full data can be interactively explored [here](https://dms-vep.org/SARS-CoV-2_XBB.1.5_spike_DMS/htmls/summary_overlaid.html)), you can see that most mutations at sites 403, 405, and 504 increase full-spike serum antibody neutralization while also increasing full-spike ACE2 binding, suggesting the put the RBD in a more up conformation. (For site 505, it is more complicated because mutations at this site often also directly impair the direct 1:1 RBD-ACE2 binding, as can be seen [here](https://tstarrlab.github.io/SARS-CoV-2-RBD_DMS_Omicron-EG5-FLip-BA286/RBD-heatmaps/)).

![pseudovirus_DMS](/assets/research/2024-11-10_escapecalc_update/pseudovirus_DMS.jpg)

Therefore, evolution of the RBD is currently constrained by pleiotropic effects of mutations at key sites on antibody binding to RBD, RBD up-down motion, and 1:1 RBD-ACE2 affinity.
That's probably why mutations at key escape sites like 403, 405, 504, and 505 have not yet swept.

Note that I expect evolution will eventually solve this pleiotropic puzzle through some epistatic combination of mutations--we’ve seen SARS-CoV-2 fix antibody escape mutations that were individually deleterious in the past.
But for now, above observations may explain why recent variants (KP.3.1.1 & XEC) are mostly escaping neutralization via NTD mutations that put RBD more down (as described in [recent work by David Ho](https://www.biorxiv.org/content/10.1101/2024.11.17.624037v1) and [Shan-Lu Liu](https://www.biorxiv.org/content/10.1101/2024.11.12.623078v1)), rather than by direct antibody-escape mutations in the RBD as was common until recently.

## Data underlying this post
For the data underlying this post, see:

 1. Escape calculator w how mutations affect RBD binding by neutralizing antibodies: [https://jbloomlab.github.io/SARS2-RBD-escape-calc](https://jbloomlab.github.io/SARS2-RBD-escape-calc)
 2. Data from @tylernstarr on how mutations affect 1:1 RBD-ACE2 affinity: [https://tstarrlab.github.io/SARS-CoV-2-RBD_DMS_Omicron-EG5-FLip-BA286/RBD-heatmaps/](https://tstarrlab.github.io/SARS-CoV-2-RBD_DMS_Omicron-EG5-FLip-BA286/RBD-heatmaps/) 
 3. Data on how mutations affect full-spike neutralization and ACE2-binding: [https://dms-vep.org/SARS-CoV-2_XBB.1.5_spike_DMS/htmls/summary_overlaid.html](https://dms-vep.org/SARS-CoV-2_XBB.1.5_spike_DMS/htmls/summary_overlaid.html)


