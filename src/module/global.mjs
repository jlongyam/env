import env from '../env.mjs';

const envGlobal = (()=> {
  if (typeof globalThis === 'object') return globalThis;
  if (typeof global === 'object') return global;
  if (typeof self === 'object') return self
  if (typeof window === 'object') return window
  return {}
})();

env.global = envGlobal;

export default env;
