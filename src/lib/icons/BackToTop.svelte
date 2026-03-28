<script lang="ts">
	interface Props {
		class?: string;
		/** Show the control after scrolling this many pixels */
		threshold?: number;
	}

	let { class: className = "", threshold = 400, ...rest }: Props = $props();

	let scrollY = $state(0);
	let visible = $derived(scrollY > threshold);

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
</script>

<svelte:window bind:scrollY={scrollY} />

{#if visible}
	<button
		type="button"
		onclick={scrollToTop}
		class="fixed bottom-[24px] right-[24px] z-50 flex h-12 w-12 items-center justify-center rounded-full border border-primary-15 bg-white p-2 text-primary-100 shadow-md transition-colors hover:border-primary-70 hover:text-primary-120 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-100 grow-on-hover {className}"
		aria-label="Zum Seitenanfang scrollen"
		{...rest}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 21 21"
			class="h-8 w-8 shrink-0"
			aria-hidden="true"
			fill="currentColor"
		>
			<path
				d="M10.5,1c5.24,0,9.5,4.26,9.5,9.5s-4.26,9.5-9.5,9.5S1,15.74,1,10.5,5.26,1,10.5,1M10.5,0C4.7,0,0,4.7,0,10.5s4.7,10.5,10.5,10.5,10.5-4.7,10.5-10.5S16.3,0,10.5,0h0Z"
			/>
			<path
				d="M11.01,3.92l4.89,5.73h-2.23l-3.16-3.72-3.16,3.72h-2.23l4.9-5.73h1Z"
			/>
			<line
				x1="10.5"
				y1="5.93"
				x2="10.5"
				y2="17.22"
				fill="none"
				stroke="currentColor"
				stroke-miterlimit="10"
				stroke-width="1.8"
			/>
		</svg>
	</button>
{/if}
