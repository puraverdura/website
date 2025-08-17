import type { AgendaEvent } from "$lib/types";

export const load = async ({ params }) => {
	const eventsImport = import.meta.glob("/src/content/events/*.json");

	const events: AgendaEvent[] = await Promise.all(
		Object.entries(eventsImport).map(async ([path, resolver]) => {
			const data = (await resolver()) as { default: AgendaEvent };

			const event = data.default; // because JSON is a default export
			const eventDate = Date.parse(event.date);

			return {
				...event,
				formattedDate: Intl.DateTimeFormat("de-CH", {
					month: "long",
					day: "2-digit",
				}).format(eventDate),
			}
		})
	);

	const todaysDateString = new Date().toISOString().split("T")[0];
	const todaysDate = Date.parse(todaysDateString);

	const eventsForHomepage = events
		.filter((event) => {
			if (event.hideOnSite) {
				return false;
			}
			const eventDate = Date.parse(event.date);
			return eventDate >= todaysDate;
		})
		.slice(0, 3)
		.sort((a, b) => a.parsedDate - b.parsedDate);

	return { eventsForHomepage };
};
