import "clsx";
import { k as ensure_array_like, f as attr, l as escape_html } from "./index.js";
function CallToAction($$payload) {
  $$payload.out += `<h2>Überzeugt? Dann melde Dich jetzt an</h2> <a href="https://login.puraverdura.ch/my/signup/" class="bg-primary-100 !text-white !font-heading !font-bold rounded-[4px] !p-[10px] !text-[20px] inline-block grow-on-hover hover:bg-primary-120 !mt-[5px] md:!mt-[7px]">Anmelden</a>`;
}
function PageTeasers($$payload, $$props) {
  let { pages } = $$props;
  const each_array = ensure_array_like(pages);
  $$payload.out += `<div><h2>Auch interessant</h2> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[20px] mt-[5px] md:mt-[7px]"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let page = each_array[$$index];
    $$payload.out += `<a class="bg-primary-70 !text-white !font-heading !font-normal rounded-[4px] text-center !p-[5px] grow-on-hover hover:bg-primary-100 really-break-words h-[64px] !mb-0 content-center !leading-[21px]"${attr("href", page.link)}>${escape_html(page.title)}</a>`;
  }
  $$payload.out += `<!--]--></div></div>`;
}
export {
  CallToAction as C,
  PageTeasers as P
};
