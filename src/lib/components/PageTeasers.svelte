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
		class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[20px] pt-[20px]"
	>
		{#each pages as page}
			<a
				class="bg-primary-70 !text-white !font-heading !font-normal rounded-[4px] !p-[10px] text-center grow-on-hover"
				href="{page.link}">{page.title}</a
			>
		{/each}
	</div>
</div>
