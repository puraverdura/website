const load = async ({ params }) => {
  const eventsImport = /* @__PURE__ */ Object.assign({ "/src/content/events/2025-08-23-pura-verdura-ackerfest-2025.json": () => import("../../chunks/2025-08-23-pura-verdura-ackerfest-2025.js"), "/src/content/events/2025-10-11-herbstmarkt-im-botanischen-garten.json": () => import("../../chunks/2025-10-11-herbstmarkt-im-botanischen-garten.js"), "/src/content/events/2025-11-02-neue-kalender-poster-postkarten.json": () => import("../../chunks/2025-11-02-neue-kalender-poster-postkarten.js"), "/src/content/events/2025-11-08-martini-markt.json": () => import("../../chunks/2025-11-08-martini-markt.js") });
  const events = await Promise.all(
    Object.entries(eventsImport).map(async ([path, resolver]) => {
      const data = await resolver();
      const event = data.default;
      const eventDate = Date.parse(event.date);
      return {
        ...event,
        formattedDate: Intl.DateTimeFormat("de-CH", {
          month: "long",
          day: "2-digit"
        }).format(eventDate)
      };
    })
  );
  const todaysDateString = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const todaysDate = Date.parse(todaysDateString);
  const eventsForHomepage = events.filter((event) => {
    if (event.hideOnSite) {
      return false;
    }
    const eventDate = Date.parse(event.date);
    return eventDate >= todaysDate;
  }).slice(0, 3).sort((a, b) => a.parsedDate - b.parsedDate);
  return { eventsForHomepage };
};
export {
  load
};
