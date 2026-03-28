<script lang="ts">
	type Image = {
		src: string;
		alt: string;
	};

	interface Props {
		images: Image[];
		class?: string;
	}

	let { images, class: className }: Props = $props();

	let viewportEl: HTMLDivElement | undefined = $state();
	let currentIndex = $state(0);

	let maxIndex = $derived(Math.max(0, images.length - 1));

	function scrollBehavior(): ScrollBehavior {
		if (typeof window === "undefined") return "auto";
		return window.matchMedia("(prefers-reduced-motion: reduce)").matches
			? "auto"
			: "smooth";
	}

	function onScroll() {
		const el = viewportEl;
		if (!el) {
			return;
		}

		const w = el.clientWidth;
		if (!w) {
			return;
		}

		currentIndex = Math.max(
			0,
			Math.min(maxIndex, Math.round(el.scrollLeft / w)),
		);
	}

	function goToIndex(index: number) {
		const el = viewportEl;
		if (!el) {
			return;
		};

		const w = el.clientWidth;
		if (!w) {
			return;
		};

		const clamped = Math.max(0, Math.min(maxIndex, index));
		el.scrollTo({ left: clamped * w, behavior: scrollBehavior() });
	}

	function goPrev() {
		const el = viewportEl;
		if (!el) {
			return;
		};

		const w = el.clientWidth;
		if (!w) {
			return;
		};

		el.scrollBy({ left: -w, behavior: scrollBehavior() });
	}

	function goNext() {
		const el = viewportEl;
		if (!el) {
			return;
		};

		const w = el.clientWidth;
		if (!w) {
			return;
		};

		el.scrollBy({ left: w, behavior: scrollBehavior() });
	}

	function onViewportKeydown(e: KeyboardEvent) {
		if (images.length === 0) return;
		switch (e.key) {
			case "ArrowLeft":
				e.preventDefault();
				goPrev();
				break;
			case "ArrowRight":
				e.preventDefault();
				goNext();
				break;
			case "Home":
				e.preventDefault();
				goToIndex(0);
				break;
			case "End":
				e.preventDefault();
				goToIndex(maxIndex);
				break;
			default:
				break;
		}
	}
</script>

<div class={`carousel-container relative ${className ?? ""}`}>
	{#if images.length > 0}
		<div
			class="absolute top-[20px] left-[20px] z-999 h-[24px] bg-text-100 px-[8px] text-background-100"
			role="status"
			aria-live="polite"
			aria-atomic="true"
		>
			{currentIndex + 1} / {images.length}
		</div>
	{/if}
	<div
		class="absolute inset-y-0 left-0 z-999 flex items-center pl-[8px] sm:pl-[20px]"
	>
		<button
			type="button"
			class="cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
			disabled={currentIndex <= 0 || images.length === 0}
			onclick={goPrev}
			aria-label="Vorheriges Bild"
		>
			<img
				class="w-[35px]"
				src="/carousel_prev.svg"
				alt=""
				draggable="false"
			/>
		</button>
	</div>
	<div>
		<!-- Focusable scroll container for keyboard carousel control (arrow keys, Home, End) -->
		<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<div
			bind:this={viewportEl}
			class="carousel-viewport flex min-h-0 w-full max-h-[500px] snap-x snap-mandatory overflow-x-auto overflow-y-hidden [-webkit-overflow-scrolling:touch] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-100"
			role="region"
			aria-roledescription="carousel"
			aria-label="Bildergalerie"
			tabindex="0"
			onscroll={onScroll}
			onkeydown={onViewportKeydown}
		>
			{#each images as image (image.src)}
				<div
					class="box-border flex min-h-0 min-w-full max-h-[500px] shrink-0 snap-start flex-col overflow-hidden"
				>
					<div
						class="relative aspect-3/2 w-full min-h-0 max-h-[500px] shrink overflow-hidden"
					>
						<img
							class="absolute inset-0 block h-full w-full object-cover select-none"
							src={image.src}
							alt={image.alt || ""}
							draggable="false"
						/>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div
		class="absolute inset-y-0 right-0 z-999 flex items-center pr-[8px] sm:pr-[20px]"
	>
		<button
			type="button"
			class="cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
			disabled={currentIndex >= maxIndex || images.length === 0}
			onclick={goNext}
			aria-label="Nächstes Bild"
		>
			<img
				class="w-[35px]"
				src="/carousel_next.svg"
				alt=""
				draggable="false"
			/>
		</button>
	</div>
</div>

<style>
	/* Flex defaults to min-height:auto, so slides grew to the full bitmap height */
	.carousel-viewport {
		touch-action: pan-x;
		overscroll-behavior-x: contain;
		scrollbar-width: none;
		-ms-overflow-style: none;
	}

	@media (prefers-reduced-motion: no-preference) {
		.carousel-viewport {
			scroll-behavior: smooth;
		}
	}

	.carousel-viewport::-webkit-scrollbar {
		display: none;
	}
</style>
