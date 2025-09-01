const env = require('../dist/env.cjs');
const envGlobal = require('../dist/envGlobal.cjs');

console.log(env);
console.log(envGlobal == global);
