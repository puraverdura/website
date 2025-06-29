<script lang="ts">
	import CallToAction from "$lib/components/CallToAction.svelte";
	import Container from "$lib/components/Container.svelte";
	import PageTeasers from "$lib/components/PageTeasers.svelte";
	import ImageCarousel from "$lib/components/ImageCarousel.svelte";

	const bgMembers = [
		{
			name: "Noe",
			role: "Gartenteam",
			image: "Noe.jpg",
			description:
				"begeistert sich für solidarische Landwirtschaft und die abwechslungsreiche Arbeit auf dem Acker. Nach einem Praktikum bei der Genossenschaft «meh als Gmües» arbeitet er jetzt bei Pura Verdura als Gartenfachkraft auf dem Feld und in den Gewächshäusern, um sein Wissen im Bio-Gemüseanbau zu erweitern.",
		},
		{
			name: "Rose",
			role: "Gartenteam",
			image: "Rose.jpg",
			description:
				"ist Gemüsegärtnerin und Gründungsmitglied des Kollektivs F.A.M.E. (Selbstorganisierte Ausbildung im ökologischen Gemüsebau). Ihre Erfahrung sammelte sie auf den Bio-Betrieben Rotenbirben, Bioco und Ortoloco. Sie schätzt Teamarbeit und den Anbau vielfältiger Gemüsesorten auf lebendigem Boden.",
		},
		{
			name: "Silvia",
			role: "Gartenteam",
			image: "Silvia.jpg",
			description:
				"hat in Zürich Agrarwissenschaften studiert und zwei Praktika im Bereich kleinräumigen Gemüsebau absolviert. Jetzt arbeitet sie als Gemüsegärtnerin bei Pura Verdura und pflegt aus Leidenschaft einige Bienenvölker im Tessin.",
		},
		{
			name: "Cristiana",
			role: "Mitgliederverwaltung",
			image: "Cristiana.jpg",
			description:
				"schätzt das Gesamtkonzept der solidarischen Landwirtschaft - vom nachhaltigen Anbau bis zum frischen Gemüse. Nach ihrem Studium und Jahren in der Medienwelt gründete sie ein Unternehmen zur Kreislaufwirtschaft im Konsumgüterbereich. Sie liebt Diskussionen über Politik und kulinarische Experimente.",
		},
		{
			name: "Christine",
			role: "Mitgliederverwaltung",
			image: "Christine.jpg",
			description:
				"Nach langer IT-Karriere suchte Christine nach der Pensionierung eine neue Aufgabe. Bei Pura Verdura fand sie im gemeinschaftlichen, biologischen Gemüseanbau ihre Erfüllung. Sie interessiert sich für gesunde Ernährung, deren Einfluss auf chronische Krankheiten und sammelt Kochrezepte. Bücher und die Natur liebt sie ebenfalls.",
		},
		{
			name: "Irina",
			role: "Finanzen",
			image: "Irina.jpg",
			description:
				"ist ausgebildete Ökonomin und angehende Coach, liebt die Natur als Ausgleich zum Bürojob. Ob als Berggängerin, SAC-Tourenleiterin oder beim Segeln. Seit der Geburt ihrer Töchter ist frisches, lokales Gemüse essenziell. Die solidarische Landwirtschaft von Pura Verdura begeistert sie durch bewussten Ressourcen- und Konsumumgang.",
		},
		{
			name: "Liv",
			role: "Buchhaltung",
			image: "Liv.png",
			description:
				"ist Vegetarierin, lebt seit 20 Jahren in einer WG in Zürich und hat 2021 die Weiterbildung zur Sachbearbeiterin Buchhaltung abgeschlossen. Nachts arbeitet sie als Supervisorin Sicherheit am Flughafen Zürich, tagsüber widmet sie sich ihrer Leidenschaft für Hundesport und geniesst ihren schönen Garten.",
		},
		{
			name: "Tanja",
			role: "Kommunikation",
			image: "Tanja.jpg",
			description:
				"kommt ursprünglich aus Basel, studierte Wirtschaft und Marketing in Basel und St. Gallen. Seit 2018 lebt sie in Zürich und arbeitet im Marketing bei Migros. Sie liebt Wandern, Yoga, Konzerte und Kochen. Frisches, lokales Gemüse ist ihr wichtig. Die solidarische Landwirtschaft von Pura Verdura begeistert sie durch ihren Beitrag zu nachhaltigem Konsum.",
		},
		{
			name: "Isa",
			role: "Kommunikation",
			image: "Isa.jpg",
			description:
				"studierte Wirtschaft mit Fokus auf Ethik und Sustainable Leadership in Milano und Frankfurt. Seit 2012 lebt sie in der Schweiz und arbeitet im Sales &amp; Marketing. Sie besuchte Kurse in Naturheilkunde. Isa liebt die Natur und kocht gerne mit saisonalem Biogemüse. Nach Jahren als Mitglied bei Pura Verdura leitet sie nun mit Tanja das Ressort Kommunikation.",
		},
		{
			name: "Harry",
			role: "Aussendepartement",
			image: "Harry.jpg",
			description:
				"arbeitet im Umweltmanagement und liebt gutes Essen. Für ihn ist die solidarische Landwirtschaft das perfekte Zusammenspiel von saisonaler, regionaler und ökologischer Ernährung. Als aktiver Triathlet benötigt er auch eine ganze Menge davon.",
		},
		{
			name: "Carolin",
			role: "HR",
			image: "Carolin.jpg",
			description:
				"hat viel Spass beim gemeinsamen Gärtnern und schätzt vor allem das Miteinander der Mitglieder auf dem Acker. Sie liebt die Natur und freut sich über alles was aus oder unter der Erde wächst. Vor allem über frisches Pura Verdura Gemüse. Ansonsten ist sie jederzeit leidenschaftlich auf ihrem Velo anzutreffen. Immer offen für Neues hat sie im April das HR-Amt von Vanessa übernommen.",
		},
	];
