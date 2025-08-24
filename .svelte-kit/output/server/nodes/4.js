import * as server from '../entries/pages/agenda/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/agenda/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/agenda/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.DMT3F7my.js","_app/immutable/chunks/BLmkSlzR.js","_app/immutable/chunks/DhDd0l8F.js","_app/immutable/chunks/Bcelez5j.js","_app/immutable/chunks/CWUqjE8X.js","_app/immutable/chunks/BMDIgxZo.js","_app/immutable/chunks/DIhIHydX.js","_app/immutable/chunks/DyZ1nHym.js","_app/immutable/chunks/D6uAPvb0.js","_app/immutable/chunks/BcMSV3nb.js"];
export const stylesheets = [];
export const fonts = [];
