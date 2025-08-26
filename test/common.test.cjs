const Test = require('@jlongyam/test');
const env = require ('../dist/cjs/env.cjs');
const envGlobal = require('../dist/cjs/envGlobal.cjs');

const { describe, it, assert } = Test();

describe('Test "src"', ()=> {
  it(()=> {
    assert(Object.keys(env), ['browser', 'worker', 'cli']);
  });
  it('should type "object"', ()=> {
    assert(typeof envGlobal === 'object');
  })
});