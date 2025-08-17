export type AgendaEvent = {
	title: string;
	description: string;
	date: string;
	parsedDate: number,
	formattedDate: string,
	link: string;
	hideOnSite: boolean;
};

export type AgendaYearGroup = {
	year: number;
	events: AgendaEvent[];
}
