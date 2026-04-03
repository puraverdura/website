import * as server from '../entries/pages/_slug_/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.682hrdiq.js","_app/immutable/chunks/DAIkk9t1.js","_app/immutable/chunks/BgmnGrLa.js","_app/immutable/chunks/TeokS1yq.js","_app/immutable/chunks/BmBe1NeG.js","_app/immutable/chunks/CVehDu4w.js","_app/immutable/chunks/Bkn0iqu5.js"];
export const stylesheets = [];
export const fonts = [];
