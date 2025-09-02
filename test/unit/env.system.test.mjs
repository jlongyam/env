import { assert } from "chai";
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

describe('Test "dist/env.system.js"', () => {
  it('env.browser', () => {
    assert(env.browser === false)
  });
  it('env.worker', () => {
    assert(env.worker === false)
  });
  it('env.cli', ()=> {
    assert(env.cli === true)
  });
  it('env.global', ()=> {
    assert(env.global === global)
  })
});