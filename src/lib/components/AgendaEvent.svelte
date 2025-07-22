<script lang="ts">
	import type { AgendaEvent } from "$lib/types";

	interface Props {
		event: AgendaEvent;
	}

	let { event }: Props = $props();

	const { title, description, date, link } = event;
</script>

<div class="border-t-[1px] py-[17px] border-text-50">
	<h3 class="flex flex-col sm:flex-row gap-x-1">
		<span
			class="bg-primary-100 text-white block w-[160px] text-center rounded-md"
			>{date}</span
		>
		<span class="text-black font-bold">{title}</span>
	</h3>
	<p>{description} <a href={link}>mehr erfahren »</a></p>
</div>
