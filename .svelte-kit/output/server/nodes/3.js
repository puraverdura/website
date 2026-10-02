import * as server from '../entries/pages/_slug_/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.BN6GXA6L.js","_app/immutable/chunks/dwKfIkCS.js","_app/immutable/chunks/CHaHypBP.js","_app/immutable/chunks/CGDQX4NA.js","_app/immutable/chunks/DOVVE9o7.js","_app/immutable/chunks/DEKR1A2Q.js"];
export const stylesheets = [];
export const fonts = [];
