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
		class="absolute top-[20px] left-[20px] h-[24px] z-999 bg-text-100 text-background-100 px-[8px]"
	>
		{currentIndex + 1} / {images.length}
	</div>
	<div
		class="hidden sm:block absolute z-999 inset-y-0 left-0 content-center pl-[20px]"
	>
		<button
			class="cursor-pointer"
			onclick={() => {
				siema?.prev();
			}}
		>
			<img class="w-[35px]" src="/carousel_prev.svg" alt="Previous" />
		</button>
	</div>
	<div>
		<div class="siema">
			{#each images as image}
				<div class="overflow-y-hidden">
					<div class="object-cover">
						<img
							class="object-cover aspect-3/2 w-full h-full"
							src={image.src}
							alt={image.alt || ""}
						/>
					</div>
					<!--
					<p
						class="bg-text-100 !text-background-100 px-[20px] py-[5px] !text-[16px] !mb-0 min-h-[60px]"
					>
						{description}
					</p>-->
				</div>
			{/each}
		</div>
	</div>

	<div
		class="hidden sm:block absolute z-999 inset-y-0 right-0 content-center pr-[20px]"
	>
		<button
			class="cursor-pointer"
			onclick={() => {
				siema?.next();
			}}
		>
			<img class="w-[35px]" src="/carousel_next.svg" alt="Next" />
		</button>
	</div>
</div>
