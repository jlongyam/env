const env = require('../dist/cjs/env.js');
const envGlobal = require('../dist/cjs/envGlobal.js');

console.log(env);
console.log(envGlobal == global);
