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
	<img src={imageSrc} alt={imageAlt} />
	<h2 class="mt-[20px]">{title}</h2>
	<p class="mt-[6px] md:mt-[12px]">
		{text}
	</p>
	<a class="mt-[6px] md:mt-[12px]" href={link}>mehr erfahren »</a>
</div>
