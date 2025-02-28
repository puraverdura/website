<script lang="ts">
	import CallToAction from "$lib/components/CallToAction.svelte";
	import Container from "$lib/components/Container.svelte";
	import ImageCarousel from "$lib/components/ImageCarousel.svelte";
	import PageTeasers from "$lib/components/PageTeasers.svelte";
</script>

<Container>
	<h1>Was wir tun</h1>
	<p>
		Pura Verdura in 50 Sekunden! Schau dir jetzt das Video an und erfahre
		mehr über uns!
	</p>
	<div class="video-container">
		<iframe
			title="Pura Verdura in 50 Sekunden"
			width="560"
			height="315"
			src="https://www.youtube.com/embed/3VsnbtAiMic"
			frameborder="0"
			allowfullscreen
		></iframe>
	</div>
	<p>
		Pura Verdura ist mehr als nur ein Gemüseabo. Bei Pura Verdura werden
		Konsument:innen zu Produzent:innen. Um unseren wöchentlichen Ernteanteil
		zu erhalten, tragen alle Mitglieder aktiv auf dem Acker bei – sei es bei
		der Ernte, dem Transport, der Kulturpflege oder der Ackerbearbeitung.
		Diese starke Zusammenarbeit ist das Herzstück von Pura Verdura.
	</p>
	<p>
		Unser Acker bietet auch Wildbienen, Schmetterlingen, Eidechsen, Igeln
		und vielen anderen Tieren ein Zuhause, wodurch wir aktiv die
		Biodiversität fördern.
	</p>
	<p>
		Auf dem Feld ernten wir gemeinsam das Gemüse, das wir zusammen ausgesät
		haben. Es ist ein wunderbares Erlebnis, gemeinsam Gemüse zu produzieren!
		Eine tolle Möglichkeit, einfach mal vom Alltag abzuschalten. Dabei
		können bereichernde Gespräche entstehen, Bekanntschaften geknüpft oder
		vielleicht sogar Freundschaften geschlossen werden. Nach getaner Arbeit
		laden gemütliche Grillabende zum Verweilen ein. Über eine Mailingliste
		können sich die Mitglieder selbstständig austauschen und organisieren.
		Hier geht&#39;s zur Anleitung.
	</p>

	<h1>So sieht das aus</h1>
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
	/>

	<h1>Dokumente</h1>
	<ul>
		<li><a href="https://google.ch">Jahresbericht 2023 »</a></li>
		<li><a href="https://google.ch">Jahresbericht 2022 »</a></li>
		<li><a href="https://google.ch">Jahresbericht 2021 »</a></li>
		<li><a href="https://google.ch">Jahresbericht 2020/2019 »</a></li>
		<li><a href="https://google.ch">Statuten »</a></li>
		<li><a href="https://google.ch">Betriebsreglement »</a></li>
	</ul>

	<CallToAction />

	<PageTeasers
		pages={[
			{
				title: "Wie du mit-machen kannst",
				link: "/wie-du-mitmachen-kannst/",
			},
			{
				title: "Wie du mit-machen kannst",
				link: "/wie-du-mitmachen-kannst/",
			},
			{
				title: "Wie du mit-machen kannst",
				link: "/wie-du-mitmachen-kannst/",
			},
			{
				title: "Wie du mit-machen kannst",
				link: "/wie-du-mitmachen-kannst/",
			},
		]}
	/>
</Container>
