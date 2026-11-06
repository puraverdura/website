import * as server from '../entries/pages/agenda/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/agenda/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/agenda/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.6UewyXFV.js","_app/immutable/chunks/dwKfIkCS.js","_app/immutable/chunks/CHaHypBP.js","_app/immutable/chunks/CGDQX4NA.js","_app/immutable/chunks/874iUWoC.js","_app/immutable/chunks/CQ5TfrfO.js","_app/immutable/chunks/BefimU6Q.js","_app/immutable/chunks/DEKR1A2Q.js"];
export const stylesheets = [];
export const fonts = [];
