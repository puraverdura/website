import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.CRVC5CvT.js","_app/immutable/chunks/DAIkk9t1.js","_app/immutable/chunks/BgmnGrLa.js","_app/immutable/chunks/BmBe1NeG.js","_app/immutable/chunks/BTPTHGGd.js","_app/immutable/chunks/D56piCr1.js","_app/immutable/chunks/TeokS1yq.js","_app/immutable/chunks/BcgFuw-Q.js","_app/immutable/chunks/BKK-HqZA.js","_app/immutable/chunks/DVgHoARo.js","_app/immutable/chunks/CVehDu4w.js","_app/immutable/chunks/DAhhFA1b.js"];
export const stylesheets = ["_app/immutable/assets/2.B6bF3l5G.css","_app/immutable/assets/ImageCarousel.DCuerg4K.css"];
export const fonts = [];
