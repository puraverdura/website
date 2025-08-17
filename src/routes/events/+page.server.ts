import type { AgendaEvent, AgendaYearGroup } from "$lib/types";

export const load = async ({ params }) => {
	const eventsImport = import.meta.glob("/src/content/events/*.json");

	const events: AgendaEvent[] = await Promise.all(
		Object.entries(eventsImport).map(async ([path, resolver]) => {
			const data = (await resolver()) as { default: AgendaEvent };

			const event = data.default; // because JSON is a default export
			const eventDate = Date.parse(event.date);

			return {
				...event,
				parsedDate: eventDate,
				formattedDate: Intl.DateTimeFormat("de-CH", {
					month: "long",
					day: "2-digit",
				}).format(eventDate),
			};
		})
	);

	const todaysDateString = new Date().toISOString().split("T")[0];
	const todaysDate = Date.parse(todaysDateString);

	const { upcoming, past } = events.reduce(
		(acc, event) => {
			//const eventDate = Date.parse(event.date);
			if (event.hideOnSite) {
				return acc;
			}

			const year = new Date(event.date).getFullYear().toString();

			if (event.parsedDate >= todaysDate) {
				if (!acc.upcoming[year]) {
					acc.upcoming[year] = [];
				}

				acc.upcoming[year].push(event);
			} else {
				if (!acc.past[year]) {
					acc.past[year] = [];
				}

				acc.past[year].push(event);
			}
			return acc;
		},
		{
			upcoming: {} as Record<string, AgendaEvent[]>,
			past: {} as Record<string, AgendaEvent[]>,
		}
	);

	const groupedUpcoming: AgendaYearGroup[] = Object.keys(upcoming)
		.map((year) => ({
			year: Number(year),
			events: upcoming[year]
				.slice()
				.sort((a, b) => a.parsedDate - b.parsedDate), // earliest->latest
		}))
		.sort((a, b) => a.year - b.year); // earliest->latest

	const groupedPast: AgendaYearGroup[] = Object.keys(past)
		.map((year) => ({
			year: Number(year),
			events: past[year]
				.slice()
				.sort((a, b) =>b.parsedDate - a.parsedDate), // latest->earliest
		}))
		.sort((a, b) => b.year - a.year);// latest->earliest

	return { groupedUpcoming, groupedPast };
};
