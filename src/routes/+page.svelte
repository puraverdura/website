<script lang="ts">
	import ImageCarousel from "$lib/components/ImageCarousel.svelte";
	import WTeaser from "$lib/components/WTeaser.svelte";
	import DoubleArrowDown from "$lib/icons/DoubleArrowDown.svelte";
</script>

<svelte:head>
	<title>Pura Verdura</title>
	<meta
		name="description"
		content="Wir sind eine solidarische Genossenschaft in Zürich, die
				Bio-Gemüse lokal, ökologisch und sozial anbaut. Unsere Arbeit
				verbindet ökologische Landwirtschaft mit sozialer Teilhabe und
				macht gesunde Ernährung sowie Gemeinschaft erlebbar."
	/>
</svelte:head>

<div>
	<div
		class="scroller flex flex-row-reverse border-b-primary-100 border-b-[18px] md:border-b-[25px] h-[200px] sm:h-[300px] xl:h-[400px]"
	>
		<a
			href="https://login.puraverdura.ch/my/signup/"
			class="h-fit mt-[20px] mr-[20px] sm:mr-[40px] lg:mr-[100px] grow-on-hover"
		>
			<img
				src="/Mach_mit_Button.png"
				alt="Mach Mit!"
				class="h-[100px] sm:h-[120px] xl:h-[150px]"
			/>
		</a>
	</div>
	<div class="container">
		<div
			class="text-center flex flex-col justify-center gap-y-[6px] md:gap-y-[12px]"
		>
			<h1>Willkommen bei Pura Verdura!</h1>
			<p class="!text-[20px] md:!text-[27px] !font-heading">
				Wir sind eine solidarische Genossenschaft in Zürich, die
				Bio-Gemüse lokal, ökologisch und sozial anbaut. Unsere Arbeit
				verbindet ökologische Landwirtschaft mit sozialer Teilhabe und
				macht gesunde Ernährung sowie Gemeinschaft erlebbar.
			</p>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 gap-x-[40px] gap-y-[45px]">
			<WTeaser
				title="Wer <br> dahinter steht"
				text="Wir sind xx Genossenschafter:innen, 3 Gartenfachkräfte mit grünem Daumen und Know-how im Gemüseanbau, sowie einer Betriebsgruppe aus xx Mitgliedern, die sich um Finanzen, Kommunikation und weitere organisatorische Aufgaben kümmert. "
				link="/wer-dahinter-steht/"
				imageSrc="/w_teasers/Illu_Wer_steht_dahinter.png"
				imageAlt="Wer dahinter steht"
			/>
			<WTeaser
				title="Wo <br> wir zu Hause sind"
				text="Unsere beiden Äcker und die Folientunnel befinden sich in Zürich, im Kreis 8 auf der Wynegg und oberhalb des Gartenareals Lengg. Die Gemüsedepots, in denen jeweils donnerstags unser Gemüse zur Abholung bereitsteht, liegen in den Kreisen 1, 7 und 8. "
				link="/wo-wir-zu-hause-sind/"
				imageSrc="/w_teasers/Illu_Wo_zu_Hause.png"
				imageAlt="Wo wir zu Hause sind"
			/>
			<WTeaser
				title="Was <br> wir tun"
				text="Unter der Anleitung von Gartenfachkräften bauen wir ganzjährig regionales, ökologisches Gemüse an und verteilen es an unsere Mitglieder. Dabei fördern wir soziale Teilhabe, um gesunde Ernährung und Gemeinschaft nach solidarischen Prinzipien zu stärken."
				link="/was-wir-tun/"
				imageSrc="/w_teasers/Illu_Was_wir_tun.png"
				imageAlt="Was wir tun"
			/>
			<WTeaser
				title="Wie <br> Du mitmachen kannst"
				text="Schliesse dich unserer Genossenschaft an, indem du einen Anteilschein   erwirbst. Als Mitglied hast du die Möglichkeit, ein passendes Gemüseabo zu wählen und aktiv Teil unserer Gemeinschaft zu werden. "
				link="/wie-du-mitmachen-kannst/"
				imageSrc="/w_teasers/Illu_Mitmachen.png"
				imageAlt="Wie Du mitmachst kannst"
			/>
			<WTeaser
				title="Warum <br> das eine gute Sache ist"
				text="Wir fördern eine nachhaltige Zukunft, indem wir ökologische Landwirtschaft mit sozialer Teilhabe verbinden. So stärken wir die Gemeinschaft, unterstützen lokale Wirtschaftskreisläufe und bieten Zugang zu gesunder Ernährung."
				link="/warum-das-eine-gute-sache-ist/"
				imageSrc="/w_teasers/Illu_Gute_Sache.png"
				imageAlt="Warum das eine gute Sache ist"
			/>
			<WTeaser
				title="Wieviel <br> es kostet"
				text="Der Genossenschafts-Anteilschein kostet CHF 500.- und wird beim Austritt zurückerstattet. Die Abo-Preise variieren nach Grösse und Mitarbeit: Je mehr du mithilfst, desto günstiger wird es. Beim Standardabo zahlst du ca. CHF 30.- pro 3 kg Gemüsetasche (Biogemüse)."
				link="/wieviel-es-kostet/"
				imageSrc="/w_teasers/Illu_Kosten.png"
				imageAlt="Wieviel es kostet"
			/>
		</div>
		<div>
			<h2>So sieht das aus</h2>
			<ImageCarousel
				images={[
					{
						src: "/content/Foto_Ruebli.jpg",
						alt: "Frisch geerntete Karotten. Im hintergrund sind zwei Mitglieder am Ernten",
					},
					{
						src: "/content/KW_4_Jan 2_22.jpeg",
						alt: "Verschiedenes Gemüse auf Tisch",
					},
					{
						src: "/content/IMG_8786.jpeg",
						alt: "Ackerfest: Mitglieder sitzen an Tischen neben dem Feld",
					},
					{
						src: "/content/Abendstimmung-Bauwagen.jpeg",
						alt: "Abendstimmung Bauwagen",
					},
					{
						src: "/content/GV1.jpg",
						alt: "Mitglieder bestätigen die Betriebsgruppe an der GV",
					},
					{
						src: "/content/21-09-17 18-57-53-0322.jpeg",
						alt: "Acker mit Wegweiser-Schild im Vordergrund auf dem Pura Verdura steht",
					},
					{
						src: "/content/Foto-21-08-20.jpeg",
						alt: "Verschiedene Tomaten",
					},
					{
						src: "/content/C051B60F-1201-4857-9223-219578F156D2.jpeg",
						alt: "Abgepackte Gemüsetaschen bereit zur Auslieferung",
					},
					{
						src: "/content/Foto-17-10-20.jpeg",
						alt: "Mitglieder auf Feld",
					},
					{
						src: "/content/Gartenkind.jpg",
						alt: "Mitglieder auf dem Feld mit verschiedenem Gemüse in den Händen",
					},
					{
						src: "/content/IMG_1046.jpeg",
						alt: "Mitglieder auf dem Feld am Arbeiten",
					},
				]}
			/>
		</div>
	</div>
</div>

<style>
	.scroller {
		background-image: url("/Illu_Gemuese.png");
		background-repeat: repeat-x;
		background-size: auto 100%;
		margin: auto;
		overflow: hidden;
		animation: scroll 1950s linear infinite;
	}

	@keyframes scroll {
		from {
			background-position: 0 0;
		}
		to {
			background-position: +10000% 0;
		}
	}
</style>
