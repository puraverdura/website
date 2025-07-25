import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.E7_7MG5I.js","_app/immutable/chunks/BYdpJNHg.js","_app/immutable/chunks/DAZDvcWS.js","_app/immutable/chunks/DZg3y7iY.js","_app/immutable/chunks/koVcaCpa.js","_app/immutable/chunks/5YrcwkqC.js","_app/immutable/chunks/C7ju7SWY.js","_app/immutable/chunks/GUNn03-C.js","_app/immutable/chunks/bMUkWtJH.js","_app/immutable/chunks/BtS1fthh.js","_app/immutable/chunks/DlVYadZ-.js","_app/immutable/chunks/CXes8M53.js","_app/immutable/chunks/iPZ00ZxI.js"];
export const stylesheets = ["_app/immutable/assets/0.CcmsTPpQ.css"];
export const fonts = [];
