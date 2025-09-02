import { assert } from "chai";
import env from "../../src/env.mjs";

describe('Test "src/env.mjs"', () => {
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