

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/netzwerk/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.BuyZvhkG.js","_app/immutable/chunks/DAIkk9t1.js","_app/immutable/chunks/BgmnGrLa.js","_app/immutable/chunks/B4TLvhyX.js","_app/immutable/chunks/BmBe1NeG.js","_app/immutable/chunks/Bkn0iqu5.js"];
export const stylesheets = [];
export const fonts = [];
