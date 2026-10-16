import { k as ensure_array_like, f as attr, l as escape_html, c as pop, p as push, t as to_class } from "./index.js";
/* empty css                                            */
function ImageCarousel($$payload, $$props) {
  push();
  let { images, class: className } = $$props;
  let currentIndex = 0;
  let maxIndex = Math.max(0, images.length - 1);
  const each_array = ensure_array_like(images);
  $$payload.out += `<div${attr("class", to_class(`carousel-container relative ${className ?? ""}`, "svelte-1dfzp2e"))}>`;
  if (images.length > 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="absolute top-[20px] left-[20px] z-999 h-[24px] bg-text-100 px-[8px] text-background-100" role="status" aria-live="polite" aria-atomic="true">${escape_html(currentIndex + 1)} / ${escape_html(images.length)}</div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="absolute inset-y-0 left-0 z-999 flex items-center pl-[8px] sm:pl-[20px]"><button type="button" class="cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"${attr("disabled", currentIndex <= 0, true)} aria-label="Vorheriges Bild"><img class="w-[35px]" src="/carousel_prev.svg" alt="" draggable="false"></button></div> <div><div class="carousel-viewport flex min-h-0 w-full max-h-[500px] snap-x snap-mandatory overflow-x-auto overflow-y-hidden [-webkit-overflow-scrolling:touch] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-100 svelte-1dfzp2e" role="region" aria-roledescription="carousel" aria-label="Bildergalerie" tabindex="0"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let image = each_array[$$index];
    $$payload.out += `<div class="box-border flex min-h-0 min-w-full max-h-[500px] shrink-0 snap-start flex-col overflow-hidden"><div class="relative aspect-3/2 w-full min-h-0 max-h-[500px] shrink overflow-hidden"><img class="absolute inset-0 block h-full w-full object-cover select-none"${attr("src", image.src)}${attr("alt", image.alt || "")} draggable="false"></div></div>`;
  }
  $$payload.out += `<!--]--></div></div> <div class="absolute inset-y-0 right-0 z-999 flex items-center pr-[8px] sm:pr-[20px]"><button type="button" class="cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"${attr("disabled", currentIndex >= maxIndex || images.length === 0, true)} aria-label="Nächstes Bild"><img class="w-[35px]" src="/carousel_next.svg" alt="" draggable="false"></button></div></div>`;
  pop();
}
export {
  ImageCarousel as I
};
