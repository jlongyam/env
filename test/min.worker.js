import env from "../dist/es/env.min.js";
import envGlobal from "../dist/es/envGlobal.min.js"

const result = {};

result.cli = env.cli;
result.browser = env.browser;
result.worker = env.worker;
result.global = (envGlobal == self) ? 'self' : envGlobal;

self.postMessage(result);
