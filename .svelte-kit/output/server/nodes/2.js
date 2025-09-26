import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.-YY85dZ-.js","_app/immutable/chunks/CkSWul6O.js","_app/immutable/chunks/D-aOr4Q6.js","_app/immutable/chunks/14p3pRaA.js","_app/immutable/chunks/xvoINzwe.js","_app/immutable/chunks/DH3LwF92.js","_app/immutable/chunks/KBHJPEm2.js","_app/immutable/chunks/y5iPpw-A.js","_app/immutable/chunks/B7exuc5H.js","_app/immutable/chunks/W8xL2ztF.js","_app/immutable/chunks/Ba688xA5.js","_app/immutable/chunks/Cz3JCSWR.js"];
export const stylesheets = ["_app/immutable/assets/2.B6bF3l5G.css"];
export const fonts = [];
