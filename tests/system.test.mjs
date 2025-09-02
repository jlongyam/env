import url from "url";
import systemjs from "systemjs";

const { System, applyImportMap, setBaseUrl } = systemjs;
const basePath = url.pathToFileURL(process.cwd()).href;

setBaseUrl(System, basePath);
applyImportMap(System, {
  imports: {
    env: "./dist/env.system.js"
  }
});

const exports = {
  env: await System.import(["env"])
};
const env = exports.env.default;
const result = {}

result.cli = env.cli;
result.browser = env.browser;
result.worker = env.worker;
result.global = (env.global == global) ? 'global': env.global;

console.log(result);