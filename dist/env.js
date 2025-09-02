
	/*!
	* @jlongyam/env - Basic environment detector
	* Version 3.1.3
	* https://github.com/jlongyam/env
	* MIT License - 2025
	*/

var browser = typeof window !== 'undefined';
var worker = typeof importScripts !== 'undefined';
var cli = !browser && !worker;
var envRuntime = {
  browser: browser,
  worker: worker,
  cli: cli
};

var envGlobal = function () {
  if (typeof globalThis === 'object') {
    return globalThis;
  }
  if (typeof global === 'object') {
    return global;
  }
  if (typeof self === 'object') {
    return self;
  }
  if (typeof window === 'object') {
    return window;
  }
  return {};
}();

var env = envRuntime;
env.global = envGlobal;

export { env as default };
