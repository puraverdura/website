<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import NavigationMenu from "$lib/components/NavigationMenu.svelte";
	import { page } from "$app/state";
	import { onMount } from "svelte";
	import "../app.css";
	import Container from "$lib/components/Container.svelte";
	let { children } = $props();

	let menuOpen = $state(false);

	const showNewsletter = $derived.by(() => {
		const path = page.url.pathname.replace(/\/$/, "") || "/";
		return path !== "/impressum" && path !== "/datenschutz" && path !== "/netzwerk";
	});

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
			menuOpen = !menuOpen;
		}}
	/>

	<!-- Page Content -->
	<main class="grow-1 mt-[36px] mx-[36px] lg:mx-[72px] xl:mx-[108px]">
		{@render children?.()}

		{#if showNewsletter}
			<Container>
				<div class="newsletter-container">
					<h2>Newsletter</h2>
					<p class="">
						Abonniere unseren Newsletter und erfahre erntefrische
						Neuigkeiten – direkt vom Acker
					</p>
					<script
						async
						src="https://eocampaign1.com/form/9c259302-247d-11f1-bafe-39cfecd4c004.js"
						data-form="9c259302-247d-11f1-bafe-39cfecd4c004"
					></script>

					<!-- override email octopus styles -->
					<style>
						.newsletter-container div {
							padding: 0 !important;
							margin: 0 !important;
							max-width: 100% !important;

						}

						.newsletter-container .inline-container {
							max-width: 100% !important;
						}
					</style>
				</div>
			</Container>
		{/if}
	</main>

	<!-- Footer -->
	<footer class=" mt-[55px] md:mt-[110px]">
		<img src="/Footer_illu.png" alt="logo" class="w-[100vw] min-h-[50px] object-cover" />
		<div
			class="bg-footer-100 flex flex-wrap justify-between md:justify-center pt-11 pb-16 px-[36px] md:px-0 gap-x-[40px] md:gap-x-24 gap-y-[20px]"
		>
			<div>
				<p class="font-bold !text-[16px] !font-heading">Kontakt</p>
				<p class="!text-[16px] !font-heading">
					Pura Verdura <br />
					Postfach 156  <br />
					8032 Zürich <br />
					info@puraverdura.ch <br />
				</p>
			</div>
			<div>
				<p class="!text-[16px] mb-[3px] !font-heading">Folge uns auf Social Media</p>
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
				<a class="!font-normal !text-text-100 !text-[16px] !font-heading" href="/impressum"
					>Impressum »</a
				>
				<a class="!font-normal !text-text-100 !text-[16px] !font-heading" href="/datenschutz"
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

<style>
	.newsletter-container {
		margin-top: 52px;
	}

	@media (min-width: 768px) {
		.newsletter-container {
			margin-top: 70px;
		}
	}
</style>
