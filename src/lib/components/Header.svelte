<script lang="ts">
	import Close from "$lib/icons/Close.svelte";
	import Menu from "$lib/icons/Menu.svelte";

	interface Props {
		menuOpen: boolean;
		toggleMenu: () => void;
		class?: string;
	}

	let { menuOpen = false, toggleMenu, class: className }: Props = $props();
</script>

<header
	class={`${className} border-b-primary-100 border-b-[16px] flex sm:gap-x-[71px] md:gap-x-[142px] justify-between md:justify-center items-end pb-[19px] pt-[19px] shadow-2xl bg-white`}
>
	<button onclick={toggleMenu} class="mx-[20px] md:mx-0">
		{#if !menuOpen}
			<Menu class="h-[27px] stroke-primary-100" />
		{:else}
			<Close
				class="h-[27px] stroke-primary-100 text-primary-100"
			/>
		{/if}
	</button>

	<img src="/Pura_Verdura_Logo_Kopf.svg" alt="logo" class="w-[130px] md:w-[312px]" />
	<div class="flex gap-[13px] mx-[20px] md:mx-0 w-min">
		<a href="https://www.instagram.com/pura__verdura/" class="w-[28px]">
			<img src="/Insta_Icon_Green.png" alt="Instagram" class="h-[28px]" />
		</a>
		<a href="https://www.facebook.com/puraverdura.ch" class="w-[28px]">
			<img
				src="/Facebook_Icon_Green.png"
				alt="Facebook"
				class="h-[28px]"
			/>
		</a>
	</div>
</header>
