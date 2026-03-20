import { a as attr } from "./attributes.js";
import { e as escape_html } from "./escaping.js";
function AgendaEvent($$payload, $$props) {
  let { event, isFutureEvent } = $$props;
  const { title, description, formattedDate, link } = event;
  $$payload.out += `<div class="border-b-[1px] py-[14px] sm:py-[17px] border-text-50 first:pt-0">`;
  if (isFutureEvent) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h3 class="flex gap-1 flex-col sm:flex-row items-start"><span class="bg-primary-100 text-white inline-block w-[160px] text-center rounded-md mr-1">${escape_html(formattedDate)}</span> <span class="text-black font-bold">${escape_html(title)}</span></h3>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p class="!m-0 font-bold !font-heading">${escape_html(formattedDate)}, ${escape_html(title)}</p>`;
  }
  $$payload.out += `<!--]--> <p class="!m-0">${escape_html(description)} `;
  if (isFutureEvent) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a class="inline-block !m-0"${attr("href", link)}>mehr erfahren »</a>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></p></div>`;
}
export {
  AgendaEvent as A
};
