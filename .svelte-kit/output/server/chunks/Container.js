import "clsx";
function Container($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<div class="md:w-[700px] mx-auto mt-[24px] md:mt-[34px] flex justify-center flex-col gap-y-[36px] md:gap-y-[56px]"><div><div class="page-content">`;
  children?.($$payload);
  $$payload.out += `<!----></div></div></div>`;
}
export {
  Container as C
};
