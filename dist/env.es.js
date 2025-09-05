
	/*!
	* @jlongyam/env - Basic environment detector
	* Version 4.0.1
	* https://github.com/[object Object]/env
	* MIT License - 2025
	*/

var browser = typeof window !== 'undefined';
var worker = typeof importScripts !== 'undefined';
var cli = !browser && !worker;
var env = {
  browser: browser,
  worker: worker,
  cli: cli
};

export { env as default };
