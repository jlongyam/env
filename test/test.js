const env = require("../dist/cjs/env.js");
const envGlobal = require("../dist/cjs/envGlobal.js");
const styleText = require("util").styleText;
const test = console;

test.group(styleText('green','Test Commonjs "dist/cjs/env.js"'));
  test.info(styleText('gray','# env.browser'));
    test.assert(env.browser === false);
  test.info(styleText('gray','# env.worker'));
    test.assert(env.worker === false);
  test.info(styleText('gray','# env.cli'));
    test.assert(env.cli === true)
test.groupEnd();

test.group(styleText('green','Test CommonJS "dist/cjs/envGlobal.js"'));
  test.info(styleText('gray','# envGlobal'));
    test.assert(envGlobal === global);
test.groupEnd();
