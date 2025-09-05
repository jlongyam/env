import env from "../../dist/env.es.min.js";
import envGlobal from "../../dist/envGlobal.es.min.js"

const result = {};

result.cli = env.cli;
result.browser = env.browser;
result.worker = env.worker;
result.global = (envGlobal == self) ? 'self' : envGlobal;

self.postMessage(result);
