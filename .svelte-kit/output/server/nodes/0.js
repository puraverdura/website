import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BY8nVum0.js","_app/immutable/chunks/BLmkSlzR.js","_app/immutable/chunks/DhDd0l8F.js","_app/immutable/chunks/BcMSV3nb.js","_app/immutable/chunks/DAH6T7JG.js","_app/immutable/chunks/Bcelez5j.js","_app/immutable/chunks/CWUqjE8X.js","_app/immutable/chunks/BMDIgxZo.js","_app/immutable/chunks/Mw2pUjAD.js","_app/immutable/chunks/CQ4I3Exw.js","_app/immutable/chunks/B2Rw7AvD.js","_app/immutable/chunks/C1FkJtWR.js","_app/immutable/chunks/DIhIHydX.js","_app/immutable/chunks/CZ4Iz36u.js"];
export const stylesheets = ["_app/immutable/assets/0.Crqez4rk.css"];
export const fonts = [];
