<script lang="ts">
	import type { AgendaEvent } from "$lib/types";

	interface Props {
		event: AgendaEvent;
		isFutureEvent: boolean;
	}

	let { event, isFutureEvent }: Props = $props();

	const { title, description, formattedDate, link } = event;
</script>

<div class="border-b-[1px] py-[14px] sm:py-[17px] border-text-50 first:pt-0">
	{#if isFutureEvent}
		<h3 class="flex gap-1 flex-col sm:flex-row items-start">
			<span
				class="bg-primary-100 text-white inline-block w-[160px] text-center rounded-md mr-1"
				>{formattedDate}</span
			>
			<span class="text-black font-bold">{title}</span>
		</h3>
	{:else}
		<p class="!m-0 font-bold !font-heading">
			{formattedDate}, {title}
		</p>
	{/if}

	<!--Class !m-0 is needed because we use this Component inside <Container>-->
	<p class="!m-0">{description}
		{#if isFutureEvent}
			<a class="inline-block !m-0" href={link}>mehr erfahren »</a>
		{/if}
	</p>
</div>
