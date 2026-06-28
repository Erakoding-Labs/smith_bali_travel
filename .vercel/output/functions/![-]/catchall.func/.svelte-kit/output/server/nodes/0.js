import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DImyrRki.js","_app/immutable/chunks/DKLyjx-8.js","_app/immutable/chunks/DSspXU3d.js","_app/immutable/chunks/C6LE1lWd.js","_app/immutable/chunks/CisbCwKt.js"];
export const stylesheets = ["_app/immutable/assets/0.sI1m7EFG.css"];
export const fonts = [];
