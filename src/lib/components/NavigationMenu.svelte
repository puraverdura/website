<script lang="ts">
	import Header from "./Header.svelte";
	import { tick } from "svelte";
	import { page } from "$app/state";

	interface Props {
		class: string;
		toggleMenu: () => void;
	}

	let { class: className, toggleMenu }: Props = $props();

	let dialogEl: HTMLDivElement | undefined = $state();

	const isOpen = $derived(!className.includes("hidden"));

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
		{
			name: "Agenda",
			href: "/agenda/",
		},
		{ name: "Netzwerk", href: "/netzwerk/" },
		{ name: "Pura Verdura Sozial", href: "/sozial/" },
		{ name: "Login", href: "https://login.puraverdura.ch/" },
	];

	const isExternal = (href: string) => href.startsWith("http");

	const isCurrentPage = (href: string) => {
		const current = page.url.pathname.replace(/\/$/, "") || "/";
		const target = href.replace(/\/$/, "") || "/";
		return current === target;
	};

	function getFocusableElements(): HTMLElement[] {
		if (!dialogEl) return [];
		return Array.from(
			dialogEl.querySelectorAll<HTMLElement>(
				'a[href], button, [tabindex]:not([tabindex="-1"])'
			)
		);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (!isOpen) return;

		if (event.key === "Escape") {
			toggleMenu();
			return;
		}

		if (event.key === "Tab") {
			console.log("Tab key pressed");
			const focusable = getFocusableElements();
			if (focusable.length === 0) return;

			const first = focusable[0];
			const last = focusable[focusable.length - 1];

			console.log(first, last);

			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first.focus();
			}
		}
	}

	$effect(() => {
		if (isOpen && dialogEl) {
			tick().then(() => {
				const firstButton = dialogEl?.querySelector<HTMLElement>("button");
				firstButton?.focus();
			});
		}
	});
</script>

<svelte:window onkeydown={handleKeydown} />

<div
	bind:this={dialogEl}
	id="navigation-menu"
	class="{className} top-0 left-0 bottom-0 right-0 z-99 bg-background-100 overflow-y-auto overscroll-y-contain"
	style="scrollbar-width: none;"
	role="dialog"
	aria-modal="true"
	aria-label="Navigation"
>
	<Header class="z-100 sticky top-0" menuOpen={true} {toggleMenu} />
	<div class="z-99 p-[40px] md:p-[80px]">
		<nav aria-label="Hauptnavigation">
			<ul>
				{#each menuItems as item (item.href)}
					<li
						class="flex justify-center text-center border-b-[1px] border-b-primary-100 font-bold text-[32px] text-primary-100 !py-[6px]"
					>
					{#if isExternal(item.href)}
						<a
							href={item.href}
							target="_blank"
							rel="noopener noreferrer"
							class="h1 cursor-pointer hover:text-primary-120"
						>
							{item.name}&nbsp;»
						</a>
					{:else}
						<a
							href={item.href}
							onclick={toggleMenu}
							class="h1 cursor-pointer hover:text-primary-120"
							aria-current={isCurrentPage(item.href) ? "page" : undefined}
						>
							{item.name}&nbsp;»
						</a>
					{/if}
					</li>
				{/each}
			</ul>
		</nav>
		<div
			class="flex gap-x-[13px] w-[100%] justify-center border-b-[1px] border-b-primary-100 pb-[15px] pt-[40px]"
		>
			<a href="https://www.instagram.com/pura__verdura/" target="_blank" rel="noopener noreferrer">
				<img
					src="/Insta_Icon_Grey.png"
					alt="Instagram"
					class="h-[40px]"
				/>
			</a>
			<a href="https://www.facebook.com/puraverdura.ch/" target="_blank" rel="noopener noreferrer">
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
					<a href="mailto:info@puraverdura.ch">info@puraverdura.ch</a> <br />
				</p>
			</div>
		</div>
	</div>
</div>
