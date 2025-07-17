import * as server from '../entries/pages/_slug_/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.DBNY1KeU.js","_app/immutable/chunks/BYdpJNHg.js","_app/immutable/chunks/DAZDvcWS.js","_app/immutable/chunks/5YrcwkqC.js","_app/immutable/chunks/C7ju7SWY.js","_app/immutable/chunks/CCWrzEzf.js","_app/immutable/chunks/CFrO2EF-.js","_app/immutable/chunks/DZg3y7iY.js"];
export const stylesheets = [];
export const fonts = [];
