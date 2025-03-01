<script lang="ts">
	import CallToAction from "$lib/components/CallToAction.svelte";
	import Container from "$lib/components/Container.svelte";
	import PageTeasers from "$lib/components/PageTeasers.svelte";
</script>

<svelte:head>
	<title>Wieviel es kostet - Pura Verdura</title>
	<meta
		name="description"
		content="Neben einem Anteilsschein von 500 CHF kommen die Kosten für das jährliche
		Gemüseabo hinzu. Je mehr Du mitarbeitest – sei es auf dem Feld oder beim
		Abpacken – desto tiefer sind deine Abokosten. Beim Standardabo bezahlst
		Du rund 30 CHF pro Gemüsetasche (ca. 3 kg Biogemüse)."
	/>
</svelte:head>

<Container>
	<div class="page-content-row">
		<h1>Wieviel es kostet</h1>
		<p>
			Neben einem Anteilsschein von 500 CHF kommen die Kosten für das
			jährliche Gemüseabo hinzu. Je mehr Du mitarbeitest – sei es auf dem
			Feld oder beim Abpacken – desto tiefer sind deine Abokosten. Beim
			Standardabo bezahlst Du rund 30 CHF pro Gemüsetasche (ca. 3 kg
			Biogemüse). Die Taschen werden wöchentlich und von Januar bis März
			alle zwei Wochen ausgeliefert. Das sind 42 Taschen pro Jahr.
		</p>
		<h2>Unsere Abos auf einen Blick (Stand April 2025)</h2>
		<h3>Normales Abo</h3>
		<p>
			1265.-/Jahr <br />
			32 Stunden Mitarbeit auf dem Feld pro Jahr.
		</p>
		<h3>Stilles Abo</h3>
		<p>
			1740.-/Jahr <br />
			Ohne Mitarbeit auf dem Feld.
		</p>
		<h3>Kleines Abo</h3>
		<p>
			(kleinere Tasche, ca. 1.5-2 kg Bio-Gemüse) <br />
			CHF 790.- /Jahr <br />
			16 Stunden Mitarbeit auf dem Feld pro Jahr.
		</p>
		<h3>Kleines stilles Abo</h3>
		<p>
			(kleinere Tasche, ca. 1.5-2 kg Bio-Gemüse) <br />
			CHF 1040.- / Jahr <br />
			Ohne Mitarbeit auf dem Feld.
		</p>
		<h3>Firmen-Abo:</h3>
		<p>
			CHF 1900.- / Jahr Ohne Mitarbeit auf dem Feld. Team-Event(s) bei uns
			auf dem Acker möglich.
		</p>
		<h2>Abosharing</h2>
		<p>
			Falls dir das Abo zu teuer ist oder die wöchentliche Gemüsemenge zu
			gross erscheint, hast du die Möglichkeit, es zu teilen. Für das
			Abosharing kannst du uns unter <a
				href="mailto:mitglieder@puraverdura.ch"
				>mitglieder@puraverdura.ch</a
			> kontaktieren, und wir helfen dir, eine passende Person zu finden.
		</p>
		<h2>Du hast noch Fragen? Kontaktiere uns.</h2>
		<p>
			Wir stehen dir bei Fragen gerne zu Verfügung. Schreibe uns ein Mail
			an: <a href="mailto:miglieder@puraverdura.ch"
				>miglieder@puraverdura.ch</a
			>
		</p>
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
