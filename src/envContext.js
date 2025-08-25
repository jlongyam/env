const browser = (typeof window !== 'undefined' && typeof document !== 'undefined');
const worker = (typeof self !== 'undefined' && typeof importScripts === 'function');
const cli = (!browser && !worker);

const envContext = {
  browser: browser,
  worker: worker,
  cli: cli
};

export default envContext;