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
	class={`${className} border-b-primary-100 border-b-[12px] md:border-b-[16px] flex sm:gap-x-[71px] md:gap-x-[142px] justify-between md:justify-center items-end pb-[19px] pt-[19px] shadow-lg shadow-gray-500 bg-white`}
>
	<button onclick={toggleMenu} class="mx-[20px] md:mx-0">
		{#if !menuOpen}
			<Menu class="h-[27px] stroke-primary-100 cursor-pointer hover:stroke-primary-120" />
		{:else}
			<Close
				class="h-[27px] stroke-primary-100 text-primary-100 stroke-[0.25px] cursor-pointer hover:stroke-primary-120 hover:text-primary-120"
			/>
		{/if}
	</button>

	<a href="/"
		><img
			src="/Pura_Verdura_Logo_Kopf.svg"
			alt="logo"
			class="w-[130px] md:w-[312px]"
		/></a
	>

	<div class="flex gap-[13px] mx-[20px] md:mx-0 w-min">
		<a
			href="https://www.instagram.com/pura__verdura/"
			target="_blank"
			class="w-[28px]"
		>
			<img src="/Insta_Icon_Green.png" alt="Instagram" class="h-[28px]" />
		</a>
		<a
			href="https://www.facebook.com/puraverdura.ch"
			target="_blank"
			class="w-[28px]"
		>
			<img
				src="/Facebook_Icon_Green.png"
				alt="Facebook"
				class="h-[28px]"
			/>
		</a>
	</div>
</header>
