import { i as head } from "../../../chunks/index.js";
import { C as CallToAction, P as PageTeasers } from "../../../chunks/PageTeasers.js";
import { C as Container } from "../../../chunks/Container.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Warum das eine gute Sache ist - Pura Verdura</title>`;
    $$payload2.out += `<meta name="description" content="Unsere Partner unterstützen uns bei der Umsetzung unserer Ziele und
		fördern den Austausch von Wissen und Ressourcen.">`;
  });
  Container($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<div class="page-content-row"><h1>Warum das eine gute Sache ist</h1> <p>Wir setzen uns für eine nachhaltige lokale Landwirtschaft ein, indem
			wir den direkten Kontakt zwischen Produzent:innen und
			Konsument:innen fördern und frisches, biologisches Gemüse anbieten.
			Unsere Mitglieder profitieren von gesunden Lebensmitteln und einem
			starken Gemeinschaftsgefühl. Durch den direkten Austausch stärken
			wir Vertrauen und Transparenz, und die aktive Mitarbeit sowie der
			regelmässige Austausch unter unseren Mitgliedern fördern soziale
			Netzwerke. Zudem tragen wir zur Bildung und zum Bewusstsein für
			nachhaltige Landwirtschaft bei, was positive soziale und ökologische
			Auswirkungen hat.</p> <img src="/content/image_1.jpg" alt="Alt text"> <p>Auf der Suche nach einem Bio-Gemüseabo in der Stadt Zürich? Dann
			bist du bei Pura Verdura genau richtig: Bei uns gibts wöchentlich
			frisches Bio-Gemüse, das vom Acker aus deiner Nähe stammt. Du
			möchtest Teil von Pura Verdura werden? Mitmachen ist ganz einfach!</p></div> <div class="page-content-row">`;
      CallToAction($$payload2);
      $$payload2.out += `<!----></div> <div class="page-content-row">`;
      PageTeasers($$payload2, {
        pages: [
          {
            title: "Wie du mitmachen kannst",
            link: "/wie-du-mitmachen-kannst/"
          },
          {
            title: "Wer dahinter steht",
            link: "/wer-dahinter-steht/"
          },
          {
            title: "Wo wir zu Hause sind",
            link: "/wo-wir-zu-hause-sind/"
          },
          {
            title: "Wieviel es kostet",
            link: "/wieviel-es-kostet/"
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
