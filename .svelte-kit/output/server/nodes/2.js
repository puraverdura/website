import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.C-6dY4a3.js","_app/immutable/chunks/C_d1gSJG.js","_app/immutable/chunks/0YiIeeW0.js","_app/immutable/chunks/C74qCUfi.js","_app/immutable/chunks/BH0P9LEO.js","_app/immutable/chunks/CLd1i2bn.js","_app/immutable/chunks/CnleLHB7.js","_app/immutable/chunks/C188xX2c.js","_app/immutable/chunks/C2tLzOcD.js","_app/immutable/chunks/DLFpk4_F.js","_app/immutable/chunks/Gxo4BFow.js","_app/immutable/chunks/sT7ykiCd.js"];
export const stylesheets = ["_app/immutable/assets/2.B6bF3l5G.css"];
export const fonts = [];
