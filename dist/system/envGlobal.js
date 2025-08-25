System.register([], (function (exports) {
  
  return {
    execute: (function () {

      var envGlobal = exports("default", (function () {
        if (typeof globalThis === 'object') { return globalThis; }
        if (typeof global === 'object') { return global; }
        if (typeof self === 'object') { return self; }
        if (typeof window === 'object') { return window; }
        return {}
      })());

    })
  };
}));
