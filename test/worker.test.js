import env from '../dist/env.js';
import envGlobal from "../dist/envGlobal.js";

self.postMessage({
  'env': env,
  'envGlobal': (envGlobal == self) ? 'self': 'not-self'
});