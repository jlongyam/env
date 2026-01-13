
	/*!
	* @jlongyam/env - Basic environment detector
	* Version 4.1.2
	* https://github.com/[object Object]/env
	* MIT License - 2026
	*/

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.envGlobal = factory());
})(this, (function () {
  const envGlobal = (() => {
    if (typeof globalThis === 'object') return globalThis;
    if (typeof global === 'object') return global;
    if (typeof self === 'object') return self;
    if (typeof window === 'object') return window;
    return {}
  })();

  return envGlobal;

}));
