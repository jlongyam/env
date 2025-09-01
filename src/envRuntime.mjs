const browser = (typeof window !== 'undefined');
const worker = (typeof importScripts !== 'undefined');
const cli = (!browser && !worker);

const envRuntime = {
  browser: browser,
  worker: worker,
  cli: cli
};

export default envRuntime;