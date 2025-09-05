
	/*!
	* @jlongyam/env - Basic environment detector
	* Version 4.0.0
	* https://github.com/jlongyam/env
	* MIT License - 2025
	*/

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.env = factory());
})(this, (function () {
  var browser = typeof window !== 'undefined';
  var worker = typeof importScripts !== 'undefined';
  var cli = !browser && !worker;
  var env = {
    browser: browser,
    worker: worker,
    cli: cli
  };

  return env;

}));
