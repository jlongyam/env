import env from '../dist/env.js';
const result = {};

result.cli = env.cli;
result.browser = env.browser;
result.worker = env.worker;
result.global = (env.global == self) ? 'self' : env.global;

self.postMessage(result);
