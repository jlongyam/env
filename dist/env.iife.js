var env = (function () {

  var browser = (typeof window !== 'undefined');
  var worker = (typeof importScripts !== 'undefined');
  var cli = (!browser && !worker);

  var envRuntime = {
    browser: browser,
    worker: worker,
    cli: cli
  };

  var envGlobal = (function () {
    if (typeof globalThis === 'object') { return globalThis; }
    if (typeof global === 'object') { return global; }
    if (typeof self === 'object') { return self; }
    if (typeof window === 'object') { return window; }
    return {}
  })();

  var env = envRuntime;
  env.global = envGlobal;

  return env;

})();
