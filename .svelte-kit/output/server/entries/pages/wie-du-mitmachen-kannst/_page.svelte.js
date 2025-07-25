import { i as head } from "../../../chunks/index.js";
import { C as CallToAction, P as PageTeasers } from "../../../chunks/PageTeasers.js";
import { C as Container } from "../../../chunks/Container.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Wie du mitmachen kannst - Pura Verdura</title>`;
    $$payload2.out += `<meta name="description" content="Auf der Suche nach einem Bio-Gemüseabo in der Stadt Zürich? Dann bist du
		bei Pura Verdura genau richtig: Bei uns gibts wöchentlich frisches
		Bio-Gemüse, das vom Acker aus deiner Nähe stammt. Du möchtest Teil von
		Pura Verdura werden? Mitmachen ist ganz einfach!">`;
  });
  Container($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<div class="page-content-row"><h1>Wie du mitmachen kannst</h1> <p>Auf der Suche nach einem Bio-Gemüseabo in der Stadt Zürich? Dann
			bist du bei Pura Verdura genau richtig: Bei uns gibts wöchentlich
			frisches Bio-Gemüse, das vom Acker aus deiner Nähe stammt. Du
			möchtest Teil von Pura Verdura werden? Mitmachen ist ganz einfach!</p> <img src="/content/Feld.jpg" alt="Alt text"></div> <div class="page-content-row"><h2>Genossenschafter:in werden</h2> <p>Mit dem Erwerb eines Anteilsscheins im Wert von CHF 500 wirst du
			Mitglied von Pura Verdura. Diese Summe erhältst du zurück, wenn du
			die Genossenschaft verlässt. Als Mitglied hast du Stimmrecht bei der
			jährlichen Generalversammlung und kannst aktiv an der Gestaltung
			unserer Genossenschaft mitwirken. Die Genossenschaftsanteile
			finanzieren den Aufbau und Unterhalt der Infrastruktur, wie Geräte
			und Folientunnel. Nach deinem Beitritt kannst du jährlich einen
			Ernteanteil beziehen</p></div> <div class="page-content-row"><h2>Mitarbeit</h2> <p>Damit eine solidarische Genossenschaft wie Pura Verdura erfolgreich
			funktioniert, ist die Mitarbeit der Mitglieder essenziell. Pro Jahr
			und pro Ernteanteil sind insgesamt 4 Einsatztage erforderlich (2
			Tage bei einem kleinen Abo). Dies entspricht 8 regulären Einsätzen à
			4 Stunden oder 16 kleinen Einsätzen à 2 Stunden.</p> <p><strong>Kleine Einsätze</strong> von 2 Stunden werden je nach Bedarf
			und Wetter am Mittwoch, Freitag und Samstag für die „allgemeine Mitarbeit
			auf dem Acker“ angeboten und im Sommer als „Feierabendeinsatz“.</p> <p><strong>Reguläre Einsätze</strong> von 4 Stunden umfassen die „Jungpflanzenanzucht“
			am Dienstag sowie am Donnerstag die Bereiche „Ernte“, „Abpacken“ und
			„Transport“. Mitglieder können sich auch für zwei kürzere Einsätze hintereinander
			eintragen.</p> <p>Der Donnerstag ist der wichtigste Tag für Pura Verdura, an dem die
			Kernbereiche Ernten, Abpacken und Transport besetzt werden müssen.
			Mitglieder sollten daher nach Möglichkeit mindestens ein Drittel
			ihrer Einsätze an diesem Tag in einem der genannten Bereiche
			leisten.</p> <p>Idealerweise werden rund zwei Drittel der Einsätze zwischen April
			und Anfang November geleistet, da in dieser Zeit der Arbeitsaufwand
			am grössten ist. Von November bis März konzentrieren sich die
			Einsätze auf die Ernte- und Liefertage, die fest am Donnerstag
			stattfinden.</p></div> <div class="page-content-row"><h2>Schnuppertage</h2> <p>Komm vorbei und lerne uns kennen! An einem Schnuppertag kannst Du
			einen Einblick in unsere Arbeit gewinnen und direkt mit anpacken.
			Melde Dich für einen Schnuppermorgen oder -nachmittag an: <a href="mailto:gemuese@puraverdura.ch">gemuese@puraverdura.ch</a>. Wir freuen uns, Dich kennenzulernen!</p></div> <div class="page-content-row"><h2>Du hast noch Fragen? Kontaktiere uns.</h2> <p>Wir stehen dir bei Fragen gerne zu Verfügung. Schreibe uns ein
				Mail an: <a href="mailto:miglieder@puraverdura.ch">miglieder@puraverdura.ch</a></p></div> <div class="page-content-row">`;
      CallToAction($$payload2);
      $$payload2.out += `<!----></div> <div class="page-content-row">`;
      PageTeasers($$payload2, {
        pages: [
          {
            title: "Wieviel es kostet",
            link: "/wieviel-es-kostet/"
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
