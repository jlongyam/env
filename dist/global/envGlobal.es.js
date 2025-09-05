
	/*!
	* @jlongyam/env - Basic environment detector
	* Version 4.0.1
	* https://github.com/[object Object]/env
	* MIT License - 2025
	*/

const envGlobal = (() => {
  if (typeof globalThis === 'object') return globalThis;
  if (typeof global === 'object') return global;
  if (typeof self === 'object') return self;
  if (typeof window === 'object') return window;
  return {}
})();

export { envGlobal as default };
