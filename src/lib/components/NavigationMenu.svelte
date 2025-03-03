<script lang="ts">
	import { goto } from "$app/navigation";
	import Header from "./Header.svelte";

	interface Props {
		class: string;
		toggleMenu: () => void;
	}

	let { class: className, toggleMenu }: Props = $props();

	const menuItems = [
		{ name: "Home", href: "/" },
		{ name: "Was wir tun", href: "/was-wir-tun/" },
		{ name: "Wo wir zu Hause sind", href: "/wo-wir-zu-hause-sind/" },
		{ name: "Wer dahinter steht", href: "/wer-dahinter-steht/" },
		{ name: "Wie du mitmachen kannst", href: "/wie-du-mitmachen-kannst/" },
		{ name: "Wieviel es kostet", href: "/wieviel-es-kostet/" },
		{
			name: "Warum das eine gute Sache ist",
			href: "/warum-das-eine-gute-sache-ist/",
		},
		{ name: "Netzwerk", href: "/netzwerk/" },
		{ name: "Login", href: "https://login.puraverdura.ch/" },
	];

	const clickLink = async (href: string) => {
		console.log("clickLink", href);
		toggleMenu();

		if(href.startsWith("http")) {
			window.location = href;
			return;
		} else {
			await goto(href);
		}
	};
</script>

<div
	class="{className} top-0 left-0 bottom-0 right-0 z-99 bg-background-100 overflow-y-auto overscroll-y-contain"
>
	<Header class="z-100" menuOpen={true} {toggleMenu} />
	<div class="z-99 p-[40px] md:p-[80px]">
		<ul>
			{#each menuItems as item, index}
				<li
					class="h1 flex justify-center text-center border-b-[1px] border-b-primary-100 font-bold text-[32px] text-primary-100 "
				>
					<button
						class="cursor-pointer hover:text-primary-120"
						tabindex={index+1}
						onclick={() => clickLink(item.href)}>
						{item.name} »</button
					>
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
				<p class="font-bold !font-heading">Kontakt</p>
				<p class="!font-heading">
					Pura Verdura <br />
					Postfach 156<br />
					8032 Zürich <br />
					info@puraverdura.ch <br />
				</p>
			</div>
		</div>
	</div>
</div>
