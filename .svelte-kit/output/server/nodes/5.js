

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/netzwerk/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.Cs8y_v1s.js","_app/immutable/chunks/C_d1gSJG.js","_app/immutable/chunks/0YiIeeW0.js","_app/immutable/chunks/Cm_Km9mK.js","_app/immutable/chunks/C74qCUfi.js","_app/immutable/chunks/BYv3Lyys.js"];
export const stylesheets = [];
export const fonts = [];
