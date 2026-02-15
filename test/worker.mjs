import env from "../dist/env.min.mjs";
import envGlobal from "../dist/envGlobal.min.mjs";

console.assert(env.cli === false);
console.assert(env.browser === false);
console.assert(env.worker === true);

console.assert(envGlobal === self);
console.assert(envGlobal === globalThis);
