var browser = "undefined" != typeof window, worker = "undefined" != typeof importScripts, env = {
  browser: browser,
  worker: worker,
  cli: !browser && !worker
};

module.exports = env;
