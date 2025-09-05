const browser = (typeof window !== 'undefined');
const worker = (typeof importScripts !== 'undefined');
const cli = (!browser && !worker);

const env = {
  browser: browser,
  worker: worker,
  cli: cli
};

export default env