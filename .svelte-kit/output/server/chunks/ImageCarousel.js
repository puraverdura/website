import { f as ensure_array_like, c as pop, p as push } from "./index.js";
import "siema";
import { e as escape_html } from "./escaping.js";
import { a as attr } from "./attributes.js";
function ImageCarousel($$payload, $$props) {
  push();
  let { images } = $$props;
  let currentIndex = 0;
  const each_array = ensure_array_like(images);
  $$payload.out += `<div class="relative"><div class="absolute top-[20px] left-[20px] h-[24px] z-999 bg-text-100 text-background-100 px-[8px]">${escape_html(currentIndex + 1)} / ${escape_html(images.length)}</div> <div class="hidden sm:block absolute z-999 inset-y-0 left-0 content-center pl-[20px]"><button class="cursor-pointer"><img class="w-[35px]" src="/carousel_prev.svg" alt="Previous"></button></div> <div><div class="siema"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let image = each_array[$$index];
    $$payload.out += `<div class="overflow-y-hidden"><div class="object-cover"><img class="object-cover aspect-3/2 w-full h-full"${attr("src", image.src)}${attr("alt", image.alt || "")}></div></div>`;
  }
  $$payload.out += `<!--]--></div></div> <div class="hidden sm:block absolute z-999 inset-y-0 right-0 content-center pr-[20px]"><button class="cursor-pointer"><img class="w-[35px]" src="/carousel_next.svg" alt="Next"></button></div></div>`;
  pop();
}
export {
  ImageCarousel as I
};
