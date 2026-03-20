import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BiuZgaQ7.js","_app/immutable/chunks/C_d1gSJG.js","_app/immutable/chunks/0YiIeeW0.js","_app/immutable/chunks/BH0P9LEO.js","_app/immutable/chunks/BYv3Lyys.js","_app/immutable/chunks/DLFpk4_F.js","_app/immutable/chunks/C188xX2c.js","_app/immutable/chunks/C74qCUfi.js","_app/immutable/chunks/BOR5rOI6.js","_app/immutable/chunks/C2tLzOcD.js","_app/immutable/chunks/Cm_Km9mK.js","_app/immutable/chunks/VO67Cn7Z.js","_app/immutable/chunks/BAaH8rod.js","_app/immutable/chunks/CLd1i2bn.js"];
export const stylesheets = ["_app/immutable/assets/0.yMYGC5P6.css"];
export const fonts = [];
