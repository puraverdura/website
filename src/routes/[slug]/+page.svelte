<script lang="ts">
	import { browser } from "$app/environment";
	import Container from "$lib/components/Container.svelte";

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.attributes.title} - Pura Verdura</title>
</svelte:head>

<Container>
	<h1>{data.attributes.title}</h1>
	{@html data.body}
</Container>
