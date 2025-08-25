import envContext from '../../src/envContext.js';
import envGlobal from "../../src/envGlobal.js";

self.postMessage({
  'envContext': envContext,
  'envGlobal': (envGlobal === self)
});