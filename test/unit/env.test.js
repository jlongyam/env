const { assert } = require("chai");
const env = require("../../dist/env.min.cjs");

describe('Test "dist/env.cjs"', () => {
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