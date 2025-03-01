<script>
	import CallToAction from "$lib/components/CallToAction.svelte";
	import Container from "$lib/components/Container.svelte";
	import ImageCarousel from "$lib/components/ImageCarousel.svelte";
	import PageTeasers from "$lib/components/PageTeasers.svelte";
</script>

<svelte:head>
	<title>Wo wir zu Hause sind - Pura Verdura</title>
	<meta
		name="description"
		content="Unsere Gemüsedepots decken die Kreise 1, 7 und 8 ab. Als Mitglied
			wählst du ein Depot-Standort aus, an dem du wöchentlich das frisch
			geerntete Gemüse abholst. Unsere beiden Äcker liegen im Kreis 8 oberhalb des Gartenareals
			Lengg und neben dem Quartierhof Wynegg."
	/>
</svelte:head>

<Container>
	<div class="page-content-row">
		<h1>Wo wir zu Hause sind</h1>
		<p>
			Unsere beiden Äcker liegen im Kreis 8 oberhalb des Gartenareals
			Lengg und neben dem Quartierhof Wynegg. Daneben bewirtschaften wir
			auch noch zwei Folientunnel bei der PUK und haben auf demselben
			Gelände ein Treibhaus sowie unser Büro. Wo alles genau ist, siehst
			Du auf der folgenden Karte.
		</p>
		<img src="/content/Lageplan_Pura_Verdura.png" alt="Alt text" />
		<!--
		<ImageCarousel
			images={[
				{ src: "/content/IMG_8786.jpeg", alt: "Bild 1" },
				{ src: "/w_teasers/Illu_Kosten.png", alt: "Bild 2" },
				{ src: "/w_teasers/Illu_Mitmachen.png", alt: "Bild 3" },
				{
					src: "/w_teasers/Illu_Wer_steht_dahinter.png",
					alt: "Bild 4",
				},
			]}
		/>-->
	</div>
	<div class="page-content-row">
		<h2>Unsere Depots für die Gemüselieferung</h2>
		<p>
			Unsere Gemüsedepots decken die Kreise 1, 7 und 8 ab. Als Mitglied
			wählst du ein Depot-Standort aus, an dem du wöchentlich das frisch
			geerntete Gemüse abholst. Die Gemüsedepots, in denen jeweils
			donnerstags unser Gemüse zur Abholung bereitsteht, sind:
		</p>
		<img src="/content/Depotstandorte_Pura_Verdura.png" alt="Alt text" />
		<h3>Kreis 1</h3>
		<ul>
			<li><strong>Predigerkirche beim Zähringerplatz</strong></li>
		</ul>
		<h3>Kreis 7:</h3>
		<ul>
			<li>
				<strong>PUK</strong> (dies ist unser Heimdepot und jeweils ab donnerstags
				15 Uhr bereits mit Gemüse bestückt)
			</li>
			<li><strong>Ref. Kirche Balgrist</strong></li>
			<li>
				<strong>Kluspark</strong> (an Park-Öffnungszeiten gebunden, d.h.
				Gemüse abzuholen donnerstags, 18:00-19:00 Uhr und freitags 7:30-19:00
				Uhr)
			</li>
			<li><strong>Hoch3 Witikon</strong></li>
		</ul>
		<h3>Kreis 8:</h3>
		<ul>
			<li><strong>GZ Riesbach</strong></li>
			<li><strong>Mühle Tiefenbrunnen</strong></li>
		</ul>
	</div>
	<div class="page-content-row">
		<CallToAction />
	</div>

	<div class="page-content-row">
		<PageTeasers
			pages={[
				{
					title: "Was wir tun",
					link: "/wer-dahinter-steht/",
				},
				{
					title: "Wer dahinter steht",
					link: "/wie-du-mitmachen-kannst/",
				},
				{
					title: "Wie du mitmachen kannst",
					link: "/wie-du-mitmachen-kannst/",
				},
				{
					title: "Warum das eine gute Sache ist",
					link: "/warum-das-eine-gute-sache-ist/",
				},
			]}
		/>
	</div>
</Container>
