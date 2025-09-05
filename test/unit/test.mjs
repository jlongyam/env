import env from "../../src/env.mjs";
import envGlobal from "../../src/envGlobal.mjs";
import {styleText} from "util";

const test = console;

test.group(styleText('green', 'Test ESModule "src/env.mjs"'));
  test.info(styleText('gray','# env.browser'));
    test.assert(env.browser === false);
  test.info(styleText('gray','# env.worker'));
    test.assert(env.worker === false);
  test.info(styleText('gray','# env.cli'));
    test.assert(env.cli === true)
test.groupEnd();

test.group(styleText('green','Test ESModule "src/envGlobal.mjs"'));
  test.info(styleText('gray','# envGlobal'));
    test.assert(envGlobal === global);
test.groupEnd();