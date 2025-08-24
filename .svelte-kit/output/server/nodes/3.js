import * as server from '../entries/pages/_slug_/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.KH8-QqSl.js","_app/immutable/chunks/BLmkSlzR.js","_app/immutable/chunks/DhDd0l8F.js","_app/immutable/chunks/Bcelez5j.js","_app/immutable/chunks/CWUqjE8X.js","_app/immutable/chunks/BsmWyMeb.js","_app/immutable/chunks/D6uAPvb0.js","_app/immutable/chunks/BcMSV3nb.js"];
export const stylesheets = [];
export const fonts = [];
