import { i as head, f as ensure_array_like, c as pop, p as push } from "../../../chunks/index.js";
import { A as AgendaEvent } from "../../../chunks/AgendaEvent.js";
import { C as Container } from "../../../chunks/Container.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Agenda - Pura Verdura</title>`;
    $$payload2.out += `<meta name="description" content="Bleibe stets auf dem Laufenden! Entdecke hier alle wichtigen
			Termine, Events und Highlights von Pura Verdura, die du nicht
			verpassen solltest. Wir freuen uns, dich bald bei einem unserer
			Events willkommen zu heissen.">`;
  });
  Container($$payload, {
    children: ($$payload2) => {
      const each_array = ensure_array_like(data.groupedUpcoming);
      $$payload2.out += `<div class="page-content-row"><h1>Agenda</h1> <p>Bleibe stets auf dem Laufenden! Entdecke hier alle wichtigen
			Termine, Events und Highlights von Pura Verdura, die du nicht
			verpassen solltest. Wir freuen uns, dich bald bei einem unserer
			Events willkommen zu heissen.</p></div> `;
      if (!data.groupedUpcoming.length) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<div class="page-content-row"><h2>Bevorstehende Anlässe</h2> <p>Momentan stehen keine Anlasse bevor</p></div>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> <!--[-->`;
      for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
        let agendaYearGroup = each_array[$$index_1];
        const each_array_1 = ensure_array_like(agendaYearGroup.events);
        $$payload2.out += `<div class="page-content-row"><h2>Bevorstehende Anlässe ${escape_html(agendaYearGroup.year)}</h2> <!--[-->`;
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let event = each_array_1[$$index];
          AgendaEvent($$payload2, { event, isFutureEvent: true });
        }
        $$payload2.out += `<!--]--></div>`;
      }
      $$payload2.out += `<!--]--> `;
      if (data.groupedPast.length) {
        $$payload2.out += "<!--[-->";
        const each_array_2 = ensure_array_like(data.groupedPast);
        $$payload2.out += `<div class="page-content-row"><h2>Vergangene Anlässe</h2> <!--[-->`;
        for (let $$index_3 = 0, $$length = each_array_2.length; $$index_3 < $$length; $$index_3++) {
          let agendaYearGroup = each_array_2[$$index_3];
          const each_array_3 = ensure_array_like(agendaYearGroup.events);
          $$payload2.out += `<div class="mb-[14px] sm:mb-[17px]"><h3 class="!mb-0">${escape_html(agendaYearGroup.year)}</h3> <div><!--[-->`;
          for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
            let event = each_array_3[$$index_2];
            AgendaEvent($$payload2, { event, isFutureEvent: false });
          }
          $$payload2.out += `<!--]--></div></div>`;
        }
        $$payload2.out += `<!--]--></div>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    }
  });
  pop();
}
export {
  _page as default
};
