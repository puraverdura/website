import * as server from '../entries/pages/agenda/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/agenda/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/agenda/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.CsLVyeKx.js","_app/immutable/chunks/CkSWul6O.js","_app/immutable/chunks/D-aOr4Q6.js","_app/immutable/chunks/y5iPpw-A.js","_app/immutable/chunks/14p3pRaA.js","_app/immutable/chunks/xvoINzwe.js","_app/immutable/chunks/DH3LwF92.js","_app/immutable/chunks/Cz3JCSWR.js","_app/immutable/chunks/7i_ulO6o.js","_app/immutable/chunks/7_e6Wy3i.js"];
export const stylesheets = [];
export const fonts = [];
