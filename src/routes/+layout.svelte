<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import NavigationMenu from "$lib/components/NavigationMenu.svelte";
	import { onMount } from "svelte";
	import "../app.css";
	let { children } = $props();

	let menuOpen = $state(false);

	onMount(() => {
		console.log("layout mounted");
	});
</script>

<div
	class="flex flex-col min-h-screen {menuOpen
		? 'hidden'
		: ''}"
>
	<!-- Header -->
	<Header
		menuOpen={false}
		toggleMenu={() => {
			console.log("toggle menu");
			menuOpen = !menuOpen;
		}}
	/>

	<!-- Page Content -->
	<main class="grow-1 mt-[36px] mx-[36px] lg:mx-[72px] xl:mx-[108px]">
		{@render children?.()}
	</main>

	<!-- Footer -->
	<footer class=" mt-[55px] md:mt-[110px]">
		<img src="/Footer_illu.png" alt="logo" class="w-[4000px]" />
		<div
			class="bg-footer-100 flex flex-wrap justify-between md:justify-center pt-11 pb-16 px-[36px] md:px-0 gap-x-[40px] md:gap-x-24 gap-y-[20px]"
		>
			<div>
				<p class="font-bold !text-[16px]">Kontakt</p>
				<p class="!text-[16px]">
					Pura Verdura <br />
					Postfach 156  <br />
					8032 Zürich <br />
					info@puraverdura.ch <br />
				</p>
			</div>
			<div>
				<p class="!text-[16px] mb-[3px]">Folge uns auf Social Media</p>
				<div class="flex gap-x-[13px] !text-[16px]">
					<a href="https://www.instagram.com/pura__verdura/" target="_blank">
						<img
							src="/Insta_Icon_Grey.png"
							alt="Instagram"
							class="h-[28px]"
						/>
					</a>
					<a href="https://www.facebook.com/puraverdura.ch" target="_blank">
						<img
							src="/Facebook_Icon_Grey.png"
							alt="Facebook"
							class="h-[28px]"
						/>
					</a>
				</div>
			</div>
			<div class="flex flex-col ">
				<a class="!font-normal !text-text-100 !text-[16px]" href="/impressum"
					>Impressum »</a
				>
				<a class="!font-normal !text-text-100 !text-[16px]" href="/datenschutz"
					>Datenschutz »</a
				>
			</div>
		</div>
	</footer>
</div>

<NavigationMenu
	class={menuOpen ? "fixed " : "hidden"}
	toggleMenu={() => {
		console.log("toggle menu");
		menuOpen = !menuOpen;
	}}
/>
