import * as server from '../entries/pages/_slug_/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.T9gGxPNO.js","_app/immutable/chunks/BMMGiry5.js","_app/immutable/chunks/0OF3C7ta.js","_app/immutable/chunks/C3yKp2bL.js","_app/immutable/chunks/D7E0pRCa.js","_app/immutable/chunks/CpCyYKX_.js","_app/immutable/chunks/DIR38VeV.js","_app/immutable/chunks/D4Gzbl7n.js"];
export const stylesheets = [];
export const fonts = [];
