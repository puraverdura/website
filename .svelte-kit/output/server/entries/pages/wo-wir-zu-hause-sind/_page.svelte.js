import { n as head } from "../../../chunks/index.js";
import { C as CallToAction, P as PageTeasers } from "../../../chunks/PageTeasers.js";
import { C as Container } from "../../../chunks/Container.js";
/* empty css                                                          */
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Wo wir zu Hause sind - Pura Verdura</title>`;
    $$payload2.out += `<meta name="description" content="Unsere Gemüsedepots decken die Kreise 1, 7 und 8 ab. Als Mitglied
			wählst du ein Depot-Standort aus, an dem du wöchentlich das frisch
			geerntete Gemüse abholst. Unsere beiden Äcker liegen im Kreis 8 oberhalb des Gartenareals
			Lengg und neben dem Quartierhof Wynegg.">`;
  });
  Container($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<div class="page-content-row"><h1>Wo wir zu Hause sind</h1> <p>Unsere beiden Äcker liegen im Kreis 8 oberhalb des Gartenareals
			Lengg und neben dem Quartierhof Wynegg. Daneben bewirtschaften wir
			auch noch zwei Folientunnel bei der PUK und haben auf demselben
			Gelände ein Treibhaus sowie unser Büro. Wo alles genau ist, siehst
			Du auf der folgenden Karte.</p> <img src="/content/Lageplan_Pura_Verdura.png" alt="Lageplan"></div> <div class="page-content-row"><h2>Unsere Depots für die Gemüselieferung</h2> <p>Unsere Gemüsedepots decken die Kreise 1, 6, 7 und 8 ab. Zudem haben
			wir ein Depot in Zollikerberg (siehe Karten). Als Mitglied wählst du
			ein Depot-Standort aus, an dem du wöchentlich das frisch geerntete
			Gemüse abholst. Die Gemüsedepots, in denen jeweils donnerstags unser
			Gemüse zur Abholung bereitsteht, sind:</p> <div class="block"><h3>Auf einen Blick</h3> <img src="/content/Alle_Depotstandorte_Pura_Verdura.png" alt="Alle Depotstandorte"></div> <div class="block"><h3>Standorte Kreis 1/7/8</h3> <img src="/content/Depotstandorte_Kreis_1_7_8_Pura_Verdura.png" alt="Depotstandorte Kreis 1, 7 und 8"> <ul><li><strong>Predigerkirche beim Zähringerplatz</strong></li> <li><strong>PUK</strong> (dies ist unser Heimdepot und jeweils ab
					donnerstags 15 Uhr bereits mit Gemüse bestückt)</li> <li><strong>Ref. Kirche Balgrist</strong></li> <li><strong>Kluspark</strong> (an Park-Öffnungszeiten gebunden, d.h.
					Gemüse abzuholen donnerstags, 18:00-19:00 Uhr und freitags 7:30-19:00
					Uhr)</li> <li><strong>Hoch3 Witikon</strong></li> <li><strong>GZ Riesbach</strong></li> <li><strong>Mühle Tiefenbrunnen</strong></li></ul></div> <div class="block"><h3>Standort Kreis 6</h3> <img src="/content/Depotstandort_Kreis_6_Pura_Verdura.png" alt="Depotstandort Kreis 6"> <ul><li><strong>Quartierhaus Kreis 6</strong></li></ul></div> <div><h3>Standort Zollikerberg</h3> <img src="/content/Depotstandort_Zollikerberg_Pura_Verdura.png" alt="Depotstandort Zollikerberg"> <ul><li><strong>Chramsschopf Zollikerberg</strong></li></ul></div></div> <div class="page-content-row">`;
      CallToAction($$payload2);
      $$payload2.out += `<!----></div> <div class="page-content-row">`;
      PageTeasers($$payload2, {
        pages: [
          { title: "Was wir tun", link: "/was-wir-tun/" },
          {
            title: "Wer dahinter steht",
            link: "/wer-dahinter-steht/"
          },
          {
            title: "Wie du mitmachen kannst",
            link: "/wie-du-mitmachen-kannst/"
          },
          {
            title: "Warum das eine gute Sache ist",
            link: "/warum-das-eine-gute-sache-ist/"
          }
        ]
      });
      $$payload2.out += `<!----></div>`;
    }
  });
}
export {
  _page as default
};
