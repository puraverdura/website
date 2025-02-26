import { readFileSync } from "fs";
import fm from "front-matter";
import { marked } from "marked";

export const load = async ({ params }) => {
	const buffer = readFileSync(
		`./src/content/pages/${params.slug}.md`,
		"utf-8"
	);
	const content = fm(buffer.toString());

	const customExtension = {
		extensions: [
			{
				name: "youtube",
				level: "inline", // Sorgt dafür, dass es auch in einer Zeile funktioniert
				start(src) {
					return src.match(/\{\{\s*youtube:\s*([\w-]+)\s*\}\}/)
						?.index;
				},
				tokenizer(src, tokens) {
					const match = src.match(
						/\{\{\s*youtube:\s*([\w-]+)\s*\}\}/
					);
					if (match) {
						return {
							type: "youtube",
							raw: match[0],
							videoId: match[1],
						};
					}
				},
				renderer(token) {
					return `<div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/${token.videoId}" frameborder="0" allowfullscreen></iframe></div>`;
				},
			},
		],
	};

	marked.use(customExtension);

	const parsedBody = await marked.parse(content.body);

	return {
		attributes: content.attributes as Record<string, any>,
		body: parsedBody,
	};
};
