<script lang="ts">
	import CallToAction from "$lib/components/CallToAction.svelte";
	import Container from "$lib/components/Container.svelte";
	import ImageCarousel from "$lib/components/ImageCarousel.svelte";
	import PageTeasers from "$lib/components/PageTeasers.svelte";
</script>

<Container>
	<div class="page-content-row">
		<h1>Was wir tun</h1>
		<p>
			Pura Verdura in 50 Sekunden! Schau dir jetzt das Video an und
			erfahre mehr über uns!
		</p>
		<div class="video-container">
			<iframe
				title="Pura Verdura in 50 Sekunden"
				width="450"
				height="450"
				src="https://www.youtube.com/embed/3VsnbtAiMic"
				frameborder="0"
				allowfullscreen
			></iframe>
		</div>
		<p>
			Pura Verdura ist mehr als nur ein Gemüseabo. Bei Pura Verdura werden
			Konsument:innen zu Produzent:innen. Um unseren wöchentlichen
			Ernteanteil zu erhalten, tragen alle Mitglieder aktiv auf dem Acker
			bei – sei es bei der Ernte, dem Transport, der Kulturpflege oder der
			Ackerbearbeitung. Diese starke Zusammenarbeit ist das Herzstück von
			Pura Verdura.
		</p>
		<p>
			Unser Acker bietet auch Wildbienen, Schmetterlingen, Eidechsen,
			Igeln und vielen anderen Tieren ein Zuhause, wodurch wir aktiv die
			Biodiversität fördern.
		</p>
		<p>
			Auf dem Feld ernten wir gemeinsam das Gemüse, das wir zusammen
			ausgesät haben. Es ist ein wunderbares Erlebnis, gemeinsam Gemüse zu
			produzieren! Eine tolle Möglichkeit, einfach mal vom Alltag
			abzuschalten. Dabei können bereichernde Gespräche entstehen,
			Bekanntschaften geknüpft oder vielleicht sogar Freundschaften
			geschlossen werden. Nach getaner Arbeit laden gemütliche Grillabende
			zum Verweilen ein. Über eine Mailingliste können sich die Mitglieder
			selbstständig austauschen und organisieren. Hier geht&#39;s zur
			Anleitung.
		</p>
	</div>
	<div class="page-content-row">
		<h1>So sieht das aus</h1>
		<ImageCarousel
			images={[
				{ src: "/content/Foto_Ruebli.jpg", alt: "Frisch geerntete Karotten. Im hintergrund sind zwei Mitglieder am Ernten" },
				{ src: "/content/KW_4_Jan 2_22.jpeg", alt: "Verschiedenes Gemüse auf Tisch" },
				{ src: "/content/IMG_8786.jpeg", alt: "Ackerfest: Mitglieder sitzen an Tischen neben dem Feld" },
			]}
		/>
	</div>
	<div class="page-content-row">
		<h1>Dokumente</h1>
		<ul>
			<li>
				<a
					href="https://www.puraverdura.ch/wp-content/uploads/PuraVerdura_Jahresbericht_2023_Screen.pdf"
					>Jahresbericht 2023 »</a
				>
			</li>
			<li>
				<a
					href="https://www.puraverdura.ch/wp-content/uploads/PuraVerdura_Jahresbericht_2022_DEF_Screen.pdf"
					>Jahresbericht 2022 »</a
				>
			</li>
			<li>
				<a
					href="https://www.puraverdura.ch/wp-content/uploads/2021-Jahresbericht-Pura-Verdura.pdf"
					>Jahresbericht 2021 »</a
				>
			</li>
			<li>
				<a
					href="https://www.puraverdura.ch/wp-content/uploads/2020-Jahresbericht-Pura-Verdura.pdf"
					>Jahresbericht 2020/2019 »</a
				>
			</li>
			<li>
				<a
					href="https://www.puraverdura.ch/wp-content/uploads/Statuten_Pura-Verdura_Version_2022_nach-GV.pdf"
					>Statuten »</a
				>
			</li>
			<li>
				<a
					href="https://www.puraverdura.ch/wp-content/uploads/Betriebsreglement-Pura-Verdura-2022-05-24.pdf"
					>Betriebsreglement »</a
				>
			</li>
		</ul>
	</div>
	<div class="page-content-row">
		<CallToAction />
	</div>
	<div class="page-content-row">
		<PageTeasers
			pages={[
				{
					title: "Wie du mitmachen kannst",
					link: "/wie-du-mitmachen-kannst/",
				},
				{
					title: "Wer dahinter steht",
					link: "/wer-dahinter-steht/",
				},
				{
					title: "Wo wir zu Hause sind",
					link: "/wo-wir-zu-hause-sind/",
				},
				{
					title: "Warum das eine gute Sache ist",
					link: "/warum-das-eine-gute-sache-ist/",
				},
			]}
		/>
	</div>
</Container>
