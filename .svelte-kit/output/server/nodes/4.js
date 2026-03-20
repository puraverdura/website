import * as server from '../entries/pages/agenda/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/agenda/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/agenda/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.Bn53Dt2i.js","_app/immutable/chunks/C_d1gSJG.js","_app/immutable/chunks/0YiIeeW0.js","_app/immutable/chunks/C188xX2c.js","_app/immutable/chunks/C74qCUfi.js","_app/immutable/chunks/BH0P9LEO.js","_app/immutable/chunks/CLd1i2bn.js","_app/immutable/chunks/sT7ykiCd.js","_app/immutable/chunks/BYv3Lyys.js"];
export const stylesheets = [];
export const fonts = [];
