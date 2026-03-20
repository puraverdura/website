import * as server from '../entries/pages/_slug_/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.Dkrr5Boe.js","_app/immutable/chunks/C_d1gSJG.js","_app/immutable/chunks/0YiIeeW0.js","_app/immutable/chunks/C188xX2c.js","_app/immutable/chunks/C74qCUfi.js","_app/immutable/chunks/Gxo4BFow.js","_app/immutable/chunks/BYv3Lyys.js"];
export const stylesheets = [];
export const fonts = [];
