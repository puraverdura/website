import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DhNp9jvd.js","_app/immutable/chunks/DAIkk9t1.js","_app/immutable/chunks/BgmnGrLa.js","_app/immutable/chunks/BTPTHGGd.js","_app/immutable/chunks/Bkn0iqu5.js","_app/immutable/chunks/D56piCr1.js","_app/immutable/chunks/TeokS1yq.js","_app/immutable/chunks/BmBe1NeG.js","_app/immutable/chunks/CuyAOOEw.js","_app/immutable/chunks/de7DdrNA.js","_app/immutable/chunks/BKK-HqZA.js","_app/immutable/chunks/B4TLvhyX.js","_app/immutable/chunks/CrEc7FUj.js","_app/immutable/chunks/ChG2qMHc.js"];
export const stylesheets = ["_app/immutable/assets/0.DBAFDqxz.css"];
export const fonts = [];
