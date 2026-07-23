import { n as head } from "../../../chunks/index.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Seite nicht gefunden - Pura Verdura</title>`;
  });
  $$payload.out += `<div class="container"><div class="text-center flex flex-col justify-center gap-y-[6px] md:gap-y-[12px]"><h1>Diese Seite wurde nicht gefunden</h1> <div><a href="/" class="bg-primary-100 !text-white !font-heading !font-bold rounded-[4px] !p-[10px] !text-[20px] !mt-[20px] inline-block grow-on-hover hover:bg-primary-120">Zur Startseite</a></div></div></div>`;
}
export {
  _page as default
};
