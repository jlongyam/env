
	/*!
	* @jlongyam/env - Basic environment detector
	* Version 4.1.2
	* https://github.com/[object Object]/env
	* MIT License - 2026
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
