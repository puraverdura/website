import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.B09hoWCy.js","_app/immutable/chunks/BLmkSlzR.js","_app/immutable/chunks/DhDd0l8F.js","_app/immutable/chunks/CWUqjE8X.js","_app/immutable/chunks/BMDIgxZo.js","_app/immutable/chunks/DIhIHydX.js","_app/immutable/chunks/CGQaQ9HO.js","_app/immutable/chunks/Bcelez5j.js","_app/immutable/chunks/CQ4I3Exw.js","_app/immutable/chunks/DAH6T7JG.js","_app/immutable/chunks/BsmWyMeb.js","_app/immutable/chunks/DyZ1nHym.js"];
export const stylesheets = ["_app/immutable/assets/2.B6bF3l5G.css"];
export const fonts = [];
