<script lang="ts">
	import AgendaEvent from "$lib/components/AgendaEvent.svelte";
	import Container from "$lib/components/Container.svelte";

	let { data } = $props();

	console.log(data.upcoming, data.past);
</script>

<svelte:head>
	<title>Events - Pura Verdura</title>
	<meta
		name="description"
		content="Einleitungstext nilhilt laudatque miratur vencerm cogito ergo sum. Nilhit cogito"
	/>
</svelte:head>

<Container>
	<div class="page-content-row">
		<h1>Agenda</h1>
		<p>
			Einleitungstext nilhilt laudatque miratur vencerm cogito ergo sum.
			Nilhit cogito cogito cogito miratur vencerm cogito ergo sum.
		</p>
	</div>
	<div class="page-content-row">
		<h2>Bevorstehende Anlässe 2025</h2>
		{#each data.upcoming as event}
			<AgendaEvent {event} />
		{/each}
	</div>
	<div class="page-content-row">
		<h2>Vergangene Anlässe</h2>
		{#each data.past as event}
			<AgendaEvent {event} />
		{/each}
	</div>
</Container>
