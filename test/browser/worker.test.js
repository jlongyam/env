import env from '../../src/env.js';
import envGlobal from "../../src/envGlobal.js";

self.postMessage({
  'env': env,
  'envGlobal': (envGlobal === self) ? 'self': 'not-self'
});