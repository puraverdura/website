<script lang="ts">
	import { browser } from "$app/environment";
	import Container from "$lib/components/Container.svelte";

	let { data } = $props();
</script>

<Container>
	<h1>{data.attributes.title}</h1>
	{@html data.body}
</Container>
