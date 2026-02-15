var env = require("../dist/env.min.cjs");
var envGlobal = require("../dist/envGlobal.min.cjs");

console.assert(env.cli === true);
console.assert(env.browser === false);
console.assert(env.worker === false);

console.assert(envGlobal === global);
console.assert(envGlobal === globalThis);
