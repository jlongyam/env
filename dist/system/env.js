System.register([], (function (exports) {
  
  return {
    execute: (function () {

      var browser = (typeof window !== 'undefined');
      var worker = (typeof importScripts !== 'undefined');
      var cli = (!browser && !worker);
      var env = exports("default", {
        browser: browser,
        worker: worker,
        cli: cli
      });

    })
  };
}));
