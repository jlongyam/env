import systemjs from "systemjs";
import url from 'url';
import {styleText} from "util";

const { System, applyImportMap, setBaseUrl } = systemjs;
const basePath = url.pathToFileURL(process.cwd()).href;

setBaseUrl(System, basePath);
applyImportMap(System, {
  imports: {
    env: "./dist/env.js",
    envGlobal: "./dist/envGlobal.js"
  }
});


const exports = {
  env: await System.import(["env"]),
  envGlobal: await System.import(["envGlobal"])
};

const env = exports.env.default;
const envGlobal = exports.envGlobal.default;
const test = console;

test.group(styleText('green','Test SytemJS "dist/env.js"'));
  test.info(styleText('gray','# env.browser'));
    test.assert(env.browser === false);
  test.info(styleText('gray','# env.worker'));
    test.assert(env.worker === false);
  test.info(styleText('gray','# env.cli'));
    test.assert(env.cli === true)
test.groupEnd();

test.group(styleText('green','Test SystemJS "dist/envGlobal.js"'));
  test.info(styleText('gray','# envGlobal'));
    test.assert(envGlobal === global);
test.groupEnd();

