<script lang="ts">
	interface Props {
		title: string;
		text: string;
		link: string;
		imageSrc: string;
		imageAlt: string;
	}

	let { title, text, link, imageSrc, imageAlt }: Props = $props();
</script>

<div>
	<a class="!m-0 !p-0" href={link}>
		<img src={imageSrc} alt={imageAlt} />
		<h2 class="mt-[20px] mb-[3px]">{@html title}</h2>
	</a>
	<p>
		{text}
	</p>
	<a class="mt-[6px] md:mt-[12px]" href={link}>mehr erfahren »</a>
</div>
