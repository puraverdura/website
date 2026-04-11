import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.BX8LZVCe.js","_app/immutable/chunks/dwKfIkCS.js","_app/immutable/chunks/CHaHypBP.js","_app/immutable/chunks/874iUWoC.js","_app/immutable/chunks/CQ5TfrfO.js","_app/immutable/chunks/CGDQX4NA.js","_app/immutable/chunks/5t98dY9X.js","_app/immutable/chunks/C49vPqYV.js","_app/immutable/chunks/DOVVE9o7.js","_app/immutable/chunks/BefimU6Q.js"];
export const stylesheets = ["_app/immutable/assets/2.tEflKAKO.css","_app/immutable/assets/ImageCarousel.DCuerg4K.css"];
export const fonts = [];
