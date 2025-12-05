import { i as head, f as ensure_array_like, c as pop, p as push } from "../../chunks/index.js";
import { I as ImageCarousel } from "../../chunks/ImageCarousel.js";
import { a as attr } from "../../chunks/attributes.js";
import { e as escape_html } from "../../chunks/escaping.js";
import { h as html } from "../../chunks/html.js";
import { A as AgendaEvent } from "../../chunks/AgendaEvent.js";
function WTeaser($$payload, $$props) {
  let { title, text, link, imageSrc, imageAlt } = $$props;
  $$payload.out += `<div><a class="!m-0 !p-0"${attr("href", link)}><img${attr("src", imageSrc)}${attr("alt", imageAlt)}> <h2 class="mt-[20px] mb-[3px]">${html(title)}</h2></a> <p>${escape_html(text)}</p> <a class="mt-[6px] md:mt-[12px]"${attr("href", link)}>mehr erfahren »</a></div>`;
}
function _page($$payload, $$props) {
  push();
  const { data } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Pura Verdura</title>`;
    $$payload2.out += `<meta name="description" content="Wir sind eine solidarische Genossenschaft in Zürich, die
				Bio-Gemüse lokal, ökologisch und sozial anbaut. Unsere Arbeit
				verbindet ökologische Landwirtschaft mit sozialer Teilhabe und
				macht gesunde Ernährung sowie Gemeinschaft erlebbar.">`;
  });
  $$payload.out += `<div><div class="scroller flex flex-row-reverse border-b-primary-100 border-b-[18px] md:border-b-[25px] h-[200px] sm:h-[300px] xl:h-[400px] svelte-165s4t5"><a href="https://login.puraverdura.ch/my/signup/" class="h-fit mt-[20px] mr-[20px] sm:mr-[40px] lg:mr-[100px] grow-on-hover"><img src="/Mach_mit_Button.png" alt="Mach Mit!" class="h-[100px] sm:h-[120px] xl:h-[150px]"></a></div> <div class="bg-primary-100 flex justify-center border-b-[18px] md:border-b-[25px] border-b-primary-100 px-[36px] group"><a class="banner-text hover:!text-primary-15" href="https://login.puraverdura.ch/my/signup/">Freie Gemüseabos – jetzt zugreifen!</a></div> <div class="container"><div class="text-center flex flex-col justify-center gap-y-[6px] md:gap-y-[12px]"><h1>Willkommen bei Pura Verdura!</h1> <p class="!text-[20px] md:!text-[27px] !font-heading">Wir sind eine solidarische Genossenschaft in Zürich, die
				Bio-Gemüse lokal, ökologisch und sozial anbaut. Unsere Arbeit
				verbindet ökologische Landwirtschaft mit sozialer Teilhabe und
				macht gesunde Ernährung sowie Gemeinschaft erlebbar.</p></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-[40px] gap-y-[45px]">`;
  WTeaser($$payload, {
    title: "Wer <br> dahinter steht",
    text: "Wir sind 183 Genossenschafter:innen, 3 Gartenfachkräfte mit grünem Daumen und Know-how im Gemüseanbau, sowie einer Betriebsgruppe aus 10 Mitgliedern, die sich um Finanzen, Kommunikation und weitere organisatorische Aufgaben kümmert. ",
    link: "/wer-dahinter-steht/",
    imageSrc: "/w_teasers/Illu_Wer_steht_dahinter.png",
    imageAlt: "Wer dahinter steht"
  });
  $$payload.out += `<!----> `;
  WTeaser($$payload, {
    title: "Wo <br> wir zu Hause sind",
    text: "Unsere beiden Äcker und die Folientunnel befinden sich in Zürich, im Kreis 8 auf der Wynegg und oberhalb des Gartenareals Lengg. Die Gemüsedepots, in denen jeweils donnerstags unser Gemüse zur Abholung bereitsteht, liegen in den Kreisen 1, 7, 8 und Witikon. ",
    link: "/wo-wir-zu-hause-sind/",
    imageSrc: "/w_teasers/Illu_Wo_zu_Hause.png",
    imageAlt: "Wo wir zu Hause sind"
  });
  $$payload.out += `<!----> `;
  WTeaser($$payload, {
    title: "Was <br> wir tun",
    text: "Unter der Anleitung von Gartenfachkräften bauen wir ganzjährig regionales, ökologisches Gemüse an und verteilen es an unsere Mitglieder. Dabei fördern wir soziale Teilhabe, um gesunde Ernährung und Gemeinschaft nach solidarischen Prinzipien zu stärken.",
    link: "/was-wir-tun/",
    imageSrc: "/w_teasers/Illu_Was_wir_tun.png",
    imageAlt: "Was wir tun"
  });
  $$payload.out += `<!----> `;
  WTeaser($$payload, {
    title: "Wie <br> Du mitmachen kannst",
    text: "Schliesse dich unserer Genossenschaft an, indem du einen Anteilschein   erwirbst. Als Mitglied hast du die Möglichkeit, ein passendes Gemüseabo zu wählen und aktiv Teil unserer Gemeinschaft zu werden. ",
    link: "/wie-du-mitmachen-kannst/",
    imageSrc: "/w_teasers/Illu_Mitmachen.png",
    imageAlt: "Wie Du mitmachst kannst"
  });
  $$payload.out += `<!----> `;
  WTeaser($$payload, {
    title: "Warum <br> das eine gute Sache ist",
    text: "Wir fördern eine nachhaltige Zukunft, indem wir ökologische Landwirtschaft mit sozialer Teilhabe verbinden. So stärken wir die Gemeinschaft, unterstützen lokale Wirtschaftskreisläufe und bieten Zugang zu gesunder Ernährung.",
    link: "/warum-das-eine-gute-sache-ist/",
    imageSrc: "/w_teasers/Illu_Gute_Sache.png",
    imageAlt: "Warum das eine gute Sache ist"
  });
  $$payload.out += `<!----> `;
  WTeaser($$payload, {
    title: "Wieviel <br> es kostet",
    text: "Der Genossenschafts-Anteilschein kostet CHF 500.- und wird beim Austritt zurückerstattet. Die Abo-Preise variieren nach Grösse und Mitarbeit: Je mehr du mithilfst, desto günstiger wird es. Beim Standardabo zahlst du ca. CHF 30.- pro 3 kg Gemüsetasche (Biogemüse).",
    link: "/wieviel-es-kostet/",
    imageSrc: "/w_teasers/Illu_Kosten.png",
    imageAlt: "Wieviel es kostet"
  });
  $$payload.out += `<!----></div> <div><h2>So sieht das aus</h2> `;
  ImageCarousel($$payload, {
    images: [
      {
        src: "/content/Foto_Ruebli.jpg",
        alt: "Frisch geerntete Karotten. Im hintergrund sind zwei Mitglieder am Ernten"
      },
      {
        src: "/content/KW_4_Jan 2_22.jpeg",
        alt: "Verschiedenes Gemüse auf Tisch"
      },
      {
        src: "/content/IMG_8786.jpeg",
        alt: "Ackerfest: Mitglieder sitzen an Tischen neben dem Feld"
      },
      {
        src: "/content/Abendstimmung-Bauwagen.jpeg",
        alt: "Abendstimmung Bauwagen"
      },
      {
        src: "/content/GV1.jpg",
        alt: "Mitglieder bestätigen die Betriebsgruppe an der GV"
      },
      {
        src: "/content/21-09-17 18-57-53-0322.jpeg",
        alt: "Acker mit Wegweiser-Schild im Vordergrund auf dem Pura Verdura steht"
      },
      {
        src: "/content/Foto-21-08-20.jpeg",
        alt: "Verschiedene Tomaten"
      },
      {
        src: "/content/C051B60F-1201-4857-9223-219578F156D2.jpeg",
        alt: "Abgepackte Gemüsetaschen bereit zur Auslieferung"
      },
      {
        src: "/content/Foto-17-10-20.jpeg",
        alt: "Mitglieder auf Feld"
      },
      {
        src: "/content/Gartenkind.jpg",
        alt: "Mitglieder auf dem Feld mit verschiedenem Gemüse in den Händen"
      },
      {
        src: "/content/IMG_1046.jpeg",
        alt: "Mitglieder auf dem Feld am Arbeiten"
      }
    ]
  });
  $$payload.out += `<!----></div> `;
  if (data.eventsForHomepage.length) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(data.eventsForHomepage);
    $$payload.out += `<div class="relative"><div class="bg-primary-100 h-[12px] min-w-max mb-[7px] sm:mb-[9px] block"></div> <div class="absolute right-0 -top-1 pl-[12px] bg-white hidden sm:block"><img class="h-[80px]" src="/Illustration_Calendar.png" alt="Illustration eines Kalenders"></div> <h2 class="inline-block">Aktuelle Termine</h2> <!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let event = each_array[$$index];
      AgendaEvent($$payload, { event, isFutureEvent: true });
    }
    $$payload.out += `<!--]--> <div class="flex flex-col items-end mt-[14px] sm:mt-[17px]"><a class="rounded-[4px] bg-primary-15 !px-[5px]" href="/agenda/">alle Termine »</a></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
export {
  _page as default
};
