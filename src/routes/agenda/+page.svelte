<script lang="ts">
	import AgendaEvent from "$lib/components/AgendaEvent.svelte";
	import Container from "$lib/components/Container.svelte";

	let { data } = $props();
</script>

<svelte:head>
	<title>Agenda - Pura Verdura</title>
	<meta
		name="description"
		content="Bleibe stets auf dem Laufenden! Entdecke hier alle wichtigen
			Termine, Events und Highlights von Pura Verdura, die du nicht
			verpassen solltest. Wir freuen uns, dich bald bei einem unserer
			Events willkommen zu heissen."
	/>
</svelte:head>

<Container>
	<div class="page-content-row">
		<h1>Agenda</h1>
		<p>
			Bleibe stets auf dem Laufenden! Entdecke hier alle wichtigen
			Termine, Events und Highlights von Pura Verdura, die du nicht
			verpassen solltest. Wir freuen uns, dich bald bei einem unserer
			Events willkommen zu heissen.
		</p>
	</div>
	{#if !data.groupedUpcoming.length}
	<div class="page-content-row">
		<h2>Bevorstehende Anlässe</h2>
		<p>Momentan stehen keine Anlasse bevor</p>
	</div>
	{/if}
	{#each data.groupedUpcoming as agendaYearGroup}
		<div class="page-content-row">
			<h2>Bevorstehende Anlässe {agendaYearGroup.year}</h2>
			{#each agendaYearGroup.events as event}
				<AgendaEvent {event} isFutureEvent={true} />
			{/each}
		</div>
	{/each}
	{#if data.groupedPast.length}
		<div class="page-content-row">
			<h2>Vergangene Anlässe</h2>
			{#each data.groupedPast as agendaYearGroup}
				<div class="mb-[14px] sm:mb-[17px]">
					<h3 class="!mb-0">{agendaYearGroup.year}</h3>
					<div>
						{#each agendaYearGroup.events as event}
							<AgendaEvent {event} isFutureEvent={false} />
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</Container>
