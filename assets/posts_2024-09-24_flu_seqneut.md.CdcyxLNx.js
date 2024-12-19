import{_ as e,c as a,o as t,f as r,S as i,U as s,V as n,W as o,X as l,Y as u,Z as p,$ as h,a0 as c}from"./chunks/framework.Bpu4mVpL.js";const k=JSON.parse('{"title":"Sequencing-based neutralization assays for influenza","description":"","frontmatter":{"layout":"post","title":"Sequencing-based neutralization assays for influenza","date":"2024-09-24T00:00:00.000Z","author":"Jesse Bloom","head":[["link",{"rel":"canonical","href":"https://jbloomlab.org/posts/2024-09-24_flu_seqneut.html"}]]},"headers":[],"relativePath":"posts/2024-09-24_flu_seqneut.md","filePath":"posts/2024-09-24_flu_seqneut.md"}'),d={name:"posts/2024-09-24_flu_seqneut.md"},f=r('<p>In <a href="https://doi.org/10.1128/jvi.00689-24" target="_blank" rel="noreferrer">a paper</a> just published in <em>Journal of Virology</em>, we describe a new sequencing-based neutralization assay that dramatically increases the scale at which it is possible to measure how sera or antibodies neutralize different influenza virus strains.</p><hr><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>Neutralization assays are central to studying viral immunity. These assays involve making dilutions of serum, adding virus and cells, and then quantifying how much each serum dilution inhibits viral infection. The traditional readout is GFP fluorescence, luciferase, or plaques. Such readouts allow one virus to be analyzed per row or column of a 96-well plate, meaning that a single plate can be used to measure titers for at most 8 to 12 different serum-virus pairs. This limited throughput is a real problem when studying an antigenically variable virus like influenza, where we may want know neutralization titers against dozens or even hundreds of different viral strains.</p><p><a href="https://doi.org/10.1128/jvi.00689-24" target="_blank" rel="noreferrer">Our paper</a> describes a new approach spearheaded by Andrea Loes in our group that can measure titers for hundreds (or even up to a thousand) serum-virus pairs per 96-well plate, as shown below.</p><p><img src="'+i+'" alt="measurements per plate"></p><p>How do we do this? The essence of our approach is to barcode each influenza virus strain, then combine all of the viruses and read out neutralization by all the viruses at once by deep sequencing, as schematized below. So it&#39;s like a traditional neutralization assay, except we measure all the viruses at once, rather than one at a time.</p><p><img src="'+s+'" alt="schematic of sequencing-based neutralization"></p><p>Below are some representative neutralization curves from the sequencing-based assay. They are identical to curves from traditional one-virus versus one-serum assays: the only difference is we generate replicate curves for hundreds of serum-virus pairs on each plate, rather than just a few curves per plate.</p><p><img src="'+n+'" alt="example sequencing-based neutralization curves"></p><p>The neutralization titers measured using the sequencing-based assay are highly reproducible both across replicate barcodes for the same virus on the same plate, and across different plates run on different days, as shown below.</p><p><img src="'+o+'" alt="correlations within assay"></p><p>The neutralization curves measured using the sequencing-based assay are also indistinguishable from those measured using a traditional fluorescence-based assay, as shown below:</p><p><img src="'+l+'" alt="correlations with traditional"></p><p>We applied the assay to examine the response to repeated influenza vaccination, an important topic as <a href="https://www.thelancet.com/journals/lanres/article/PIIS2213-2600(22)00266-1/fulltext" target="_blank" rel="noreferrer">some studies</a> suggest reduced effectiveness of repeated vaccination. We analyzed samples from the <a href="https://academic.oup.com/cid/advance-article/doi/10.1093/cid/ciae380/7718587" target="_blank" rel="noreferrer">DRIVE study</a> led by Ben Cowling and Sarah Cobey. For each study participant at each timepoint, we used the sequencing-based neutralization assay to measure titers against 36 H1N1 strains (five vaccine strains plus 31 recent strains). So for each participant, we generate data like that shown below, which quantifies the pre- and post-vaccination titers against a wide range of recent viral strains.</p><p><img src="'+u+'" alt="example neutralization landscapes"></p><p>In our sub-study (we only examined a fraction of all of the DRIVE samples), we looked at the response to the 2021-2022 vaccine in individual who had or had not been vaccinated in the prior year (2020-2021). Individuals who had <strong>not</strong> been vaccinated in the prior year (2020-2021) started with much lower pre-vaccination titers (purple points), but had a substantially larger marginal increase in titers after vaccination in 2021-2022 (red and green points) than individuals who had also been vaccinated the prior year. (This sort of makes sense: their starting titers were lower so there was more of an increase after vaccination.) The titers for the two groups are shown below:</p><p><img src="'+p+'" alt="vaccine response"></p><p>However, despite the larger marginal increase in titers for participants without prior-year vaccination, the final titers (especially at day 182) were similar among participants with and without a prior-year vaccination, since prior-year vaccinees started with higher titers.</p><p><img src="'+h+'" alt="final titers"></p><p>Importantly, the participant-average plots above mask person- and virus-specific variation that probably has important implications for both influenza evolution and disease susceptibility (see plot below). Indeed, one of the things we are most excited about is using this new assay to extensively probe person-to-person variation in titers to different viral strains.</p><p><img src="'+c+'" alt="variation among viruses and individuals"></p><h2 id="want-to-use-this-approach-for-your-own-studies" tabindex="-1">Want to use this approach for your own studies? <a class="header-anchor" href="#want-to-use-this-approach-for-your-own-studies" aria-label="Permalink to &quot;Want to use this approach for your own studies?&quot;">​</a></h2><p>We think sequencing-based neutralization assays could be useful for a wide range of studies. To make the approach as accessible as possible for others, we have created:</p><ul><li><p>A publicly available <a href="https://github.com/jbloomlab/seqneut-pipeline" target="_blank" rel="noreferrer">computational pipeline</a> to analyze sequencing-based neutralization assay data. Note that this pipeline leverages an early <a href="https://jbloomlab.github.io/neutcurve/" target="_blank" rel="noreferrer">Python package we developed to fit neutralization curves</a>; the ability to automate the curve fitting becomes important when you are trying to analyze thousands of neutralization curves per week!</p></li><li><p>A publicly available detailed <a href="https://doi.org/10.17504/protocols.io.kqdg3xdmpg25/v1" target="_blank" rel="noreferrer">experimental protocol</a>.</p></li></ul><p>We already have scientists from several different research groups scheduled to visit our lab in the coming months to learn the assay; please reach out if you are interested in trying it yourself!</p><h2 id="what-s-next" tabindex="-1">What&#39;s next? <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;What&#39;s next?&quot;">​</a></h2><p>Our lab has already extended this assay to measure ~10,000 neutralization titers of human sera against recent H3N2 strains, and we are hopeful these data can eventually be used to understand which influenza strains are evolutionarily successful, thereby helping with vaccine-strain selection. Stay tuned for more on this soon!</p><p>Also, feel free to reach out if you are interested in using the large sets of neutralization titers for evolutionarily or epidemiological modeling. All the raw data from the study described above is <a href="https://github.com/jbloomlab/flu_seqneut_pdmH1N1_2023-2024" target="_blank" rel="noreferrer">publicly available</a>; we&#39;re also happy to share interim data from our in-progress studies that we haven&#39;t yet pre-printed or published.</p>',29),m=[f];function b(v,g,w,y,_,z){return t(),a("div",null,m)}const x=e(d,[["render",b]]);export{k as __pageData,x as default};