

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/netzwerk/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CI8lXWYA.js","_app/immutable/chunks/dwKfIkCS.js","_app/immutable/chunks/CHaHypBP.js","_app/immutable/chunks/B4m-3dG_.js","_app/immutable/chunks/DEKR1A2Q.js"];
export const stylesheets = [];
export const fonts = [];
