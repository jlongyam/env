/*!
	* @jlongyam/env - Basic environment detector
	* Version 4.0.0
	* https://github.com/jlongyam/env
	* MIT License - 2025
	*/
var o="undefined"!=typeof window,e="undefined"!=typeof importScripts,l="object"==typeof globalThis?globalThis:"object"==typeof global?global:"object"==typeof self?self:"object"==typeof window?window:{},t={browser:o,worker:e,cli:!o&&!e};t.global=l,module.exports=t;
