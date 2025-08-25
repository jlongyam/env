System.register([], (function (exports) {
  
  return {
    execute: (function () {

      var browser = (typeof window !== 'undefined' && typeof document !== 'undefined');
      var worker = (typeof self !== 'undefined' && typeof importScripts === 'function');
      var cli = (!browser && !worker);

      var envContext = exports("default", {
        browser: browser,
        worker: worker,
        cli: cli
      });

    })
  };
}));
