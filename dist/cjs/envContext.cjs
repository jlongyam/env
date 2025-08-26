var browser = (typeof window !== 'undefined' && typeof document !== 'undefined');
var worker = (typeof self !== 'undefined' && typeof importScripts === 'function');
var cli = (!browser && !worker);

var envContext = {
  browser: browser,
  worker: worker,
  cli: cli
};

module.exports = envContext;
