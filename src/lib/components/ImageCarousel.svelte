<script lang="ts">
	import Siema from "siema";
	import { onMount } from "svelte";

	type Image = {
		src: string;
		alt: string;
	};

	interface Props {
		images: Image[];
	}

	let { images }: Props = $props();

	let siema: Siema | undefined = $state(undefined);
	let currentIndex: number = $state(0);

	onMount(() => {
		siema = new Siema({
			selector: ".siema",
			duration: 200,
			easing: "ease-out",
			perPage: 1,
			startIndex: 0,
			draggable: true,
			multipleDrag: true,
			threshold: 20,
			loop: false,
			rtl: false,
			onInit: () => {
				currentIndex = 0;
			},
			onChange: () => {
				currentIndex = siema?.currentSlide || 0;
			},
		});
	});
</script>

<div class="relative">
	<div
		class="absolute top-0 left-0 w-[60px] h-[24px] z-999 ml-[20px] bg-text-100 text-background-100"
	>
		{currentIndex + 1}
	</div>
	<div class="absolute z-999 inset-y-0 left-0 content-center pl-[20px]">
		<button
			onclick={() => {
				siema?.prev();
			}}
		>
			<img src="/carousel_prev.png" alt="Previous" />
		</button>
	</div>
	<div>
		<div class="siema">
			{#each images as image}
				<div>
					<img src={image.src} alt={image.alt || ""} width="100%" />
				</div>
			{/each}
		</div>
	</div>

	<div class="absolute z-999 inset-y-0 right-0 content-center pr-[20px]">
		<button
			onclick={() => {
				siema?.next();
			}}
		>
			<img src="/carousel_next.png" alt="Next" />
		</button>
	</div>
</div>
