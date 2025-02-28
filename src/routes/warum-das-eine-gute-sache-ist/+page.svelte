<script lang="ts">
	import CallToAction from "$lib/components/CallToAction.svelte";
	import Container from "$lib/components/Container.svelte";
	import PageTeasers from "$lib/components/PageTeasers.svelte";
</script>

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
