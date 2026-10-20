import baseEnv from '../env.ts';

/** Returns the current global object across runtimes. */
const envGlobal: object = (() => {
  const g = globalThis as Record<string, unknown>;
  if (typeof g.globalThis === 'object') return g.globalThis as object;
  if (typeof g.global === 'object') return g.global as object;
  if (typeof g.self === 'object') return g.self as object;
  if (typeof g.window === 'object') return g.window as object;
  return {};
})();

const env = { ...baseEnv, global: envGlobal };

export default env;
