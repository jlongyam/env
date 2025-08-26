import Test from "@jlongyam/test";
import env from '../src/env.js';
import envGlobal from '../src/envGlobal.js';

const { describe, it, assert } = Test();

describe('Test "src"', ()=> {
  it(()=> {
    assert(Object.keys(env), ['browser', 'worker', 'cli']);
  });
  it('should type "object"', ()=> {
    assert(typeof envGlobal === 'object');
  })
});
