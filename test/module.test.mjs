import Test from "@jlongyam/test";
import env from '../dist/mjs/env.mjs';
import envGlobal from '../dist/mjs/envGlobal.mjs';

const { describe, it, assert } = Test();

describe('Test "src"', ()=> {
  it(()=> {
    assert(Object.keys(env), ['browser', 'worker', 'cli']);
  });
  it('should type "object"', ()=> {
    assert(typeof envGlobal === 'object');
  })
});

