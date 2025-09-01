var browser = (typeof window !== 'undefined');
var worker = (typeof importScripts !== 'undefined');
var cli = (!browser && !worker);
var env = {
  browser: browser,
  worker: worker,
  cli: cli
};

export { env as default };
