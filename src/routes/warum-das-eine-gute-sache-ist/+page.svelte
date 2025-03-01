<script lang="ts">
	import CallToAction from "$lib/components/CallToAction.svelte";
	import Container from "$lib/components/Container.svelte";
	import PageTeasers from "$lib/components/PageTeasers.svelte";
</script>

<svelte:head>
	<title>Warum das eine gute Sache ist - Pura Verdura</title>
	<meta
		name="description"
		content="Unsere Partner unterstützen uns bei der Umsetzung unserer Ziele und
		fördern den Austausch von Wissen und Ressourcen."
	/>
</svelte:head>

<Container>
	<h1>Warum das eine gute Sache ist</h1>
	<p>
		Wir setzen uns für eine nachhaltige lokale Landwirtschaft ein, indem wir
		den direkten Kontakt zwischen Produzent:innen und Konsument:innen
		fördern und frisches, biologisches Gemüse anbieten. Unsere Mitglieder
		profitieren von gesunden Lebensmitteln und einem starken
		Gemeinschaftsgefühl. Durch den direkten Austausch stärken wir Vertrauen
		und Transparenz, und die aktive Mitarbeit sowie der regelmässige
		Austausch unter unseren Mitgliedern fördern soziale Netzwerke. Zudem
		tragen wir zur Bildung und zum Bewusstsein für nachhaltige
		Landwirtschaft bei, was positive soziale und ökologische Auswirkungen
		hat.
	</p>
	<p><img src="/content/image_1.jpg" alt="Alt text" /></p>
	<p>
		Auf der Suche nach einem Bio-Gemüseabo in der Stadt Zürich? Dann bist du
		bei Pura Verdura genau richtig: Bei uns gibts wöchentlich frisches
		Bio-Gemüse, das vom Acker aus deiner Nähe stammt. Du möchtest Teil von
		Pura Verdura werden? Mitmachen ist ganz einfach!
	</p>
	<div class="content">

	</div>
	<CallToAction />

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
				title: "Wieviel es kostet",
				link: "/wieviel-es-kostet/",
			},
		]}
	/>
</Container>
