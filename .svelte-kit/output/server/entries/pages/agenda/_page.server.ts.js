const load = async ({ params }) => {
  const eventsImport = /* @__PURE__ */ Object.assign({ "/src/content/events/2025-08-23-pura-verdura-ackerfest-2025.json": () => import("../../../chunks/2025-08-23-pura-verdura-ackerfest-2025.js"), "/src/content/events/2025-10-11-herbstmarkt-im-botanischen-garten.json": () => import("../../../chunks/2025-10-11-herbstmarkt-im-botanischen-garten.js"), "/src/content/events/2025-11-02-neue-kalender-poster-postkarten.json": () => import("../../../chunks/2025-11-02-neue-kalender-poster-postkarten.js"), "/src/content/events/2025-11-08-martini-markt.json": () => import("../../../chunks/2025-11-08-martini-markt.js") });
  const events = await Promise.all(
    Object.entries(eventsImport).map(async ([path, resolver]) => {
      const data = await resolver();
      const event = data.default;
      const eventDate = Date.parse(event.date);
      return {
        ...event,
        parsedDate: eventDate,
        formattedDate: Intl.DateTimeFormat("de-CH", {
          month: "long",
          day: "2-digit"
        }).format(eventDate)
      };
    })
  );
  const todaysDateString = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const todaysDate = Date.parse(todaysDateString);
  const { upcoming, past } = events.reduce(
    (acc, event) => {
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
      upcoming: {},
      past: {}
    }
  );
  const groupedUpcoming = Object.keys(upcoming).map((year) => ({
    year: Number(year),
    events: upcoming[year].slice().sort((a, b) => a.parsedDate - b.parsedDate)
    // earliest->latest
  })).sort((a, b) => a.year - b.year);
  const groupedPast = Object.keys(past).map((year) => ({
    year: Number(year),
    events: past[year].slice().sort((a, b) => b.parsedDate - a.parsedDate)
    // latest->earliest
  })).sort((a, b) => b.year - a.year);
  return { groupedUpcoming, groupedPast };
};
export {
  load
};
