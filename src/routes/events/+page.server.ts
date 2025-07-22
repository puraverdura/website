import type { AgendaEvent } from "$lib/types";

export const load = async ({ params }) => {
	const eventsImport = import.meta.glob("/src/content/events/*.json");

	const events: AgendaEvent[] = await Promise.all(
		Object.entries(eventsImport).map(async ([path, resolver]) => {
			const data = (await resolver()) as { default: AgendaEvent };
			return data.default; // because JSON is a default export
		})
	);

	const todaysDateString = new Date().toISOString().split("T")[0];
	const todaysDate = Date.parse(todaysDateString);

	const getEventWithLocalDate = (event: AgendaEvent, eventDate: number): AgendaEvent => {
		return {
			...event,
			date: Intl.DateTimeFormat("de-CH", {
				month: "long",
				day: "2-digit",
			}).format(eventDate),
		};
	};

	const { upcoming, past } = events.reduce(
		(acc, event) => {
			const eventDate = Date.parse(event.date);
			if (event.hideOnSite) return acc;

			if (eventDate >= todaysDate) {
				acc.upcoming.push(getEventWithLocalDate(event, eventDate));
			} else {
				acc.past.push(getEventWithLocalDate(event, eventDate));
			}
			return acc;
		},
		{ upcoming: [] as AgendaEvent[], past: [] as AgendaEvent[] }
	);

	upcoming.sort((a, b) => b.date.localeCompare(a.date));
	past.sort((a, b) => a.date.localeCompare(b.date));

	return { upcoming, past };
};