</script>

<svelte:head>
	<title>Wer dahinter steht - Pura Verdura</title>
	<meta
		name="description"
		content="Die Gemüsegenossenschaft Pura Verdura wurde am 26. Oktober 2019
			gegründet. Wir sind eine vielfältige Gruppe von Menschen, darunter
			drei erfahrene Gärtner:innen, die Betriebsgruppe sowie die
			Genossenschafter:innen."
	/>
</svelte:head>

<Container>
	<div class="page-content-row">
		<h1>Wer dahinter steht</h1>
		<p>
			Die Gemüsegenossenschaft Pura Verdura wurde am 26. Oktober 2019
			gegründet. Wir sind eine vielfältige Gruppe von Menschen, darunter
			drei erfahrene Gärtner:innen, die Betriebsgruppe sowie die
			Genossenschafter:innen. Unser Ziel ist es, frisches und biologisches
			Gemüse direkt vom Feld zu den Konsumenten zu bringen. Wir arbeiten
			nach den Prinzipien der solidarischen Landwirtschaft, sind nicht
			gewinnorientiert und bio-zertifiziert.
		</p>
	</div>
	<div class="page-content-row">
		<h2>Die Betriebsgruppe</h2>
		<p>
			Die Betriebsgruppe ist verantwortlich für die Organisation und
			Durchführung des täglichen Betriebs. Drei Gartenfachkräfte mit
			grünem Daumen und Know-how im Gemüseanbau bilden das Herzstück
			unseres Teams. Sie kümmern sich um den Anbau, die Ernte und die
			Verteilung der Produkte. Zudem besteht die Betriebsgruppe aus
			weiteren Mitgliedern, die sich um Finanzen, Kommunikation und andere
			organisatorische Aufgaben kümmern.
		</p>
	</div>
	<div class="page-content-row">
		<h2>Teammitglieder</h2>
		<div class="mt-5">
			{#each bgMembers as bgMember}
				<div
					class="flex flex-col md:flex-row gap-4 md:gap-7 md:even:flex-row-reverse items-center mb-10 md:mb-5 first:mt-5"
				>
					<img
						src={`/bg-members/${bgMember.image}`}
						alt={`Bild vom Betriebsgruppen-Mitglied ${bgMember.name}`}
						class="aspect-square object-cover md:w-56 !m-0 border-primary-100 border-2 border-solid"
					/>
					<div>
						<p class="!m-0">
							<span class="h4"
								>{bgMember.name} ({bgMember.role})</span
							>
							{bgMember.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="page-content-row">
		<h2>Die Genossenschafter:innen</h2>
		<p>
			Unsere Genossenschafter:innen sind das Herzstück von Pura Verdura.
			Sie arbeiten auf dem Feld mit, helfen bei der Ernte und unterstützen
			uns bei Veranstaltungen. Wir sind gemeinsam Pura Verdura und
			schaffen eine starke Gemeinschaft.
		</p>
		<ImageCarousel
			images={[
				{
					src: "/content/Gartenkind.jpg",
					alt: "Mitglieder auf dem Feld mit verschiedenem Gemüse in den Händen",
				},
				{
					src: "/content/Konzert_4.JPG",
					alt: "Mitglied spielt auf Instrument and Ackerfest",
				},
				{
					src: "/content/IMG_1444.JPG",
					alt: "Mitglieder auf dem Feld am Arbeiten",
				},
				{
					src: "/content/IMG_1037.JPG",
					alt: "Mitglieder auf dem Feld am Arbeiten",
				},
				{
					src: "/content/IMG_8786.jpeg",
					alt: "Ackerfest: Mitglieder sitzen an Tischen neben dem Feld",
				},
				{
					src: "/content/GV1.jpg",
					alt: "Wahl der Betriebsgruppe and der GV",
				},
			]}
		/>
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
					title: "Was wir tun",
					link: "/was-wir-tun/",
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
