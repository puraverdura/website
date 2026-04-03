import * as server from '../entries/pages/agenda/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/agenda/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/agenda/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.DFaRtD0Y.js","_app/immutable/chunks/DAIkk9t1.js","_app/immutable/chunks/BgmnGrLa.js","_app/immutable/chunks/TeokS1yq.js","_app/immutable/chunks/BmBe1NeG.js","_app/immutable/chunks/BTPTHGGd.js","_app/immutable/chunks/D56piCr1.js","_app/immutable/chunks/DAhhFA1b.js","_app/immutable/chunks/Bkn0iqu5.js"];
export const stylesheets = [];
export const fonts = [];
