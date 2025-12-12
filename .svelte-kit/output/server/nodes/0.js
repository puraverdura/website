import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CrwdsdAa.js","_app/immutable/chunks/CkSWul6O.js","_app/immutable/chunks/D-aOr4Q6.js","_app/immutable/chunks/7_e6Wy3i.js","_app/immutable/chunks/W8xL2ztF.js","_app/immutable/chunks/y5iPpw-A.js","_app/immutable/chunks/14p3pRaA.js","_app/immutable/chunks/xvoINzwe.js","_app/immutable/chunks/MRQujorY.js","_app/immutable/chunks/B7exuc5H.js","_app/immutable/chunks/DKtsM-rN.js","_app/immutable/chunks/YdgAH-9G.js","_app/immutable/chunks/DH3LwF92.js","_app/immutable/chunks/CqfhGKMG.js"];
export const stylesheets = ["_app/immutable/assets/0.C_JudMVH.css"];
export const fonts = [];
