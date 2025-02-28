<script lang="ts">
	interface Props {
		pages: {
			title: string;
			link: string;
		}[];
	}

	let { pages }: Props = $props();
</script>

<div>
	<h2>Auch interessant</h2>
	<div
		class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[20px] mt-[20px]"
	>
		{#each pages as page}
			<a
				class="bg-primary-70 !text-white !font-heading !font-normal rounded-[4px] text-center !p-[5px] grow-on-hover really-break-words h-[64px] !mb-0 content-center"
				href="{page.link}">{page.title}</a
			>
		{/each}
	</div>
</div>
