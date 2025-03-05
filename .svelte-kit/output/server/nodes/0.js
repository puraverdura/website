import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CEgH_AVB.js","_app/immutable/chunks/BMMGiry5.js","_app/immutable/chunks/0OF3C7ta.js","_app/immutable/chunks/D4Gzbl7n.js","_app/immutable/chunks/86EC7ruC.js","_app/immutable/chunks/C3yKp2bL.js","_app/immutable/chunks/D7E0pRCa.js","_app/immutable/chunks/Cczu3uhF.js","_app/immutable/chunks/XDdPsiBH.js","_app/immutable/chunks/C_CDBtmz.js","_app/immutable/chunks/DI3Vqy5M.js","_app/immutable/chunks/DbA-EWsU.js","_app/immutable/chunks/BxmzXAxv.js"];
export const stylesheets = ["_app/immutable/assets/0.DY0XESHh.css"];
export const fonts = [];
