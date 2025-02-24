<script lang="ts">
	import Header from "./Header.svelte";

	interface Props {
		toggleMenu: () => void;
	}

	let { toggleMenu }: Props = $props();

	const menuItems = [
		{ name: "Home", href: "/" },
		{ name: "Was wir tun", href: "/was-wir-tun/" },
		{ name: "Wo wir zu Hause sind", href: "/wo-wir-zu-hause-sind/" },
		{ name: "Wer dahinter steht", href: "/wer-dahinter-steht/" },
		{ name: "Wie du mitwirken kannst", href: "/wie du mitwirken-kannst/" },
		{ name: "Was es kostet", href: "/was-es-kostet/" },
		{ name: "Warum das eine gute Sache ist", href: "/warum-das-eine-gute-sache-ist/" },
		{ name: "Netzwerk", href: "/netzwerk/" },
		{ name: "Login", href: "https://login.puraverdura.ch/my/signup/" },
	];
</script>

<div class="fixed top-0 left-0 bottom-0 right-0 z-99 bg-background-100 verflow-y-scroll overflow-y-auto overscroll-y-contain">
	<Header class="z-100" menuOpen={true} {toggleMenu} />
	<div class="z-99 pt-[80px] px-[80px]">
		<ul>
			{#each menuItems as item}
				<li
					class="flex justify-center text-center border-b-[1px] border-b-primary-100 font-bold text-[32px] text-primary-100"
				>
					<a onclick={() => {toggleMenu}} href={item.href}>{item.name} »</a>
				</li>
			{/each}
		</ul>
		<div
			class="flex gap-x-[13px] w-[100%] justify-center border-b-[1px] border-b-primary-100 pb-[15px] pt-[40px]"
		>
			<a href="https://www.instagram.com/pura__verdura/">
				<img
					src="/Insta_Icon_Grey.png"
					alt="Instagram"
					class="h-[40px]"
				/>
			</a>
			<a href="https://www.facebook.com/puraverdura.ch/">
				<img
					src="/Facebook_Icon_Grey.png"
					alt="Facebook"
					class="h-[40px]"
				/>
			</a>
		</div>
		<div class="flex w-[100%] justify-center pt-[30px] text-sm">
			<div class="text-center">
				<p class="font-bold">Kontakt</p>
				<p>
					Genossenschaft Pura Verdura <br />
					Drusbergstrasse 113 <br />
					Postfach <br />
					8032 Zürich <br />
					info (ät) puraverdura.ch <br />
				</p>
			</div>
		</div>
	</div>
</div>
