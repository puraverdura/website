<script>
	import WTeaser from "$lib/components/WTeaser.svelte";
	import DoubleArrowDown from "$lib/icons/DoubleArrowDown.svelte";
</script>

<div class="mx-[36px] lg:mx-[72px] xl:mx-[108px]">
	<div
		class="scroller flex flex-row-reverse border-b-primary-100 border-b-[25px] h-[200px] sm:h-[300px] xl:h-[400px]"
	>
		<a
			href="https://login.puraverdura.ch/my/signup/"
			class="h-fit mt-[20px] mr-[20px] sm:mr-[40px] lg:mr-[100px]"
		>
			<img
				src="/Mach_mit_Button.png"
				alt="Mach Mit!"
				class="h-[100px] sm:h-[120px] xl:h-[150px]"
			/>
		</a>
	</div>
	<div class="md:w-[700px] mx-auto mt-[36px] flex justify-center flex-col">
		<div class="text-center flex flex-col justify-center">
			<h1>Willkommen bei Pura Verdura!</h1>
			<p class="!text-[27px] !md:text-[32px] !font-heading">
				Wir sind eine solidarische Genossenschaft in Zürich, die
				Bio-Gemüse lokal, ökologisch und sozial anbaut. Unsere Arbeit
				verbindet ökologische Landwirtschaft mit sozialer Teilhabe und
				macht gesunde Ernährung sowie Gemeinschaft erlebbar.
			</p>
			<p class="text-[16px] !font-heading mt-[12px]">mehr erfahren</p>
			<DoubleArrowDown class="mt-[12px] h-[16px]" />
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 gap-x-[40px] gap-y-[45px] mt-[20px]">
			<WTeaser
				title="Was wir tun"
				text="Unter der Anleitung von Gartenfachkräften bauen wir ganzjährig regionales, ökologisches Gemüse an und verteilen es an unsere Mitglieder. Dabei fördern wir soziale Teilhabe, um gesunde Ernährung und Gemeinschaft nach solidarischen Prinzipien zu stärken."
				link="/was-wir-tun/"
				imageSrc="/w_teasers/Illu_Was_wir_tun.png"
				imageAlt="Was wir tun"
			/>
			<WTeaser
				title="Wo wir zu Hause sind"
				text="Unsere beiden Äcker und die Folientunnel befinden sich in Zürich, im Kreis 8 auf der Wynegg und oberhalb des Gartenareals Lengg. Die Gemüsedepots, in denen jeweils donnerstags unser Gemüse zur Abholung bereitsteht, liegen in den Kreisen 1, 7 und 8. "
				link="/wo-wir-zu-hause-sind/"
				imageSrc="/w_teasers/Illu_Wo_zu_Hause.png"
				imageAlt="Wo wir zu Hause sind"
			/>
			<WTeaser
				title="Wer dahinter steht"
				text="Wir sind xx Genossenschafter:innen, 3 Gartenfachkräfte mit grünem Daumen und Know-how im Gemüseanbau, sowie einer Betriebsgruppe aus xx Mitgliedern, die sich um Finanzen, Kommunikation und weitere organisatorische Aufgaben kümmert. "
				link="/wer-dahinter-steht/"
				imageSrc="/w_teasers/Illu_Wer_steht_dahinter.png"
				imageAlt="Wer dahinter steht"
			/>
			<WTeaser
				title="Wie Du mitmachst kannst"
				text="Schliesse dich unserer Genossenschaft an, indem du einen Anteilschein   erwirbst. Als Mitglied hast du die Möglichkeit, ein passendes Gemüseabo zu wählen und aktiv Teil unserer Gemeinschaft zu werden. "
				link="/wie-du-mitmachen-kannst/"
				imageSrc="/w_teasers/Illu_Mitmachen.png"
				imageAlt="Wie Du mitmachst kannst"
			/>
			<WTeaser
				title="Wieviel es kostet"
				text="Der Genossenschafts-Anteilschein kostet CHF 500.- und wird beim Austritt zurückerstattet. Die Abo-Preise variieren nach Grösse und Mitarbeit: Je mehr du mithilfst, desto günstiger wird es. Beim Standardabo zahlst du ca. CHF 30.- pro 3 kg Gemüsetasche (Biogemüse)."
				link="/wieviel-es-kostet/"
				imageSrc="/w_teasers/Illu_Kosten.png"
				imageAlt="Wieviel es kostet"
			/>
			<WTeaser
				title="Warum das eine gute Sache ist"
				text="Wir fördern eine nachhaltige Zukunft, indem wir ökologische Landwirtschaft mit sozialer Teilhabe verbinden. So stärken wir die Gemeinschaft, unterstützen lokale Wirtschaftskreisläufe und bieten Zugang zu gesunder Ernährung."
				link="/warum-das-eine-gute-sache-ist/"
				imageSrc="/w_teasers/Illu_Gute_Sache.png"
				imageAlt="Warum das eine gute Sache ist"
			/>
		</div>
		<div class="mt-[70px]">
			<h2>So sieht das aus</h2>
			Carousel
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
		animation: scroll 1600s linear infinite;
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
