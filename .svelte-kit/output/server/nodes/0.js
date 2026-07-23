import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.E9rcCyLP.js","_app/immutable/chunks/dwKfIkCS.js","_app/immutable/chunks/CHaHypBP.js","_app/immutable/chunks/874iUWoC.js","_app/immutable/chunks/DEKR1A2Q.js","_app/immutable/chunks/CQ5TfrfO.js","_app/immutable/chunks/CGDQX4NA.js","_app/immutable/chunks/aGG531s5.js","_app/immutable/chunks/CCgQQfqq.js","_app/immutable/chunks/C49vPqYV.js","_app/immutable/chunks/B4m-3dG_.js","_app/immutable/chunks/L8RHFa_g.js","_app/immutable/chunks/DDFSRVoh.js"];
export const stylesheets = ["_app/immutable/assets/0.CEHX_wKG.css"];
export const fonts = [];
