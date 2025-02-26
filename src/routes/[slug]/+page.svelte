<script lang="ts">
	import { browser } from "$app/environment";

	let { data } = $props();

	//@ts-ignore
	import emblaCarouselSvelte from "embla-carousel-svelte";

	let emblaApi: any;

	function onInit(event: CustomEvent) {
		emblaApi = event.detail;
	}

	let options = { loop: true };
</script>

<div
	class="md:w-[700px] mx-auto mt-[24px] md:mt-[44px] flex justify-center flex-col gap-y-[36px] md:gap-y-[56px]"
>
	<div>
		<h1>{data.attributes.title}</h1>
		<div class="rendered-content">
			{@html data.body}
		</div>
	</div>
	{#if data.attributes?.callToAction}
		<div>
			<h2>Überzeugt? Dann melde Dich jetzt an</h2>
			<a
				href="https://login.puraverdura.ch/my/signup/"
				class="bg-primary-100 !text-white !font-heading !font-bold rounded-[4px] !p-[10px] !text-[20px] !mt-[20px] inline-block grow-on-hover"
				>Anmelden</a
			>
		</div>
		<div>
			<h2>Auch interessant</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[20px] pt-[20px]">
				<a
					class="bg-primary-70 !text-white !font-heading !font-normal rounded-[4px] !p-[10px] text-center grow-on-hover"
					href="/wie-du-mitmachen-kannst/">Wie du mit-machen kannst</a
				>
				<a
					class="bg-primary-70 !text-white !font-heading !font-normal rounded-[4px] !p-[10px] text-center grow-on-hover"
					href="/warum-das-eine-gute-sache-ist/"
					>Warum das eine gute Sache ist</a
				>
				<a
					class="bg-primary-70 !text-white !font-heading !font-normal rounded-[4px] !p-[10px] text-center grow-on-hover"
					href="/wo-wir-zu-hause-sind/">Wo wir zu Hause sind</a
				>
				<a
					class="bg-primary-70 !text-white !font-heading !font-normal rounded-[4px] !p-[10px] text-center grow-on-hover"
					href="/wo-wir-zu-hause-sind/">Was wir tun</a
				>
			</div>
		</div>
	{/if}
</div>

<style scoped lang="css">
	:global(.rendered-content li::before) {
		content: "– ";
		margin-left: 12px;
	}

	:global(.rendered-content p, .rendered-content h3, .rendered-content a) {
		margin-top: 6px;
	}

	:global(.rendered-content h1, .rendered-content h2) {
		margin-top: 36px;
	}

	/* md: in tailwind */
	@media (min-width: 768px) {
		:global(
				.rendered-content p,
				.rendered-content h3,
				.rendered-content a
			) {
			margin-top: 24px;
		}

		:global(.rendered-content h1, .rendered-content h2) {
			margin-top: 56px;
		}

		:global(.rendered-content li) {
			margin-left: 10px;
		}
	}

	:global(.rendered-content .video-container) {
		position: relative;
		overflow: hidden;
		height: 0;
		padding-bottom: 56.25%; /* creates a 16:9 aspect ratio */
	}

	:global(.video-container iframe, .video-container embed) {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		max-width: 100%;
	}
</style>
