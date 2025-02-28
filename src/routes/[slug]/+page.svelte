<script lang="ts">
	import { browser } from "$app/environment";
	import Container from "$lib/components/Container.svelte";

	let { data } = $props();
</script>

<Container>
	{@html data.body}
</Container>
