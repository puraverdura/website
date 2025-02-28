<script lang="ts">
	let { children } = $props();
</script>

<div
	class="md:w-[700px] mx-auto mt-[24px] md:mt-[34px] flex justify-center flex-col gap-y-[36px] md:gap-y-[56px]"
>
	<div>
		<div class="page-content">
			{@render children?.()}
		</div>
	</div>
</div>
