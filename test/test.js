const env = require('../dist/env.cjs');

const result = {}

result.cli = env.cli;
result.browser = env.browser;
result.worker = env.worker;
result.global = (env.global == global) ? 'global' : env.global;

console.log(result);
